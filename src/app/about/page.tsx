import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Trophy, Users, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Rana Instrument, a premier manufacturer of precision measuring instruments, our mission, values, and commitment to quality since our inception.',
};

const whyChooseUsItems = [
    {
      icon: CheckCircle,
      title: 'Precision Engineered Solutions',
      description: 'We design and manufacture custom-built measuring instruments tailored to specific industrial applications, ensuring optimal accuracy and performance.',
    },
    {
      icon: CheckCircle,
      title: 'High Accuracy & Longevity',
      description: 'Built with advanced metrology technology and premium-grade materials, our instruments guarantee repeatable precision, wear resistance, and long-term reliability in demanding environments.',
    },
    {
      icon: CheckCircle,
      title: 'Optimized Cost-to-Performance Ratio',
      description: 'Our gauges deliver superior accuracy and durability while maintaining cost efficiency, providing high-value solutions for precision measurement needs.',
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Service Support',
      description: 'We offer consultation, calibration, and after-sales support, ensuring seamless integration, maintenance, and long-term operational excellence.',
    },
    {
      icon: CheckCircle,
      title: 'Industry-Specific Expertise',
      description: 'With extensive experience in automobile, oil & gas, fabrication, power, utility, and machining industries, we provide application-driven measurement solutions tailored to industry standards and operational requirements.',
    },
  ];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle 
        title="About Rana Instrument"
        subtitle="Quality Parts, Expert Services & Invaluable Experience"
      />

      <section className="mb-16 md:mb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="https://picsum.photos/seed/workshop/800/600"
                alt="Rana Instruments Workshop"
                layout="fill"
                objectFit="cover"
                data-ai-hint="precision workshop"
                className="transform transition-transform duration-500 hover:scale-105"
                priority 
              />
            </div>
          <div className="space-y-4 order-2 md:order-1">
             <p className="text-lg text-foreground leading-relaxed">
                Rana Instrument is a premier manufacturer of precision measuring instruments, serving the automobile, oil & gas, fabrication, power, utility, and machining industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in custom-engineered gauges designed for high accuracy, durability, and compliance with industry standards & IS 11498:1985.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to innovation and precision ensures reliable measurement solutions that enhance quality, efficiency, and performance across critical applications.
              </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary rounded-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
                title="Why Choose Rana Instrument?" 
                subtitle="Experience the Rana Instrument difference in precision and service." 
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUsItems.map((item, index) => (
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
