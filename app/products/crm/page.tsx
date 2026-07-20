import React from 'react';
import { Metadata } from 'next';
import ProductDetailLayout, { ProductDetailData } from '@/components/ProductDetailLayout';
import { 
  Zap, Users, HelpCircle, Shield, FileText, 
  Target, Mail, MessageSquare, ListTodo, BarChart3, Clock, Kanban
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Specialized CRM & Business Automation Software | Chishty Smart Solutions',
  description: 'Convert more leads and automate your sales processes. Features clean Kanban boards, automated WhatsApp follow-ups, centralized customer timelines, and sales team trackers.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/products/crm',
  },
  openGraph: {
    title: 'Specialized CRM & Business Automation Software | Chishty Smart Solutions',
    description: 'Convert more leads and automate your sales processes. Features clean Kanban boards, automated WhatsApp follow-ups, centralized customer timelines, and sales team trackers.',
    url: 'https://chishtysmartsolutions.com/products/crm',
    siteName: 'Chishty Smart Solutions',
    images: [
      {
        url: 'https://chishtysmartsolutions.com/images/crm-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Specialized CRM System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Specialized CRM & Business Automation Software | Chishty Smart Solutions',
    description: 'Bespoke sales and WhatsApp CRM featuring Kanban pipelines and customer timelines.',
    images: ['https://chishtysmartsolutions.com/images/crm-og.jpg'],
  },
};

const crmData: ProductDetailData = {
  id: 'crm',
  title: 'CRM & Business Automation',
  headline: 'Specialized CRM & Business Automation',
  subheading: 'Power automatic multi-channel lead routing, visual Kanban pipeline deal trackers, automated WhatsApp loop campaigns, and comprehensive customer conversation timelines.',
  problems: [
    'Unassigned or lost sales leads resulting in valuable ad spends and revenue flushing away.',
    'Slow follow-up times with prospective clients allowing competitors to capture opportunities.',
    'Fragmented customer data spread across spreadsheets, personal WhatsApps, and mail inboxes.',
    'Lack of structured, chronological task management for salespeople causing missed proposals.'
  ],
  solutionOverview: 'Our B2B CRM is engineered to maximize conversion rates. By combining automated lead routing, responsive Kanban visual boards, customizable WhatsApp schedules, and unified customer profiles, we keep sales pipelines full.',
  solutionBullets: [
    'Route incoming ad-form leads to active sales representatives in under 5 seconds.',
    'Move sales opportunities across customizable visual pipelines via intuitive boards.',
    'Trigger personalized follow-up templates automatically over WhatsApp and Email.',
    'Keep complete chronological timelines of every call, email, and proposal per client.'
  ],
  features: [
    {
      title: 'Automated Lead Routing',
      description: 'Capture leads from web forms, Meta Ads, or landlines. Automatically distributes opportunities using round-robin logic or team performance weights.',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Kanban Deal Pipelines',
      description: 'Visualize your sales process. Move deals from Prospect to Won with drag-and-drop ease, managing estimated close dates and values.',
      icon: <Kanban className="w-6 h-6" />
    },
    {
      title: 'Automated WhatsApp Loop',
      description: 'Trigger automated messages on WhatsApp when a lead is captured or deals change stages. Send follow-ups, documents, or meeting invites.',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: 'Unified Customer Timeline',
      description: 'Review the chronological interaction history of each client. Logs past meetings, phone notes, sent files, and team assignments.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Email Sequence Integration',
      description: 'Connect corporate mailboxes to log client communications, trigger automated follow-up sequences, and receive read receipts.',
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: 'Sales Team Tasks Dispatcher',
      description: 'Assign follow-up tasks, calls, and face-to-face appointments. Set priority levels, due dates, and monitor team completion metrics.',
      icon: <ListTodo className="w-6 h-6" />
    },
    {
      title: 'Conversion Analytics Reports',
      description: 'Track team win ratios, pipeline cycle durations, lead acquisition sources, and forecast upcoming monthly revenues.',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Quote & Proposal Builder',
      description: 'Compile professional PDF commercial estimates and project agreements directly from client profiles in seconds.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Restricted Customer Access',
      description: 'Ensure sales safety. Limit representative access to their assigned accounts, restricting bulk data export privileges to administrators.',
      icon: <Shield className="w-6 h-6" />
    }
  ],
  modules: [
    {
      title: 'Round-Robin Lead Router',
      description: 'Injects, validates, and distributes prospects to sales representatives based on active shifts and capacity.',
      code: 'MOD-CRM-LEADS'
    },
    {
      title: 'Kanban Funnel Board',
      description: 'Renders dynamic opportunity matrices, maps custom transaction stages, and aggregates deal values.',
      code: 'MOD-CRM-PIPELINE'
    },
    {
      title: 'WhatsApp Automation Gateway',
      description: 'Links with messaging APIs to trigger custom templates, payment receipts, and follow-ups.',
      code: 'MOD-CRM-WHATSAPP'
    },
    {
      title: 'Customer Timelines Ledger',
      description: 'Compiles a complete transaction, call log, file archive, and correspondence timeline for every client.',
      code: 'MOD-CRM-TIMELINE'
    },
    {
      title: 'Email Loop Broadcaster',
      description: 'Coordinates email outreach, monitors client opens, and automates marketing campaigns.',
      code: 'MOD-CRM-EMAIL'
    },
    {
      title: 'Activity & Task Scheduler',
      description: 'Alerts sales representatives of pending calls, sets priorities, and triggers browser alerts.',
      code: 'MOD-CRM-TASKS'
    }
  ],
  industries: [
    {
      name: 'Real Estate Agencies',
      icon: <Target className="w-6 h-6" />,
      desc: 'Track property inquiries, map client requirements, schedule on-site visits, and automate follow-up lists.'
    },
    {
      name: 'B2B Corporate SaaS Providers',
      icon: <Zap className="w-6 h-6" />,
      desc: 'Visualize complex multi-month sales funnels, log email threads, and coordinate executive sales calls.'
    },
    {
      name: 'Professional Consultancy Firms',
      icon: <Users className="w-6 h-6" />,
      desc: 'Manage client intake questionnaires, compile customized proposals, and log historical advisory summaries.'
    }
  ],
  benefits: [
    {
      metric: '40%',
      label: 'Faster Lead Contact Speed',
      description: 'Instant lead capture and distribution ensure sales representatives reach prospects while interest remains peak.'
    },
    {
      metric: '28%',
      label: 'Increase in Conversion Rates',
      description: 'Automated WhatsApp follow-up schedules prevent hot leads from turning cold or falling out of the sales funnel.'
    },
    {
      metric: '100%',
      label: 'Client Data Security',
      description: 'Sales profiles are securely isolated, preventing representatives from downloading or exposing customer directories.'
    }
  ],
  faqs: [
    {
      question: 'Can the WhatsApp module connect with our official business numbers?',
      answer: 'Yes. Our CRM integrates directly with standard, verified Cloud APIs. This enables you to send highly personalized templated messages using your official brand account.'
    },
    {
      question: 'Is it possible to import client data from spreadsheet files?',
      answer: 'Absolutely. We provide clean csv/xlsx mapping tools. You can bulk-import historic lead databases, assign them to team members, and preserve past notes with ease.'
    },
    {
      question: 'Can we configure custom sales pipelines for different services?',
      answer: 'Yes. You can configure multiple independent pipelines. Each pipeline can have its own distinct sales phases, milestones, deal values, and team assignments.'
    }
  ],
  mockupType: 'crm'
};

export default function CRMPage() {
  return <ProductDetailLayout data={crmData} />;
}
