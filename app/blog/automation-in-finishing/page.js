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
            src="/images/blog4.jpg"
            alt="Automation in Metal Finishing"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
                How Automation Is Revolutionizing Metal Finishing
              </h1>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  February 28, 2024
                </span>
                <span className="flex items-center gap-2">
                  <FaClock />
                  8 min read
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
                The metal finishing industry is undergoing a dramatic transformation through automation 
                and smart technologies. From robotic systems to AI-powered quality control, these 
                innovations are reshaping how we approach surface treatment processes.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                The Rise of Automated Systems
              </h2>
              <p className="text-gray-600 mb-6">
                Modern metal finishing facilities are increasingly adopting automated solutions to improve 
                efficiency, consistency, and quality while reducing operational costs and environmental impact.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Robotic Processing</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Precise movement control</li>
                    <li>Consistent application</li>
                    <li>24/7 operation capability</li>
                    <li>Reduced human error</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Smart Controls</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Real-time monitoring</li>
                    <li>Automated adjustments</li>
                    <li>Data logging</li>
                    <li>Predictive maintenance</li>
                  </ul>
                </div>
              </div>

              <div className="my-12 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <FaQuoteRight className="text-orange-500 mb-4 text-xl" />
                <p className="text-gray-700 italic">
                  "Automation in metal finishing isn't just about replacing manual labor – it's about 
                  achieving levels of precision and consistency that were previously impossible."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                Key Benefits of Automation
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Improvements</h3>
                  <p className="text-gray-600 mb-4">
                    Automated systems deliver consistent results through:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Precise chemical control</li>
                    <li>Uniform coating application</li>
                    <li>Automated quality checks</li>
                    <li>Real-time process monitoring</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Efficiency Gains</h3>
                  <p className="text-gray-600 mb-4">
                    Automation enhances operational efficiency through:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Faster processing times</li>
                    <li>Reduced material waste</li>
                    <li>Lower labor costs</li>
                    <li>Increased throughput</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Environmental Benefits</h3>
                  <p className="text-gray-600 mb-4">
                    Automated systems help reduce environmental impact:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Optimized chemical usage</li>
                    <li>Reduced water consumption</li>
                    <li>Better waste management</li>
                    <li>Energy efficiency</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                AI and Machine Learning Integration
              </h2>
              <p className="text-gray-600 mb-8">
                Modern automation systems are becoming increasingly intelligent with AI capabilities:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-8">
                <li>Predictive quality control</li>
                <li>Process optimization algorithms</li>
                <li>Automated defect detection</li>
                <li>Smart maintenance scheduling</li>
                <li>Production planning optimization</li>
              </ul>

              <div className="bg-gray-100 p-6 rounded-lg mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">The Future of Metal Finishing</h3>
                <p className="text-gray-600">
                  As automation technology continues to advance, we can expect to see even more 
                  sophisticated systems that combine robotics, AI, and IoT capabilities to further 
                  improve metal finishing processes. Companies that embrace these innovations will be 
                  well-positioned to meet the increasing demands for quality and efficiency in the industry.
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