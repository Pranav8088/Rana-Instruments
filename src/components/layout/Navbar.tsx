
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Gauge } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/icons/Logo';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/selection-guide', label: 'Selection Guide' },
  { href: '/resources', label: 'Resources' },
  { href: '/customers', label: 'Customers' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Close mobile menu on path change
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!isMounted) {
    // Render a placeholder or null on the server to avoid hydration mismatch for Sheet
    return (
      <header className="bg-card shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center group" aria-label="Rana Instrument Solutions Home">
              <Gauge className="h-10 w-10 text-primary mr-2 group-hover:text-accent transition-colors" />
              <Logo className="h-10 w-auto hidden sm:block" />
              <span className="sm:hidden font-bold text-xl text-primary group-hover:text-accent transition-colors">RANA</span>
            </Link>
            <div className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Open main menu" disabled>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    ); 
  }

  const NavLinks = ({isMobile = false}: {isMobile?: boolean}) => (
    navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
        className={cn(
          'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card',
          pathname === item.href
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'text-foreground hover:bg-secondary hover:text-secondary-foreground',
          isMobile ? 'block w-full text-left text-base py-3' : 'inline-block'
        )}
        aria-current={pathname === item.href ? 'page' : undefined}
      >
        {item.label}
      </Link>
    ))
  );

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card rounded-md" aria-label="Rana Instrument Solutions Home">
            <Gauge className="h-10 w-10 text-primary mr-2 group-hover:text-accent transition-colors" />
            <Logo className="h-10 w-auto hidden sm:block" />
            <span className="sm:hidden font-bold text-xl text-primary group-hover:text-accent transition-colors">RANA</span>
          </Link>

          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            <NavLinks />
          </nav>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open main menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-card p-0">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle className="flex items-center">
                    <Link href="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
                      <Gauge className="h-8 w-8 text-primary mr-2 group-hover:text-accent transition-colors" />
                      <Logo className="h-8 w-auto" />
                    </Link>
                  </SheetTitle>
                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close main menu" className="absolute top-3 right-3">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 p-4">
                  <NavLinks isMobile={true} />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
