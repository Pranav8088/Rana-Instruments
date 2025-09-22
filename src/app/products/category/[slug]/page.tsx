
import { notFound } from 'next/navigation';
import productData, { getProductsByCategory, getAllCategories } from '@/data/products';
import SectionTitle from '@/components/shared/SectionTitle';
import ProductCard from '@/components/products/ProductCard';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: { slug: string };
};

// Helper to convert category name to slug and vice-versa
const categoryToSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');
const slugToCategory = (slug: string) => {
    const categoryMap: { [key: string]: string } = {
        'bore-gauges': 'Bore Gauges',
        'groove-checking-gauges': 'Groove Checking Gauges',
        'verniers': 'Verniers',
        'probes': 'Probes',
        'custom-instruments': 'Custom Instruments',
    };
    return categoryMap[slug] || null;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryName = slugToCategory(params.slug);

  if (!categoryName) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${categoryName} | Products | Rana Instrument Solutions`,
    description: `Explore our range of ${categoryName.toLowerCase()} for precision measurement.`,
  };
}

export default function ProductCategoryPage({ params }: Props) {
  const categoryName = slugToCategory(params.slug);

  if (!categoryName) {
    notFound();
  }

  const products = getProductsByCategory(categoryName as any);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8">
            <Button variant="outline" asChild>
            <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Products
            </Link>
            </Button>
        </div>

        <SectionTitle 
            title={categoryName}
            subtitle={`Precision engineered ${categoryName.toLowerCase()} for your specific needs.`}
        />

        {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        ) : (
            <div className="text-center py-10">
                <p className="text-xl font-semibold text-foreground mb-2">No products found in this category.</p>
                <p className="text-muted-foreground">Check back soon or explore our other product categories.</p>
            </div>
        )}
    </div>
  );
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: categoryToSlug(category),
  }));
}
