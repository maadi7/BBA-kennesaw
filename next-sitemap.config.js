/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.bawarchiatlanta.com",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    autoLastmod: true,
    changefreq: "daily",
    priority: 0.7,
    generateIndexSitemap: true,
  };