export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  hsCode?: string;
  subCategory?: string; // e.g. "Spices", "Dehydrated Powder", "Cereals"
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string; // name of lucide-react icon
  description: string;
  items: ProductItem[];
  subCategories?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string; // name of lucide-react icon
  description: string;
  details: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string; // name of lucide-react icon
  description: string;
  bgImage: string;
}

export interface TradeCountry {
  name: string;
  region: string;
  role: "Sourcing Desk" | "Export Destination" | "Bilateral Hub";
  volume: string;
  flag: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  logoText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Logistics" | "Warehousing" | "Inspection" | "Products";
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
