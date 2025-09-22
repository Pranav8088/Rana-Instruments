
'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/products/ProductCard';
import SectionTitle from '@/components/shared/SectionTitle';
import productData from '@/data/products';
import { getAllCategories } from '@/data/products';
import type { ProductCategory } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, PackageSearch, XCircle } from 'lucide-react';

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

  const displayedCategories = useMemo(() => {
    const allCategories = getAllCategories();
    if (!searchTerm.trim()) return allCategories;

    const uniqueCategoriesInFilter = new Set(filteredProducts.map(p => p.category as ProductCategory));
    // Return in the order defined in getAllCategories, but only those present in filtered results
    return allCategories.filter(cat => uniqueCategoriesInFilter.has(cat));
  }, [filteredProducts, searchTerm]);

  const getCategorySlug = (categoryName: string) => {
    return categoryName.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle 
        title="Our Product Portfolio" 
        subtitle="Discover precision-engineered measuring instruments for every need." 
      />

      <Card className="mb-8 md:mb-12 shadow-lg rounded-lg bg-card sticky top-20 z-40">
        <CardContent className="p-4 sm:p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder="Search products by name, category, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 py-3 text-base h-12 rounded-md border-border focus:border-primary"
              aria-label="Search products"
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

      {filteredProducts.length === 0 && searchTerm && (
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
      )}

      {filteredProducts.length > 0 && displayedCategories.length > 0 && (
        <Tabs defaultValue={getCategorySlug(displayedCategories[0])} className="w-full">
          <div className="flex justify-center mb-8 sticky top-[calc(theme(spacing.20)_+_theme(spacing.12)_+_1rem)] md:top-[calc(theme(spacing.20)_+_theme(spacing.12)_-_0.5rem)] z-30 bg-background/80 backdrop-blur-sm py-2 -mx-4 px-4">
             <ScrollArea className="max-w-full whitespace-nowrap rounded-md border border-border shadow-sm">
              <TabsList className="inline-flex h-auto p-1 bg-muted/60">
                {displayedCategories.map((category) => (
                  <TabsTrigger 
                    key={getCategorySlug(category)} 
                    value={getCategorySlug(category)}
                    className="text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-md"
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
            if (categoryProducts.length === 0 && searchTerm) return null; // Don't render empty categories if searching
            return (
              <TabsContent key={getCategorySlug(category)} value={getCategorySlug(category)} id={getCategorySlug(category)} className="focus-visible:ring-0 focus-visible:ring-offset-0">
                <section className="mb-12">
                  <h3 className="text-2xl font-headline font-semibold text-primary mb-6 text-center sm:text-left scroll-mt-28" id={getCategorySlug(category)+'-heading'}>
                    {category}
                  </h3>
                  {categoryProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                      {categoryProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  ) : (
                     <p className="text-muted-foreground text-center py-8">No products in this category match your search.</p>
                  )}
                </section>
              </TabsContent>
            );
          })}
        </Tabs>
      )}
    </div>
  );
}
