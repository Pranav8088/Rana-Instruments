
import SectionTitle from '@/components/shared/SectionTitle';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Rss } from 'lucide-react';
import { blogPosts, type BlogPost } from '@/data/blogPosts'; // Assuming you'll create this
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Rana Instrument Solutions',
  description: 'Explore articles on precision measurement, industry trends, and best practices from Rana Instrument Solutions.',
};

export default function BlogPage() {
  // For now, we'll display all posts. Later, we can add filtering and pagination.
  const posts: BlogPost[] = blogPosts;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="Blog & Knowledge Base"
        subtitle="Insights on precision measurement, industry trends, and best practices."
      />

      <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:max-w-xs">
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-10"
            aria-label="Search articles"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        <Button variant="outline">
          <Rss className="mr-2 h-5 w-5" />
          Subscribe to RSS
        </Button>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl font-semibold text-foreground mb-2">No articles found.</p>
          <p className="text-muted-foreground">Check back soon for new content!</p>
        </div>
      )}

      {/* Placeholder for pagination if needed later */}
      {/* 
      <div className="mt-12 flex justify-center">
        <Button variant="outline" className="mr-2">Previous</Button>
        <Button variant="outline">Next</Button>
      </div> 
      */}
    </div>
  );
}
