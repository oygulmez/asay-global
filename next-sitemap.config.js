/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.asayglobal.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
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
};


