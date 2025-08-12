import { Company, Service, ContactInfo } from '../types';

export const COMPANY_INFO: Company = {
  name: 'Adsfizz Digital',
  description: 'Leading global Affiliate Marketing Network delivering performance-driven results across Web & Mobile platforms',
  email: 'ops@adsfizz.com',
  phone: '+91 7761006623',
  website: 'https://www.adsfizz.com/',
  industry: 'Advertising Services',
  employees: '10-50',
  headquarters: '10A, sector-28, Mg-road, Gurugram, Haryana, 122002',
  founded: '2025',
  specialties: [
    'Performance Marketing',
    'Programmatic',
    'iGaming',
    'Gaming',
    'Mobile Marketing',
    'Affiliate Management',
    'Lead Generation',
    'App Install Campaigns',
    'Display Advertising',
    'Native Advertising',
    'Video Marketing',
    'Email Marketing',
    'Social Media Marketing',
    'SEO',
    'SEM',
    'Content Marketing',
    'Influencer Marketing',
    'Retargeting',
    'Conversion Optimization',
    'Analytics & Reporting',
    'Brand Awareness',
    'Traffic Monetization',
    'E-commerce Solutions',
    'B2B Marketing',
    'B2C Marketing'
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'cpl',
    title: 'Cost Per Lead (CPL)',
    description: 'Generate high-quality leads with our verified CPL campaigns',
    icon: 'PersonAdd',
    features: ['Verified Lead Quality', 'Real-time Tracking', 'Custom Targeting', 'Performance Optimization']
  },
  {
    id: 'cpa',
    title: 'Cost Per Action (CPA)',
    description: 'Drive specific actions with our performance-focused CPA model',
    icon: 'TrendingUp',
    features: ['Action-based Pricing', 'ROI Optimization', 'Multi-platform Support', 'Advanced Analytics']
  },
  {
    id: 'cpr',
    title: 'Cost Per Registration (CPR)',
    description: 'Maximize user registrations with targeted CPR campaigns',
    icon: 'HowToReg',
    features: ['Registration Tracking', 'User Verification', 'Quality Assurance', 'Conversion Optimization']
  },
  {
    id: 'cpi',
    title: 'Cost Per Install (CPI)',
    description: 'Boost app installations with our mobile-focused CPI solutions',
    icon: 'GetApp',
    features: ['App Store Optimization', 'Install Tracking', 'User Acquisition', 'Mobile Analytics']
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: 'ops@adsfizz.com',
  phone: '+91 7761006623',
  address: '10A, sector-28, Mg-road, Gurugram, Haryana, 122002'
};

export const AFFILIATE_COUNT = '200+';