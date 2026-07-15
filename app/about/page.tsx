'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Users, CheckCircle2, MessageSquare, Landmark, Shield, 
  Cpu, Sparkles, Star, Award, Heart, ShieldAlert
} from 'lucide-react';

export default function AboutPage() {
  
  const coreValues = [
    {
      icon: <Cpu className="w-8 h-8 text-[#FF6B00]" />,
      title: 'Architectural Craftsmanship',
      desc: 'We do not duplicate standard software templates. Every codebase we compile is custom schema-modeled to eliminate business overheads and run with maximum system speed.'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FF6B00]" />,
      title: 'Resilient Offline Security',
      desc: 'We recognize that regional internet lines can suffer lag. We design hybrid localized replication caches so transaction logs and billing queues are never lost.'
    },
    {
      icon: <Users className="w-8 h-8 text-[#FF6B00]" />,
      title: 'SLA-backed Local Support',
      desc: 'We do not leave you stranded with digital ticketing portals. Our local engineering staff helps with barcode scanning calibrations, database imports, and hands-on team training.'
    }
  ];

  const executiveTeam = [
    {
      name: 'Muhammad Chishty',
      role: 'CEO & Chief Architect',
      image: 'https://picsum.photos/seed/chishty/150/150',
      bio: 'Directs the overall technical roadmap and enterprise database design for our clients.'
    },
    {
      name: 'Sarah Rahman',
      role: 'Creative Director',
      image: 'https://picsum.photos/seed/sarah/150/150',
      bio: 'Curates visual brand interfaces, layouts, and high-contrast user experiences.'
    },
    {
      name: 'Farooq Ahmad',
      role: 'Brand Strategist & CRO Expert',
      image: 'https://picsum.photos/seed/farooq/150/150',
      bio: 'Analyzes retail conversion pipelines, checkout models, and client marketing loops.'
    },
    {
      name: 'Bilal Khan',
      role: 'Senior Frontend Architect',
      image: 'https://picsum.photos/seed/bilal/150/150',
      bio: 'Spearheads high-performance React applications, Next.js setups, and cloud integrations.'
    }
  ];

  return (
    <div id="about-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Our DNA
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            An Elite Digital Engineering Agency
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We are a group of developers, UX researchers, and brand strategists committed to standardizing business POS and software systems to an international level.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="about-philosophy-section">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Core Strategic Philosophy
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Most software companies build static, rigid platforms that force you to distort your daily operations. At Chishty Smart Solutions, we believe that software should conform to your brand workflow, automating inventory tracking, team salaries, and payment ledger double-entries effortlessly.
          </p>
        </div>
      </section>

      {/* Core Values / Strengths */}
      <section className="py-24 bg-gray-50 border-y border-gray-100" id="about-values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest font-mono block">OUR THREE PILLARS</span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">How We Define Performance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <div className="p-3 bg-gray-50 rounded-xl w-14 h-14 flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{val.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leading Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16" id="about-team-section">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest font-mono block">THE PRODUCT TEAM</span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Our Leadership Group</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {executiveTeam.map((member, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-150 rounded-2xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-24 h-24 rounded-full mx-auto bg-gray-100 border-2 border-white shadow-md object-cover" 
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
                <p className="text-xs text-[#FF6B00] font-semibold tracking-wider uppercase mt-0.5">{member.role}</p>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
