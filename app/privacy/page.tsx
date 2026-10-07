'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Shield, Lock, MessageSquare, Bot, Users, Database, 
  Server, Mail, Phone, MapPin, CheckCircle, AlertCircle, FileText,
  HardDrive, RefreshCw, Cpu
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 7, 2026";
  const businessName = "Chishty Smart Solutions";
  const websiteUrl = "https://www.chishtysmartsolutions.com";
  const contactEmail = "info@chishtysmartsolutions.com";
  const contactPhone = "+92 300 6392025";
  const whatsappLink = "https://wa.me/923006392025";
  const officeAddress = "General Bus Stand, Multan, Pakistan";

  return (
    <div id="privacy-page-root" className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 px-3.5 py-1.5 rounded-full">
            <Shield className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider font-mono">
              Compliance & Data Protection
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Our commitment to corporate data protection, offline-first system security, and customer privacy across all software applications and our official WhatsApp AI Sales & Support Agent.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm font-mono pt-1">
            Last Updated: <span className="text-[#FF6B00] font-semibold">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Banner */}
        <div className="p-6 bg-orange-50/70 border border-orange-200/80 rounded-2xl mb-12 space-y-2">
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
            At <strong>{businessName}</strong>, we prioritize the protection and security of your corporate transaction databases, inventory catalogs, employee records, client accounts, and digital communications. This document outlines how we collect, store, process, and secure your systems data when you license our POS or custom ERP applications, interact with our website (<a href={websiteUrl} className="text-[#FF6B00] underline hover:text-[#e05e00]">{websiteUrl}</a>), or converse with our official WhatsApp AI Sales & Support Agent.
          </p>
        </div>

        <div className="space-y-12 text-gray-700 text-xs sm:text-sm leading-relaxed" id="privacy-doc-content">

          {/* =========================================
              PART 1: CORE POS & ERP PRIVACY STANDARDS
              ========================================= */}
          <div className="border-b border-gray-200 pb-10 space-y-8">
            <div className="flex items-center space-x-2 text-gray-900 border-b border-gray-100 pb-3">
              <HardDrive className="w-5 h-5 text-[#FF6B00]" />
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider">
                Part I: POS & Custom ERP Software Standards
              </h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">1</span>
                <span>Data Storage & Local Caching</span>
              </h3>
              <p>
                When using our offline-first applications, all transaction queues and credit logs (Khata logs) are saved locally on your physical device using secure SQLite database instances. If cloud synchronization is activated, this data replicates securely via encrypted SSL/TLS pathways to our cloud server hosted on certified datacenters.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">2</span>
                <span>Customer Database Security</span>
              </h3>
              <p>
                We do not share, sell, or disclose your customer directories, sales histories, ingredients recipe data, or billing ledgers to any third-party marketing entities. All database access credentials are owned and managed solely by your authorized system supervisors.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">3</span>
                <span>Local Hardware Isolation</span>
              </h3>
              <p>
                Our universal hardware integration drivers (for scales, barcode printers, biometric logs, and card swipers) run completely in your private network container. No sensitive credentials or biometric profiles are transmitted or saved on public registries.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">4</span>
                <span>Compliance Audits</span>
              </h3>
              <p>
                We compile granular chronological audit trails showing precisely which system terminal or employee account processed modifications, discounts, or voids to prevent unauthorized administrative alterations.
              </p>
            </div>
          </div>


          {/* =========================================
              PART 2: WHATSAPP AI AGENT & CLOUD PLATFORM
              ========================================= */}
          <div className="space-y-10">
            <div className="flex items-center space-x-2 text-gray-900 border-b border-gray-100 pb-3">
              <Bot className="w-5 h-5 text-[#FF6B00]" />
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider">
                Part II: WhatsApp AI Sales & Support Agent & Digital Platforms
              </h2>
            </div>

            {/* Section 5: WhatsApp Business Platform / Meta */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">5</span>
                <span>WhatsApp Business Platform / Meta</span>
              </h3>
              <p>
                {businessName} integrates with the official <strong>Meta / WhatsApp Business Platform (Cloud API)</strong> to communicate with customers, send service updates, and provide responsive technical assistance. Messages sent to or received from our official WhatsApp profile (+92 300 6392025) transit across Meta&apos;s telecommunication infrastructure subject to Meta&apos;s Business Messaging Terms, privacy policies, and technical protocols.
              </p>
            </div>

            {/* Section 6: WhatsApp Customer Messages & Conversation History */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">6</span>
                <span>WhatsApp Customer Messages and Conversation History</span>
              </h3>
              <p>
                When you interact with our WhatsApp line, we receive and store inbound customer messages, inquiries, questions, and timestamped conversation history. This conversational context is necessary to accurately resolve technical questions, preserve service history across interactions, ensure consistency in customer service, and facilitate follow-up communication.
              </p>
            </div>

            {/* Section 7: Phone Numbers & Profile Information */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">7</span>
                <span>Customer Phone Number and WhatsApp Profile Information</span>
              </h3>
              <p>
                We capture your mobile/WhatsApp telephone number and public WhatsApp profile details (such as your display name or verified business tag as transmitted by the WhatsApp API). We use this identification solely to identify your account, personalize responses, and reference past support tickets.
              </p>
            </div>

            {/* Section 8: Business Details, Demo, Pricing & Support Requests */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">8</span>
                <span>Business Name/Type, City, Service Interest, Demo & Pricing Requests</span>
              </h3>
              <p>
                Through website forms or WhatsApp chats, you may voluntarily share organizational data including your business name, industry type (e.g., retail mart, restaurant, pharmacy, distribution, manufacturing), physical city or operating region, specific service interest (e.g., POS licensing, custom ERP development, website design, mobile app), and concrete requests for live system demos, tailored pricing quotations, or technical support tickets.
              </p>
            </div>

            {/* Section 9: AI Processing with Google Gemini */}
            <div className="space-y-3 p-5 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-[#FF6B00]" />
                <span>9. AI-Assisted Processing Through Google Gemini</span>
              </h3>
              <p>
                Our WhatsApp agent utilizes <strong>Google Gemini AI</strong> models hosted server-side to comprehend incoming conversational messages, classify inquiry categories, formulate accurate replies based on our verified product knowledge base, and prepare immediate quotations. Customer messages are passed to Google Gemini APIs securely over encrypted server-to-server connections solely to generate contextual conversational responses. Your personal messages are not sold or utilized by us for unauthorized third-party training.
              </p>
            </div>

            {/* Section 10: Supabase Data Storage */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">10</span>
                <span>Supabase Data Storage</span>
              </h3>
              <p>
                Lead records, conversation transcripts, system blueprint requests, and support metadata are stored in hardened <strong>Supabase</strong> PostgreSQL cloud databases. Supabase implements database-level encryption at rest, Row Level Security (RLS) policies, SSL connection requirements, and regular point-in-time backups to prevent unauthorized physical or electronic data interception.
              </p>
            </div>

            {/* Section 11: Vercel Hosting & Server Processing */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">11</span>
                <span>Vercel Hosting and Server Processing</span>
              </h3>
              <p>
                Our web applications, webhook endpoints, and API proxies are hosted and run on <strong>Vercel&apos;s</strong> global edge infrastructure. Incoming WhatsApp webhook events and form payloads are routed through Vercel serverless functions equipped with enterprise DDoS mitigation, automated TLS certificates, and ephemeral computational runtimes.
              </p>
            </div>

            {/* Section 12: Lead and CRM Data Management */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">12</span>
                <span>Lead and CRM Data</span>
              </h3>
              <p>
                Prospective customer information captured via WhatsApp or web forms is logged into our internal CRM management workflows. This data enables our technical account managers to deliver customized system proposals, follow up on pending demo bookings, prepare software licenses, and track customer satisfaction.
              </p>
            </div>

            {/* Section 13: Human Handover */}
            <div className="space-y-3 p-5 bg-orange-50/50 border border-orange-200/60 rounded-xl">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#FF6B00]" />
                <span>13. Human Handover</span>
              </h3>
              <p>
                While our WhatsApp agent offers 24/7 automated assistance, users may request escalation to a human staff member at any time. Simply message &ldquo;Human&rdquo;, &ldquo;Support Representative&rdquo;, or &ldquo;Talk to an Engineer&rdquo;, and our system will route your conversation thread to our human engineering and customer care team during regular business hours (Monday – Saturday: 09:00 AM – 06:00 PM PKT).
              </p>
            </div>

            {/* Section 14: Data Retention */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">14</span>
                <span>Data Retention</span>
              </h3>
              <p>
                We retain conversational data, leads, and customer service tickets only as long as necessary to fulfill commercial, technical support, warranty, fraud prevention, and statutory accounting purposes. When records are no longer required or upon a validated customer deletion request, data is securely pruned, deleted, or irreversibly anonymized.
              </p>
            </div>

            {/* Section 15: Data Security */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">15</span>
                <span>Data Security</span>
              </h3>
              <p>
                We employ comprehensive technical and organizational security controls, including HTTPS / TLS 1.3 encryption across all network transfers, authenticated administrative console access with multi-factor authentication, strictly restricted environment API keys, least-privilege database permissions, and continuous operational audit logging.
              </p>
            </div>

            {/* Section 16: Data Sharing */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">16</span>
                <span>Data Sharing</span>
              </h3>
              <p>
                We do not disclose your personal details to outside parties except to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Authorized employees and contracted software engineers who need access to resolve your inquiries;</li>
                <li>Our vetted cloud service providers (Meta, Google, Supabase, Vercel) bound by confidentiality and service agreements;</li>
                <li>Law enforcement or regulatory authorities when strictly required by enforceable legal process or governing laws.</li>
              </ul>
            </div>

            {/* Section 17: Non-Sale Statement */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 font-bold">
              17. Statement on the Sale of Personal Information: Chishty Smart Solutions does NOT sell, rent, monetize, or trade customers&apos; personal information, phone numbers, or conversation records to any third-party marketing entities or data brokers under any circumstances.
            </div>

            {/* Section 18: WhatsApp Messaging Policies & Customer Service Windows */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">18</span>
                <span>WhatsApp Messaging & Customer Service Windows</span>
              </h3>
              <p>
                Our WhatsApp communication adheres strictly to Meta&apos;s Business Messaging Policies. When you message us, a standard customer service session window opens during which our automated agent and support personnel may respond. Outbound notifications outside standard windows are limited to pre-approved WhatsApp message templates regarding explicit service transactions or appointment updates for which you have consented.
              </p>
            </div>

            {/* Section 19: User Rights & Data Correction Requests */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">19</span>
                <span>User Rights & Data Correction Requests</span>
              </h3>
              <p>
                You retain the right to confirm whether we hold your personal information, obtain a summary of your stored data, rectify outdated or inaccurate profile details, and withdraw consent for follow-up marketing contact. To request a correction, simply reach out to our team with your updated information.
              </p>
            </div>

            {/* Section 20: Data Deletion Requests */}
            <div className="space-y-3 p-5 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-[#FF6B00]" />
                <span>20. Data Deletion Requests</span>
              </h3>
              <p>
                Customers may request complete deletion of their conversation history, CRM profile, and contact details from our active databases at any time.
              </p>
              <p className="font-semibold text-gray-900">
                How to submit a deletion request:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                <li>
                  <strong>By Email:</strong> Send your request to{' '}
                  <a href={`mailto:${contactEmail}`} className="text-[#FF6B00] underline hover:text-[#e05e00] font-medium">
                    {contactEmail}
                  </a>{' '}
                  with the subject line &ldquo;Data Deletion Request&rdquo; along with your registered phone number.
                </li>
                <li>
                  <strong>Via WhatsApp:</strong> Send a message to{' '}
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] underline hover:text-[#e05e00] font-medium">
                    {contactPhone}
                  </a>{' '}
                  stating &ldquo;Please delete my account data&rdquo;.
                </li>
              </ul>
              <p className="text-gray-500 text-xs">
                Upon identity verification, your eligible records will be deleted from our active databases and CRM systems within standard operational timeframes (typically within 10–30 business days), barring records required for tax or mandatory statutory retention.
              </p>
            </div>

            {/* Section 21: International Processing */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">21</span>
                <span>International Processing</span>
              </h3>
              <p>
                {businessName} is headquartered in Pakistan, and our technical infrastructure utilizes cloud data centers operated by Meta, Google Cloud, Supabase, and Vercel across North America, Europe, and Asia. By contacting us or utilizing our digital platforms, you acknowledge that your information may be transferred to and processed in jurisdictions that may have different data privacy regulations than your home territory.
              </p>
            </div>

            {/* Section 22: Children's Privacy */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">22</span>
                <span>Children&apos;s Privacy</span>
              </h3>
              <p>
                Our enterprise POS solutions, ERP packages, and automated systems are strictly designed for businesses and adult commercial operators. We do not knowingly solicit or collect personal information from individuals under the age of 18. If we become aware that a minor has submitted personal information, we will delete that information expeditiously.
              </p>
            </div>

            {/* Section 23: Policy Updates */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">23</span>
                <span>Policy Updates</span>
              </h3>
              <p>
                We may update this Privacy Policy periodically to reflect enhancements in our software platforms, AI features, WhatsApp messaging workflows, or modifications in regulatory standards. The revised document will be published with an updated &ldquo;Last Updated&rdquo; date at the top of this page.
              </p>
            </div>

            {/* Section 24: Contact Information */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-md bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-black flex items-center justify-center">24</span>
                <span>Contact Information</span>
              </h3>
              <p>
                For questions, concerns, or requests regarding this Privacy Policy or our software data practices, please contact our team:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="flex items-center space-x-2 text-[#FF6B00]">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs font-bold text-gray-900 uppercase">Email</span>
                  </div>
                  <a href={`mailto:${contactEmail}`} className="text-xs font-medium text-gray-700 hover:text-[#FF6B00] block">
                    {contactEmail}
                  </a>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="flex items-center space-x-2 text-[#FF6B00]">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs font-bold text-gray-900 uppercase">Phone / WhatsApp</span>
                  </div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-700 hover:text-[#FF6B00] block">
                    {contactPhone}
                  </a>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                  <div className="flex items-center space-x-2 text-[#FF6B00]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold text-gray-900 uppercase">Headquarters</span>
                  </div>
                  <p className="text-xs text-gray-700">
                    {officeAddress}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
          <Link href="/" className="hover:text-[#FF6B00] font-semibold transition-colors">
            ← Return to Home
          </Link>
          <Link href="/terms" className="hover:text-[#FF6B00] font-semibold transition-colors">
            Terms of Service →
          </Link>
        </div>

      </section>

    </div>
  );
}
