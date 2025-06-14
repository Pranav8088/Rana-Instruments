import ProductCard from '@/components/products/ProductCard';
import SectionTitle from '@/components/shared/SectionTitle';
import productData, { getAllCategories } from '@/data/products';
import type { ProductCategory } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function ProductsPage() {
  const categories = getAllCategories();
  const allProducts = productData.products;

  const getCategorySlug = (categoryName: string) => {
    return categoryName.toLowerCase().replace(/\s+/g, '-');
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle 
        title="Our Product Portfolio" 
        subtitle="Discover precision-engineered measuring instruments for every need." 
      />

      <Tabs defaultValue={getCategorySlug(categories[0])} className="w-full">
        <div className="flex justify-center mb-8">
          <ScrollArea className="max-w-full whitespace-nowrap">
            <TabsList className="inline-flex h-auto p-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={getCategorySlug(category)} 
                  value={getCategorySlug(category)}
                  className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {categories.map((category) => {
          const categoryProducts = allProducts.filter(p => p.category === category);
          return (
            <TabsContent key={getCategorySlug(category)} value={getCategorySlug(category)} id={getCategorySlug(category)}>
              <section className="mb-12">
                <h3 className="text-2xl font-headline font-semibold text-primary mb-6 text-center sm:text-left">
                  {category}
                </h3>
                {categoryProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center">No products found in this category yet.</p>
                )}
              </section>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}

export const metadata = {
  title: 'Products | Rana Instrument Solutions',
  description: 'Explore our wide range of precision measuring instruments including bore gauges, verniers, probes, and custom solutions.',
};
