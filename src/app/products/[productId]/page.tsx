import { notFound } from 'next/navigation';
import productData, { getProductById } from '@/data/products';
import ProductDetailClient from '@/components/products/ProductDetailClient';
import SectionTitle from '@/components/shared/SectionTitle';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { productId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = getProductById(params.productId);

  if (!product) {
    return {
      title: 'Product Not Found | Rana Instrument Solutions',
    }
  }

  return {
    title: `${product.name} | Rana Instrument Solutions`,
    description: product.shortDescription,
    openGraph: {
        images: [product.image],
    },
  }
}

export default function ProductDetailPage({ params }: Props) {
  const { productId } = params;
  const product = getProductById(productId);
  const productPortfolio = productData.productPortfolioText;

  if (!product) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
        </Button>
      </div>
      <ProductDetailClient product={product} productPortfolio={productPortfolio} />
    </div>
  );
}

export async function generateStaticParams() {
  return productData.products.map((product) => ({
    productId: product.id,
  }));
}
