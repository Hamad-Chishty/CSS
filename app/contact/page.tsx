'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  MessageSquare, Phone, Mail, MapPin, Clock, Send, 
  CheckCircle2, Sparkles, HelpCircle, Shield, AlertTriangle
} from 'lucide-react';

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] bg-white flex items-center justify-center">
        <span className="text-gray-400 font-semibold font-mono animate-pulse">Initializing Blueprint Engine...</span>
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  );
}

function ContactPageContent() {
  const searchParams = useSearchParams();
  const isDemoMode = searchParams.get('demo') === 'true';
  
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    whatsapp: '',
    email: '',
    industry: 'retail',
    systemType: 'standard-pos',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [queueId, setQueueId] = useState<number | null>(null);

  // Set default product or solution based on query params
  useEffect(() => {
    const productParam = searchParams.get('product') || searchParams.get('service') || searchParams.get('solution');
    const demoParam = searchParams.get('demo');
    
    if (productParam || demoParam) {
      setTimeout(() => {
        setFormData(prev => {
          if (productParam && prev.systemType === productParam) return prev;
          return {
            ...prev,
            systemType: productParam || prev.systemType,
            message: productParam 
              ? `Hi, I am interested in implementing your ${productParam.replace('-', ' ')} system. Please share details.`
              : 'Hi, I would like to schedule a complete live platform demo with your Senior Frontend Architect.'
          };
        });
      }, 0);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQueueId(Math.floor(Math.random() * 9000) + 1000);
    setSubmitted(true);
  };

  return (
    <div id="contact-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Inquire Deployed Systems
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Get Your System Blueprint
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Discuss your system needs with our CEO, brand strategists, and frontend developers. Get precise pricing and hardware specifications.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-main-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-10" id="contact-details-col">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest font-mono block">GET IN TOUCH</span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-none">
                Our Corporate Offices
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connect directly with our support lines or schedule an on-site consultation at our Multan headquarters.
              </p>
            </div>

            {/* Direct Lines list */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-[#FF6B00]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Direct Support Line</h3>
                  <p className="text-gray-600 text-sm mt-0.5">+92 300 6392025</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-[#FF6B00]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Official WhatsApp</h3>
                  <a 
                    href="https://wa.me/923006392025" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#FF6B00] text-sm mt-0.5 block transition-colors"
                  >
                    +92 300 6392025 (Open Chat)
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-[#FF6B00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Software HQ</h3>
                  <p className="text-gray-600 text-sm mt-0.5">General Bus Stand, Multan, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-[#FF6B00]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600 text-sm mt-0.5">Monday – Saturday: 09:00 AM – 06:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map Mock Card */}
            <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl space-y-4 shadow-sm" id="map-mockup-card">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>MULTAN CAMPUS</span>
                <span className="text-emerald-500 font-bold">ONLINE STATUS</span>
              </div>
              <div className="aspect-video bg-gray-200/50 rounded-xl flex items-center justify-center border border-gray-150 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/5 to-transparent"></div>
                <div className="text-center space-y-2 relative z-10 px-4">
                  <MapPin className="w-8 h-8 text-[#FF6B00] mx-auto animate-bounce" />
                  <span className="text-xs font-bold text-gray-800 block">General Bus Stand, Multan</span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7" id="contact-form-col">
            <div className="bg-gray-50 border border-gray-150 rounded-3xl p-8 sm:p-12 shadow-sm">
              
              {!submitted ? (
                <div className="space-y-6">
                  {/* Dynamic Form Header */}
                  <div className="border-b border-gray-200/60 pb-6">
                    <span className="text-[10px] font-extrabold text-[#FF6B00] uppercase tracking-widest font-mono bg-[#FF6B00]/10 px-3 py-1 rounded-full">
                      {isDemoMode ? 'Free Live Platform Demo' : 'Enterprise System Blueprint'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mt-3">
                      {isDemoMode ? 'Reserve Your Live Demo Slot' : 'Configure Your Custom System'}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                      {isDemoMode 
                        ? 'Schedule a screen-share session with our Chief Architect. See raw speed, database queries, and hardware printers live.'
                        : 'Submit your business details and hardware requirements to obtain a personalized deployment plan.'}
                    </p>
                  </div>

                  <form id="system-blueprint-form" onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Full Name *</label>
                        <input 
                          type="text" 
                          id="fullName" 
                          name="fullName" 
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Zainab Malik"
                          className="w-full bg-white border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-xl px-4 py-3 text-sm transition-colors outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="companyName" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Company Name *</label>
                        <input 
                          type="text" 
                          id="companyName" 
                          name="companyName" 
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="BakeWay Premium"
                          className="w-full bg-white border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-xl px-4 py-3 text-sm transition-colors outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="whatsapp" className="text-xs font-bold text-gray-600 uppercase tracking-wider">WhatsApp Number *</label>
                        <input 
                          type="tel" 
                          id="whatsapp" 
                          name="whatsapp" 
                          required
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="+92 300 6392025"
                          className="w-full bg-white border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-xl px-4 py-3 text-sm transition-colors outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full bg-white border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-xl px-4 py-3 text-sm transition-colors outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="industry" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Industry Vertical *</label>
                        <select 
                          id="industry" 
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full bg-white border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-xl px-4 py-3 text-sm transition-colors outline-none"
                        >
                          <option value="restaurant">Restaurant & Cafe</option>
                          <option value="retail">Retail Store</option>
                          <option value="grocery">Grocery & Supermarket</option>
                          <option value="bakery">Bakery & Sweets</option>
                          <option value="pharmacy">Pharmacy</option>
                          <option value="hotel">Hotel Management</option>
                          <option value="corporate">Corporate / ERP</option>
                          <option value="other">Other specialized niche</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="systemType" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Preferred License *</label>
                        <select 
                          id="systemType" 
                          name="systemType"
                          value={formData.systemType}
                          onChange={handleChange}
                          className="w-full bg-white border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-xl px-4 py-3 text-sm transition-colors outline-none"
                        >
                          <option value="standard-pos">Standard POS License</option>
                          <option value="multi-branch">Multi-Branch Pro License</option>
                          <option value="custom-dev">Custom ERP / Database build</option>
                          <option value="whatsapp-integration">WhatsApp API Integration</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-gray-600 uppercase tracking-wider">System Specifications / Notes *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={isDemoMode 
                          ? "What specific features or hardware integration would you like to see during the screen-share? (e.g. thermal printers, SMS APIs, inventory alerts...)" 
                          : "Outline any special recipe calculations, printer hardware setups, warehouse requirements, or biometric clock syncs you need..."}
                        className="w-full bg-white border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] rounded-xl px-4 py-3 text-sm transition-colors outline-none resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button 
                        id="submit-blueprint-btn"
                        type="submit" 
                        className="w-full bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/30 transition-all flex items-center justify-center space-x-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isDemoMode ? 'Book My Live Demo Slot' : 'Submit Blueprint Request'}</span>
                      </button>
                    </div>

                    {/* Security and Trust Microcopy */}
                    <div className="flex items-center justify-center space-x-6 text-xs text-gray-400 font-medium pt-3 border-t border-gray-200/50">
                      <span className="flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5 text-emerald-500" /> Secure Encryption
                      </span>
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-500" /> &lt; 15m Response SLA
                      </span>
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Zero Obligation
                      </span>
                    </div>

                  </form>
                </div>
              ) : (
                <div id="contact-success-card" className="text-center space-y-6 py-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">Blueprint Registered!</h3>
                    <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-gray-800">{formData.fullName}</strong>. Your enterprise POS requirements for <strong className="text-gray-800">{formData.companyName}</strong> have been cataloged in our system queue.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-150 p-6 rounded-2xl text-left max-w-md mx-auto space-y-3">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Queue Placement ID</span>
                      <span className="font-mono font-bold text-gray-900">#CSS-{queueId || 7842}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Assigned Architect</span>
                      <span className="font-bold text-gray-900">Muhammad Chishty</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>SLA Response Time</span>
                      <span className="text-emerald-500 font-bold">&lt; 15 Minutes</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <a
                      id="success-direct-wa-btn"
                      href={`https://wa.me/923006392025?text=Hello,%20I%20have%20submitted%20my%20POS%20blueprint%20for%20${encodeURIComponent(formData.companyName)}.%20My%20name%20is%20${encodeURIComponent(formData.fullName)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-colors inline-flex items-center space-x-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>Speed Up via Direct WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
