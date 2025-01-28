'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaClock, FaCalendar, FaQuoteRight, FaWhatsapp } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-[#0B1223] h-20 w-full fixed top-0 z-40"></div>
      <Navbar />

      <article className="pt-32">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-[#0B1223]">
          <Image
            src="/images/blog3.jpg"
            alt="Choosing the Right Metal Finishing Process"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
                How to Choose the Right Metal Finishing Process
              </h1>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  March 5, 2024
                </span>
                <span className="flex items-center gap-2">
                  <FaClock />
                  6 min read
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blogs */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 mb-8"
            >
              <FaArrowLeft />
              Back to Blogs
            </Link>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Selecting the right metal finishing process is crucial for ensuring optimal performance and 
                longevity of your metal components. This guide will help you navigate the decision-making 
                process with confidence.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Key Factors to Consider
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Base Material</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Material composition</li>
                    <li>Surface condition</li>
                    <li>Hardness requirements</li>
                    <li>Dimensional tolerances</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Application Requirements</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Environmental exposure</li>
                    <li>Wear resistance needs</li>
                    <li>Aesthetic requirements</li>
                    <li>Expected lifespan</li>
                  </ul>
                </div>
              </div>

              <div className="my-12 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <FaQuoteRight className="text-orange-500 mb-4 text-xl" />
                <p className="text-gray-700 italic">
                  "The success of a metal finishing project often hinges on making the right choice at 
                  the beginning. Understanding your requirements is half the battle won."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Process Selection Guide
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">For Corrosion Protection</h3>
                  <p className="text-gray-600 mb-4">
                    When corrosion resistance is your primary concern, consider these options:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Zinc phosphating for ferrous metals</li>
                    <li>Anodizing for aluminum components</li>
                    <li>Passivation for stainless steel</li>
                    <li>Chemical conversion coatings</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">For Wear Resistance</h3>
                  <p className="text-gray-600 mb-4">
                    When durability and wear resistance are crucial:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Hard anodizing for aluminum</li>
                    <li>Manganese phosphating for steel</li>
                    <li>Hard chrome plating</li>
                    <li>Nickel-based coatings</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">For Aesthetic Purposes</h3>
                  <p className="text-gray-600 mb-4">
                    When appearance is a priority:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Decorative anodizing</li>
                    <li>Bright nickel plating</li>
                    <li>Powder coating</li>
                    <li>Chromate conversion coating</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Cost Considerations
              </h2>
              <p className="text-gray-600 mb-8">
                When evaluating costs, consider these factors:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
                <li>Initial process setup costs</li>
                <li>Per-unit processing costs</li>
                <li>Volume requirements</li>
                <li>Long-term maintenance needs</li>
                <li>Environmental compliance costs</li>
              </ul>

              <div className="bg-gray-100 p-6 rounded-lg mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Making the Final Decision</h3>
                <p className="text-gray-600">
                  Remember to consult with metal finishing experts who can provide valuable insights based 
                  on their experience. Consider running sample tests before committing to full production, 
                  and always factor in both immediate and long-term requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Link
        href="https://wa.me/919650702747"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg 
        hover:bg-green-600 transition-all transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </Link>

      <Footer />
    </main>
  );
} 