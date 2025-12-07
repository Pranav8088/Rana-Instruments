
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/icons/Logo';
import { getAllCategories } from '@/data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const productCategories = getAllCategories();
  const categoryToSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');


  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <Logo className="h-12 w-auto text-white group-hover:text-blue-400 transition-colors" />
            </Link>
            <p className="text-sm text-gray-300">
              Rana Instrument is a premier manufacturer of precision measuring instruments.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-headline">Products</h3>
            <ul className="space-y-2 text-sm">
                <li><Link href="/products" className="text-gray-300 hover:text-blue-400 transition-colors">All Products</Link></li>
                {productCategories.map(category => (
                    <li key={category}><Link href={`/products/category/${categoryToSlug(category)}`} className="text-gray-300 hover:text-blue-400 transition-colors">{category}</Link></li>
                ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-headline">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/customers" className="text-gray-300 hover:text-blue-400 transition-colors">Customers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-headline">Contact Info</h3>
            <address className="not-italic space-y-2 text-sm text-gray-300">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-blue-400 shrink-0" />
                <span>Harikrupa Banglow, Raykarmala, Dhyari Gaon, Pune - 411041</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400 shrink-0" />
                <a href="tel:8668483372" className="hover:text-blue-400 transition-colors">8668483372</a>
                <span className="mx-1">/</span>
                <a href="tel:9890137769" className="hover:text-blue-400 transition-colors">9890137769</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400 shrink-0" />
                <a href="mailto:rana.instrument1@gmail.com" className="hover:text-blue-400 transition-colors break-all">rana.instrument1@gmail.com</a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Rana Instrument Solutions. All rights reserved.</p>
          <p className="mt-1">Designed by an Expert UX Designer.</p>
        </div>
      </div>
    </footer>
  );
}
