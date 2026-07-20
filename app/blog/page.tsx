'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, BookOpen, Clock, Calendar, MessageSquare, 
  ChevronRight, Sparkles, User, Share2, Search, Tag, Mail, HelpCircle, Check
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/lib/blog-data';
import hamadImage from '@/src/assets/images/hamad-chishty.jpg';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Categories list
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];
  }, []);

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Featured post is the first post
  const featuredPost = useMemo(() => {
    return BLOG_POSTS[0];
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div id="blog-page-root" className="bg-white min-h-screen">
      
      {/* SEO Meta Tags (Hoisted automatically by React/Next.js) */}
      <title>Expert Business Technology Blog | Chishty Smart Solutions</title>
      <meta name="description" content="Read actionable technical blueprints, operational strategies, and data-driven insights engineered to safeguard profit margins and accelerate your retail or hospitality enterprise." />
      <link rel="canonical" href="https://chishtysmartsolutions.com/blog" />
      
      <meta property="og:title" content="Expert Business Technology Blog | Chishty Smart Solutions" />
      <meta property="og:description" content="Read actionable technical blueprints, operational strategies, and data-driven insights engineered to safeguard profit margins and accelerate your retail or hospitality enterprise." />
      <meta property="og:url" content="https://chishtysmartsolutions.com/blog" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://chishtysmartsolutions.com/assets/images/logo.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Expert Business Technology Blog | Chishty Smart Solutions" />
      <meta name="twitter:description" content="Read actionable technical blueprints, operational strategies, and data-driven insights engineered to safeguard profit margins and accelerate your retail or hospitality enterprise." />
      <meta name="twitter:image" content="https://chishtysmartsolutions.com/assets/images/logo.png" />
      
      {/* Editorial Page Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Ambient lighting effects */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 border border-[#FF6B00]/20 px-4 py-2 rounded-full inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            CHISHTY SMART SOLUTIONS SEO BLOG
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            Operational Excellence <br />
            <span className="bg-gradient-to-r from-white via-gray-100 to-[#FF6B00] bg-clip-text text-transparent">& Systems Intelligence</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Actionable technical blueprints, operational strategies, and data-driven insights engineered to safeguard profit margins and accelerate your retail or hospitality enterprise.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Search and Category Filter Controls */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center pb-12 border-b border-gray-150 mb-16" id="blog-controls">
          {/* Categories Tab list */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none" id="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/20'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar input */}
          <div className="relative w-full md:w-96" id="blog-search-bar">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search guides, strategies, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] text-sm text-gray-800 bg-white transition-all shadow-sm outline-none"
            />
          </div>
        </div>

        {/* Featured Post (Only visible if no active filter query or category selection is non-All) */}
        {!searchQuery && selectedCategory === 'All' && featuredPost && (
          <div className="mb-20 bg-gray-50/50 border border-gray-150 rounded-4xl p-6 lg:p-10 hover:border-gray-200 transition-colors shadow-sm" id="featured-article-hero">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider block mb-4 font-mono">★ Featured Strategic Guide</span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 relative aspect-video rounded-3xl overflow-hidden shadow-md">
                <Image 
                  src={featuredPost.image} 
                  alt={featuredPost.seo?.altText || featuredPost.title} 
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center space-x-3 text-xs text-gray-400 font-semibold font-mono">
                  <span className="bg-gray-150 text-gray-700 px-3 py-1 rounded-full">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#FF6B00] transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {featuredPost.desc}
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-gray-150">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                      <Image 
                        src={featuredPost.author.name.includes("Hamad") ? hamadImage : featuredPost.author.avatar} 
                        alt={featuredPost.author.name} 
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">{featuredPost.author.name}</h4>
                      <p className="text-[10px] text-[#FF6B00] font-semibold">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="bg-[#1C1C1C] hover:bg-[#FF6B00] text-white p-3 rounded-xl transition-all shadow-md group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Layout Grid (Articles & Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="blog-content-grid">
          
          {/* Main Articles Stream */}
          <div className="lg:col-span-8 space-y-12" id="blog-articles-stream">
            <h3 className="text-sm font-extrabold text-gray-500 uppercase tracking-widest font-mono border-b border-gray-100 pb-4 mb-8 flex items-center justify-between">
              <span>Roster of Strategies ({filteredPosts.length})</span>
              {selectedCategory !== 'All' && (
                <span className="text-[#FF6B00] font-bold">Category: {selectedCategory}</span>
              )}
            </h3>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <motion.article 
                    layout
                    key={post.slug}
                    className="group bg-white border border-gray-100 hover:border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Cover Panel */}
                    <div className="aspect-video relative overflow-hidden bg-gray-100">
                      <Image 
                        src={post.image} 
                        alt={post.seo?.altText || post.title} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm border border-gray-100">
                        {post.category}
                      </span>
                    </div>

                    {/* Metadata and Content */}
                    <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-[10px] font-mono font-bold text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 text-[#FF6B00]" />
                            <span>{post.date}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3 text-[#FF6B00]" />
                            <span>{post.readTime}</span>
                          </span>
                        </div>

                        <h2 className="text-lg font-black text-gray-900 group-hover:text-[#FF6B00] transition-colors leading-snug">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                          {post.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-full overflow-hidden relative border border-gray-200">
                            <Image 
                              src={post.author.name.includes("Hamad") ? hamadImage : post.author.avatar} 
                              alt={post.author.name} 
                              fill 
                              className="object-cover" 
                              sizes="24px"
                            />
                          </div>
                          <span className="text-[10px] font-bold text-gray-700">{post.author.name}</span>
                        </div>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-xs font-bold text-[#FF6B00] flex items-center group-hover:translate-x-1 transition-transform"
                        >
                          <span>Read Strategy</span>
                          <ChevronRight className="w-4 h-4 ml-0.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-4xl border border-gray-150 p-8 space-y-4">
                <HelpCircle className="w-12 h-12 text-[#FF6B00] mx-auto opacity-70" />
                <h4 className="text-lg font-bold text-gray-800">No Articles Found</h4>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                  No tactical guides found matching &ldquo;{searchQuery}&rdquo;. Try adjusting your keywords or clearing the category filter.
                </p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#FF6B00] text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4 space-y-10" id="blog-sidebar">
            
            {/* Interactive Newsletter Subscription */}
            <div className="bg-[#1C1C1C] text-white rounded-3xl p-8 border border-white/5 relative overflow-hidden" id="newsletter-sidebar">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="space-y-4 relative z-10">
                <div className="w-10 h-10 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center text-[#FF6B00]">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black tracking-tight text-white">Join our Systems Intelligence Dispatch</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Join 1,200+ Pakistani founders and retailers receiving weekly operational audits and software optimization blueprints directly in their inboxes.
                </p>

                <AnimatePresence mode="wait">
                  {!subscribed ? (
                    <motion.form 
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubscribe} 
                      className="space-y-3 pt-2"
                    >
                      <input 
                        type="email" 
                        required
                        placeholder="business@company.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-all"
                      />
                      <button 
                        type="submit"
                        className="w-full py-3 bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold text-xs rounded-xl shadow-md shadow-[#FF6B00]/10 transition-colors"
                      >
                        Subscribe to Dispatch
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl flex items-start gap-3 mt-4"
                    >
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold">Subscription Confirmed!</h4>
                        <p className="text-[10px] mt-1 text-emerald-300/80 leading-relaxed">You are now registered for the Systems Intelligence Dispatch.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Popular Topics / Tags */}
            <div className="bg-gray-50 border border-gray-150 rounded-3xl p-8" id="tags-sidebar">
              <h3 className="text-sm font-black text-gray-900 tracking-tight uppercase font-mono pb-3 border-b border-gray-150 mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#FF6B00]" />
                Topical Authority Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(BLOG_POSTS.flatMap(post => post.tags))).map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-[10px] sm:text-xs font-bold rounded-lg hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Live WhatsApp Consultation CTA card */}
            <div className="bg-gradient-to-tr from-[#0F0F0F] to-[#1F1F1F] text-white rounded-3xl p-8 border border-white/5 shadow-xl text-center space-y-6 relative overflow-hidden" id="wa-cta-sidebar">
              <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
              <div className="space-y-2 relative z-10">
                <span className="text-[#FF6B00] text-[10px] font-bold uppercase tracking-widest font-mono">Instant Support Channel</span>
                <h3 className="text-lg font-black leading-tight">Consult with our Systems Strategist</h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xs mx-auto">
                  Have specific software development, FBR setup, or ERP requirements? Skip the paperwork and message Hamad Chishty directly.
                </p>
              </div>
              <div className="relative z-10 pt-2">
                <a 
                  href="https://wa.me/923006392025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-6 py-3 rounded-xl font-bold text-xs transition-colors w-full shadow-lg shadow-[#FF6B00]/15"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>+92 300 6392025</span>
                </a>
              </div>
            </div>

          </aside>

        </div>

      </main>

    </div>
  );
}
