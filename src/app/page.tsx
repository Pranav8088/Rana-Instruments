
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/shared/SectionTitle';
import {
  CheckCircle,
  Settings,
  ArrowRight,
  Package,
  Wrench,
  GitBranch,
  ChevronDown,
  Target,
  Award,
  Clock,
  Users,
  Cog,
  Factory,
  Droplet,
  Zap,
  Truck,
  Hammer,
  Star,
  Quote,
  Shield,
  Sparkles,
  HeartHandshake,
  BadgeCheck
} from 'lucide-react';
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

// Data for new sections
const clientLogos = [
  { name: 'Automotive Partner 1', initial: 'AP' },
  { name: 'Oil & Gas Corp', initial: 'OG' },
  { name: 'Heavy Industries', initial: 'HI' },
  { name: 'Power Systems', initial: 'PS' },
  { name: 'Precision Manufacturing', initial: 'PM' },
  { name: 'Engineering Works', initial: 'EW' },
  { name: 'Industrial Solutions', initial: 'IS' },
  { name: 'Tech Fabrication', initial: 'TF' },
];

// Tabbed advantages data
const advantageTabs = [
  {
    id: 'precision',
    label: 'Precision',
    icon: Target,
    heading: 'Micron-Level Precision',
    description: 'Our instruments deliver ±2μm repeatability, ensuring measurement accuracy you can trust for critical applications. Every product undergoes rigorous calibration testing.',
    points: [
      '±2μm repeatability across all measurements',
      'Carbide-tipped contact points for durability',
      'Traceable calibration certificates',
      'Temperature-compensated accuracy'
    ],
    image: '/images/advantages/precision.png'
  },
  {
    id: 'custom',
    label: 'Custom Solutions',
    icon: Settings,
    heading: 'Bespoke Engineering',
    description: 'Standard instruments don\'t solve every problem. We design and manufacture custom gauges tailored specifically to your unique measurement challenges.',
    points: [
      'Custom bore gauge configurations',
      'Application-specific probe designs',
      'Modified measuring ranges',
      'Industry-specific adaptations'
    ],
    image: '/images/advantages/custom.png'
  },
  {
    id: 'quality',
    label: 'Quality',
    icon: Award,
    heading: 'Certified Excellence',
    description: 'Every instrument undergoes rigorous testing and quality checks before delivery. Our commitment to quality has earned the trust of industry leaders.',
    points: [
      'ISO-compliant manufacturing',
      '100% inspection before shipping',
      'Documented quality procedures',
      'Material traceability'
    ],
    image: '/images/advantages/quality.png'
  },
  {
    id: 'support',
    label: 'Expert Support',
    icon: Users,
    heading: 'Dedicated Technical Team',
    description: 'Our relationship doesn\'t end at delivery. We provide consultation, calibration, and after-sales support for seamless integration and long-term operational excellence.',
    points: [
      'Pre-sales technical consultation',
      'On-site calibration services',
      'Rapid response repair service',
      'Training and documentation'
    ],
    image: '/images/advantages/support.png'
  },
];

const industries = [
  {
    icon: Factory,
    name: 'Automotive',
    description: 'Precision gauges for engine, transmission, and component manufacturing.',
    color: 'bg-emerald-500',
  },
  {
    icon: Droplet,
    name: 'Oil & Gas',
    description: 'Specialized instruments for valve bodies, pipelines, and refinery equipment.',
    color: 'bg-amber-500',
  },
  {
    icon: Cog,
    name: 'Heavy Machinery',
    description: 'Large-diameter bore gauges for industrial equipment manufacturing.',
    color: 'bg-slate-600',
  },
  {
    icon: Zap,
    name: 'Power & Utilities',
    description: 'Measurement solutions for turbines, generators, and power equipment.',
    color: 'bg-blue-500',
  },
  {
    icon: Hammer,
    name: 'Fabrication',
    description: 'Custom checking gauges for specialized fabrication requirements.',
    color: 'bg-orange-500',
  },
];

const stats = [
  { value: '15+', label: 'Years Experience', suffix: '' },
  { value: '500+', label: 'Products Delivered', suffix: '' },
  { value: '100+', label: 'Happy Clients', suffix: '' },
  { value: '5', label: 'Industries Served', suffix: '+' },
];

