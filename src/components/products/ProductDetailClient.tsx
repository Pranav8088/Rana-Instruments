
'use client';

import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductSuggestionAI from './ProductSuggestionAI';
import { CheckCircle, Settings, Info, ListChecks, SlidersHorizontal, FileText, Download, Tags } from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
  productPortfolio: string;
}

export default function ProductDetailClient({ product, productPortfolio }: ProductDetailClientProps) {
  return (
    <div className="space-y-8 md:space-y-12">
      <Card className="shadow-xl rounded-lg overflow-hidden">
        <CardContent className="p-0 md:p-0">
          <div className="grid md:grid-cols-5 gap-0 md:gap-0">
            <div className="md:col-span-3 relative w-full aspect-[4/3] md:aspect-auto md:min-h-[400px] bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain" // Changed to contain to show full image
                className="p-4 md:p-8 transition-transform duration-300 hover:scale-105"
                data-ai-hint={product.aiHint || product.category.toLowerCase()}
                priority
              />
            </div>
            
            <div className="md:col-span-2 p-6 md:p-8 space-y-4 bg-background">
              <Badge variant="outline" className="text-sm py-1 px-3 border-primary text-primary bg-primary/10">{product.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">{product.name}</h1>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                {product.longDescription || product.shortDescription}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {product.customizationOptions && (
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-xl font-headline flex items-center text-primary">
              <Settings className="mr-2.5 h-6 w-6 text-accent" /> Customization Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-foreground">{product.customizationOptions}</p>
          </CardContent>
        </Card>
      )}

      {product.features && product.features.length > 0 && (
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-xl font-headline flex items-center text-primary"><ListChecks className="mr-2.5 h-6 w-6 text-accent" /> Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm md:text-base">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2.5 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {product.specifications && Object.keys(product.specifications).length > 0 && (
         <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-xl font-headline flex items-center text-primary"><SlidersHorizontal className="mr-2.5 h-6 w-6 text-accent" /> Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="p-3 bg-muted/50 rounded-md border border-border/70">
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
            <CardTitle className="text-xl font-headline flex items-center text-primary"><Tags className="mr-2.5 h-6 w-6 text-accent" /> Model Variants</CardTitle>
            <CardDescription className="text-muted-foreground">Available models and their key specifications.</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap font-semibold">Model No.</TableHead>
                  <TableHead className="whitespace-nowrap">Measuring Range</TableHead>
                  <TableHead className="whitespace-nowrap">Repeatability</TableHead>
                  {product.modelVariants.some(v => v.depthReach) && <TableHead className="whitespace-nowrap">Depth Reach</TableHead>}
                  {product.modelVariants.some(v => v.contactPoints) && <TableHead className="whitespace-nowrap">Contact Points</TableHead>}
                  <TableHead className="whitespace-nowrap">Accuracy</TableHead>
                  {product.modelVariants.some(v => v.custom) && <TableHead className="whitespace-nowrap">Custom Details</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {product.modelVariants.map((variant) => (
                  <TableRow key={variant.modelNo} className="hover:bg-muted/30">
                    <TableCell className="font-medium text-foreground">{variant.modelNo}</TableCell>
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
      
      {/* Placeholder for Downloadable Documents */}
      <Card className="shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-headline flex items-center text-primary"><Download className="mr-2.5 h-6 w-6 text-accent" /> Technical Documents</CardTitle>
          <CardDescription className="text-muted-foreground">Download calibration certificates and technical datasheets.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground italic">
            Links to downloadable documents (e.g., calibration certificates, technical datasheets) will be available here soon. Please contact us if you need specific documents immediately.
          </p>
          {/* Example of how links might look:
          <ul className="space-y-2 mt-4">
            <li><a href="#" className="text-primary hover:underline flex items-center"><FileText className="mr-2 h-4 w-4" /> Datasheet - {product.name}.pdf</a></li>
            <li><a href="#" className="text-primary hover:underline flex items-center"><FileText className="mr-2 h-4 w-4" /> Calibration Guide - {product.name}.pdf</a></li>
          </ul>
          */}
        </CardContent>
      </Card>

      {product.notes && (
         <Card className="bg-accent/10 border-accent/60 shadow-md rounded-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center font-headline text-accent">
              <Info className="mr-2.5 h-5 w-5" /> Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-accent-foreground/90">{product.notes}</p>
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
