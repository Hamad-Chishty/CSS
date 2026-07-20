'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MessageSquare, Mail, Phone, MapPin, Linkedin, Facebook, 
  Twitter, Instagram, ArrowUpRight, Shield, Globe
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'POS Products',
      links: [
        { label: 'Restaurant POS', href: '/products#pos-restaurant' },
        { label: 'Retail & Grocery POS', href: '/products#pos-retail' },
        { label: 'Pharmacy POS', href: '/products#pos-pharmacy' },
        { label: 'Bakery & Cafe POS', href: '/products#pos-bakery' },
        { label: 'Hotel Management', href: '/products#hotel-management' },
        { label: 'ERP & Inventory', href: '/products#erp-accounting' }
      ]
    },
    {
      title: 'Our Services',
      links: [
        { label: 'Custom Software', href: '/services#custom-dev' },
        { label: 'Web Applications', href: '/services#web-mobile' },
        { label: 'Mobile Applications', href: '/services#web-mobile' },
        { label: 'AI Solutions', href: '/services#ai-solutions' },
        { label: 'SEO & Digital Marketing', href: '/services#seo-branding' },
        { label: 'UI/UX Design', href: '/services#seo-branding' }
      ]
    },
    {
      title: 'Solutions & Industries',
      links: [
        { label: 'WhatsApp Integration', href: '/solutions#whatsapp-integration' },
        { label: 'QR Ordering Solutions', href: '/solutions#qr-ordering' },
        { label: 'Payment Integration', href: '/solutions#payment-gateways' },
        { label: 'Education & Medical', href: '/industries' },
        { label: 'Manufacturing & Corp', href: '/industries' },
        { label: 'Bespoke Automation', href: '/solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Chishty', href: '/about' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Pricing Plans', href: '/pricing' },
        { label: 'Read Our Blog', href: '/blog' },
        { label: 'Frequently Asked FAQ', href: '/faq' }
      ]
    }
  ];

  return (
    <footer id="main-footer" className="bg-[#1C1C1C] text-white border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6" id="footer-brand-col">
            <Link href="/" className="flex items-center space-x-2.5 group flex-shrink-0 focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1C] focus-visible:outline-none rounded-xl">
              <span className="w-10 h-10 bg-gradient-to-tr from-[#FF6B00] to-[#FF8C39] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#FF6B00]/20">
                C
              </span>
              <div className="flex flex-col flex-shrink-0">
                <span className="text-white font-black text-xl tracking-tight leading-none group-hover:text-[#FF6B00] transition-colors">
                  CHISHTY
                </span>
                <span className="text-gray-400 text-[10px] font-extrabold tracking-[0.25em] uppercase mt-0.5">
                  Smart Solutions
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We design and engineer enterprise-grade POS systems, business automation softwares, and custom web/mobile platforms that scale businesses globally.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                id="footer-social-li"
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-white/5 hover:bg-[#FF6B00]/10 hover:text-[#FF6B00] rounded-xl flex items-center justify-center transition-all duration-200 text-gray-400 focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                id="footer-social-fb"
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-white/5 hover:bg-[#FF6B00]/10 hover:text-[#FF6B00] rounded-xl flex items-center justify-center transition-all duration-200 text-gray-400 focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                id="footer-social-tw"
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-white/5 hover:bg-[#FF6B00]/10 hover:text-[#FF6B00] rounded-xl flex items-center justify-center transition-all duration-200 text-gray-400 focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                id="footer-social-ig"
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-white/5 hover:bg-[#FF6B00]/10 hover:text-[#FF6B00] rounded-xl flex items-center justify-center transition-all duration-200 text-gray-400 focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Sitemap */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8" id="footer-sitemap">
            {sections.map((sec) => (
              <div key={sec.title} className="space-y-4">
                <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
                  {sec.title}
                </h4>
                <ul className="space-y-2">
                  {sec.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-[#FF6B00] text-sm transition-colors flex items-center group/link focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none rounded px-1"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 ml-0.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-white/10" id="footer-contact-row">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/5 rounded-xl text-[#FF6B00] flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-semibold text-white">Call Office</h5>
              <p className="text-gray-400 text-sm mt-1 whitespace-nowrap font-medium">+92 300 6392025</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/5 rounded-xl text-[#FF6B00] flex-shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-semibold text-white">WhatsApp Inquiry</h5>
              <a 
                href="https://wa.me/923006392025" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp at +92 300 6392025"
                className="text-gray-400 hover:text-[#FF6B00] text-sm mt-1 block transition-colors whitespace-nowrap font-medium focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none rounded px-1 w-fit"
              >
                +92 300 6392025 (Open Chat)
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/5 rounded-xl text-[#FF6B00]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-semibold text-white">Headquarters</h5>
              <p className="text-gray-400 text-sm mt-1">General Bus Stand, Multan, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-gray-500" id="footer-bottom-row">
          <div className="flex items-center space-x-2">
            <span>© {currentYear} Chishty Smart Solutions. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors flex items-center space-x-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded px-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors flex items-center space-x-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded px-1">
              <Globe className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </Link>
            <span className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>All Systems Operational</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
