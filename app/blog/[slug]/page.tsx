import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { BLOG_POSTS } from '@/lib/blog-data';
import BlogPostClient from '@/components/BlogPostClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.seo?.title || post.title} | Chishty Smart Solutions`,
    description: post.seo?.description || post.desc,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.desc,
      url: `https://chishtysmartsolutions.com/blog/${post.slug}`,
      type: 'article',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.desc,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} slug={slug} />;
}
