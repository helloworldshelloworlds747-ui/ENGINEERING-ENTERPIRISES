export type ProductCategory = 
  | 'all'
  | 'evaporative-cooling'
  | 'fire-fighting'
  | 'hvac'
  | 'electrical-panels'
  | 'mechanical-plumbing';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  tagline: string;
  description: string;
  standard?: string; // e.g. "NFPA 291", "ISO 9001", "UL/FM Approved"
  keySpecs: string[];
  features: string[];
  applications: string[];
  imageUrl: string;
  badge?: string;
  savingsOrRating?: string;
}

export interface Achievement {
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  rating: number;
  location?: string;
}

export interface Client {
  name: string;
  category: string;
  logoText?: string;
  color?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuingBody: string;
  certNumber?: string;
  validity?: string;
  category?: string;
  scope: string;
  summary: string;
}

export interface SectorCaseStudy {
  id: string;
  clientName: string;
  projectTitle: string;
  location: string;
  completedYear: string;
  scope: string;
  capacityOrArea: string;
  temperatureDrop: string;
  energySavingsPercentage: string;
  financialRoi?: string;
  imageUrl: string;
  summary: string;
  highlights: string[];
}

export interface SectorArticle {
  id: string;
  title: string;
  readTime: string;
  summary: string;
  author: string;
  publishDate: string;
  imageUrl: string;
  keyTakeaways: string[];
  sections: {
    heading?: string;
    paragraph: string;
    keyPoint?: string;
  }[];
}

export interface SectorGalleryImage {
  url: string;
  caption: string;
  tag: string;
}

export interface SectorEquipment {
  name: string;
  spec: string;
  role: string;
}

export interface IndustryApplication {
  id: string;
  title: string;
  tagline: string;
  benefits: string[];
  recommendedSolution: string;
  imageUrl: string;
  overview?: string;
  challenge?: string;
  engineeringSolution?: string;
  keyMetrics?: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  caseStudies?: SectorCaseStudy[];
  articles?: SectorArticle[];
  galleryImages?: SectorGalleryImage[];
  systemEquipment?: SectorEquipment[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  source?: 'gemini' | 'knowledge-base';
}

export interface OfficeLocation {
  city: string;
  type: string;
  address: string;
  phones: string[];
  fax?: string;
  email: string;
  mapQuery?: string;
}

export type ArticleCategory = 'all' | 'energy-saving' | 'hvac-maintenance' | 'company-news';

export interface ArticleSection {
  heading?: string;
  paragraph: string;
  bullets?: string[];
  callout?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'energy-saving' | 'hvac-maintenance' | 'company-news';
  categoryLabel: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  summary: string;
  seoKeywords: string[];
  keyTakeaways: string[];
  sections: ArticleSection[];
  imageUrl: string;
  historicClippingUrl?: string;
  featured?: boolean;
  relatedProductId?: string;
  relatedCategoryName?: string;
}
