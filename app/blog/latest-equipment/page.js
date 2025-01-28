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
            src="/images/blog5.jpg"
            alt="Quality Control in Metal Finishing"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
                Quality Control in Metal Finishing: Best Practices and Standards
              </h1>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  February 20, 2024
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
                Quality control in metal finishing is crucial for ensuring consistent, reliable, and 
                durable results. This guide explores the essential practices, standards, and testing 
                methods that guarantee excellence in metal finishing operations.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Key Quality Control Parameters
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Surface Preparation</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Cleanliness standards</li>
                    <li>Surface roughness</li>
                    <li>Pre-treatment verification</li>
                    <li>Contamination checks</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Process Control</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Temperature monitoring</li>
                    <li>Chemical concentration</li>
                    <li>Process timing</li>
                    <li>Bath maintenance</li>
                  </ul>
                </div>
              </div>

              <div className="my-12 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <FaQuoteRight className="text-orange-500 mb-4 text-xl" />
                <p className="text-gray-700 italic">
                  "Quality is never an accident; it is always the result of intelligent effort and 
                  strict attention to detail in every step of the metal finishing process."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Testing and Inspection Methods
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Visual Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    Key aspects of visual quality control:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Surface appearance</li>
                    <li>Color consistency</li>
                    <li>Coverage uniformity</li>
                    <li>Defect identification</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Physical Testing</h3>
                  <p className="text-gray-600 mb-4">
                    Essential physical tests include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Coating thickness measurement</li>
                    <li>Adhesion testing</li>
                    <li>Hardness testing</li>
                    <li>Corrosion resistance</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Documentation</h3>
                  <p className="text-gray-600 mb-4">
                    Quality control documentation requirements:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Process parameters recording</li>
                    <li>Test results documentation</li>
                    <li>Non-conformance reports</li>
                    <li>Corrective action records</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Industry Standards and Certifications
              </h2>
              <p className="text-gray-600 mb-8">
                Important standards in metal finishing:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
                <li>ISO 9001 Quality Management System</li>
                <li>ASTM Standards for Testing</li>
                <li>Military Specifications</li>
                <li>Industry-specific standards</li>
                <li>Environmental compliance standards</li>
              </ul>

              <div className="bg-gray-100 p-6 rounded-lg mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Improvement</h3>
                <p className="text-gray-600">
                  Quality control in metal finishing is an ongoing process that requires constant 
                  monitoring and improvement. By implementing robust quality control measures and 
                  staying current with industry standards, companies can ensure consistent, high-quality 
                  results that meet or exceed customer expectations.
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