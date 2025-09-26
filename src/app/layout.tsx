
import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: {
    default: 'Rana Instrument | The Measure of Excellence',
    template: '%s | Rana Instrument',
  },
  description: 'Rana Instruments is a premier manufacturer of custom precision measuring instruments, dedicated to providing unparalleled accuracy for the world’s most demanding industries.',
  keywords: ['precision measuring instruments', 'custom gauges', 'bore gauges', 'verniers', 'metrology', 'Rana Instrument'],
  openGraph: {
    title: 'Rana Instrument | The Measure of Excellence',
    description: 'Premier manufacturer of custom precision measuring instruments.',
    type: 'website',
    locale: 'en_US',
    url: 'https://your-website-url.com', // Replace with your actual URL
    siteName: 'Rana Instrument',
    images: [
      {
        url: 'https://your-website-url.com/og-image.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Rana Instrument',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rana Instrument | The Measure of Excellence',
    description: 'Premier manufacturer of custom precision measuring instruments.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${roboto.variable}`}><head></head>
      <body className={cn("font-body antialiased min-h-screen flex flex-col bg-background")}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
