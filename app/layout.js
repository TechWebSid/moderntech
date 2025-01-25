import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://moderntechnologies.com'),
  title: {
    default: 'Modern Technologies - Premier Metal Finishing Solutions in India',
    template: '%s | Modern Technologies'
  },
  description: 'Leading metal finishing company in India offering anodizing, phosphating, and surface treatment solutions. ISO 9001:2015 certified with state-of-the-art facilities.',
  keywords: ['metal finishing', 'anodizing', 'phosphating', 'surface treatment', 'metal coating', 'industrial finishing', 'Modern Technologies', 'India'],
  authors: [{ name: 'Modern Technologies' }],
  creator: 'Modern Technologies',
  publisher: 'Modern Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://moderntechnologies.com',
    siteName: 'Modern Technologies',
    title: 'Modern Technologies - Premier Metal Finishing Solutions',
    description: 'Leading metal finishing company offering comprehensive surface treatment solutions. ISO 9001:2015 certified excellence.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Modern Technologies Facility',
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
        <link rel="canonical" href="https://moderntechnologies.com" />
        <meta name="theme-color" content="#0B1223" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
