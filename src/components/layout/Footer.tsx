import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/icons/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <Logo className="h-12 w-auto text-primary group-hover:text-accent transition-colors" />
            </Link>
            <p className="text-sm">
              Rana Instrument is a premier manufacturer of precision measuring instruments.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/selection-guide" className="hover:text-primary transition-colors">Selection Guide</Link></li>
              <li><Link href="/customers" className="hover:text-primary transition-colors">Customers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4 font-headline">Contact Info</h3>
            <address className="not-italic space-y-2 text-sm">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-accent shrink-0" />
                <span>Harikrupa Banglow, Raykarmala, Dhyari Gaon, Pune - 411041</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-accent shrink-0" />
                <a href="tel:8668483372" className="hover:text-primary transition-colors">8668483372</a>
                <span className="mx-1">/</span>
                <a href="tel:9890137769" className="hover:text-primary transition-colors">9890137769</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-accent shrink-0" />
                <a href="mailto:rana.instrument1@gmail.com" className="hover:text-primary transition-colors break-all">rana.instrument1@gmail.com</a>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4 font-headline">Avinash Marathe</h3>
             <p className="flex items-center text-sm">
                <Phone className="w-5 h-5 mr-2 text-accent shrink-0" />
                <a href="tel:9822285191" className="hover:text-primary transition-colors">9822285191</a>
              </p>
          </div>

        </div>
        <div className="mt-10 pt-8 border-t border-border text-center text-sm">
          <p>&copy; {currentYear} Rana Instrument Solutions. All rights reserved.</p>
          <p className="mt-1">Designed by an Expert UX Designer.</p>
        </div>
      </div>
    </footer>
  );
}
