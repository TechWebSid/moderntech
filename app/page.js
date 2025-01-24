import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Experience from '../components/Experience';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Modern Technologies - Premier Metal Finishing Solutions',
  description: 'Leading provider of metal finishing services including SS Passivation, Anodic Coating, and Surface Treatment. ISO certified company delivering excellence in metal processing.',
  keywords: 'metal finishing, SS passivation, anodic coating, phosphating, surface treatment, Modern Technologies, Prashant Shukla',
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
