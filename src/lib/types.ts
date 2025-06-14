export interface ModelVariant {
  modelNo: string;
  measuringRange: string;
  repeatability: string;
  depthReach?: string;
  contactPoints?: string;
  accuracy: string;
  custom?: string; // For custom fields if any like "Depth Reach custom"
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  aiHint?: string; // For placeholder image search keyword
  shortDescription: string;
  longDescription?: string;
  features?: string[];
  specifications?: { [key: string]: string };
  modelVariants?: ModelVariant[];
  customizationOptions?: string;
  notes?: string;
}

export type ProductCategory =
  | 'Bore Gauges'
  | 'Groove Checking Gauges'
  | 'Verniers'
  | 'Probes'
  | 'Custom Instruments';

export interface ProductData {
  products: Product[];
  productPortfolioText: string;
}
