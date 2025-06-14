'use client';

import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductSuggestionAI from './ProductSuggestionAI';
import { CheckCircle, Settings, Info, ListChecks, SlidersHorizontal, FileText } from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
  productPortfolio: string;
}

export default function ProductDetailClient({ product, productPortfolio }: ProductDetailClientProps) {
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <Card className="overflow-hidden shadow-xl rounded-lg">
          <div className="relative w-full aspect-[4/3] bg-muted rounded-t-lg">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105 rounded-t-lg"
              data-ai-hint={product.aiHint || product.category.toLowerCase()}
              priority
            />
          </div>
        </Card>
        
        <div className="space-y-4 md:space-y-6">
          <Badge variant="outline" className="text-sm py-1 px-3 border-primary text-primary bg-primary/10">{product.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">{product.name}</h1>
          <p className="text-lg text-foreground/90">
            {product.longDescription || product.shortDescription}
          </p>

          {product.customizationOptions && (
            <Card className="bg-secondary/30 border-secondary shadow-sm rounded-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center font-headline text-primary">
                  <Settings className="mr-2.5 h-5 w-5 text-accent" /> Customization Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground">{product.customizationOptions}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {product.features && product.features.length > 0 && (
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-xl font-headline flex items-center text-primary"><ListChecks className="mr-2.5 h-6 w-6 text-accent" /> Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-foreground pl-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-sm md:text-base">{feature}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {product.specifications && Object.keys(product.specifications).length > 0 && (
         <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-xl font-headline flex items-center text-primary"><SlidersHorizontal className="mr-2.5 h-6 w-6 text-accent" /> Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="p-3 bg-muted/40 rounded-md border border-border/70">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{key}</p>
                  <p className="text-base font-semibold text-foreground mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {product.modelVariants && product.modelVariants.length > 0 && (
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-xl font-headline text-primary">Model Variants</CardTitle>
            <CardDescription className="text-muted-foreground">Available models and their specifications.</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap">Model No.</TableHead>
                  <TableHead className="whitespace-nowrap">Measuring Range</TableHead>
                  <TableHead className="whitespace-nowrap">Repeatability</TableHead>
                  {product.modelVariants.some(v => v.depthReach) && <TableHead className="whitespace-nowrap">Depth Reach</TableHead>}
                  {product.modelVariants.some(v => v.contactPoints) && <TableHead className="whitespace-nowrap">Contact Points</TableHead>}
                  <TableHead className="whitespace-nowrap">Accuracy</TableHead>
                  {product.modelVariants.some(v => v.custom) && <TableHead className="whitespace-nowrap">Custom</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {product.modelVariants.map((variant) => (
                  <TableRow key={variant.modelNo}>
                    <TableCell className="font-medium">{variant.modelNo}</TableCell>
                    <TableCell>{variant.measuringRange}</TableCell>
                    <TableCell>{variant.repeatability}</TableCell>
                    {product.modelVariants.some(v => v.depthReach) && <TableCell>{variant.depthReach || 'N/A'}</TableCell>}
                    {product.modelVariants.some(v => v.contactPoints) && <TableCell>{variant.contactPoints || 'N/A'}</TableCell>}
                    <TableCell>{variant.accuracy}</TableCell>
                    {product.modelVariants.some(v => v.custom) && <TableCell>{variant.custom || 'N/A'}</TableCell>}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
      
      {product.notes && (
         <Card className="bg-accent/10 border-accent/50 shadow-sm rounded-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center font-headline text-accent-foreground/90">
              <FileText className="mr-2.5 h-5 w-5" /> Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-accent-foreground/80">{product.notes}</p>
          </CardContent>
        </Card>
      )}

      <ProductSuggestionAI 
        productDescription={product.longDescription || product.shortDescription} 
        productPortfolio={productPortfolio}
        currentProductId={product.id}
      />
    </div>
  );
}