const testimonials = [
  {
    quote: "Rana Instruments delivered a custom bore gauge that solved our complex measurement challenge. The precision and build quality exceeded our expectations.",
    author: "Manufacturing Head",
    company: "Leading Automotive OEM",
    rating: 5,
  },
  {
    quote: "Their expertise in groove checking gauges is unmatched. The after-sales support and calibration services make them our preferred partner.",
    author: "Quality Manager",
    company: "Oil & Gas Equipment Manufacturer",
    rating: 5,
  },
  {
    quote: "Fast delivery, excellent precision, and great customer service. Rana Instruments understands the needs of the industry.",
    author: "Production Engineer",
    company: "Heavy Machinery Company",
    rating: 5,
  },
];

// Process steps for "Why Choose Us" section
const processSteps = [
  {
    step: '01',
    icon: HeartHandshake,
    title: 'Consultation',
    description: 'We understand your measurement challenges and requirements through detailed technical consultation.',
  },
  {
    step: '02',
    icon: Settings,
    title: 'Custom Design',
    description: 'Our engineers design a bespoke solution tailored to your specific application needs.',
  },
  {
    step: '03',
    icon: Cog,
    title: 'Precision Manufacturing',
    description: 'Instruments are manufactured with premium materials and rigorous quality control.',
  },
  {
    step: '04',
    icon: BadgeCheck,
    title: 'Calibration & Testing',
    description: 'Every instrument undergoes comprehensive calibration and verification testing.',
  },
  {
    step: '05',
    icon: Truck,
    title: 'Delivery & Support',
    description: 'Fast, secure delivery with ongoing technical support and calibration services.',
  },
];


