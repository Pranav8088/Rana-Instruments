import SectionTitle from '@/components/shared/SectionTitle';
import InquiryForm from '@/components/forms/InquiryForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, UserCircle } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle 
        title="Contact Us" 
        subtitle="We're here to help with your precision measurement needs. Reach out to us today!" 
      />

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Send Us an Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <InquiryForm />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary flex items-center">
                <MapPin className="mr-3 h-6 w-6 text-accent" /> Office Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <address className="not-italic text-muted-foreground">
                Harikrupa Banglow, Raykarmala, Dhyari Gaon, Pune - 411041, Maharashtra, India.
              </address>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary flex items-center">
                <Phone className="mr-3 h-6 w-6 text-accent" /> Phone Lines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p><a href="tel:8668483372" className="hover:text-primary">8668483372</a></p>
              <p><a href="tel:9890137769" className="hover:text-primary">9890137769</a></p>
              <p><a href="tel:8390626695" className="hover:text-primary">8390626695</a></p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary flex items-center">
                <Mail className="mr-3 h-6 w-6 text-accent" /> Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p><a href="mailto:rana.instrument1@gmail.com" className="text-muted-foreground hover:text-primary break-all">rana.instrument1@gmail.com</a></p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary flex items-center">
                <UserCircle className="mr-3 h-6 w-6 text-accent" /> Avinash Marathe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p><a href="tel:9822285191" className="text-muted-foreground hover:text-primary"><Phone className="inline mr-2 h-4 w-4" />9822285191</a></p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <Card className="overflow-hidden shadow-xl">
          <div className="relative h-72 md:h-96 w-full">
            {/* Replace with an actual map embed or a static map image if API key is an issue */}
            <Image 
              src="https://placehold.co/1200x400.png?text=Our+Location+Map" 
              alt="Map showing Rana Instrument location" 
              layout="fill"
              objectFit="cover"
              data-ai-hint="map location"
            />
          </div>
           <CardContent className="p-4 bg-muted text-center">
            <p className="text-sm text-muted-foreground">Visit us or get in touch - we look forward to hearing from you!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Contact Us | Rana Instrument Solutions',
  description: 'Get in touch with Rana Instrument Solutions for inquiries about precision measuring instruments, custom solutions, or support.',
};
