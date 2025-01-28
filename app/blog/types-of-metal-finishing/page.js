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
            src="/images/blog2.jpg"
            alt="Types of Metal Finishing Processes"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
                Understanding Different Types of Metal Finishing Processes
              </h1>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  March 10, 2024
                </span>
                <span className="flex items-center gap-2">
                  <FaClock />
                  7 min read
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
                The world of metal finishing encompasses a diverse range of processes, each designed to 
                achieve specific surface properties and characteristics. In this comprehensive guide, 
                we'll explore the most common types of metal finishing processes and their unique applications.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                1. Anodizing Processes
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Hard Anodizing</h3>
                <p className="text-gray-600 mb-4">
                  A specialized process that creates an extremely durable oxide layer on aluminum surfaces. 
                  The coating can be up to 100 microns thick and provides exceptional wear resistance.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Superior wear resistance</li>
                  <li>Excellent corrosion protection</li>
                  <li>Ideal for high-stress applications</li>
                  <li>Thickness range: 25-100 microns</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Soft Anodizing</h3>
                <p className="text-gray-600 mb-4">
                  A decorative and protective process that creates a thinner oxide layer, perfect for 
                  architectural and aesthetic applications.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Decorative finish options</li>
                  <li>Good corrosion resistance</li>
                  <li>Various color possibilities</li>
                  <li>Thickness range: 5-25 microns</li>
                </ul>
              </div>

              <div className="my-12 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <FaQuoteRight className="text-orange-500 mb-4 text-xl" />
                <p className="text-gray-700 italic">
                  "The choice of metal finishing process can dramatically impact both the performance and 
                  longevity of metal components, making it a crucial decision in the manufacturing process."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                2. Phosphating Treatments
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Zinc Phosphating</h3>
                  <p className="text-gray-600">
                    Creates a crystalline zinc phosphate coating that provides excellent paint adhesion 
                    and corrosion resistance. Commonly used in automotive applications.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Manganese Phosphating</h3>
                  <p className="text-gray-600">
                    Produces a heavy-duty coating ideal for parts subject to extreme pressure and wear. 
                    Perfect for gears and other mechanical components.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                3. Chemical Conversion Coatings
              </h2>
              <p className="text-gray-600 mb-8">
                Chemical conversion coatings transform the metal surface through chemical reactions, 
                creating protective layers that enhance various properties:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
                <li>Chromate conversion coating for enhanced corrosion resistance</li>
                <li>Alodine treatment for electrical conductivity</li>
                <li>Black oxide for aesthetic and mild corrosion protection</li>
                <li>Passivation for stainless steel protection</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Selecting the Right Process
              </h2>
              <div className="bg-gray-100 p-6 rounded-lg mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Considerations</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-3">
                  <li>Base material composition and properties</li>
                  <li>Required surface characteristics</li>
                  <li>Environmental exposure conditions</li>
                  <li>Cost and production volume requirements</li>
                  <li>Regulatory compliance needs</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Future Trends</h3>
                <p className="text-gray-600">
                  The metal finishing industry continues to evolve with new technologies and 
                  environmentally friendly processes. Emerging trends include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                  <li>Eco-friendly alternatives to traditional processes</li>
                  <li>Advanced automation and process control</li>
                  <li>Novel surface treatment technologies</li>
                  <li>Smart coating solutions</li>
                </ul>
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