export default function HomePage() {
  const categories = getAllCategories();
  const [activeTab, setActiveTab] = useState('precision');
  const activeAdvantage = advantageTabs.find(tab => tab.id === activeTab) || advantageTabs[0];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-primary-foreground py-32 md:py-60 min-h-[520px] md:min-h-[720px] flex items-center">
        <Image
          src="/page%20banner/home%20page%20banner%20-%20Copy.png"
          alt="Precision instruments showcased in Rana Instrument workshop"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" aria-hidden="true" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-right max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline mb-4 tracking-tight text-[#FF9100]">
            RANA INSTRUMENT
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-headline mb-8 text-primary-foreground/90">
            The Measure of Excellence
          </p>
          <div className="flex flex-wrap justify-end gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#0063A3] to-[#69C3FF] hover:from-[#004D7F] hover:to-[#4FA8E6] text-white font-semibold shadow-lg shadow-blue-500/30">
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#FF9100] text-white hover:bg-[#E68200] border-2 border-white/20 shadow-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos Auto-Scroller */}
      <section className="py-12 bg-white border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-center text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 w-32 h-20 bg-secondary/50 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <span className="text-2xl font-bold text-primary">{client.initial}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Story" as="h2" className="text-left mb-6" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Born from a passion for solving complex measurement challenges, Rana Instruments began its journey with a clear objective: to create custom solutions where standard instruments fall short. We started by collaborating closely with engineers on the factory floor, understanding their unique problems and crafting tools with meticulous care. This hands-on approach has grown into a legacy of trust and expertise.
              </p>
              <Button asChild variant="link" className="text-primary p-0 text-lg hover:text-accent">
                <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/page%20banner/Home%20page%20about%20us.png"
                alt="Rana Instruments Workshop"
                fill
                data-ai-hint="precision workshop"
                className="object-cover transform transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Tabbed Content Switcher */}
      <section className="py-16 md:py-24 bg-[#f4f6fb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#0063A3] uppercase tracking-wider text-sm font-semibold mb-2">Technical Advantages</p>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-foreground">Why Industry Leaders Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Precision engineering backed by decades of expertise and unwavering commitment to quality
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {advantageTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn flex items-center gap-2 ${activeTab === tab.id ? 'active' : ''}`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div key={activeTab} className="animate-fadeIn">
              <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4 text-foreground">
                {activeAdvantage.heading}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                {activeAdvantage.description}
              </p>
              <ul className="space-y-3 mb-8">
                {activeAdvantage.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0063A3] mt-0.5 shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-gradient-to-r from-[#0063A3] to-[#69C3FF] hover:from-[#004D7F] hover:to-[#4FA8E6] text-white shadow-lg shadow-blue-500/20">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right side - Image */}
            <div key={`img-${activeTab}`} className="relative h-80 md:h-[450px] rounded-xl overflow-hidden shadow-2xl animate-fadeIn">
              <Image
                src={activeAdvantage.image}
                alt={activeAdvantage.heading}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Classification Section */}
      <section className="py-16 md:py-24 bg-secondary/10 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/product-classification.png"
            alt="Engineering background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title="Product Classification" subtitle="Our Expertise in Manufacturing and Repairing Instruments" />

          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-r from-[#0063A3] to-[#69C3FF] text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-blue-500/30">
              Instruments
            </div>
          </div>

          <div className="flex justify-center items-center mb-8">
            <div className="h-12 w-px bg-[#0063A3]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center relative">
            {/* Connecting lines */}
            <div className="hidden md:block absolute top-[-3rem] left-1/4 w-1/2 h-px bg-[#0063A3]"></div>
            <div className="hidden md:block absolute top-[-3rem] left-1/4 h-12 w-px bg-[#0063A3]"></div>
            <div className="hidden md:block absolute top-[-3rem] right-1/4 h-12 w-px bg-[#0063A3]"></div>

            {/* Manufacturing Branch */}
            <div>
              <div className="inline-block bg-gradient-to-r from-[#0063A3] to-[#69C3FF] text-white font-bold py-2 px-6 rounded-full shadow-md shadow-blue-500/30 mb-8">
                Manufacturing
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(manufacturingCategories).map(([category, subcats]) => (
                    <div key={category} className="flex flex-col items-center">
                      <div className="bg-[#0063A3] text-white py-2 px-4 rounded-lg shadow-md w-full mb-4">{category}</div>
                      <div className="space-y-2 w-full">
                        {subcats.map(sub => (
                          <div key={sub} className="bg-[#FF9100] text-white py-1.5 px-3 rounded-lg shadow-sm text-sm w-full font-medium">
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
              <div className="inline-block bg-gradient-to-r from-[#0063A3] to-[#69C3FF] text-white font-bold py-2 px-6 rounded-full shadow-md shadow-blue-500/30 mb-8">
                Repairing of all types of gauges & instruments
              </div>
              {/* This section can be built out with more details if needed */}
              <div className="bg-secondary p-6 rounded-lg shadow-inner">
                <Wrench className="h-12 w-12 text-[#0063A3] mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">We provide expert repair and calibration services for a wide range of precision instruments.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#0063A3] to-[#69C3FF] hover:from-[#004D7F] hover:to-[#4FA8E6] text-white shadow-lg shadow-blue-500/30">
              <Link href="/products">
                Explore All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Industries We Serve"
            subtitle="Delivering precision measurement solutions across diverse sectors"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover-lift text-center group"
              >
                <div className={`w-16 h-16 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-headline text-lg font-semibold mb-2 text-foreground">{industry.name}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-[#69C3FF] mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-white/80 text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Process Cards with Connectors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Rana Instrument?"
            subtitle="Our proven process ensures precision and reliability at every step"
          />

          {/* Process Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card-wrapper">
                <div className="process-card">
                  {/* Watermark Number */}
                  <span className="process-watermark">{step.step}</span>

                  {/* Icon */}
                  <div className="process-icon w-14 h-14 bg-[#0063A3] rounded-lg flex items-center justify-center mb-4 transition-all duration-300">
                    <step.icon className="h-7 w-7 text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="process-title font-headline text-xl font-semibold mb-2 text-foreground transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="process-desc text-muted-foreground text-sm leading-relaxed transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Result Box */}
          <div className="result-box max-w-2xl mx-auto">
            <Sparkles className="h-10 w-10 mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-headline mb-2">Precision Delivered</h3>
            <p className="text-white/90">
              The result: Custom instruments that meet your exact specifications with ±2μm precision, backed by comprehensive documentation and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Trusted by industry professionals across the globe"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg relative hover-lift"
              >
                <Quote className="absolute top-4 right-4 h-10 w-10 text-[#0063A3]/20" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FF9100] fill-[#FF9100]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Custom Solutions */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0063A3] via-[#0077C7] to-[#69C3FF] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Settings className="h-16 w-16 mx-auto mb-6 text-[#FF9100]" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
            Need Custom Instrument Solutions?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            We specialize in custom-engineered gauges designed for high accuracy and durability. Let's discuss your unique requirements.
          </p>
          <Button asChild size="lg" className="bg-[#FF9100] hover:bg-[#E68200] text-white font-semibold shadow-xl shadow-orange-500/30">
            <Link href="/contact">
              Request a Custom Solution <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}


