
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/shared/SectionTitle';
import { CheckCircle, Settings, ArrowRight, Package, Wrench, GitBranch, ChevronDown } from 'lucide-react';
import productData from '@/data/products';
import { getAllCategories } from '@/data/products';

const manufacturingCategories = {
  "Bore Gauge": ["Right Angle", "300-900", "Long", "Flat", "800-1000", "Pitch", "180*", "90*", "Custom"],
  "Groove Checking Gauges": ["Groove Diameter", "Groove Width", "C-type"],
  "Ball Verniers": ["Digital", "Dial"],
  "Probe": ["Faro probe", "Trimos Probe"]
};

const repairCategory = {
  "Repairing of all types of gauges & instruments": []
};


export default function HomePage() {
  const categories = getAllCategories();
  
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
              <SectionTitle title="Premier Manufacturer of Precision Instruments" as="h2" className="text-left mb-6" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Rana Instrument specializes in custom-engineered gauges designed for high accuracy, durability, and compliance with industry standards. Our commitment to innovation and precision ensures reliable measurement solutions that enhance quality and efficiency.
              </p>
              <Button asChild variant="link" className="text-primary p-0 text-lg hover:text-accent">
                <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
      
      {/* Product Classification Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Product Classification" subtitle="Our Expertise in Manufacturing and Repairing Instruments" />
          
          <div className="flex justify-center mb-12">
            <div className="bg-yellow-400 text-yellow-900 font-bold py-2 px-6 rounded-full shadow-lg">
              Instruments
            </div>
          </div>

          <div className="flex justify-center items-center mb-8">
              <div className="h-12 w-px bg-gray-400"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center relative">
            {/* Connecting lines */}
            <div className="hidden md:block absolute top-[-3rem] left-1/4 w-1/2 h-px bg-gray-400"></div>
            <div className="hidden md:block absolute top-[-3rem] left-1/4 h-12 w-px bg-gray-400"></div>
            <div className="hidden md:block absolute top-[-3rem] right-1/4 h-12 w-px bg-gray-400"></div>

            {/* Manufacturing Branch */}
            <div>
              <div className="inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow-md mb-8">
                Manufacturing
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(manufacturingCategories).map(([category, subcats]) => (
                    <div key={category} className="flex flex-col items-center">
                      <div className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md w-full mb-4">{category}</div>
                      <div className="space-y-2 w-full">
                        {subcats.map(sub => (
                          <div key={sub} className="bg-orange-400 text-white py-1.5 px-3 rounded-lg shadow-sm text-sm w-full">
                            {sub}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Repairing Branch */}
            <div>
              <div className="inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow-md mb-8">
                Repairing of all types of gauges & instruments
              </div>
              {/* This section can be built out with more details if needed */}
              <div className="bg-muted p-4 rounded-lg shadow-inner">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">We provide expert repair and calibration services for a wide range of precision instruments.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg">
              <Link href="/products">
                Explore All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
