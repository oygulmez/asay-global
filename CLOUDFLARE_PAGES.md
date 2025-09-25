# Cloudflare Pages Build Configuration

## Build Settings
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (or leave empty)

## Environment Variables
- `NODE_VERSION`: `18` (or `20`)

## Build Process
1. Install dependencies: `npm ci`
2. Build static site: `npm run build`
3. Deploy `out` directory

## Notes
- This is a Next.js static export project
- No server-side rendering required
- All pages are pre-rendered as static HTML
