
import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Trophy, Users, Target, Lightbulb, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Rana Instrument, a premier manufacturer of precision measuring instruments, our mission, values, and commitment to quality since our inception.',
};

const brandValues = [
  {
    icon: Target,
    title: 'Precision',
    description: 'An uncompromising commitment to accuracy in everything we do.',
  },
  {
    icon: Settings,
    title: 'Customization',
    description: 'Tailoring every solution to meet the unique needs of our clients.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'Upholding ethical standards and transparency to build lasting trust.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Working collaboratively with our clients to achieve shared goals and success.',
  },
  {
    icon: Trophy,
    title: 'Durability',
    description: 'Engineering instruments that are built to last and perform reliably in demanding environments.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously improving our technology and processes to meet the challenges of tomorrow.',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        title="About Rana Instrument"
        subtitle="The Measure of Excellence"
      />

      <section className="mb-16 md:mb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
            <Image
              src="/images/banners/about.png"
              alt="Rana Instruments Workshop"
              fill
              data-ai-hint="precision workshop"
              className="object-cover transform transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-black">Our Mission</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Our mission is to design, manufacture, and deliver superior, custom-built measuring instruments that solve the unique challenges of our clients. We are committed to upholding the highest standards of engineering, leveraging advanced technology, and providing comprehensive support. Through collaborative partnerships and a relentless focus on precision, we strive to ensure our clients' success while advancing the science of metrology.
            </p>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-black pt-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our vision is to be the world's most trusted partner for custom-engineered measuring instruments, setting the global benchmark for accuracy, innovation, and reliability. We aim to empower industries with precision tools that enhance quality, drive efficiency, and build a future where every measurement is a guarantee of excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary rounded-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Brand Values"
            subtitle="The principles that guide our commitment to excellence."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandValues.map((item, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <item.icon className="h-7 w-7 text-accent mr-3" />
                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
