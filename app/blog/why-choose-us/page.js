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
            src="/images/blog6.jpg"
            alt="Sustainable Metal Finishing"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
                Sustainable Practices in Modern Metal Finishing
              </h1>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  February 15, 2024
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
                As environmental awareness grows, the metal finishing industry is embracing sustainable 
                practices that reduce environmental impact while maintaining high-quality results. 
                Discover how modern finishing operations are becoming more eco-friendly.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Environmental Challenges in Metal Finishing
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Resource Consumption</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Water usage</li>
                    <li>Energy consumption</li>
                    <li>Raw materials</li>
                    <li>Chemical usage</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Environmental Impact</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Waste generation</li>
                    <li>Air emissions</li>
                    <li>Water pollution</li>
                    <li>Carbon footprint</li>
                  </ul>
                </div>
              </div>

              <div className="my-12 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <FaQuoteRight className="text-orange-500 mb-4 text-xl" />
                <p className="text-gray-700 italic">
                  "Sustainability in metal finishing isn't just about environmental protection – it's 
                  about creating a better future while maintaining economic viability and social responsibility."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Sustainable Solutions
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Water Conservation</h3>
                  <p className="text-gray-600 mb-4">
                    Modern approaches to water management:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Closed-loop water systems</li>
                    <li>Water treatment and recycling</li>
                    <li>Rinse water reduction</li>
                    <li>Monitoring and optimization</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Energy Efficiency</h3>
                  <p className="text-gray-600 mb-4">
                    Energy-saving initiatives:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Heat recovery systems</li>
                    <li>LED lighting upgrades</li>
                    <li>Process optimization</li>
                    <li>Equipment modernization</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Waste Reduction</h3>
                  <p className="text-gray-600 mb-4">
                    Strategies for minimizing waste:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Chemical recovery systems</li>
                    <li>Waste treatment technologies</li>
                    <li>Material recycling programs</li>
                    <li>Process optimization</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Green Technologies and Innovations
              </h2>
              <p className="text-gray-600 mb-8">
                Emerging sustainable technologies in metal finishing:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
                <li>Eco-friendly cleaning solutions</li>
                <li>Low-VOC coating systems</li>
                <li>Renewable energy integration</li>
                <li>Smart monitoring systems</li>
                <li>Zero-discharge technologies</li>
              </ul>

              <div className="bg-gray-100 p-6 rounded-lg mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">The Path Forward</h3>
                <p className="text-gray-600">
                  The future of metal finishing lies in sustainable practices that balance environmental 
                  responsibility with business success. By adopting green technologies and implementing 
                  eco-friendly processes, companies can reduce their environmental impact while maintaining 
                  high-quality standards and meeting customer expectations.
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