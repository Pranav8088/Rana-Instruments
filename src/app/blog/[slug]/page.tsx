
import { notFound } from 'next/navigation';
import { blogPosts, type BlogPost } from '@/data/blogPosts';
import SectionTitle from '@/components/shared/SectionTitle';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, Tags } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Article Not Found | Rana Instrument Solutions',
    };
  }

  return {
    title: `${post.title} | Rana Instrument Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(), // Assuming date is in a parseable format
      images: [
        {
          url: post.image,
          width: 1200, // Adjust as needed
          height: 630,  // Adjust as needed
          alt: post.title,
        },
      ],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>

      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <SectionTitle title={post.title} as="h1" className="text-left mb-4" />
          <div className="flex flex-wrap items-center text-sm text-muted-foreground space-x-4 mb-4">
            <div className="flex items-center">
              <CalendarDays className="mr-1.5 h-4 w-4" />
              <span>Published on {post.date}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center">
                <Tags className="mr-1.5 h-4 w-4" />
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="mr-1.5 text-xs">{tag}</Badge>
                ))}
              </div>
            )}
          </div>
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg mb-6">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint={post.aiHint || "article feature"}
            />
          </div>
        </header>

        {/* This is where the actual blog post content would go. 
            It's currently set up to render simple HTML from the 'content' field.
            For more complex content, a Markdown parser (like react-markdown) would be beneficial.
        */}
        {post.content ? (
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : (
          <p>Content coming soon...</p>
        )}
      </article>

      {/* Optional: Related posts or comments section can be added here */}
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
