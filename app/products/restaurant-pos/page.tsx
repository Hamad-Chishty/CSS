import React from 'react';
import { Metadata } from 'next';
import ProductDetailLayout, { ProductDetailData } from '@/components/ProductDetailLayout';
import { 
  UtensilsCrossed, MonitorPlay, QrCode, Layers, HelpCircle, 
  MapPin, Users, Heart, Shield, Landmark, BookOpen, Clock, Settings, FileSpreadsheet
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Multi-Terminal Restaurant & Cafe POS Software | Chishty Smart Solutions',
  description: 'Streamline your restaurant with tableside QR ordering, real-time Kitchen Display Systems (KDS), split billing, recipe-inventory tracking, and multi-branch control.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/products/restaurant-pos',
  },
  openGraph: {
    title: 'Multi-Terminal Restaurant & Cafe POS Software | Chishty Smart Solutions',
    description: 'Streamline your restaurant with tableside QR ordering, real-time Kitchen Display Systems (KDS), split billing, recipe-inventory tracking, and multi-branch control.',
    url: 'https://chishtysmartsolutions.com/products/restaurant-pos',
    siteName: 'Chishty Smart Solutions',
    images: [
      {
        url: 'https://chishtysmartsolutions.com/images/restaurant-pos-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Restaurant & Cafe POS Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Terminal Restaurant & Cafe POS Software | Chishty Smart Solutions',
    description: 'Bespoke restaurant software featuring QR table ordering, KDS monitors, and split billing.',
    images: ['https://chishtysmartsolutions.com/images/restaurant-pos-og.jpg'],
  },
};

const restaurantData: ProductDetailData = {
  id: 'restaurant-pos',
  title: 'Restaurant & Cafe POS Suite',
  headline: 'Multi-Terminal Restaurant & Cafe POS',
  subheading: 'Power tableside QR scanning, instant Kitchen Display feeds, split billing, and detailed recipe inventory control in one lightning-fast platform.',
  problems: [
    'Order miscommunication between servers and busy kitchen staff leading to costly food waste.',
    'Slow tableside ordering and traditional billing bottlenecks that degrade guest satisfaction.',
    'Untracked food ingredient loss and recipe spoilage due to lack of batch-cost accounting.',
    'Inability to track multi-branch sales, menu performance, and staff shifts in real-time.'
  ],
  solutionOverview: 'Our Restaurant POS is engineered for ultra-high concurrency. By integrating tableside digital ordering, kitchen screens, live table mapping, and recipe tracking, we eliminate order delays entirely.',
  solutionBullets: [
    'Synchronize servers with kitchen chefs in real-time under 0.5s.',
    'Cut checkout queue overheads with automatic bill splits & QR payouts.',
    'Safeguard raw ingredient inventories with automated recipe deduction.',
    'Track multi-branch restaurant KPIs via a single, centralized owner dashboard.'
  ],
  features: [
    {
      title: 'Contactless QR Ordering',
      description: 'Guests scan tableside QR codes to view the digital menu, place orders directly to KDS, and pay instantly without server assistance.',
      icon: <QrCode className="w-6 h-6" />
    },
    {
      title: 'Kitchen Display System (KDS)',
      description: 'Ditch paper tickets. Displays active orders on wall-mounted screens sorted by age, alert thresholds, and food station categories.',
      icon: <MonitorPlay className="w-6 h-6" />
    },
    {
      title: 'Interactive Table Management',
      description: 'Dynamic visual editor to map floor areas, join or split tables, check occupied durations, and optimize physical seating layouts.',
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: 'Frictionless Split Billing',
      description: 'Divide customer bills equally, by individual seating covers, or by selected items in seconds. Processes cash, card, and digital wallets.',
      icon: <Landmark className="w-6 h-6" />
    },
    {
      title: 'Recipe & Ingredient Control',
      description: 'Link menu items to exact ingredients (e.g., 150g beef, 1x bun). Automatically deducts stock from inventory on every billing cycle.',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: 'Multi-Branch Synchronization',
      description: 'Manage menus, prices, discounts, and raw material shipments across multiple outlets from one master administrator panel.',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Takeaway & Home Delivery',
      description: 'Manage distinct workflows for quick counter orders, telephone delivery dispatch, and third-party food platform drivers.',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: 'Table Bookings & Reservations',
      description: 'Keep a comprehensive reservation calendar. Send SMS reminders to guests and prevent costly double-bookings during holidays.',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Customer Loyalty & Rewards',
      description: 'Reward frequent diners with automated cashback points, custom discounts, birthday promotions, and stored cash value cards.',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Chronological Staff Attendance',
      description: 'Biometric shift logins. Monitor which servers handle specific table sales to distribute tip splits and analyze productivity.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Live Operational Reports',
      description: 'Extract instant reports on high-margin food items, chef preparation durations, customer trends, and daily gross-to-net revenues.',
      icon: <FileSpreadsheet className="w-6 h-6" />
    },
    {
      title: 'Role-Based Cashier Security',
      description: 'Restricts void bills, refunds, and cash drawer openings to authorized manager-level passcodes to prevent internal revenue leaks.',
      icon: <Shield className="w-6 h-6" />
    }
  ],
  modules: [
    {
      title: 'Floor Mapping Engine',
      description: 'Configure multi-floor layouts, seating arrangements, and live reservation maps.',
      code: 'MOD-FLOOR-01'
    },
    {
      title: 'Kitchen Dispatch Hub',
      description: 'Sends real-time prep tickets to designated chefs, tracking item-level durations.',
      code: 'MOD-KDS-02'
    },
    {
      title: 'QR Dining Portal',
      description: 'Lightweight client-side menu interface with zero-app-install requirement.',
      code: 'MOD-QR-03'
    },
    {
      title: 'Recipe Ledger Matrix',
      description: 'Deducts sub-gram raw food inventory in real-time and warns of low-stock ingredients.',
      code: 'MOD-RECIPE-04'
    },
    {
      title: 'Split Accounting Terminal',
      description: 'Handles high-frequency complex invoices, discount coupon audits, and tax setups.',
      code: 'MOD-SPLIT-05'
    },
    {
      title: 'Branch Ledger Synchronizer',
      description: 'Syncs localized menu configurations and branch logs to the master database securely.',
      code: 'MOD-SYNC-06'
    }
  ],
  industries: [
    {
      name: 'Fine Dining Restaurants',
      icon: <UtensilsCrossed className="w-6 h-6" />,
      desc: 'Table mapping, multi-course sequences, tableside order terminals, and complex checkout splits.'
    },
    {
      name: 'Premium Cafes & Bistros',
      icon: <Clock className="w-6 h-6" />,
      desc: 'High-speed counter billing, receipt printing, customer profile tracking, and barcode coffee bag scans.'
    },
    {
      name: 'Quick Service (QSR) & Food Courts',
      icon: <MonitorPlay className="w-6 h-6" />,
      desc: 'Digital queue numbers, kitchen display screens, automated voucher redemptions, and rapid POS checkout.'
    }
  ],
  benefits: [
    {
      metric: '35%',
      label: 'Faster Table Turns',
      description: 'Eliminating manual order hand-offs and streamlining bill splits accelerates guest seating cycles.'
    },
    {
      metric: '99.8%',
      label: 'Kitchen Order Accuracy',
      description: 'Wall-mounted KDS monitors completely replace paper slips, removing misread or lost instructions.'
    },
    {
      metric: '15%',
      label: 'Lower Ingredient Waste',
      description: 'Strict ingredient-level recipe tracking forces consistency and identifies inventory leaks instantly.'
    }
  ],
  faqs: [
    {
      question: 'How does KDS communicate with server terminals if the local Wi-Fi drops?',
      answer: 'Our systems host a localized network server on-premise. Even if external ISP internet goes down, server devices can communicate with KDS screens and billing printers flawlessly over the local network.'
    },
    {
      question: 'Can we manage separate menus for takeaway and third-party delivery apps?',
      answer: 'Yes. The system allows you to define unlimited menu variations with distinct pricing models, taxes, and service charges for Dine-In, Takeaway, and external delivery platforms.'
    },
    {
      question: 'Does the software support split-billing across multiple payment modes?',
      answer: 'Absolutely. A single order can be split into multiple bills, with each bill paid using a different payment method (e.g., one client pays cash, another via Visa card, and another using mobile wallets).'
    }
  ],
  mockupType: 'restaurant'
};

export default function RestaurantPOSPage() {
  return <ProductDetailLayout data={restaurantData} />;
}
