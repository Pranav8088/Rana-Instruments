
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out group border border-border/70 hover:border-primary/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block focus:outline-none rounded-t-lg" tabIndex={-1}>
          <div className="relative w-full h-52 sm:h-56 bg-white overflow-hidden rounded-t-lg p-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain transform transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={product.aiHint || product.category.toLowerCase()}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-5 flex-grow flex flex-col">
        <Badge variant="outline" className="text-xs py-1 px-2.5 border-primary text-black bg-primary/10 mb-2 self-start">{product.category}</Badge>
        <CardTitle className="text-lg font-headline mb-2 text-black group-hover:text-primary transition-colors">
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
