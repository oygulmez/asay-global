import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.SITE_URL || 'https://www.asayglobal.com'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            // Explicitly allow Friendly AI Crawlers
            { userAgent: 'GPTBot', allow: '/' }, // OpenAI
            { userAgent: 'Google-Extended', allow: '/' }, // Google
            { userAgent: 'anthropic-ai', allow: '/' }, // Anthropic
            { userAgent: 'ClaudeBot', allow: '/' }, // Claude
            { userAgent: 'CCBot', allow: '/' }, // Common Crawl
            { userAgent: 'FacebookBot', allow: '/' }, // Meta
            { userAgent: 'Applebot-Extended', allow: '/' }, // Apple
            { userAgent: 'PerplexityBot', allow: '/' }, // Perplexity
            { userAgent: 'Bingbot', allow: '/' }, // Bing
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
