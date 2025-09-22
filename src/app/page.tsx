
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/shared/SectionTitle';
import { CheckCircle2, Settings, ArrowRight, Package } from 'lucide-react';
import productData from '@/data/products';
import { getAllCategories } from '@/data/products';

const whyChooseUsItems = [
  {
    title: 'Precision Engineered Solutions',
    description: 'We design and manufacture custom-built measuring instruments tailored to specific industrial applications, ensuring optimal accuracy and performance.',
  },
  {
    title: 'High Accuracy & Longevity',
    description: 'Built with advanced metrology technology and premium-grade materials, our instruments guarantee repeatable precision, wear resistance, and long-term reliability in demanding environments.',
  },
  {
    title: 'Optimized Cost-to-Performance Ratio',
    description: 'Our gauges deliver superior accuracy and durability while maintaining cost efficiency, providing high-value solutions for precision measurement needs.',
  },
  {
    title: 'Comprehensive Service Support',
    description: 'We offer consultation, calibration, and after-sales support, ensuring seamless integration, maintenance, and long-term operational excellence.',
  },
  {
    title: 'Industry-Specific Expertise',
    description: 'With extensive experience in automobile, oil & gas, fabrication, power, utility, and machining industries, we provide application-driven measurement solutions tailored to industry standards and operational requirements.',
  },
];

const productCategoriesPreview = getAllCategories().slice(0, 4);


export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline mb-6 tracking-tight">
            RANA INSTRUMENT
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-headline mb-4">
            Custom Instrument Solutions
          </p>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
            Quality Parts, Expert Services & Invaluable Experience. Premier manufacturer of precision measuring instruments.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="About Rana Instrument" as="h2" className="text-left mb-6" />
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Rana Instrument is a premier manufacturer of precision measuring instruments, serving the automobile, oil & gas, fabrication, power, utility, and machining industries.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We specialize in custom-engineered gauges designed for high accuracy, durability, and compliance with industry standards & IS 11498:1985.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to innovation and precision ensures reliable measurement solutions that enhance quality, efficiency, and performance across critical applications.
              </p>
              <Button asChild variant="link" className="text-primary p-0 mt-6 hover:text-accent">
                <Link href="/contact">Learn More About Our Custom Solutions <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
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
          </div>
        </div>
      </section>
      
      {/* Product Categories Preview */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Product Classification" subtitle="Explore our diverse range of precision instruments." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategoriesPreview.map((category) => (
              <Card key={category} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="p-3 bg-primary/10 rounded-full text-primary mb-3">
                     <Package className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-xl text-center">{category}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4">
                    High-quality {category.toLowerCase()} for various industrial applications.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/products#${category.toLowerCase().replace(/\s+/g, '-')}`}>
                      View {category} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Why Choose Rana Instrument?" subtitle="Experience the Rana Instrument difference in precision and service." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <CheckCircle2 className="h-7 w-7 text-accent mr-3" />
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

      {/* Call to Action - Custom Solutions */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Settings className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
            Need Custom Instrument Solutions?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            We specialize in custom-engineered gauges designed for high accuracy and durability. Let's discuss your unique requirements.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">
              Request a Custom Solution <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
