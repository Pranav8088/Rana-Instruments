import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building, Zap, Wrench, Atom, Car } from 'lucide-react';

const industriesServed = [
  { name: 'Automobile', icon: Car, description: "Precision gauges for automotive manufacturing and quality control." },
  { name: 'Oil & Gas', icon: Briefcase, description: "Durable instruments for harsh environments in the oil and gas sector." },
  { name: 'Fabrication', icon: Building, description: "Accurate measuring tools for metal fabrication and assembly." },
  { name: 'Power & Utility', icon: Zap, description: "Reliable solutions for power generation and utility infrastructure." },
  { name: 'Machining', icon: Wrench, description: "High-precision instruments for machine shops and part manufacturing." },
  { name: 'Aerospace', icon: Atom, description: "Critical measurement tools for aerospace components and systems." },
];

const customerLogos = [
  { name: 'Client Alpha', src: 'https://placehold.co/150x60.png?text=Client+Alpha', aiHint: 'company logo' },
  { name: 'Client Beta', src: 'https://placehold.co/150x60.png?text=Client+Beta', aiHint: 'tech logo' },
  { name: 'Client Gamma', src: 'https://placehold.co/150x60.png?text=Client+Gamma', aiHint: 'industry logo' },
  { name: 'Client Delta', src: 'https://placehold.co/150x60.png?text=Client+Delta', aiHint: 'corporate logo' },
];

const testimonials = [
  {
    quote: "Rana Instrument's custom gauges have significantly improved our production accuracy. Their team is knowledgeable and responsive.",
    name: "John Doe",
    company: "Manufacturing Inc."
  },
  {
    quote: "The durability and precision of their bore gauges are unmatched. Highly recommended for critical applications.",
    name: "Jane Smith",
    company: "Tech Solutions Ltd."
  }
];

export default function CustomersPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle 
        title="Customers We Serve" 
        subtitle="Providing precision solutions across a wide range of critical industries." 
      />

      <section className="mb-16">
        <h3 className="text-2xl font-headline font-semibold text-primary mb-8 text-center">Our Industry Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesServed.map((industry) => (
            <Card key={industry.name} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <industry.icon className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">{industry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-headline font-semibold text-primary mb-8 text-center">Trusted By Leading Companies</h3>
         <div className="bg-muted p-8 rounded-lg">
          <p className="text-center text-foreground italic mb-6">
            We are proud to partner with a diverse range of clients. (Client logos are representational)
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {customerLogos.map((logo) => (
              <div key={logo.name} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  width={150} 
                  height={60} 
                  objectFit="contain"
                  data-ai-hint={logo.aiHint} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-headline font-semibold text-primary mb-8 text-center">What Our Clients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background shadow-lg">
              <CardContent className="pt-6">
                <blockquote className="border-l-4 border-accent pl-4 italic text-foreground">
                  {testimonial.quote}
                </blockquote>
                <p className="mt-4 text-right font-semibold text-primary">- {testimonial.name}</p>
                <p className="text-right text-sm text-muted-foreground">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Our Customers | Rana Instrument Solutions',
  description: 'Learn about the industries we serve and the clients who trust Rana Instrument Solutions for their precision measurement needs.',
};
