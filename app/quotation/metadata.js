export const metadata = {
  title: 'Get a Quote | Metal Finishing Services Quote',
  description: 'Request a detailed quote for metal finishing services. Competitive pricing for phosphating, anodizing, and surface treatment solutions.',
  keywords: ['metal finishing quote', 'surface treatment cost', 'anodizing services price', 'metal coating quote', 'industrial finishing estimate'],
  openGraph: {
    title: 'Request a Quote - Modern Technologies',
    description: 'Get detailed pricing for your metal finishing requirements. Fast and professional quote service.',
    images: [
      {
        url: '/images/quote-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Request Metal Finishing Quote',
      },
    ],
  }
}; 

export default function QuotationLayout({ children }) {
    return <>{children}</>;
  }