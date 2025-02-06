import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Experience from '../components/Experience';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'

export const metadata = {
  title: 'Modern Technologies | Premier Metal Finishing Solutions in Faridabad',
  description: 'Leading provider of metal finishing services including anodizing, phosphating, and surface treatment. ISO 9001:2015 certified company in Faridabad.',
  keywords: [
    'metal finishing India',
    'metal finishing Faridabad',
    'anodizing services',
    'phosphating treatment',
    'surface treatment company',
    'industrial coating Faridabad',
    'ISO certified metal finishing',
    'Modern Technologies',
    'Moderntechhub'
  ],
  openGraph: {
    title: 'Modern Technologies - Metal Finishing Excellence',
    description: 'Modern Technologies Provides Best metal finishing solutions in Faridabad. Expert surface treatment services.',
    images: [
      {
        url: '/images/home-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Modern Technologies Home',
      },
    ],
  }
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Experience />
        <About />
      </main>
      <Link
        href="https://wa.me/919650702747" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg 
        hover:bg-green-600 transition-all transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </Link>
      <Footer />
    </>
  );
}
