
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Import next/font
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

// Initialize Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Ensures text remains visible during font loading
  variable: '--font-inter', // Exposes a CSS variable
});

export const metadata: Metadata = {
  title: {
    default: 'Rana Instrument Solutions',
    template: '%s | Rana Instrument Solutions',
  },
  description: 'Quality Parts, Expert Services & Invaluable Experience. Premier manufacturer of precision measuring instruments including bore gauges, verniers, probes, and custom solutions.',
  keywords: ['precision measuring instruments', 'bore gauges', 'verniers', 'probes', 'custom gauges', 'metrology', 'Rana Instrument'],
  openGraph: {
    title: 'Rana Instrument Solutions',
    description: 'Premier manufacturer of precision measuring instruments.',
    type: 'website',
    locale: 'en_US',
    url: 'https://your-website-url.com', // Replace with your actual URL
    siteName: 'Rana Instrument Solutions',
    images: [
      {
        url: 'https://your-website-url.com/og-image.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Rana Instrument Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rana Instrument Solutions',
    description: 'Premier manufacturer of precision measuring instruments.',
    // images: ['https://your-website-url.com/twitter-image.png'], // Replace with your actual Twitter image URL
    // site: '@yourTwitterHandle', // Optional: Replace with your Twitter handle
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
  // icons: { // Add favicon configuration if you have one
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}> {/* Apply font variable to HTML tag */}
      <head>
        {/* Google Font <link> tags are removed as next/font handles it */}
      </head>
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
