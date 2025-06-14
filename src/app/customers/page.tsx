
import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building, Zap, Wrench, Atom, Car, Factory, Ship } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries & Clients | Rana Instrument Solutions',
  description: 'Discover the diverse industries Rana Instrument Solutions serves, including automotive, oil & gas, fabrication, and more. Read testimonials from our satisfied clients.',
};

const industriesServed = [
  { 
    name: 'Automobile', 
    icon: Car, 
    description: "Precision gauges for engine components, chassis alignment, and quality control in automotive manufacturing. Ensuring every part meets exact specifications for performance and safety." 
  },
  { 
    name: 'Oil & Gas', 
    icon: Ship, // Changed from Briefcase for better visual
    description: "Durable and reliable instruments for measuring critical components in drilling, extraction, and pipeline equipment, even in harsh environments." 
  },
  { 
    name: 'Fabrication', 
    icon: Building, 
    description: "Accurate measuring tools for metal fabrication, welding inspections, and assembly processes, guaranteeing structural integrity and precise fits." 
  },
  { 
    name: 'Power & Utility', 
    icon: Zap, 
    description: "Essential solutions for maintaining and inspecting power generation equipment, turbines, and utility infrastructure components to ensure operational efficiency." 
  },
  { 
    name: 'Machining & Tool Rooms', 
    icon: Wrench, 
    description: "High-precision instruments for machine shops, part manufacturing, tool and die making, and ensuring accuracy in every machined component." 
  },
  { 
    name: 'Aerospace', 
    icon: Atom, 
    description: "Critical measurement tools for aerospace components, engine parts, and assembly verification, meeting the stringent demands of the aerospace industry." 
  },
   { 
    name: 'General Engineering', 
    icon: Factory, 
    description: "Versatile measuring instruments applicable across various general engineering disciplines for quality assurance and process control." 
  },
];

const customerLogos = [
  { name: 'Client Alpha', src: 'https://placehold.co/150x60.png', aiHint: 'company logo' },
  { name: 'Client Beta', src: 'https://placehold.co/150x60.png', aiHint: 'tech logo' },
  { name: 'Client Gamma', src: 'https://placehold.co/150x60.png', aiHint: 'industry logo' },
  { name: 'Client Delta', src: 'https://placehold.co/150x60.png', aiHint: 'corporate logo' },
  { name: 'Client Epsilon', src: 'https://placehold.co/150x60.png', aiHint: 'manufacturing logo' },
];

const testimonials = [
  {
    quote: "Rana Instrument's custom gauges have significantly improved our production accuracy. Their team is knowledgeable and responsive, delivering solutions that perfectly fit our needs.",
    name: "R. K. Sharma",
    company: "Precision Auto Parts Ltd."
  },
  {
    quote: "The durability and precision of their bore gauges are unmatched. We rely on them for critical applications in our machining division, and they consistently perform.",
    name: "Priya Singh",
    company: "AeroTech Machining Solutions"
  },
  {
    quote: "We needed a specialized vernier for a unique measurement challenge in the oil and gas sector. Rana Instrument designed and delivered an excellent custom solution quickly.",
    name: "Anil Mehta",
    company: "Offshore Drilling Services"
  }
];

export default function CustomersPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle 
        title="Industries We Serve" 
        subtitle="Providing precision solutions across a wide range of critical sectors." 
      />

      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesServed.map((industry) => (
            <Card key={industry.name} className="text-center hover:shadow-lg transition-shadow duration-300 rounded-lg flex flex-col">
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full text-primary mb-3 inline-block">
                  <industry.icon className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="font-headline text-xl text-primary">{industry.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <SectionTitle 
        title="Trusted By Industry Leaders" 
        subtitle="We are proud to partner with a diverse range of clients who rely on our precision instruments." 
      />
      <section className="mb-16">
         <div className="bg-muted/50 p-8 md:p-12 rounded-lg shadow-inner">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16">
            {customerLogos.map((logo) => (
              <div key={logo.name} className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out">
                <Image 
                  src={logo.src} 
                  alt={`${logo.name} - Rana Instrument Client`}
                  width={140} 
                  height={55} 
                  objectFit="contain"
                  data-ai-hint={logo.aiHint} 
                />
              </div>
            ))}
          </div>
           <p className="text-center text-sm text-muted-foreground mt-8 italic">
            (Client logos are representational and showcase the breadth of industries we serve.)
          </p>
        </div>
      </section>

      <SectionTitle 
        title="What Our Clients Say" 
        subtitle="Hear directly from businesses that have benefited from our expertise and precision." 
      />
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background shadow-lg rounded-lg flex flex-col">
              <CardContent className="pt-6 flex-grow flex flex-col">
                <blockquote className="relative border-l-4 border-accent pl-6 italic text-foreground text-sm md:text-base mb-4 flex-grow">
                  <span className="absolute -left-2 top-0 text-3xl text-accent font-bold">&ldquo;</span>
                  {testimonial.quote}
                </blockquote>
                <div className="mt-auto text-right">
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
