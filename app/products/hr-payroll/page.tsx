import React from 'react';
import { Metadata } from 'next';
import ProductDetailLayout, { ProductDetailData } from '@/components/ProductDetailLayout';
import { 
  Briefcase, Users, HelpCircle, Shield, FileText, 
  Clock, Calendar, Award, Building2, Landmark, Fingerprint, Calculator
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automated HR, Attendance & Payroll Software | Chishty Smart Solutions',
  description: 'Unify staff scheduling and payroll routines. Integrates directly with biometric attendance machines, handles complex salary formulas, and outputs monthly PDF payslips.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/products/hr-payroll',
  },
  openGraph: {
    title: 'Automated HR, Attendance & Payroll Software | Chishty Smart Solutions',
    description: 'Unify staff scheduling and payroll routines. Integrates directly with biometric attendance machines, handles complex salary formulas, and outputs monthly PDF payslips.',
    url: 'https://chishtysmartsolutions.com/products/hr-payroll',
    siteName: 'Chishty Smart Solutions',
    images: [
      {
        url: 'https://chishtysmartsolutions.com/images/hr-payroll-og.jpg',
        width: 1200,
        height: 630,
        alt: 'HR & Automated Payroll Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated HR, Attendance & Payroll Software | Chishty Smart Solutions',
    description: 'Connect biometric check-ins with automatic salary sheets, leave matrices, and payslips.',
    images: ['https://chishtysmartsolutions.com/images/hr-payroll-og.jpg'],
  },
};

const hrData: ProductDetailData = {
  id: 'hr-payroll',
  title: 'HR & Payroll',
  headline: 'HR & Automated Payroll Suite',
  subheading: 'Power direct biometric machine linkups, configure complex salary allowance formulas, streamline leave approval trees, and distribute monthly payslips instantly.',
  problems: [
    'Widespread time-card fraud or "buddy punching" caused by unlinked manual attendance logs.',
    'Tedious manual calculations of overtime, shift allowances, and tax deductions leading to costly payroll errors.',
    'Sloppy leave management where overlapping team absences disrupt vital business operations.',
    'Unorganized employee profiles, salary sheets, and historical tax archives scattered across file folders.'
  ],
  solutionOverview: 'Our HR & Payroll Suite automates your staff operations. By linking biometric fingerprint and face-scanner logs directly to custom salary sheets, leave routers, and automated Payslips, we eliminate manual processing delay.',
  solutionBullets: [
    'Connect face-scanner or fingerprint devices to sync attendance records instantly.',
    'Configure custom salary formulas (allowances, commissions, late deductions) easily.',
    'Route employee leave requests through hierarchical manager approval channels.',
    'Generate and distribute encrypted PDF payslips in one simple, secure click.'
  ],
  features: [
    {
      title: 'Biometric Hardware Sync',
      description: 'Syncs attendance logs directly from standard ZKTeco or other biometric hardware devices over local network or cloud APIs.',
      icon: <Fingerprint className="w-6 h-6" />
    },
    {
      title: 'Custom Salary Formula Composer',
      description: 'Define specific allowance, bonus, deduction, loan repayment, tax tier, and overtime rates for individual employee tiers.',
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: 'Leave Routing & Approval Trees',
      description: 'Employees request leaves via their portal. Requests route dynamically to supervisors and HR managers with balance updates.',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: 'Complex Shift Scheduling',
      description: 'Create multi-pattern schedules (night shifts, rolling shifts, weekend rosters) with custom overtime trigger rules.',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Automated PDF Payslips',
      description: 'Calculate net salaries instantly and compile comprehensive PDF payslips showing clear breakdowns of base pay and deductions.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Employee Profiles Registry',
      description: 'Centralize emergency contact details, educational histories, physical contracts, bank accounts, and compliance documents.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Departmental Structure Trees',
      description: 'Design interactive corporate hierarchies, assign division managers, and track departmental salary budgets.',
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: 'Bank Payment Spreadsheets',
      description: 'Generate formatted banking sheets containing consolidated employee account numbers and net salaries for single-upload payouts.',
      icon: <Landmark className="w-6 h-6" />
    },
    {
      title: 'Staff Performance Matrices',
      description: 'Establish custom KPIs, set target evaluation sheets, log disciplinary events, and track staff bonus goals.',
      icon: <Award className="w-6 h-6" />
    }
  ],
  modules: [
    {
      title: 'Biometric Integration Listener',
      description: 'Constantly checks and registers clock-in and clock-out logs from your building security hardware.',
      code: 'MOD-HR-BIOMETRIC'
    },
    {
      title: 'Salary & Compensation Compiler',
      description: 'Aggregates attendance metrics, calculates overtime hours, processes tax brackets, and generates monthly payroll.',
      code: 'MOD-HR-PAYROLL'
    },
    {
      title: 'Hierarchical Leave Router',
      description: 'Coordinates leave requests, checks available holiday balances, and alerts relevant approval managers.',
      code: 'MOD-HR-LEAVES'
    },
    {
      title: 'Employee Records Vault',
      description: 'Stores confidential staff profiles, contracts, banking credentials, and career evaluation histories.',
      code: 'MOD-HR-RECORDS'
    },
    {
      title: 'Roster & Shift Planner',
      description: 'Maps out employee shifts, tracks late check-ins, and logs overtime hours automatically.',
      code: 'MOD-HR-ROSTER'
    },
    {
      title: 'Voucher & Finance Connector',
      description: 'Converts payroll summaries into balanced journal vouchers, posting them directly to the ERP ledger.',
      code: 'MOD-HR-FINLINK'
    }
  ],
  industries: [
    {
      name: 'Factories & Industrial Units',
      icon: <Users className="w-6 h-6" />,
      desc: 'Track hundreds of floor shifts, monitor late arrivals via biometric clocks, calculate overtime hours, and compile custom payrolls.'
    },
    {
      name: 'Corporate Offices',
      icon: <Building2 className="w-6 h-6" />,
      desc: 'Centralized leave tracking, formal HR document storage, department hierarchy structures, and automatic banking spreadsheet sheets.'
    },
    {
      name: 'Large Retail Networks',
      icon: <Briefcase className="w-6 h-6" />,
      desc: 'Manage store-specific shift rotations, track sales commission calculations, and process monthly salaries securely.'
    }
  ],
  benefits: [
    {
      metric: '95%',
      label: 'Reduced Payroll Hours',
      description: 'Automating calculations and biometric integrations compresses days of manual spreadsheet audits into minutes.'
    },
    {
      metric: '0%',
      label: 'Manual Salary Errors',
      description: 'Locked salary blueprints calculate taxes and deductions strictly, eliminating friction and human mistakes.'
    },
    {
      metric: 'Zero',
      label: 'Time-Card Fraud Incidents',
      description: 'Direct biometric sync prevents manual punch alterations, ensuring you pay only for active, verified working hours.'
    }
  ],
  faqs: [
    {
      question: 'How does the software handle biometric log files if the local machine drops connection?',
      answer: 'Our local biometrics listener hosts a resilient buffer queue on the local network. It safely records punch events locally and syncs them to the primary database the second connectivity resumes.'
    },
    {
      question: 'Can we define custom allowances and deduction brackets for different roles?',
      answer: 'Yes. Our salary composer allows you to configure specific salary templates. You can set fixed or percentage-based bonuses, fuel allowances, tax tiers, or loans for different job grades.'
    },
    {
      question: 'Is the leave management system compatible with custom company policies?',
      answer: 'Absolutely. You can define distinct leave types (Sick, Casual, Annual, Maternity) with custom yearly balances, carry-over rules, and determine which managers have approval permissions for specific departments.'
    }
  ],
  mockupType: 'hr'
};

export default function HRPayrollPage() {
  return <ProductDetailLayout data={hrData} />;
}
