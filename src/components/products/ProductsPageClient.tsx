
'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/products/ProductCard';
import SectionTitle from '@/components/shared/SectionTitle';
import productData from '@/data/products';
import type { ProductCategory } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, PackageSearch } from 'lucide-react';

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
      (product.longDescription && product.longDescription.toLowerCase().includes(lowerSearchTerm)) ||
      (product.productPortfolioText && product.productPortfolioText.toLowerCase().includes(lowerSearchTerm))
    );
  }, [allProducts, searchTerm]);

  const displayedCategories = useMemo(() => {
    const uniqueCategories = new Set(filteredProducts.map(p => p.category as ProductCategory));
    return Array.from(uniqueCategories);
  }, [filteredProducts]);

  const getCategorySlug = (categoryName: string) => {
    return categoryName.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle 
        title="Our Product Portfolio" 
        subtitle="Discover precision-engineered measuring instruments for every need." 
      />

      <Card className="mb-8 md:mb-12 shadow-md rounded-lg">
        <CardContent className="p-4 sm:p-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products by name, category, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-base h-12 rounded-md"
              aria-label="Search products"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      {filteredProducts.length === 0 && searchTerm && (
        <div className="text-center py-10">
          <PackageSearch className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <p className="text-xl font-semibold text-foreground mb-2">No products found matching "{searchTerm}"</p>
          <p className="text-muted-foreground">Try a different search term or clear the search to browse all products.</p>
          <Button onClick={() => setSearchTerm('')} variant="outline" className="mt-6">
            Clear Search
          </Button>
        </div>
      )}

      {filteredProducts.length > 0 && displayedCategories.length > 0 && (
        <Tabs defaultValue={getCategorySlug(displayedCategories[0])} className="w-full">
          <div className="flex justify-center mb-8">
            <ScrollArea className="max-w-full whitespace-nowrap rounded-md border">
              <TabsList className="inline-flex h-auto p-1 bg-muted/50">
                {displayedCategories.map((category) => (
                  <TabsTrigger 
                    key={getCategorySlug(category)} 
                    value={getCategorySlug(category)}
                    className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-md"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          {displayedCategories.map((category) => {
            const categoryProducts = filteredProducts.filter(p => p.category === category);
            if (categoryProducts.length === 0) return null; 
            return (
              <TabsContent key={getCategorySlug(category)} value={getCategorySlug(category)} id={getCategorySlug(category)}>
                <section className="mb-12">
                  <h3 className="text-2xl font-headline font-semibold text-primary mb-6 text-center sm:text-left">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              </TabsContent>
            );
          })}
        </Tabs>
      )}
    </div>
  );
}
