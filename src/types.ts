export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
  badge: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  typeBadge: string;
  clientContext: string;
  description: string;
  keyFeatures: string[];
  techUsed: string[];
  mockupType: 'mobile-app' | 'billing-dashboard' | 'ad-billing';
  playStoreUrl?: string;
  demoDetails: {
    stats: { label: string; value: string }[];
    highlightTag: string;
  };
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  deliverables: string;
  duration: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  icon: string;
  highlight: string;
}

export interface QuoteRequest {
  selectedServices: string[];
  projectType: string;
  timeline: string;
  budgetRange: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}
