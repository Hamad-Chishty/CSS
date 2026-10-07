import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chishtysmartsolutions.com'

  // Core static pages with explicit SEO priorities and change frequencies
  const staticPages = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/products/restaurant-pos', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/products/retail-pos', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/products/pharmacy-pos', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/products/erp-inventory', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/products/hr-payroll', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/products/crm', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/products/custom-software', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/services/custom-software-development', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/services/web-mobile-app-development', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/services/ai-business-automation', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/services/seo-brand-marketing', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/solutions/whatsapp-business-api', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/solutions/qr-ordering-system', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/solutions/payment-gateway-integration', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/solutions/payment-gateway', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
    { route: '/case-studies', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/faq', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/features', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/industries', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/portfolio', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/pricing', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/privacy-policy', priority: 0.4, changeFrequency: 'yearly' as const },
    { route: '/terms', priority: 0.4, changeFrequency: 'yearly' as const },
  ]

  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }))

  // Dynamic Blog Posts (auto-updates whenever BLOG_POSTS is updated)
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Deduplicate entries by URL to ensure no broken or duplicate links
  const seenUrls = new Set<string>()
  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const entry of [...staticEntries, ...blogEntries]) {
    if (!seenUrls.has(entry.url)) {
      seenUrls.add(entry.url)
      sitemapEntries.push(entry)
    }
  }

  return sitemapEntries
}

