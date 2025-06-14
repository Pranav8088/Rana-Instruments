
import type { Metadata } from 'next';
import ProductsPageClient from '@/components/products/ProductsPageClient';

export const metadata: Metadata = {
  title: 'Products | Rana Instrument Solutions',
  description: 'Explore our wide range of precision measuring instruments including bore gauges, verniers, probes, and custom solutions. Search and filter to find the exact tool you need.',
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
