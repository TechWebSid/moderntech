import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Experience from '../components/Experience';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Modern Technologies | Premier Metal Finishing Solutions in India',
  description: 'Leading provider of metal finishing services including anodizing, phosphating, and surface treatment. ISO 9001:2015 certified company in Faridabad.',
  keywords: [
    'metal finishing India',
    'anodizing services',
    'phosphating treatment',
    'surface treatment company',
    'industrial coating Faridabad',
    'ISO certified metal finishing',
    'Modern Technologies'
  ],
  openGraph: {
    title: 'Modern Technologies - Metal Finishing Excellence',
    description: 'Premier metal finishing solutions provider in India. Expert surface treatment services with state-of-the-art facilities.',
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
      <Footer />
    </>
  );
}
