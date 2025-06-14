
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  aiHint?: string;
  tags?: string[];
  content?: string; // Full content for the individual blog post page
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-bore-gauge-precision',
    title: 'Understanding Bore Gauge Precision: A Deep Dive',
    date: 'October 26, 2023',
    excerpt: 'Explore the key factors that contribute to the precision of bore gauges and how to ensure accurate measurements in your applications.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'precision measurement',
    tags: ['Bore Gauges', 'Metrology', 'Precision'],
    content: '<p>Full content for understanding bore gauge precision...</p>',
  },
  {
    slug: 'choosing-right-vernier-caliper',
    title: 'Choosing the Right Vernier Caliper for Your Needs',
    date: 'November 10, 2023',
    excerpt: 'A comprehensive guide to selecting the best vernier caliper, considering material, accuracy, and specific industrial use cases.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'vernier caliper',
    tags: ['Verniers', 'Measurement Tools', 'Selection Guide'],
    content: '<p>Full content for choosing the right vernier caliper...</p>',
  },
  {
    slug: 'advancements-in-custom-instrumentation',
    title: 'Advancements in Custom Instrumentation for the Oil & Gas Industry',
    date: 'November 28, 2023',
    excerpt: 'Discover the latest innovations in custom-engineered measuring instruments designed for the demanding environments of the oil and gas sector.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'oil gas industry',
    tags: ['Custom Instruments', 'Oil & Gas', 'Innovation'],
    content: '<p>Full content for advancements in custom instrumentation...</p>',
  },
];
