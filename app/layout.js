import { Inter } from 'next/font/google';
import './globals.css';
import ResponsiveWrapper from '@/components/ResponsiveWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://modernhubtech.in'),
  title: {
    default: 'Modern Technologies - Premier Metal Finishing Solutions in India',
    template: '%s | Modern Technologies'
  },
  description: 'Leading metal finishing company in India offering anodizing, phosphating, and surface treatment solutions. ISO 9001:2015 certified with state-of-the-art facilities.',
  keywords: ['metal finishing', 'anodizing', 'phosphating', 'surface treatment', 'metal coating', 'industrial finishing', 'Modern Technologies', 'India'],
  authors: [{ name: 'Modern Technologies' }],
  creator: 'Modern Technologies',
  publisher: 'Modern Technologies',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    shortcut: ['/favicon.png'],
    apple: [
      { url: '/favicon.png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon.png',
      },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://modernhubtech.in', 
    siteName: 'Modern Technologies',
    title: 'Modern Technologies - Premier Metal Finishing Solutions',
    description: 'Leading metal finishing company offering comprehensive surface treatment solutions. ISO 9001:2015 certified excellence.',
    images: [
      {
        url: '/images/mt_logo.png',
        width: 1200,
        height: 630,
        alt: 'Modern Technologies Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Technologies - Metal Finishing Excellence',
    description: 'Premier metal finishing and surface treatment solutions in India',
    images: ['/images/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="canonical" href="https://modernhubtech.in" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#0B1223" />
      </head>
      <body className={inter.className}>
        <ResponsiveWrapper>
          {children}
        </ResponsiveWrapper>
      </body>
    </html>
  );
}
