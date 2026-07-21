'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ArrowRight, MessageSquare, Shield, CheckCircle2, Cpu, Sparkles, 
  ChevronRight, Users, BarChart3, Database, Layers, 
  Smartphone, Zap, UtensilsCrossed, ShoppingBag, Pill, Briefcase,
  Check
} from 'lucide-react';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Parallax state for the upgraded hero section
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [salesCounter, setSalesCounter] = useState(842910);

  React.useEffect(() => {
    // Increment the sales counter slightly over time to show live synchronization simulation
    const interval = setInterval(() => {
      setSalesCounter(prev => prev + Math.floor(Math.random() * 150) + 50);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === 'undefined') return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = (e.clientX - width / 2) / 35;
    const y = (e.clientY - height / 2) / 35;
    setMousePos({ x, y });
  };

  const faqs = [
    { q: 'How long does a complete POS or Custom ERP implementation take?', a: 'Standard POS configurations (Restaurant, Retail, Pharmacy) can be deployed within 3 to 7 business days, including hardware calibration. Large custom ERP and system integrations typically scale from 4 to 12 weeks depending on specific workflow requirements.' },
    { q: 'Can the POS operate offline if my internet connection fails?', a: 'Yes. Our POS architectures feature robust local synchronization engines. If your connection drops, all billing and transaction logs are stored locally on your desktop or device, and automatically synchronize with your cloud server once internet access is restored.' },
    { q: 'Do you provide on-site hardware training and data migration support?', a: 'Absolutely. We handle data migration from your legacy sheets or old software, configure compatible receipt printers, barcode scanners, and scales, and provide complete hands-on training to your supervisors and staff to ensure a seamless transition.' },
    { q: 'Are there any hidden recurring fees or transaction commissions?', a: 'No hidden fees. We believe in transparency. We offer flat-rate pricing structures for standard POS modules and one-off development packages for custom software. Any cloud hosting or maintenance support SLA options are detailed upfront.' }
  ];

  return (
    <div id="home-page-root" className="overflow-x-hidden" onMouseMove={handleMouseMove}>
      
      {/* 1. HERO SECTION */}
      <section 
        id="hero-section" 
        className="relative bg-[#0F0F0F] pt-24 pb-20 lg:pt-36 lg:pb-32 text-white overflow-hidden border-b border-white/5"
      >
        {/* Animated fluid gradient background blobs */}
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.2, 0.15],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF6B00]/15 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sales Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8" 
              id="hero-copy-col"
            >
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FF6B00] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Founder-Led Development</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
                Smart Technology & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF8C39]">Digital Solutions</span> Built Around Your Business
              </h1>
              
              <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
                Chishty Smart Solutions builds practical POS systems, business software, custom applications, automation solutions, websites, digital growth strategies, and creative solutions designed around real business requirements.
              </p>

              <p className="text-gray-400 text-sm font-normal leading-relaxed max-w-2xl border-l-2 border-[#FF6B00]/40 pl-4">
                From business software and custom development to SEO, digital marketing, and professional design — we help businesses use technology and digital solutions more effectively.
              </p>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="shrink-0">
                  <Link 
                    id="hero-demo-cta"
                    href="/contact" 
                    className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/30 transition-all text-center flex items-center justify-center space-x-2 w-full sm:w-auto"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="shrink-0">
                  <a 
                    id="hero-wa-cta"
                    href="https://wa.me/923006392025" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl text-base font-bold transition-all text-center flex items-center justify-center space-x-2 w-full sm:w-auto"
                  >
                    <MessageSquare className="w-5 h-5 text-[#FF6B00]" />
                    <span>Talk to Us on WhatsApp</span>
                  </a>
                </motion.div>
              </div>

              {/* Credibility Line */}
              <div className="pt-4 text-xs text-gray-400 border-t border-white/5 font-semibold tracking-wide" id="hero-trust-badges">
                Founder-led development • Custom solutions • Direct communication
              </div>
            </motion.div>

            {/* Interactive Dashboard / Mockup Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
              style={{ x: mousePos.x, y: mousePos.y }}
              className="lg:col-span-5 relative" 
              id="hero-vector-col"
            >
              {/* Outer decorative neon frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/40 to-transparent rounded-3xl blur-xl opacity-40 -z-10"></div>
              
              <div className="w-full aspect-square max-w-[480px] mx-auto bg-gradient-to-tr from-[#1A1A1A] to-[#262626] border border-white/10 rounded-3xl p-1 relative shadow-2xl overflow-hidden group">
                
                {/* Floating Micro-SaaS software cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 -left-6 bg-[#121212]/95 border border-white/10 p-3 rounded-xl shadow-2xl z-20 flex items-center space-x-2 max-w-[180px] pointer-events-none"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-gray-300">Sync: Local Engine</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-16 -right-6 bg-[#121212]/95 border border-white/10 p-3 rounded-xl shadow-2xl z-20 flex items-center space-x-2 max-w-[200px] pointer-events-none"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span className="text-[10px] font-mono text-gray-300">Offline SQLite: Ready</span>
                </motion.div>

                <div className="w-full h-full bg-[#121212]/80 backdrop-blur-md rounded-[22px] p-6 flex flex-col justify-between text-white">
                  
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                      <span className="ml-2 bg-white/5 border border-white/10 rounded px-2.5 py-0.5 text-[9px] text-gray-400 font-mono">chishtysmartsolutions.com</span>
                    </div>
                    <span className="text-[9px] bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider animate-pulse">
                      POS Software Preview
                    </span>
                  </div>

                  {/* Mock Chart Area */}
                  <div className="my-6 space-y-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-gray-400 block font-semibold uppercase tracking-wider font-mono">Daily Sales Mockup</span>
                        <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                          PKR {salesCounter.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">+18.4%</span>
                    </div>

                    {/* Faux grid lines & bar with nice animation */}
                    <div className="h-28 flex items-end justify-between gap-2 pt-4 bg-white/5 rounded-xl p-3 border border-white/10">
                      <div className="w-full bg-[#FF6B00]/20 rounded-t-md h-[40%] hover:bg-[#FF6B00]/40 transition-colors"></div>
                      <div className="w-full bg-[#FF6B00]/30 rounded-t-md h-[65%] hover:bg-[#FF6B00]/50 transition-colors"></div>
                      <div className="w-full bg-[#FF6B00]/40 rounded-t-md h-[55%] hover:bg-[#FF6B00]/60 transition-colors"></div>
                      <div className="w-full bg-[#FF6B00]/60 rounded-t-md h-[85%] hover:bg-[#FF6B00]/80 transition-colors"></div>
                      <motion.div 
                        animate={{ height: ["100%", "92%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full bg-[#FF6B00] rounded-t-md h-[100%] shadow-lg shadow-[#FF6B00]/40"
                      />
                    </div>
                  </div>

                  {/* Interactive Status List */}
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                      <span>Database Sync</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5 font-mono">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span> OPERATIONAL
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                      <span>Offline Caching</span>
                      <span className="text-[#FF6B00] font-mono font-bold">ACTIVE</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CLEAR ABOUT WHAT WE DO (TRUST STRATEGY) */}
      <section id="clear-what-we-do" className="py-16 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Clear About What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Real Software Development",
                desc: "We build practical software and technology solutions around real business requirements."
              },
              {
                title: "Direct Communication",
                desc: "Discuss your requirements directly and get clear communication throughout the project."
              },
              {
                title: "Transparent Scope",
                desc: "We define requirements, features, and project scope before development so expectations are clear."
              }
            ].map((pt, idx) => (
              <div key={idx} className="bg-white border border-gray-150 rounded-2xl p-6 text-center space-y-3 shadow-sm hover:border-[#FF6B00]/20 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mx-auto text-base font-bold font-mono">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-gray-900 text-base">{pt.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY WORK WITH CHISHTY SMART SOLUTIONS */}
      <section id="why-us" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span>Our Value</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Why Work With Chishty Smart Solutions?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              From powerful POS systems to custom software, automation, integrations, and digital growth — we build technology around the way your business actually works.
            </p>
          </div>

          {/* Premium Comparison Grid Container */}
          <div className="mb-20 max-w-5xl mx-auto">
            {/* Horizontal Scroll Prompt for Mobile */}
            <div className="flex md:hidden items-center justify-end space-x-1 mb-3 text-xs text-gray-400 font-mono">
              <span>Swipe left to view full comparison</span>
              <ArrowRight className="w-3 h-3" />
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-xl shadow-gray-100/50 bg-white">
              <table className="w-full min-w-[768px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/70">
                    <th className="py-6 px-6 text-sm font-bold text-gray-900 uppercase tracking-wider w-2/5">Capability</th>
                    <th className="py-6 px-6 text-sm font-bold text-center text-gray-900 uppercase tracking-wider relative bg-orange-50/30 w-3/10">
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest shadow-md flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Our Advantage</span>
                      </div>
                      <span className="text-[#FF6B00] font-black tracking-tight">Chishty Smart Solutions</span>
                    </th>
                    <th className="py-6 px-6 text-sm font-bold text-center text-gray-400 uppercase tracking-wider w-3/10">Traditional POS Providers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      cap: "Restaurant POS",
                      sub: "Table billing, digital kitchen screens, and contactless QR menus.",
                      chishty: { type: "check", label: "" },
                      trad: { type: "badge", text: "Limited", color: "amber" }
                    },
                    {
                      cap: "Retail & Grocery POS",
                      sub: "Fast checkouts, barcode scanning, and multi-warehouse stock sync.",
                      chishty: { type: "check", label: "" },
                      trad: { type: "badge", text: "Limited", color: "amber" }
                    },
                    {
                      cap: "Custom Software Development",
                      sub: "Tailored software built exactly for your operational workflows.",
                      chishty: { type: "check", label: "" },
                      trad: { type: "badge", text: "Unavailable", color: "gray" }
                    },
                    {
                      cap: "Web & Mobile Applications",
                      sub: "Next-gen web systems and native iOS/Android applications.",
                      chishty: { type: "check", label: "" },
                      trad: { type: "badge", text: "Unavailable", color: "gray" }
                    },
                    {
                      cap: "AI & Business Automation",
                      sub: "Intelligent AI workflows and automated business operations.",
                      chishty: { type: "badge", text: "Available on Request", color: "blue" },
                      trad: { type: "badge", text: "Unavailable", color: "gray" }
                    },
                    {
                      cap: "WhatsApp Business Solutions",
                      sub: "Automated billing notifications, reminders, and chatbot integrations.",
                      chishty: { type: "check", label: "" },
                      trad: { type: "badge", text: "Unavailable", color: "gray" }
                    },
                    {
                      cap: "QR Ordering Solutions",
                      sub: "Contactless scanning, digital orders, and custom menus.",
                      chishty: { type: "check", label: "" },
                      trad: { type: "badge", text: "Limited", color: "amber" }
                    },
                    {
                      cap: "Payment Integrations",
                      sub: "Local and global online payment gateway setups (Stripe, etc.).",
                      chishty: { type: "check", label: "" },
                      trad: { type: "badge", text: "Limited", color: "amber" }
                    },
                    {
                      cap: "Multi-Branch Management",
                      sub: "Real-time sync across branches, centralized ledgers, and reporting.",
                      chishty: { type: "check", label: "" },
                      trad: { type: "badge", text: "Limited", color: "amber" }
                    },
                    {
                      cap: "Custom Business Workflows",
                      sub: "Automated systems configured to support your unique team rules.",
                      chishty: { type: "badge", text: "Available on Request", color: "blue" },
                      trad: { type: "badge", text: "Unavailable", color: "gray" }
                    },
                    {
                      cap: "SEO & Digital Marketing",
                      sub: "Search engine optimization, traffic growth, and brand visibility.",
                      chishty: { type: "badge", text: "Available on Request", color: "blue" },
                      trad: { type: "badge", text: "Unavailable", color: "gray" }
                    },
                    {
                      cap: "Complete Technology Partnership",
                      sub: "Long-term dedicated engineering SLA, support, and planning.",
                      chishty: { type: "check", label: "" },
                      trad: { type: "badge", text: "Unavailable", color: "gray" }
                    }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-5 px-6">
                        <div className="text-sm font-bold text-gray-900">{row.cap}</div>
                        <div className="text-xs text-gray-500 mt-1">{row.sub}</div>
                      </td>
                      <td className="py-5 px-6 text-center bg-orange-50/10 border-x border-orange-100/50">
                        {row.chishty.type === "check" ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00]">
                            <Check className="w-4 h-4" />
                          </div>
                        ) : (
                          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                             row.chishty.color === "blue" 
                               ? "bg-blue-50 text-blue-700 border border-blue-150" 
                               : "bg-indigo-50 text-indigo-700 border border-indigo-150"
                          }`}>
                            {row.chishty.text}
                          </span>
                        )}
                      </td>
                      <td className="py-5 px-6 text-center text-gray-500">
                        {row.trad.type === "check" ? (
                          <Check className="w-4 h-4 text-gray-400 inline-block" />
                        ) : row.trad.type === "badge" ? (
                          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full inline-block ${
                            row.trad.color === "amber"
                              ? "bg-amber-50 text-amber-700 border border-amber-150"
                              : "bg-gray-100 text-gray-400 border border-gray-150"
                          }`}>
                            {row.trad.text}
                          </span>
                        ) : (
                          <span className="text-gray-300 font-bold">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4 Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: <MessageSquare className="w-6 h-6 text-[#FF6B00]" />,
                title: "Direct Communication",
                desc: "Work directly with the people involved in understanding and building your solution, without unnecessary layers between you and the development process."
              },
              {
                icon: <Cpu className="w-6 h-6 text-[#FF6B00]" />,
                title: "Built Around Your Requirements",
                desc: "Every business works differently. We focus on understanding your workflow, goals, and requirements before deciding how your solution should work."
              },
              {
                icon: <Layers className="w-6 h-6 text-[#FF6B00]" />,
                title: "Technology + Digital Expertise",
                desc: "From software development and automation to SEO, digital marketing, and creative design, we bring multiple digital capabilities together under one technology partner."
              },
              {
                icon: <Sparkles className="w-6 h-6 text-[#FF6B00]" />,
                title: "Long-Term Support",
                desc: "Software and digital solutions evolve over time. We can continue to provide improvements, maintenance, updates, marketing support, and technical assistance based on your requirements."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-150 rounded-[20px] p-6 shadow-sm hover:shadow-xl hover:border-[#FF6B00]/20 transition-all group duration-300"
              >
                <div className="p-3 bg-[#FF6B00]/5 rounded-xl w-12 h-12 flex items-center justify-center mb-6 border border-[#FF6B00]/10 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-[#FF6B00] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <Link 
              id="why-us-start-project-btn"
              href="/contact" 
              className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-[#FF6B00]/10 hover:shadow-[#FF6B00]/20 transition-all text-center flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a 
              id="why-us-wa-btn"
              href="https://wa.me/923006392025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 px-8 py-4 rounded-xl text-base font-bold transition-all text-center flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5 text-[#FF6B00]" />
              <span>Talk to Us on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 4. INDUSTRIES */}
      <section id="industries-section" className="py-24 bg-[#1C1C1C] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-6" id="industries-copy-col">
              <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full inline-block">
                Tailored Verticals
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Designed to Dominate Your Niche
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                We design specific database schemas, payment pipelines, and inventory workflows for over 20 separate industries.
              </p>
              <Link 
                id="view-industries-cta"
                href="/industries" 
                className="text-sm font-bold text-[#FF6B00] hover:text-[#FF8C39] inline-flex items-center group"
              >
                <span>View all Industries We Serve</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4" id="industries-grid">
              {[
                'Restaurant & Cafes', 'Pharma & Biotech', 'Mega Groceries', 
                'Luxury Bakeries', 'Five-Star Hotels', 'Hardware Stores', 
                'Apparel & Fashion', 'Electronics Outlets', 'Manufacturing'
              ].map((ind, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 hover:border-[#FF6B00]/30 hover:bg-white/10 p-5 rounded-xl transition-all"
                >
                  <h3 className="text-sm font-bold text-white mb-1">{ind}</h3>
                  <span className="text-xs text-gray-500">Optimized Solutions</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. CORE FEATURES */}
      <section id="core-features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              System Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Robust Core Architecture
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every Chishty software system is built on an enterprise-grade stack configured for low-overhead execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Dual-Engine Billing Flow",
                desc: "Lightning-fast billing generation utilizing barcode workflows, touch input matrices, or shortcut keys. Handles dual taxation structures effortlessly.",
                icon: <BarChart3 className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: "Double-Entry General Ledger",
                desc: "A fully integrated financial module that charts real-time trial balance sheets, profit and loss logs, tax breakdowns, and payment gateway reconcile sheets.",
                icon: <Database className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: "Advanced Batch Stock Control",
                desc: "Tracks product inventory using multi-warehouse batched numbers, expiry alert matrices, manufacturer replenishment levels, and custom product barcode printers.",
                icon: <Layers className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: "Multi-Node Cloud Sync",
                desc: "Secure cloud database nodes synchronize active branch terminals. Supervisors get dynamic executive dashboards accessible on any mobile browser.",
                icon: <Smartphone className="w-6 h-6 text-[#FF6B00]" />
              }
            ].map((feat, idx) => (
              <div key={idx} className="flex gap-5 p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:border-gray-200 transition-all">
                <div className="p-3 bg-white border border-gray-100 rounded-xl w-12 h-12 flex items-center justify-center shadow-sm shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRODUCTS PREVIEW */}
      <section id="products-preview" className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Product Suite
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Our Specialized Softwares
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore our range of high-performance billing and management platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Restaurant POS',
                desc: 'Table billing, digital kitchen screens, and QR menus.',
                icon: <UtensilsCrossed className="w-6 h-6 text-[#FF6B00]" />,
                slug: 'restaurant-pos'
              },
              {
                title: 'Retail POS',
                desc: 'Lightning checkouts and real-time stock counting.',
                icon: <ShoppingBag className="w-6 h-6 text-[#FF6B00]" />,
                slug: 'retail-pos'
              },
              {
                title: 'Pharmacy POS',
                desc: 'Batch drug tracking and pharmaceutical expiry alerts.',
                icon: <Pill className="w-6 h-6 text-[#FF6B00]" />,
                slug: 'pharmacy-pos'
              },
              {
                title: 'ERP & Inventory',
                desc: 'Double-entry ledgers, dynamic fiscal charts, and warehousing.',
                icon: <Layers className="w-6 h-6 text-[#FF6B00]" />,
                slug: 'erp-inventory'
              },
              {
                title: 'HR & Payroll',
                desc: 'Biometric tracking, automated payslips, and staff rosters.',
                icon: <Briefcase className="w-6 h-6 text-[#FF6B00]" />,
                slug: 'hr-payroll'
              },
              {
                title: 'CRM',
                desc: 'Offline sync deal pipelines, WhatsApp alerts, and client history.',
                icon: <Users className="w-6 h-6 text-[#FF6B00]" />,
                slug: 'crm'
              }
            ].map((prod) => (
              <div 
                key={prod.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-gray-200 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-[#FF6B00]/5 rounded-xl w-12 h-12 flex items-center justify-center mb-5 border border-[#FF6B00]/10">
                    {prod.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                </div>
                <Link 
                  href={`/products/${prod.slug}`}
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#FF6B00] hover:text-[#FF8C39] mt-2 group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-0.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              id="view-all-products-link"
              href="/products" 
              className="bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg transition-colors inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 7. INTEGRATIONS */}
      <section id="integrations-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              SaaS Sync
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Seamless Local & Cloud Integrations
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We sync with local hardware and global cloud APIs to automate alerts, payments, and tracking.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { title: "WhatsApp API", subtitle: "Billing alerts" },
              { title: "SMS Engine", subtitle: "Instant customer logs" },
              { title: "Local Banks", subtitle: "Direct bank sync" },
              { title: "Stripe", subtitle: "Global payment flow" },
              { title: "Thermal Devices", subtitle: "Receipt printing" },
              { title: "Biometric Scanners", subtitle: "Face / Thumb clock" }
            ].map((intg, idx) => (
              <div key={idx} className="bg-gray-50/50 border border-gray-100 rounded-xl p-5 text-center hover:bg-white hover:shadow-sm transition-all">
                <span className="font-extrabold text-sm text-gray-950 block">{intg.title}</span>
                <span className="text-[10px] text-gray-400 mt-1 block font-medium">{intg.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRICING INQUIRY */}
      <section id="pricing-section" className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-150 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-sm text-center space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full inline-block">
                Pricing Options
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                Let&apos;s Find the Right Solution for Your Business
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                We believe in transparent, inquiry-based pricing. Tell us what you need, and we will provide a clear, detailed cost estimate based on your specific requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto py-4 border-y border-gray-100">
              <div className="text-center">
                <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider mb-1">Step 1</span>
                <span className="text-sm font-bold text-gray-900">Discuss Requirements</span>
              </div>
              <div className="text-center">
                <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider mb-1">Step 2</span>
                <span className="text-sm font-bold text-gray-900">Get Custom Estimate</span>
              </div>
              <div className="text-center">
                <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider mb-1">Step 3</span>
                <span className="text-sm font-bold text-gray-900">Development Begins</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <Link
                id="pricing-inquire-btn"
                href="/contact"
                className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/30 transition-all w-full sm:w-auto"
              >
                Inquire About Pricing & Solutions
              </Link>
              <a
                id="pricing-wa-btn"
                href="https://wa.me/923006392025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-center space-x-2 w-full sm:w-auto shadow-sm"
              >
                <MessageSquare className="w-5 h-5 text-[#FF6B00]" />
                <span>Discuss Project on WhatsApp</span>
              </a>
            </div>
            
            <p className="text-xs text-gray-400">
              No hidden fees • Free discovery consultation • Clear scope defined upfront
            </p>
          </div>
        </div>
      </section>

      {/* 9. BUILT WITH A HANDS-ON APPROACH (FOUNDER INTRO) */}
      <section id="founder-section" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            
            {/* Left side text detail */}
            <div className="lg:col-span-7 space-y-6" id="founder-details">
              <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full inline-block">
                Our Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Built With a Hands-On Approach
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Direct engagement, expert engineering, and long-term commitment from our development team.
              </p>
              
              <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Our dedicated development team at Chishty Smart Solutions oversees every single project personally.
                </p>
                <p>
                  With a hands-on approach to software development, UI/UX design, SEO strategy, and direct client communication, we ensure your business gets a practical, functional system built to the highest standard.
                </p>
              </div>

              <div className="space-y-3 pt-2" id="founder-core-values">
                {[
                  {
                    title: "No Intermediate Layers",
                    desc: "You speak directly to the person designing and writing your software. No miscommunications or translation issues through salespeople."
                  },
                  {
                    title: "Custom-Tailored Code",
                    desc: "We don't deploy cookie-cutter software. Your systems are designed and optimized for your specific operational workflows."
                  },
                  {
                    title: "Long-Term Support",
                    desc: "We commit to supporting your system as your business grows, providing direct assistance whenever you need updates or help."
                  }
                ].map((val, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{val.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side graphical bio card */}
            <div className="lg:col-span-5" id="founder-card-col">
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-8 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/5 rounded-full blur-2xl"></div>
                <div className="space-y-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#FF6B00]/10 flex items-center justify-center border border-[#FF6B00]/20 text-[#FF6B00] text-xl font-bold font-mono">
                    CSS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Chishty Smart Solutions</h3>
                    <p className="text-xs font-semibold text-[#FF6B00] uppercase tracking-widest mt-1">Software & SEO Solutions</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4 space-y-2 text-xs sm:text-sm text-gray-600 font-mono">
                    <div>• Location: Multan, Pakistan</div>
                    <div>• Specialties: Software, SEO & Design</div>
                    <div>• Commitment: Directly hands-on</div>
                  </div>
                  <div className="pt-2">
                    <a
                      id="founder-wa-direct"
                      href="https://wa.me/923006392025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-[#FF6B00] hover:text-[#FF8C39] transition-colors"
                    >
                      <span>Connect Directly on WhatsApp</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FAQS */}
      <section id="faq-section" className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4" id="faq-header">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              System Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4" id="faq-accordion-container">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-gray-100 bg-white rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50/50 font-semibold text-gray-900 text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 text-[#FF6B00]">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="p-5 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              id="view-faq-preview-cta"
              href="/faq" 
              className="text-sm font-bold text-[#FF6B00] hover:text-[#FF8C39] transition-colors"
            >
              Still Have Technical Questions? View Extended FAQ Directory
            </Link>
          </div>

        </div>
      </section>

      {/* 11. FINAL CONVERSION CTA */}
      <section id="final-cta-section" className="py-24 bg-gradient-to-t from-[#121212] to-[#1C1C1C] text-white relative">
        <div className="absolute inset-0 bg-[#FF6B00]/5 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Discuss your requirements directly with our founder. Whether you need custom software, automation, design, digital marketing, or a practical POS system, we are here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              id="final-cta-demo-btn"
              href="/contact"
              className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/30 transition-all w-full sm:w-auto"
            >
              Start a Project
            </Link>
            <a
              id="final-cta-wa-btn"
              href="https://wa.me/923006392025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5 text-[#FF6B00]" />
              <span>Talk to Us on WhatsApp</span>
            </a>
          </div>
          <p className="text-xs text-gray-500 font-medium">
            No obligation • Free discovery consultation • Direct founder communication
          </p>
        </div>
      </section>

    </div>
  );
}
