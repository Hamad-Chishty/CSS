'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ArrowRight, BookOpen, Clock, Calendar, MessageSquare, 
  ChevronRight, Sparkles, User, Share2
} from 'lucide-react';

export default function BlogPage() {
  
  const posts = [
    {
      title: 'How to Reduce Inventory Loss in High-Volume Retail POS Systems',
      slug: 'reduce-retail-inventory-loss',
      category: 'Retail POS Strategy',
      desc: 'Discover the technical steps to automate raw material replenishment schedules and eliminate cashier level stock discrepancies.',
      date: 'July 14, 2026',
      readTime: '6 min read',
      author: 'Muhammad Chishty',
      image: 'https://picsum.photos/seed/inventory/600/400'
    },
    {
      title: 'Why Multi-Branch Bakeries and Cafes Struggle with Manual Recipe Depletion',
      slug: 'cafe-manual-recipe-depletion',
      category: 'Hospitality Tech',
      desc: 'Manual formulas lead to wasted ingredients. We deconstruct how automated Bill of Materials (BOM) logic safeguards your operating margins.',
      date: 'July 10, 2026',
      readTime: '8 min read',
      author: 'Chishty Engineering',
      image: 'https://picsum.photos/seed/baking/600/400'
    },
    {
      title: 'The Strategic ROI of Official WhatsApp Business API Invoice Dispatches',
      slug: 'whatsapp-business-invoice-roi',
      category: 'Business Automation',
      desc: 'Stop wasting capital on paper rolls. Discover how dispatching PDF receipts directly on WhatsApp increases trust, repeat orders, and reviews.',
      date: 'July 05, 2026',
      readTime: '5 min read',
      author: 'Chishty Engineering',
      image: 'https://picsum.photos/seed/whatsapp/600/400'
    }
  ];

  return (
    <div id="blog-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Technical Insights
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Corporate Architecture & Strategy
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Deconstruct technical guides, research on business automation, and strategic systems engineering written by our agency leads.
          </p>
        </div>
      </section>

      {/* Main Blog Roster */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="blog-articles-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <div 
              key={idx}
              className="group bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              id={`blog-card-${idx}`}
            >
              <div>
                {/* Image panel */}
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/10 to-transparent"></div>
                  <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <span className="absolute top-4 left-4 bg-[#1C1C1C] text-[#FF6B00] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center space-x-3 text-xs text-gray-400 font-medium">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {post.desc}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-gray-100 mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-gray-800">{post.author}</span>
                </div>
                <Link 
                  href="/contact"
                  className="text-xs font-bold text-[#FF6B00] hover:text-[#FF8C39] flex items-center"
                >
                  <span>Request Reprints</span>
                  <ChevronRight className="w-4 h-4 ml-0.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
