import React from 'react';
import Link from 'next/link';
import { 
  Shield, Lock, MessageSquare, Bot, Users, Database, 
  Server, Mail, Phone, MapPin, CheckCircle, AlertCircle, FileText
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  const effectiveDate = "October 7, 2026";
  const businessName = "Chishty Smart Solutions";
  const websiteUrl = "https://chishtysmartsolutions.com";
  const contactEmail = "info@chishtysmartsolutions.com";
  const whatsappNumber = "+92 300 6392025";
  const whatsappLink = "https://wa.me/923006392025";
  const officeAddress = "General Bus Stand, Multan, Pakistan";

  return (
    <div id="privacy-policy-root" className="bg-white min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 px-3.5 py-1.5 rounded-full">
            <Shield className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider font-mono">
              Meta & WhatsApp Business Compliance
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Transparency on data collection, automated WhatsApp customer support, and system security at <span className="text-white font-semibold">{businessName}</span>.
          </p>
          <div className="pt-2 text-xs font-mono text-gray-400">
            Effective Date: <span className="text-[#FF6B00] font-semibold">{effectiveDate}</span> • Version: 2.4
          </div>
        </div>
      </section>

      {/* Main Body Content */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Highlights Card */}
        <div className="bg-orange-50/60 border border-orange-200/80 rounded-2xl p-6 sm:p-8 mb-12 space-y-4">
          <div className="flex items-center space-x-2.5">
            <CheckCircle className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
            <h2 className="text-base font-bold text-gray-900 tracking-tight">Key Principles Summary</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            <strong>Chishty Smart Solutions</strong> operates software engineering and automated customer engagement services. We respect your privacy, enforce robust data isolation, never sell personal information, and ensure you can request human representative handoffs or data removal at any time.
          </p>
        </div>

        <div className="space-y-12 text-gray-700 text-sm sm:text-base leading-relaxed">

          {/* 1. Introduction & Scope */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">1</span>
              <span>Introduction & Business Identity</span>
            </h2>
            <p>
              This Privacy Policy applies to all services, websites, web applications, customer communication channels, and conversational agents operated by <strong>{businessName}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), accessible online at{' '}
              <a href={websiteUrl} className="text-[#FF6B00] font-semibold hover:underline">
                {websiteUrl}
              </a>.
            </p>
            <p>
              We provide enterprise POS (Point of Sale) software, custom web and mobile applications, enterprise resource planning (ERP) solutions, cloud databases, business automation tooling, and WhatsApp conversational integrations. This document clarifies how we collect, handle, process, store, and safeguard your personal and business information.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">2</span>
              <span>Information We Collect</span>
            </h2>
            <p>
              We collect information that you directly and voluntarily provide when you interact with our website, request demonstrations, submit contact forms, or communicate with our official WhatsApp support lines. This information includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Customer & Contact Names:</strong> Full name, organizational title, or authorized representative identity.</li>
              <li><strong>Phone & WhatsApp Numbers:</strong> Your telephone number used to call or message our team via WhatsApp.</li>
              <li><strong>Email Address:</strong> Business or personal email address provided for quotations, technical documentation, or system blueprints.</li>
              <li><strong>Business Information:</strong> Company name, brand name, business type or industry (e.g., retail, restaurant, pharmacy, manufacturing).</li>
              <li><strong>Location Data:</strong> City, branch count, or geographic operational territory voluntarily communicated during consultations.</li>
              <li><strong>Inquiry & Lead Details:</strong> Customer inquiries, conversation transcripts, sales leads, demo requests, hardware configuration requirements, and pricing quotations.</li>
              <li><strong>Support Logs:</strong> Technical issue descriptions, software error logs, and customer service ticket history.</li>
            </ul>
          </div>

          {/* 3. WhatsApp AI Agent Disclosure */}
          <div className="space-y-4 p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-2xl">
            <div className="flex items-center space-x-3 text-[#FF6B00]">
              <Bot className="w-6 h-6 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                3. WhatsApp AI Agent Disclosure
              </h2>
            </div>
            <p>
              To provide immediate, round-the-clock sales and technical support, <strong>Chishty Smart Solutions operates an automated WhatsApp AI Sales & Support Agent</strong> connected to our official WhatsApp Business number.
            </p>
            <p>
              When you message our official WhatsApp number, your inbound messages, requests, and queries may be processed computationally to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Understand customer inquiries and clarify business requirements;</li>
              <li>Answer common questions regarding our software packages, features, and system architecture;</li>
              <li>Provide pre-approved product specifications, hardware compatibility lists, and configured pricing tiers;</li>
              <li>Schedule live product demonstrations and screen-share blueprint sessions;</li>
              <li>Qualify sales inquiries and route tickets to appropriate software engineering departments;</li>
              <li>Transfer conversations smoothly to an authorized human representative when requested or required.</li>
            </ul>
            <div className="mt-4 p-4 bg-white border border-gray-200 rounded-xl flex items-start space-x-3">
              <Users className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <strong className="text-gray-900">Right to Human Escalation:</strong> Customers can request to speak with a human representative at any point during any conversation by typing &ldquo;Human&rdquo;, &ldquo;Agent&rdquo;, or &ldquo;Representative&rdquo;. Conversations will be queued for our human engineering and support staff.
              </div>
            </div>
          </div>

          {/* 4. Third-Party Service Providers */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">4</span>
              <span>Third-Party Infrastructure & Technology Providers</span>
            </h2>
            <p>
              To maintain high system uptime, security, and responsive conversational experiences, we partner with industry-leading cloud and artificial intelligence infrastructure providers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/50 space-y-1.5">
                <div className="font-bold text-gray-900 flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-[#FF6B00]" />
                  <span>Meta / WhatsApp Business Platform</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Powers message transmission, Cloud API endpoints, customer service windows, and template messaging under Meta’s terms and platform security policies.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/50 space-y-1.5">
                <div className="font-bold text-gray-900 flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-[#FF6B00]" />
                  <span>Google Gemini AI</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Provides server-side natural language understanding, question classification, and automated drafting of conversational answers to technical inquiries.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/50 space-y-1.5">
                <div className="font-bold text-gray-900 flex items-center space-x-2">
                  <Database className="w-4 h-4 text-[#FF6B00]" />
                  <span>Supabase</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Provides managed PostgreSQL relational databases, secure Row Level Security (RLS), encrypted credential storage, and transaction logging.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/50 space-y-1.5">
                <div className="font-bold text-gray-900 flex items-center space-x-2">
                  <Server className="w-4 h-4 text-[#FF6B00]" />
                  <span>Vercel</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Provides edge hosting, serverless execution environments, DDoS mitigations, and global CDN delivery for our web applications and webhooks.
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 italic mt-2">
              Note: Each infrastructure provider processes data solely to deliver technical hosting, database storage, message routing, or AI inference as configured by our architecture, without assuming ownership of customer information.
            </p>
          </div>

          {/* 5. How We Use Data */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">5</span>
              <span>How We Use Your Information</span>
            </h2>
            <p>
              We process personal and organizational information strictly for legitimate commercial and technical operations, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Responding to customer inquiries, quote requests, and technical consultations;</li>
              <li>Delivering direct customer support, troubleshooting software glitches, and training staff;</li>
              <li>Conducting sales follow-ups, scheduling demos, and providing tailored blueprints;</li>
              <li>Managing client CRM records, purchase orders, and software license records;</li>
              <li>Evaluating and enhancing customer service workflows and chatbot accuracy;</li>
              <li>Detecting, investigating, and preventing fraudulent transactions or unauthorized access;</li>
              <li>Ensuring network security, webhook reliability, and server stability;</li>
              <li>Complying with applicable tax, regulatory, and corporate legal obligations.</li>
            </ul>
          </div>

          {/* 6. Data Sharing & Non-Sale Pledge */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">6</span>
              <span>Data Sharing & Non-Sale Pledge</span>
            </h2>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 font-medium">
              Chishty Smart Solutions does NOT sell, rent, monetize, or trade customers&apos; personal information or business databases to any third-party marketing entities or data brokers.
            </div>
            <p>
              We only share customer data under strictly defined circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li><strong>Authorized Personnel:</strong> Internal software engineers, deployment specialists, and support coordinators who require access to perform their official duties.</li>
              <li><strong>Infrastructure & Service Providers:</strong> Cloud database, hosting, and telecommunication providers (such as Meta, Google Cloud, Supabase, Vercel) bound by data processing agreements.</li>
              <li><strong>Legal Authorities:</strong> Law enforcement agencies, courts, or regulatory authorities when compelled by a valid subpoena, warrant, or mandatory legal process.</li>
            </ul>
          </div>

          {/* 7. Data Retention */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">7</span>
              <span>Data Retention</span>
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the business, technical support, sales, security, and service delivery purposes for which it was originally collected. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Active customer inquiries and conversation histories are retained while a business relationship remains open or active.</li>
              <li>Accounting, licensing, and transaction invoices are archived for statutory durations required by taxation and commercial regulations.</li>
              <li>Ineligible or stale marketing leads are periodically purged or anonymized.</li>
            </ul>
          </div>

          {/* 8. Information Security Controls */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">8</span>
              <span>Information Security Controls</span>
            </h2>
            <p>
              We maintain reasonable technical, operational, and administrative safeguards designed to protect personal and business information against unauthorized access, alteration, destruction, or disclosure. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>HTTPS / TLS 1.3 encryption across all public web and API endpoints;</li>
              <li>Multi-factor authenticated administrative logins for all infrastructure consoles;</li>
              <li>Role-based access permissions restricting database modifications to authorized engineers;</li>
              <li>Secure environment-variable credential storage with no exposed API secrets;</li>
              <li>Continuous server health checks, audit logging, and security anomaly monitoring.</li>
            </ul>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-600 flex items-start space-x-3">
              <AlertCircle className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
              <span>
                Please note: While we implement industry-standard safeguards, no transmission over the internet or wireless network is 100% impenetrable. We cannot warrant absolute security against extraordinary cyber incidents.
              </span>
            </div>
          </div>

          {/* 9. WhatsApp Communication & Messaging Policies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">9</span>
              <span>WhatsApp Communication Policies</span>
            </h2>
            <p>
              When you initiate contact with us through WhatsApp, we may respond to your query directly through WhatsApp using our verified business profile.
            </p>
            <p>
              All messaging is operated in strict compliance with <strong>Meta / WhatsApp Business Messaging Policies</strong>, including adherence to 24-hour customer service session windows, opt-in guidelines, and pre-approved business templates for outbound notices or appointment confirmations. You may stop messaging at any time simply by ending the conversation or requesting that we remove your number from our contact roster.
            </p>
          </div>

          {/* 10. User Rights */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">10</span>
              <span>Your Privacy Rights</span>
            </h2>
            <p>
              Depending on your location and subject to applicable legal exceptions, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li><strong>Access:</strong> Request a summary of the personal information we hold about you.</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate, outdated, or incomplete records.</li>
              <li><strong>Deletion (&ldquo;Right to Be Forgotten&rdquo;):</strong> Request deletion of eligible personal data from our databases and CRM systems.</li>
              <li><strong>Opt-Out:</strong> Stop receiving non-essential marketing, newsletters, or follow-up communications.</li>
            </ul>
          </div>

          {/* 11. Data Deletion Requests */}
          <div className="space-y-4 p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <FileText className="w-6 h-6 text-[#FF6B00]" />
              <span>11. Data Deletion Requests</span>
            </h2>
            <p>
              If you wish to submit a data deletion request, you may contact our privacy team at any time using our official contact channels:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Official Email</span>
                <a href={`mailto:${contactEmail}`} className="text-sm font-semibold text-[#FF6B00] hover:underline">
                  {contactEmail}
                </a>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">WhatsApp Support Line</span>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#FF6B00] hover:underline">
                  {whatsappNumber} (Open Chat)
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-600 pt-2">
              Please include your full name, phone number, and the specific nature of your deletion request. We verify identity before processing deletions and will respond within a reasonable business timeframe (typically within 10 to 30 business days).
            </p>
          </div>

          {/* 12. Children's Privacy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">12</span>
              <span>Children&apos;s Privacy</span>
            </h2>
            <p>
              Our enterprise software solutions, developer tools, and business consultancy services are strictly intended for adult business owners, corporate executives, and commercial organizations. We do not knowingly collect, solicit, or maintain personal information from individuals under the age of 18. If you believe a minor has submitted personal details through our forms, please contact us immediately so we can remove such records.
            </p>
          </div>

          {/* 13. International Data Processing */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">13</span>
              <span>International Data Processing</span>
            </h2>
            <p>
              {businessName} operates from Pakistan, with digital cloud infrastructure distributed across secure global datacenters operated by our technology partners (including Meta, Google Cloud, Supabase, and Vercel). By using our services or contacting us from outside Pakistan, you acknowledge that your information may be transferred to, processed, and stored in jurisdictions outside your home country in accordance with this policy.
            </p>
          </div>

          {/* 14. Changes to This Privacy Policy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">14</span>
              <span>Changes to This Privacy Policy</span>
            </h2>
            <p>
              We may revise this Privacy Policy periodically to reflect enhancements in our software platforms, AI features, WhatsApp messaging workflows, or modifications in regulatory standards. The revised document will be published with an updated &ldquo;Effective Date&rdquo; at the top of this page.
            </p>
          </div>

          {/* 15. Contact Details */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center text-sm font-black">15</span>
              <span>Contact Us</span>
            </h2>
            <p>
              For inquiries regarding this Privacy Policy, your personal data, or our automated WhatsApp communication services, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 bg-gray-100 text-[#FF6B00] rounded-xl flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Us</h3>
                  <a href={`mailto:${contactEmail}`} className="text-sm font-medium text-gray-900 hover:text-[#FF6B00] transition-colors mt-0.5 block">
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2.5 bg-gray-100 text-[#FF6B00] rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone / WhatsApp</h3>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-900 hover:text-[#FF6B00] transition-colors mt-0.5 block">
                    {whatsappNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2.5 bg-gray-100 text-[#FF6B00] rounded-xl flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Headquarters</h3>
                  <p className="text-sm text-gray-700 mt-0.5">
                    {officeAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xs font-semibold text-gray-600 hover:text-[#FF6B00] transition-colors flex items-center space-x-1"
          >
            <span>← Back to Home</span>
          </Link>
          <Link 
            href="/terms" 
            className="text-xs font-semibold text-gray-600 hover:text-[#FF6B00] transition-colors"
          >
            Terms of Service →
          </Link>
        </div>

      </section>

    </div>
  );
}
