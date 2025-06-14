
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/data/blogPosts'; // Create this type
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out group border border-border/70 hover:border-primary/50">
      <CardHeader className="p-0">
        <Link href={`/blog/${post.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-t-lg">
          <div className="relative w-full h-52 sm:h-56 bg-muted overflow-hidden rounded-t-lg">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={post.aiHint || "technology article"}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-5 flex-grow flex flex-col">
        <div className="mb-2 flex flex-wrap gap-2">
          {post.tags?.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <CardTitle className="text-lg font-headline mb-2 text-foreground group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3 flex-grow mb-3">
          {post.excerpt}
        </p>
         <div className="flex items-center text-xs text-muted-foreground mt-auto">
          <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
          <span>{post.date}</span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors focus-visible:ring-primary">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
