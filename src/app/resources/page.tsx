
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, FileText } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | Rana Instrument Solutions',
  description: 'Explore whitepapers, case studies, and instructional videos on precision measurement from Rana Instrument Solutions.',
};

export default function ResourcesPage() {
  const resourceCategories = [
    { name: 'Whitepapers', icon: FileText, description: 'In-depth technical documents on measurement principles and technologies.', link: '/resources/whitepapers' },
    { name: 'Case Studies', icon: BookOpen, description: 'Real-world examples of how our instruments solve industry challenges.', link: '/resources/case-studies' },
    { name: 'Instructional Videos', icon: Video, description: 'Visual guides on product usage, calibration, and maintenance.', link: '/resources/videos' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="Resources & Knowledge Base"
        subtitle="Explore our collection of whitepapers, case studies, and instructional videos to deepen your understanding of precision measurement."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resourceCategories.map((category) => (
          <Card key={category.name} className="hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg">
            <CardHeader className="items-center text-center pt-6">
              <div className="p-3 bg-primary/10 rounded-full text-primary mb-3 inline-block">
                <category.icon className="h-10 w-10" />
              </div>
              <CardTitle className="font-headline text-xl text-primary">{category.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm mb-6 h-20">{category.description}</p>
              <Button asChild variant="outline" className="w-full">
                <Link href={category.link}>Explore {category.name}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center bg-secondary p-8 md:p-12 rounded-lg shadow">
        <h3 className="text-2xl font-headline font-semibold text-primary mb-4">
          Looking for Something Specific?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Our team is ready to assist you with any specific technical questions or guide you to the right resources.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Our Experts</Link>
        </Button>
      </div>
    </div>
  );
}
