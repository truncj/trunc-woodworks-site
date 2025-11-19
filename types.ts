export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'furniture' | 'decor' | 'restoration';
  additionalImages?: string[];
  priority?: number;
}

export interface TikTokVideo {
  id: string;
  embedUrl: string; // Ideally the video ID or full embed code structure
  description: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  basePrice: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export enum NavRoute {
  HOME = '/',
  PORTFOLIO = '/portfolio',
  CATALOG = '/catalog',
  CONTACT = '/contact'
}