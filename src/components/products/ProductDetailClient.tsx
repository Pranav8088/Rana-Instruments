'use client';

import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductSuggestionAI from './ProductSuggestionAI';
import { CheckCircle, Settings, Info } from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
  productPortfolio: string;
}

export default function ProductDetailClient({ product, productPortfolio }: ProductDetailClientProps) {
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <Card className="overflow-hidden shadow-xl">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              data-ai-hint={product.aiHint || product.category.toLowerCase()}
              priority
            />
          </div>
        </Card>
        
        <div className="space-y-6">
          <Badge variant="secondary" className="text-sm">{product.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">{product.name}</h1>
          <p className="text-lg text-muted-foreground">
            {product.longDescription || product.shortDescription}
          </p>

          {product.customizationOptions && (
            <Card className="bg-secondary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center font-headline text-primary">
                  <Settings className="mr-2 h-5 w-5" /> Customization Options
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
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-headline flex items-center"><CheckCircle className="mr-2 h-6 w-6 text-green-600" /> Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              {product.features.map((feature, index) => (
                <li key={index} className="text-sm md:text-base">{feature}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {product.specifications && Object.keys(product.specifications).length > 0 && (
         <Card>
          <CardHeader>
            <CardTitle className="text-xl font-headline flex items-center"><Info className="mr-2 h-6 w-6 text-blue-600" /> Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="p-3 bg-muted/50 rounded-md">
                  <p className="text-sm font-medium text-muted-foreground">{key}</p>
                  <p className="text-base font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {product.modelVariants && product.modelVariants.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-headline">Model Variants</CardTitle>
            <CardDescription>Available models and their specifications.</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model No.</TableHead>
                  <TableHead>Measuring Range</TableHead>
                  <TableHead>Repeatability</TableHead>
                  {product.modelVariants.some(v => v.depthReach) && <TableHead>Depth Reach</TableHead>}
                  {product.modelVariants.some(v => v.contactPoints) && <TableHead>Contact Points</TableHead>}
                  <TableHead>Accuracy</TableHead>
                  {product.modelVariants.some(v => v.custom) && <TableHead>Custom</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {product.modelVariants.map((variant) => (
                  <TableRow key={variant.modelNo}>
                    <TableCell className="font-medium">{variant.modelNo}</TableCell>
                    <TableCell>{variant.measuringRange}</TableCell>
                    <TableCell>{variant.repeatability}</TableCell>
                    {product.modelVariants.some(v => v.depthReach) && <TableCell>{variant.depthReach || '-'}</TableCell>}
                    {product.modelVariants.some(v => v.contactPoints) && <TableCell>{variant.contactPoints || '-'}</TableCell>}
                    <TableCell>{variant.accuracy}</TableCell>
                    {product.modelVariants.some(v => v.custom) && <TableCell>{variant.custom || '-'}</TableCell>}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
      
      {product.notes && (
         <Card className="bg-accent/10 border-accent">
          <CardHeader>
            <CardTitle className="text-lg flex items-center font-headline text-accent">
              <Info className="mr-2 h-5 w-5" /> Important Notes
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
