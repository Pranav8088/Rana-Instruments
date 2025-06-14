import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out group border border-border/70 hover:border-primary/50">
      <CardHeader className="p-0">
        <div className="relative w-full h-52 sm:h-56 bg-muted overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={product.aiHint || product.category.toLowerCase()}
          />
        </div>
      </CardHeader>
      <CardContent className="p-5 flex-grow flex flex-col">
        <p className="text-xs text-primary uppercase tracking-wider font-medium mb-1">{product.category}</p>
        <CardTitle className="text-lg font-headline mb-2 text-foreground group-hover:text-primary transition-colors">
          <Link href={`/products/${product.id}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {product.name}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3 flex-grow">
          {product.shortDescription}
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0 mt-auto">
        <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors focus-visible:ring-primary">
          <Link href={`/products/${product.id}`}>
            View Details <Eye className="ml-2 h-4 w-4 group-hover:hidden" /> <ArrowRight className="ml-2 h-4 w-4 hidden group-hover:inline-block" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
