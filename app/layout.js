import { Inter } from 'next/font/google';
import './globals.css';
import ResponsiveWrapper from '@/components/ResponsiveWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://moderntechhub.in'),
  title: {
    default: 'Modern Technologies- Best Metal Finishing Services in Faridabad, India',
    template: '%s | Modern Technologies - Metal Finishing Experts'
  },
  description: 'Modern Technologies is a Leading metal finishing company in Faridabad offering anodizing, phosphating, and surface treatment solutions.',
  keywords: [
    'metal finishing Faridabad',
    'anodizing services',
    'hard anodizing',
    'soft anodizing',
    'phosphating',
    'chemical coating',
    'electroplating',
    'surface treatment',
    'Modern Technologies',
    'metal finishing company near me',
    'industrial coating Faridabad',
    'best metal finishing services'
  ],
  authors: [{ name: 'ModernTechHub' }],
  creator: 'ModernTechHub',
  publisher: 'ModernTechHub',
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
    url: 'https://moderntechhub.in',
    siteName: 'Modern Technologies',
    title: 'Modern Technologies | Metal Finishing Solutions in Faridabad',
    description: 'Modern Technologies is Top-rated metal finishing company in Faridabad offering comprehensive surface treatment solutions including anodizing, phosphating, and electroplating. ISO 9001:2015 certified.',
    images: [
      {
        url: '/images/mt_logo.png',
        width: 1200,
        height: 630,
        alt: 'Modern technologies - Metal Finishing Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Technologies - Metal Finishing Excellence in Faridabad',
    description: 'Premier metal finishing and surface treatment solutions in Faridabad, India. Specializing in anodizing, phosphating, and electroplating.',
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
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Faridabad',
    'geo.position': '28.4089;77.3178',
    'ICBM': '28.4089, 77.3178'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href="https://moderntechhub.in" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#0B1223" />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Faridabad" />
        <meta name="geo.position" content="28.4089;77.3178" />
        <meta name="ICBM" content="28.4089, 77.3178" />
      </head>
      <body className={inter.className}>
        <ResponsiveWrapper>
          {children}
        </ResponsiveWrapper>
      </body>
    </html>
  );
}
