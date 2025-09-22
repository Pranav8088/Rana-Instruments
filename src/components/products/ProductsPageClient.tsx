
'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/products/ProductCard';
import SectionTitle from '@/components/shared/SectionTitle';
import productData from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, PackageSearch, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function ProductsPageClient() {
  const allProducts = productData.products;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return allProducts;
    const lowerSearchTerm = searchTerm.toLowerCase();
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(lowerSearchTerm) ||
      product.category.toLowerCase().includes(lowerSearchTerm) ||
      product.shortDescription.toLowerCase().includes(lowerSearchTerm) ||
      (product.longDescription && product.longDescription.toLowerCase().includes(lowerSearchTerm))
    );
  }, [allProducts, searchTerm]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle 
        title="Our Product Portfolio" 
        subtitle="Discover precision-engineered measuring instruments for every need. Browse all products below or select a category from the navigation menu." 
      />

      <Card className="mb-8 md:mb-12 shadow-lg rounded-lg bg-card sticky top-20 z-40">
        <CardContent className="p-4 sm:p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder="Search all products by name, category, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 py-3 text-base h-12 rounded-md border-border focus:border-primary"
              aria-label="Search all products"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <XCircle className="h-5 w-5" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-10 md:py-16">
          <PackageSearch className="mx-auto h-20 w-20 text-primary/70 mb-6" />
          <p className="text-2xl font-semibold text-foreground mb-3">No products found</p>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            We couldn't find any products matching "{searchTerm}". Try a different search term or clear the search to browse all products.
          </p>
          <Button onClick={() => setSearchTerm('')} variant="outline" size="lg">
            Clear Search & View All Products
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
