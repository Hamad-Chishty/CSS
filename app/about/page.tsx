'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import hamadImage from '@/src/assets/images/hamad-chishty.jpg';
import { 
  Users, CheckCircle2, MessageSquare, Landmark, Shield, 
  Cpu, Sparkles, Star, Award, Heart, ShieldAlert,
  ShieldCheck, Zap, HeartHandshake, Handshake, TrendingUp,
  Code, Headphones, Maximize, ArrowRight, Quote
} from 'lucide-react';

export default function AboutPage() {
  
  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />,
      title: 'Integrity',
      desc: 'We believe honesty, transparency and ethical business practices build long-term relationships with every client.'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#FF6B00]" />,
      title: 'Innovation',
      desc: 'We continuously embrace new technologies to create modern, scalable and future-ready software solutions.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#FF6B00]" />,
      title: 'Excellence',
      desc: 'We are committed to delivering high-quality products with attention to every detail.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#FF6B00]" />,
      title: 'Customer Success',
      desc: 'Our success is measured by the growth and satisfaction of the businesses we serve.'
    },
    {
      icon: <Handshake className="w-6 h-6 text-[#FF6B00]" />,
      title: 'Trust',
      desc: 'We build lasting partnerships through reliability, consistency and genuine commitment.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#FF6B00]" />,
      title: 'Continuous Growth',
      desc: 'We continuously improve our products, our knowledge and our services to stay ahead of technology.'
    }
  ];

  const executiveTeam = [
    {
      name: 'Hamad Chishty',
      role: 'Co-Founder & CEO',
      image: hamadImage,
      bio: 'Directs the business development and customer success strategies to ensure reliable service delivery and long-term client partnerships.'
    }
  ];

  const inspirationProfiles: { name: string; relationship: string; message: string; image?: any }[] = [
    {
      name: 'Abdul Waheed Chishty',
      relationship: 'Father',
      message: '"His guidance, wisdom and unwavering support laid the foundation of the values that continue to shape our journey."'
    },
    {
      name: 'Muhammad Idrees',
      relationship: 'Uncle',
      message: '"An enduring source of encouragement whose trust and support have inspired us to pursue excellence with confidence."'
    },
    {
      name: 'Waqas Waheed',
      relationship: 'Brother',
      message: '"A constant source of motivation whose encouragement and belief continue to strengthen our vision for the future."'
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <Zap className="w-5 h-5 text-[#FF6B00]" />,
      title: 'Fast Deployment',
      desc: 'Deliver projects efficiently without compromising quality.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />,
      title: 'Secure & Reliable',
      desc: 'Enterprise-grade security and dependable performance.'
    },
    {
      icon: <Code className="w-5 h-5 text-[#FF6B00]" />,
      title: 'Custom Software Development',
      desc: 'Tailor-made software built around your business needs.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#FF6B00]" />,
      title: 'AI-Powered Innovation',
      desc: 'Modern AI solutions that improve productivity and customer experience.'
    },
    {
      icon: <Headphones className="w-5 h-5 text-[#FF6B00]" />,
      title: 'Dedicated Support',
      desc: 'Responsive support and long-term technical assistance.'
    },
    {
      icon: <Maximize className="w-5 h-5 text-[#FF6B00]" />,
      title: 'Scalable Solutions',
      desc: 'Software designed to grow alongside your business.'
    }
  ];

  return (
    <div id="about-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#0F0F0F] to-[#161616] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full border border-[#FF6B00]/20">
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

      {/* Leading Team */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16" id="about-team-section">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest font-mono block">THE PRODUCT TEAM</span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Our Leadership Group</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {executiveTeam.map((member, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-150 rounded-2xl p-8 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={112}
                  height={112}
                  className="w-full h-full object-cover bg-gray-100" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-xs text-[#FF6B00] font-semibold tracking-wider uppercase mt-0.5">{member.role}</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
          
          {/* NDA-Compliant Security Placeholder Card */}
          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-8 flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-[#FF6B00] font-mono tracking-widest uppercase block">Corporate Security Shield</span>
              <h3 className="text-base font-bold text-gray-900">Engineering Staff Confidentiality</h3>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
              Our full-time database administrators, frontend architecture team, and security engineers are kept undisclosed to protect client service terminals and source code repositories under compliance protocols.
            </p>
          </div>
        </div>
      </section>

      {/* OUR INSPIRATION SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100" id="inspiration-section">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest font-mono block">Our Tribute</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">Our Inspiration</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              &ldquo;The people whose guidance, support and values continue to inspire the journey of Chishty Smart Solutions.&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
            {inspirationProfiles.map((profile, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -6 }}
                className="group relative bg-white/70 backdrop-blur-md border border-gray-100 rounded-3xl p-8 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-[#FF6B00]/20 transition-all duration-300 flex flex-col justify-between w-full sm:max-w-md md:w-[calc(50%-16px)] lg:w-[calc(33.333%-27px)] min-h-[260px]"
              >
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-gray-900 group-hover:text-[#FF6B00] transition-colors">{profile.name}</h3>
                  <p className="text-xs text-[#FF6B00] font-bold uppercase tracking-wider">{profile.relationship}</p>
                </div>

                <div className="relative mt-2 flex-grow flex flex-col justify-center">
                  <span className="absolute -top-3 -left-2 text-gray-100 group-hover:text-orange-50 transition-colors -z-10">
                    <Quote className="w-10 h-10 rotate-180 opacity-40" />
                  </span>
                  <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed relative z-10 px-2">
                    {profile.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message Banner */}
          <div className="bg-[#0F0F0F] rounded-3xl p-8 sm:p-10 text-center text-white relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none"></div>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-medium max-w-2xl mx-auto italic">
              &ldquo;Behind every successful vision is a foundation of trust, guidance, sacrifice and unwavering support. Chishty Smart Solutions proudly honors the family whose encouragement and values continue to inspire our journey toward innovation, integrity and excellence.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* OUR CORE VALUES SECTION */}
      <section className="py-24 bg-white border-y border-gray-100" id="values-section-new">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest font-mono block">Ethical Pillars</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">Our Core Values</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              &ldquo;The principles that guide every solution we build and every relationship we create.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(255,107,0,0.06)",
                  borderColor: "rgba(255,107,0,0.3)"
                }}
                className="bg-white border border-gray-100 rounded-3xl p-8 space-y-5 shadow-sm transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,107,0,0.15)]"
              >
                <div className="p-3.5 bg-orange-50 border border-orange-100 rounded-2xl w-14 h-14 flex items-center justify-center group-hover:bg-[#FF6B00] transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {val.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-[#FF6B00] transition-colors">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CHISHTY SMART SOLUTIONS? SECTION */}
      <section className="py-24 bg-gray-50" id="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest font-mono block">Why Chishty</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">Why Choose Chishty Smart Solutions?</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              &ldquo;Empowering businesses with innovative, reliable and scalable technology solutions.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-start space-x-4 hover:border-gray-200 transition-all duration-300"
              >
                <div className="p-2.5 bg-gray-50 border border-gray-150 rounded-xl flex-shrink-0">
                  {feat.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-gray-900">{feat.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Statement Call-To-Action style */}
          <div className="border border-gray-200 rounded-3xl p-8 sm:p-12 bg-white shadow-sm max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
              &ldquo;We don&apos;t just build software. We build long-term technology partnerships that help businesses grow.&rdquo;
            </h3>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Ready to elevate your operational efficiency? Speak with our chief architect today to discuss a high-performance roadmap customized to your exact requirements.
            </p>
            <div className="pt-2">
              <Link 
                id="why-choose-cta-btn"
                href="/contact" 
                className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/30 transition-all inline-flex items-center space-x-2"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

