import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, Settings, CheckSquare } from 'lucide-react';
import Link from 'next/link';

export default function SelectionGuidePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle 
        title="Instrument Selection Guide" 
        subtitle="Find the perfect precision measuring instrument for your specific application." 
      />

      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-foreground mb-4">
          Navigating the world of precision instruments can be complex. Our upcoming interactive guide will help you identify the ideal tool by asking a few simple questions about your measurement needs, material, environment, and desired accuracy.
        </p>
        <p className="text-muted-foreground">
          This tool is currently under development. In the meantime, our experts are ready to assist you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="items-center text-center">
            <HelpCircle className="h-10 w-10 text-accent mb-2" />
            <CardTitle className="font-headline">Define Your Needs</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground text-center">
            Consider what you need to measure, the required precision, and the working environment.
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="items-center text-center">
            <Settings className="h-10 w-10 text-accent mb-2" />
            <CardTitle className="font-headline">Explore Options</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground text-center">
            Browse our product categories or use our current catalog to find potential matches.
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="items-center text-center">
            <CheckSquare className="h-10 w-10 text-accent mb-2" />
            <CardTitle className="font-headline">Consult Experts</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground text-center">
            If unsure, contact our team for personalized recommendations and support.
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/contact">
            Contact Our Experts
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="ml-4">
          <Link href="/products">
            Browse Products
          </Link>
        </Button>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Instrument Selection Guide | Rana Instrument Solutions',
  description: 'Find the right measuring instrument for your needs. Our guide helps you choose from bore gauges, verniers, probes, and more.',
};
