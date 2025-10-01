/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.asayglobal.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Single sitemap.xml for easier indexing
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml', '/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // AI/LLM Crawlers - Explicitly allowed for AI search
      { userAgent: 'GPTBot', allow: '/' }, // OpenAI ChatGPT
      { userAgent: 'Google-Extended', allow: '/' }, // Google Gemini/Bard
      { userAgent: 'anthropic-ai', allow: '/' }, // Anthropic Claude
      { userAgent: 'ClaudeBot', allow: '/' }, // Claude
      { userAgent: 'CCBot', allow: '/' }, // Common Crawl (used by many AI)
      { userAgent: 'FacebookBot', allow: '/' }, // Meta AI
      { userAgent: 'Applebot-Extended', allow: '/' }, // Apple Intelligence
      { userAgent: 'PerplexityBot', allow: '/' }, // Perplexity AI
      { userAgent: 'Bingbot', allow: '/' }, // Bing AI
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://www.asayglobal.com'}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      '/': 1.0,
      '/about': 0.9,
      '/services': 0.9,
      '/contact': 0.8,
      '/dealers': 0.8,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};


