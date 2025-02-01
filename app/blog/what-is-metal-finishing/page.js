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
            src="/images/blog/blog1.jpg"
            alt="Metal Finishing Process"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
                What Is Metal Finishing? A Beginner's Guide
              </h1>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  March 15, 2024
                </span>
                <span className="flex items-center gap-2">
                  <FaClock />
                  5 min read
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
                Metal finishing is a crucial industrial process that enhances both the appearance and functionality 
                of metal components. This comprehensive guide will explore the fundamentals of metal finishing, 
                its importance, and common techniques used in modern manufacturing.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Understanding Metal Finishing
              </h2>
              <p className="text-gray-600 mb-6">
                Metal finishing refers to a wide range of industrial processes used to alter the surface of metal 
                parts. These processes can improve corrosion resistance, wear resistance, electrical conductivity, 
                reflectivity, appearance, and other properties crucial for various applications.
              </p>

              <div className="my-12 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <FaQuoteRight className="text-orange-500 mb-4 text-xl" />
                <p className="text-gray-700 italic">
                  "Metal finishing can increase a product's lifespan by up to 10 times while improving its 
                  aesthetic appeal and functional properties."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Key Benefits of Metal Finishing
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
                <li>Enhanced corrosion resistance</li>
                <li>Improved wear resistance and durability</li>
                <li>Better electrical conductivity or insulation</li>
                <li>Superior aesthetic appearance</li>
                <li>Increased product lifespan</li>
                <li>Better surface cleanliness</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Common Metal Finishing Processes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Anodizing</h3>
                  <p className="text-gray-600">
                    An electrochemical process that creates a durable, corrosion-resistant oxide layer 
                    on metal surfaces, particularly aluminum.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Phosphating</h3>
                  <p className="text-gray-600">
                    A conversion coating process that improves corrosion resistance and provides an 
                    excellent base for paint adhesion.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Choosing the Right Finish
              </h2>
              <p className="text-gray-600 mb-8">
                Selecting the appropriate metal finishing process depends on various factors, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
                <li>The base metal material</li>
                <li>Required performance characteristics</li>
                <li>Environmental conditions</li>
                <li>Cost considerations</li>
                <li>Production volume</li>
              </ul>

              <div className="bg-gray-100 p-6 rounded-lg mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Looking Ahead</h3>
                <p className="text-gray-600">
                  As technology advances, metal finishing continues to evolve with new processes and 
                  techniques being developed. Understanding these fundamentals is crucial for anyone 
                  involved in manufacturing or engineering.
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