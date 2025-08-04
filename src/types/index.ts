export interface Company {
  name: string;
  description: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  employees: string;
  headquarters: string;
  founded: string;
  specialties: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Affiliate {
  count: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface NavigationItem {
  label: string;
  path: string;
}