
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/icons/Logo';
import { getAllCategories } from '@/data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const productCategories = getAllCategories();
  const categoryToSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');


  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <div className="relative w-64 h-20">
                <img
                  src="/images/Rana Logo.png"
                  alt="Rana Instrument Logo"
                  className="object-contain w-full h-full brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-300">
              Rana Instrument is a premier manufacturer of precision measuring instruments.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-headline">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-slate-300 hover:text-[#69C3FF] transition-colors">All Products</Link></li>
              {productCategories.map(category => (
                <li key={category}><Link href={`/products/category/${categoryToSlug(category)}`} className="text-slate-300 hover:text-[#69C3FF] transition-colors">{category}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-headline">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-slate-300 hover:text-[#69C3FF] transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-[#69C3FF] transition-colors">Blog</Link></li>
              <li><Link href="/customers" className="text-slate-300 hover:text-[#69C3FF] transition-colors">Customers</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-[#69C3FF] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-headline">Contact Info</h3>
            <address className="not-italic space-y-2 text-sm text-slate-300">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-[#69C3FF] shrink-0" />
                <span>Harikrupa Banglow, Raykarmala, Dhyari Gaon, Pune - 411041</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#69C3FF] shrink-0" />
                <a href="tel:8668483372" className="hover:text-[#69C3FF] transition-colors">8668483372</a>
                <span className="mx-1">/</span>
                <a href="tel:9890137769" className="hover:text-[#69C3FF] transition-colors">9890137769</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#69C3FF] shrink-0" />
                <a href="mailto:rana.instrument1@gmail.com" className="hover:text-[#69C3FF] transition-colors break-all">rana.instrument1@gmail.com</a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} Rana Instrument Solutions. All rights reserved.</p>
          <p className="mt-1">Precision Instruments for Industry Excellence</p>
        </div>
      </div>
    </footer>
  );
}

