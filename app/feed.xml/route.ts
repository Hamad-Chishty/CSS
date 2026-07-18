import { NextResponse } from 'next/server'
import { BLOG_POSTS } from '@/lib/blog-data'

export async function GET() {
  const feedItems = BLOG_POSTS.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://chishtysmartsolutions.com/blog/${post.slug}</link>
      <guid>https://chishtysmartsolutions.com/blog/${post.slug}</guid>
      <pubDate>${post.date ? new Date(post.date).toUTCString() : new Date().toUTCString()}</pubDate>
      <description><![CDATA[${post.desc}]]></description>
    </item>
  `).join('')

  const feedXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Chishty Smart Solutions Blog Feed</title>
  <link>https://chishtysmartsolutions.com/blog</link>
  <description>Actionable technical blueprints, operational strategies, and data-driven insights engineered to safeguard profit margins and accelerate your retail or hospitality enterprise.</description>
  <language>en-us</language>
  <atom:link href="https://chishtysmartsolutions.com/feed.xml" rel="self" type="application/rss+xml" />
  ${feedItems}
</channel>
</rss>
  `.trim()

  return new NextResponse(feedXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=18000',
    },
  })
}
