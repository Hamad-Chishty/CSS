'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, Calendar, Clock, User, Share2, Copy, Check, MessageSquare, 
  ChevronRight, ArrowRight, Quote, CheckCircle2, AlertCircle, Sparkles, HelpCircle, ChevronDown
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/lib/blog-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: PageProps) {
  // Unwrap Next.js 15 params using React.use()
  const { slug } = React.use(params);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [blogContent, setBlogContent] = useState<{
    introduction?: string;
    problemStatement?: string;
    detailedSolutionHtml?: string;
    fullContentHtml?: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [prevSlug, setPrevSlug] = useState(slug);

  // Reset state when slug changes during render
  if (slug !== prevSlug) {
    setPrevSlug(slug);
    setBlogContent(null);
    setIsLoading(true);
  }

  // Find current post
  const post = useMemo(() => {
    return BLOG_POSTS.find(p => p.slug === slug);
  }, [slug]);

  // Fetch detailed content dynamically
  useEffect(() => {
    if (!post) return;
    
    let active = true;
    fetch(`/api/blog/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load blog content');
        return res.json();
      })
      .then(data => {
        if (active) {
          setBlogContent(data);
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.error("Error loading blog content:", err);
        if (active) {
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [slug, post]);

  // If post doesn't exist, trigger 404
  if (!post) {
    notFound();
  }

  // Find sibling posts for navigation
  const siblingPosts = useMemo(() => {
    const idx = BLOG_POSTS.findIndex(p => p.slug === slug);
    const prev = idx > 0 ? BLOG_POSTS[idx - 1] : null;
    const next = idx < BLOG_POSTS.length - 1 ? BLOG_POSTS[idx + 1] : null;
    return { prev, next };
  }, [slug]);

  // Sticky Reading Progress bar listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set document title and meta description dynamically for robust SEO
  useEffect(() => {
    if (post) {
      document.title = post.seo.title;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', post.seo.description);
    }
  }, [post]);

  // Copy link handler
  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Generate Table of Contents dynamically based on detailed content headings
  const tocItems = useMemo(() => {
    if (!post) return [];
    
    if (blogContent && blogContent.fullContentHtml) {
      const h2Regex = /<h2 id="([^"]+)">([^<]+)<\/h2>/g;
      const items: { id: string; text: string }[] = [];
      let match;
      h2Regex.lastIndex = 0;
      while ((match = h2Regex.exec(blogContent.fullContentHtml)) !== null) {
        items.push({
          id: match[1],
          text: match[2].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
        });
      }
      
      // Add standard bottom bento blocks to Table of Contents
      items.push({ id: "operational-benefits", text: "Enterprise Yields" });
      items.push({ id: "best-practices", text: "Best Practices" });
      items.push({ id: "common-mistakes", text: "Mistakes to Avoid" });
      items.push({ id: "frequently-asked-questions", text: "Frequently Asked Questions" });
      
      return items;
    }

    return [
      { id: "introduction", text: "Introduction" },
      { id: "business-problem", text: "The Core Business Problem" },
      { id: "technical-solution", text: "The Automation Blueprint" },
      { id: "operational-benefits", text: "Quantifiable Enterprise Benefits" },
      { id: "best-practices", text: "System Best Practices" },
      { id: "common-mistakes", text: "Mistakes to Avoid" },
      { id: "frequently-asked-questions", text: "Frequently Asked Questions" }
    ];
  }, [post, blogContent]);

  // Schema LD generation
  const faqSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": post.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }, [post]);

  const breadcrumbSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://chishtysmartsolutions.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://chishtysmartsolutions.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://chishtysmartsolutions.com/blog/${post.slug}`
        }
      ]
    };
  }, [post]);

  return (
    <div id={`blog-post-${post.slug}`} className="bg-white min-h-screen relative pt-6">
      
      {/* 1. Sticky Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-[#FF6B00] transition-all duration-100 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* JSON-LD Schemas injection in head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schemaMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header Context */}
      <header className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 font-medium pb-2 border-b border-white/5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#FF6B00] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <Link href="/blog" className="hover:text-[#FF6B00] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="text-gray-300 line-clamp-1">{post.title}</span>
          </nav>

          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#FF6B00]/20">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-4xl text-white">
            {post.title}
          </h1>

          {/* Author Meta Details */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm border-t border-white/5">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                <Image 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-none">{post.author.name}</h4>
                <p className="text-[10px] sm:text-xs text-[#FF6B00] font-semibold mt-0.5">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-xs text-gray-400 font-mono">
              <span className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-[#FF6B00]" />
                <span>Published: {post.date}</span>
              </span>
              <span className="text-gray-600">|</span>
              <span className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-[#FF6B00]" />
                <span>Reading Time: {post.readTime}</span>
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* Main Grid Content Layout */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Cover Landscape Banner */}
        <div className="relative aspect-[21/9] w-full rounded-4xl overflow-hidden shadow-xl mb-16 border border-gray-100" id="post-hero-image">
          <Image 
            src={post.image} 
            alt={post.seo.altText} 
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Table Of Contents Sticky Left Column */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 space-y-8 bg-gray-50 border border-gray-150 p-6 rounded-3xl" id="table-of-contents-box">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 border-b border-gray-200 pb-3 font-mono">
                Guide Architecture
              </h3>
              <nav className="space-y-1" aria-label="Table of contents">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="group flex items-start py-2 text-xs font-bold text-gray-600 hover:text-[#FF6B00] transition-colors leading-relaxed"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF6B00] mr-1.5 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.text}</span>
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Share this blueprint</h4>
                <div className="flex gap-2">
                  <button 
                    onClick={handleCopyLink}
                    className="flex-grow inline-flex items-center justify-center space-x-1.5 py-2.5 bg-white border border-gray-200 rounded-xl hover:border-[#FF6B00] hover:text-[#FF6B00] text-xs font-bold transition-all text-gray-600 shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Reading Prose Body Middle Column */}
          <div className="lg:col-span-9 space-y-12" id="article-editorial-pane">
            
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-24 space-y-4">
                <div className="w-12 h-12 border-4 border-[#FF6B00] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm font-medium text-gray-500 font-mono">Loading system blueprint...</p>
              </div>
            ) : blogContent?.fullContentHtml ? (
              <section id="full-article" className="markdown-body scroll-mt-28">
                <div dangerouslySetInnerHTML={{ __html: blogContent.fullContentHtml }} />
              </section>
            ) : (
              <>
                {/* Dynamic Jump Anchor: Introduction */}
                <section id="introduction" className="scroll-mt-28 space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                    <span className="w-2.5 h-7 bg-[#FF6B00] rounded-full"></span>
                    Executive Introduction
                  </h2>
                  <div className="text-gray-700 text-base sm:text-lg leading-relaxed font-light">
                    {blogContent?.introduction ? (
                      <span dangerouslySetInnerHTML={{ __html: blogContent.introduction }} />
                    ) : (
                      post.desc
                    )}
                  </div>
                </section>

                {/* Dynamic Jump Anchor: Business Problem */}
                <section id="business-problem" className="scroll-mt-28 p-8 bg-red-50/50 border border-red-100 rounded-3xl space-y-4">
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                    The Core Operational Leak
                  </h2>
                  <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {blogContent?.problemStatement ? (
                      <span dangerouslySetInnerHTML={{ __html: blogContent.problemStatement }} />
                    ) : (
                      "SMEs in Pakistan face severe operational inefficiencies, cash pilferage, and inventory wastage due to un-digitized workflows."
                    )}
                  </div>
                </section>

                {/* Dynamic Jump Anchor: Technical Solution */}
                <section id="technical-solution" className="scroll-mt-28 space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                    <span className="w-2.5 h-7 bg-[#FF6B00] rounded-full"></span>
                    The Solution Blueprint
                  </h2>
                  <div 
                    className="prose max-w-none text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: blogContent?.detailedSolutionHtml || "" }}
                  />
                </section>
              </>
            )}

            {/* Dynamic Jump Anchor: Operational Benefits */}
            <section id="operational-benefits" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                <span className="w-2.5 h-7 bg-[#FF6B00] rounded-full"></span>
                Quantifiable Enterprise Yields
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3 p-5 bg-orange-50/30 border border-orange-100 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Checklist Best Practices & Mistakes in Bento Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Best Practices */}
              <section id="best-practices" className="scroll-mt-28 bg-emerald-50/30 border border-emerald-100 rounded-3xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-black text-gray-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Technical Best Practices
                </h3>
                <ul className="space-y-3">
                  {post.bestPractices.map((bp, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                      <span className="text-emerald-600 font-bold mt-0.5">•</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Mistakes */}
              <section id="common-mistakes" className="scroll-mt-28 bg-rose-50/30 border border-rose-100 rounded-3xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-black text-gray-900 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  SME Mistakes to Avoid
                </h3>
                <ul className="space-y-3">
                  {post.commonMistakes.map((cm, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                      <span className="text-rose-600 font-bold mt-0.5">•</span>
                      <span>{cm}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Expert Tip Section Block */}
            {post.expertTips.length > 0 && (
              <div className="bg-gradient-to-tr from-[#1C1C1C] to-[#121212] text-white rounded-3xl p-8 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-[#FF6B00]/10 border border-[#FF6B00]/20 rounded-xl text-[#FF6B00] flex-shrink-0">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#FF6B00] font-mono">Chishty Strategic Blueprint</h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                      {post.expertTips[0]}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Dynamic Jump Anchor: FAQs Section */}
            <section id="frequently-asked-questions" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                <span className="w-2.5 h-7 bg-[#FF6B00] rounded-full"></span>
                People Also Ask (FAQs)
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className="border border-gray-150 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-gray-200"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-gray-900 bg-gray-50/50 hover:bg-gray-50 outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-[#FF6B00]' : ''}`} />
                    </button>
                    {activeFaq === i && (
                      <div className="p-5 text-xs sm:text-sm text-gray-600 border-t border-gray-150 leading-relaxed bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Author Portrait Banner Bio */}
            <div className="border border-gray-150 rounded-4xl p-8 flex flex-col sm:flex-row gap-6 items-center bg-gray-50/50">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-widest font-mono">Written By Author</span>
                <h4 className="text-lg font-black text-gray-900">{post.author.name}</h4>
                <p className="text-xs text-gray-500 font-semibold">{post.author.role}</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light pt-1">
                  {post.author.bio}
                </p>
              </div>
            </div>

            {/* Article Navigation Footer Prev/Next */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-gray-150">
              {siblingPosts.prev ? (
                <Link 
                  href={`/blog/${siblingPosts.prev.slug}`}
                  className="group flex flex-col p-5 bg-white border border-gray-150 hover:border-gray-200 hover:bg-gray-50/50 rounded-2xl text-left transition-all justify-between"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center font-mono">
                    <ArrowLeft className="w-3.5 h-3.5 mr-1 group-hover:-translate-x-0.5 transition-transform" />
                    Previous Blueprint
                  </span>
                  <span className="text-sm font-bold text-gray-900 mt-2 line-clamp-1 group-hover:text-[#FF6B00] transition-colors">{siblingPosts.prev.title}</span>
                </Link>
              ) : (
                <div className="p-5 border border-dashed border-gray-200 rounded-2xl bg-gray-50/20 text-center text-xs text-gray-400 flex items-center justify-center font-mono">
                  Beginning of System Blueprints
                </div>
              )}

              {siblingPosts.next ? (
                <Link 
                  href={`/blog/${siblingPosts.next.slug}`}
                  className="group flex flex-col p-5 bg-white border border-gray-150 hover:border-gray-200 hover:bg-gray-50/50 rounded-2xl text-right transition-all justify-between"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center justify-end font-mono">
                    Next Blueprint
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-sm font-bold text-gray-900 mt-2 line-clamp-1 group-hover:text-[#FF6B00] transition-colors">{siblingPosts.next.title}</span>
                </Link>
              ) : (
                <div className="p-5 border border-dashed border-gray-200 rounded-2xl bg-gray-50/20 text-center text-xs text-gray-400 flex items-center justify-center font-mono">
                  End of System Blueprints
                </div>
              )}
            </div>

            {/* Integrated Inline Conversion Consultation Block */}
            <div className="bg-gradient-to-tr from-[#0F0F0F] to-[#1F1F1F] text-white rounded-4xl p-8 sm:p-12 border border-white/5 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-4">
                  <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider font-mono">Enterprise Software Architecture Consultation</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">Ready to plug operational leaks?</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xl font-light">
                    Join high-growth brands using Chishty Smart Solutions to scale recipes, lock down inventory drawers, integrate FBR taxes, and launch tailored custom products.
                  </p>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3">
                  <a 
                    href="https://wa.me/923006392025" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-6 py-4 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-[#FF6B00]/15"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Strategy Call</span>
                  </a>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-4 rounded-xl font-bold text-sm transition-colors"
                  >
                    <span>Request Custom Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
