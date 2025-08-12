export interface WebService {
  id: number;
  icon: React.ReactElement | string;
  title: string;
  description: string;
  tag?: string;
}

export interface Project {
  id: number;
  title:string;
  category: 'Perorangan' | 'UMKM' | 'Enterprise';
  imageUrl: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  handle?: string;
  role: string;
  imageUrl: string;
}

export interface ServicePackage {
  name:string;
  price: string;
  description?: string;
  features: string[];
  isFavorite?: boolean;
}

export interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content
  imageUrl: string;
  category: string;
  tags: string[];
  author: string;
  publishedDate: string; // ISO 8601 format date string
}
