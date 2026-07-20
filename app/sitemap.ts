import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = BLOG_POSTS.map((post) => ({
    url: `https://chishtysmartsolutions.com/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const routes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/features',
    '/pricing',
    '/services',
    '/solutions',
    '/faq',
    '/privacy',
    '/terms',
    '/case-studies',
    '/products',
    '/industries',
  ].map((route) => ({
    url: `https://chishtysmartsolutions.com${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }))

  return [...routes, ...posts]
}
