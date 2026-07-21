'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronDown, MessageSquare, Calendar, Shield, Cpu, 
  ShoppingBag, HardDrive, FileText, Heart, Sparkles, Building2, 
  HelpCircle, Info, Landmark, Briefcase, Zap, Rocket,
  UtensilsCrossed, Pill, Layers, Users, ArrowRight
} from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  children?: {
    label: string;
    description?: string;
    href: string;
    icon: React.ReactNode;
  }[];
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
      setActiveDropdown(null);
    }, 0);
  }, [pathname]);

  const navItems: NavItem[] = [
    {
      label: 'Products',
      children: [
        { label: 'Restaurant & Cafe POS', href: '/products/restaurant-pos', icon: <UtensilsCrossed className="w-5 h-5 text-orange-500" /> },
        { label: 'Retail & Grocery POS', href: '/products/retail-pos', icon: <ShoppingBag className="w-5 h-5 text-orange-500" /> },
        { label: 'Pharmacy POS', href: '/products/pharmacy-pos', icon: <Pill className="w-5 h-5 text-orange-500" /> },
        { label: 'ERP & Inventory', href: '/products/erp-inventory', icon: <Layers className="w-5 h-5 text-orange-500" /> },
        { label: 'HR & Payroll', href: '/products/hr-payroll', icon: <Briefcase className="w-5 h-5 text-orange-500" /> },
        { label: 'CRM & Business Automation', href: '/products/crm', icon: <Users className="w-5 h-5 text-orange-500" /> },
        { label: 'View All Products', href: '/products', icon: <ArrowRight className="w-5 h-5 text-orange-500" /> }
      ]
    },
    {
      label: 'Services',
      children: [
        { label: 'Custom Software Development', description: 'Tailored high-performance systems for scaling enterprise.', href: '/services/custom-software-development', icon: <Cpu className="w-5 h-5 text-orange-500" /> },
        { label: 'Web & Mobile App Development', description: 'Next-generation web architectures & native iOS/Android apps.', href: '/services/web-mobile-app-development', icon: <Rocket className="w-5 h-5 text-orange-500" /> },
        { label: 'AI & Business Automation', description: 'Integrate intelligent LLM models & workflow automation.', href: '/services/ai-business-automation', icon: <Sparkles className="w-5 h-5 text-orange-500" /> },
        { label: 'SEO & Brand Marketing', description: 'Dominating search visibility & premium visual styling.', href: '/services/seo-brand-marketing', icon: <FileText className="w-5 h-5 text-orange-500" /> }
      ]
    },
    {
      label: 'Solutions',
      children: [
        { label: 'WhatsApp Business API', description: 'Automated order alerts, billing notifications, & chat bots.', href: '/solutions/whatsapp-business-api', icon: <MessageSquare className="w-5 h-5 text-orange-500" /> },
        { label: 'QR Ordering Solutions', description: 'Contactless dynamic dining order systems for hospitality.', href: '/solutions/qr-ordering-system', icon: <ShoppingBag className="w-5 h-5 text-orange-500" /> },
        { label: 'Payment Gateway Integration', description: 'Secure local & global online gateway synchronizations.', href: '/solutions/payment-gateway', icon: <Shield className="w-5 h-5 text-orange-500" /> }
      ]
    },
    { label: 'Why Us', href: '/#why-us' },
    { label: 'Industries', href: '/industries' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' }
  ];

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0 focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:outline-none rounded-xl" id="header-logo-link" aria-label="Chishty Smart Solutions Homepage">
            <div className="flex flex-col flex-shrink-0">
              <span className={`font-black text-lg sm:text-xl tracking-tight leading-none transition-colors whitespace-nowrap ${
                scrolled ? 'text-[#FF6B00] group-hover:text-[#1C1C1C]' : 'text-[#FF6B00] group-hover:text-white'
              }`}>
                CHISHTY
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-colors mt-1 whitespace-nowrap text-gray-500">
                Smart Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    id={`nav-btn-${item.label.toLowerCase()}`}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                    aria-controls={`dropdown-menu-${item.label.toLowerCase()}`}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:outline-none ${
                      activeDropdown === item.label 
                        ? (scrolled ? 'text-[#FF6B00] bg-gray-100' : 'text-[#FF6B00] bg-white/5')
                        : (scrolled ? 'text-gray-600 hover:text-[#FF6B00] hover:bg-gray-100/50' : 'text-gray-300 hover:text-white hover:bg-white/5')
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    id={`nav-link-${item.label.toLowerCase()}`}
                    href={item.href || '#'}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:outline-none ${
                      pathname === item.href 
                        ? (scrolled ? 'text-[#FF6B00] bg-gray-100' : 'text-[#FF6B00] bg-white/5')
                        : (scrolled ? 'text-gray-600 hover:text-[#FF6B00] hover:bg-gray-100/50' : 'text-gray-300 hover:text-white hover:bg-white/5')
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        id={`dropdown-menu-${item.label.toLowerCase()}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute left-0 mt-1 w-96 rounded-xl shadow-2xl p-4 grid grid-cols-1 gap-2 border transition-colors ${
                          scrolled 
                            ? 'bg-white border-gray-100 text-[#1C1C1C]' 
                            : 'bg-[#1C1C1C] border-white/10 text-white'
                        }`}
                      >
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={`flex items-start p-3 rounded-lg transition-colors group/item focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none ${
                              scrolled ? 'hover:bg-gray-50' : 'hover:bg-white/5'
                            }`}
                          >
                            <div className={`mr-3 p-2 rounded-lg transition-colors ${
                              scrolled ? 'bg-gray-100 group-hover/item:bg-[#FF6B00]/10' : 'bg-white/5 group-hover/item:bg-[#FF6B00]/10'
                            }`}>
                              {subItem.icon}
                            </div>
                            <div>
                              <div className={`text-sm font-semibold transition-colors ${
                                scrolled ? 'text-gray-900 group-hover/item:text-[#FF6B00]' : 'text-white group-hover/item:text-[#FF6B00]'
                              }`}>
                                {subItem.label}
                              </div>
                              {subItem.description && (
                                <div className={`text-xs mt-0.5 line-clamp-1 ${
                                  scrolled ? 'text-gray-500' : 'text-gray-400'
                                }`}>
                                  {subItem.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0" id="desktop-ctas">
            <a 
              id="header-wa-btn"
              href="https://wa.me/923006392025" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp at +92 300 6392025"
              className={`flex items-center space-x-1.5 text-sm font-semibold transition-colors whitespace-nowrap flex-shrink-0 focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:outline-none rounded-lg ${
                scrolled ? 'text-gray-700 hover:text-[#FF6B00]' : 'text-gray-300 hover:text-[#FF6B00]'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
              <span className="whitespace-nowrap">+92 300 6392025</span>
            </a>
            <Link 
              id="header-demo-btn"
              href="/contact?demo=true" 
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-xl focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:outline-none ${
                scrolled
                  ? 'bg-[#1C1C1C] hover:bg-black text-white shadow-black/10'
                  : 'bg-[#FF6B00] hover:bg-[#FF8C39] text-white shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/30'
              }`}
            >
              Book Free Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3" id="mobile-ctas-container">
            <a 
              id="header-wa-mobile-btn"
              href="https://wa.me/923006392025" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className={`p-2 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none ${
                scrolled ? 'bg-gray-100 text-[#FF6B00] hover:bg-gray-200' : 'bg-white/5 text-[#FF6B00] hover:bg-white/10'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
              aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
              className={`p-2 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none ${
                scrolled ? 'bg-gray-100 text-gray-700 hover:text-black hover:bg-gray-200' : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            role="region"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#1C1C1C] border-b border-white/10 overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-2 last:border-0 last:pb-0">
                  {item.children ? (
                    <div>
                      <button
                        id={`mobile-nav-btn-${item.label.toLowerCase()}`}
                        onClick={() => toggleDropdown(item.label)}
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === item.label}
                        aria-controls={`mobile-dropdown-${item.label.toLowerCase()}`}
                        className="flex items-center justify-between w-full py-3 text-base font-medium text-white hover:text-[#FF6B00] focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none rounded-lg px-2"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div 
                            id={`mobile-dropdown-${item.label.toLowerCase()}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 mt-1 mb-2 overflow-hidden"
                          >
                            {item.children.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="flex items-center py-2 text-sm text-gray-400 hover:text-white focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none rounded px-2"
                              >
                                <span className="mr-2">{subItem.icon}</span>
                                <span>{subItem.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      id={`mobile-nav-link-${item.label.toLowerCase()}`}
                      href={item.href || '#'}
                      className="block py-3 text-base font-medium text-white hover:text-[#FF6B00] focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none rounded-lg px-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 flex flex-col space-y-3">
                <Link 
                  id="mobile-demo-btn"
                  href="/contact?demo=true" 
                  className="w-full bg-[#FF6B00] hover:bg-[#FF8C39] text-white py-3 px-4 rounded-xl text-center text-sm font-semibold shadow-lg shadow-[#FF6B00]/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
