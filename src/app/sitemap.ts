import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Define the base URL from environment or default
const baseUrl = process.env.SITE_URL || 'https://www.asayglobal.com'

/**
 * Recursively scans the app directory to find all page.tsx files
 * and converts them into URL routes.
 */
function getPageRoutes(dir: string, baseDir: string): string[] {
  // Use try-catch to handle cases where directory might not exist or other FS errors
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    let routes: string[] = []

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      const relativePath = path.relative(baseDir, fullPath)

      if (entry.isDirectory()) {
        // Exclude internal Next.js folders, api routes, and hidden folders
        if (
          !entry.name.startsWith('_') &&
          !entry.name.startsWith('.') &&
          entry.name !== 'api'
        ) {
          routes = routes.concat(getPageRoutes(fullPath, baseDir))
        }
      } else if (entry.name === 'page.tsx' || entry.name === 'page.js') {
        // Convert file path to URL path
        // 1. Normalize slashes
        let route = relativePath.replace(/\\/g, '/')
        // 2. Remove 'page.tsx' or 'page.js' from the end
        route = route.replace(/(^|\/)page\.(tsx|js)$/, '')
        // 3. Remove route groups e.g. (marketing)
        route = route.replace(/\([^)]+\)\/?/g, '')

        // 4. Handle root route (empty string)
        if (route === '') {
          routes.push('/')
        } else {
          // Removes trailing slash if exists (unless it's root)
          route = route.replace(/\/$/, '')
          routes.push(`/${route}`)
        }
      }
    }
    return routes
  } catch (error) {
    console.error('Error generating sitemap routes:', error)
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'src/app')
  const routes = getPageRoutes(appDir, appDir)

  // Prioritize important pages
  const priorityMap: Record<string, number> = {
    '/': 1.0,
    '/services': 0.9,
    '/products': 0.9,
    '/contact': 0.8,
    '/about': 0.8,
  }

  return routes.map((route) => {
    // Determine priority dynamically if not explicitly set
    let priority = priorityMap[route]

    if (!priority) {
      const depth = route.split('/').filter(Boolean).length
      // Deeper routes generally have slightly lower priority
      priority = depth > 2 ? 0.6 : 0.7
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: priority,
    }
  })
}
