import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/upload-profile/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/upload-profile/', '/private/'],
      },
    ],
    sitemap: 'https://chishtysmartsolutions.com/sitemap.xml',
    host: 'https://chishtysmartsolutions.com',
  }
}

