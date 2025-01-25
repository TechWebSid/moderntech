import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us | Metal Finishing Services in Faridabad',
  description: 'Get in touch with Modern Technologies for expert metal finishing solutions. Located in Faridabad, offering comprehensive surface treatment services across India.',
  keywords: ['contact metal finishing', 'surface treatment contact', 'Modern Technologies contact', 'metal finishing Faridabad', 'industrial coating contact'],
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#0B1223] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Contact Modern Technologies"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We're Here to Help with Your Metal Finishing Needs
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location */}
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Visit Us</h3>
              <p className="text-gray-600">
                Plot no.01 Shed no.01, Sarurpur Industrial Area, 
                Ballabgarh, Sohna Road, Sector 53, 
                Faridabad, Haryana - 121005
              </p>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPhone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
              <p className="text-gray-600">
                Main: +91 98765 43210
                <br />
                Support: +91 98765 43211
              </p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEnvelope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
              <p className="text-gray-600">
                info@moderntechnologies.com
                <br />
                support@moderntechnologies.com
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Working Hours</h3>
              <p className="text-gray-600">
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/918957035412" // Replace with your WhatsApp number
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
