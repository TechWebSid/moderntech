import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Modern Technologies | Metal Finishing Services in Faridabad',
  description: 'Contact the leading metal finishing company in Faridabad. Get expert consultation for anodizing, phosphating, and surface treatment solutions. Visit our facility today.',
  keywords: ['metal finishing contact', 'anodizing services Faridabad', 'surface treatment company contact', 'Modern Technologies location'],
  alternates: {
    canonical: 'https://moderntechhub.in/contact'
  }
};

// Add JSON-LD Schema for better local SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Modern Technologies',
  'image': 'https://moderntechhub.in/images/mt_logo.png',
  '@id': 'https://moderntechhub.in',
  'url': 'https://moderntechhub.in',
  'telephone': '+91-9650702747',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Plot no.01 Shed no.01, Sarurpur Industrial Area',
    'addressLocality': 'Faridabad',
    'postalCode': '121005',
    'addressRegion': 'Haryana',
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 28.4089,
    'longitude': 77.3178
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    'opens': '09:00',
    'closes': '17:00'
  },
  'sameAs': [
    'https://www.linkedin.com/company/moderntechhub',
    'https://www.facebook.com/moderntechhub'
  ]
};

export default function Contact() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>

      <main className="min-h-screen bg-gray-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-[#0B1223] flex items-center" aria-labelledby="contact-title">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpg"
              alt="Modern Technologies facility in Faridabad"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative container mx-auto px-4 text-center pt-24">
            <h1 id="contact-title" className="text-5xl md:text-7xl font-bold text-white mb-6">
              Contact Our Metal Finishing Experts
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Get Professional Consultation for Your Surface Treatment Requirements
            </p>
          </div>
        </section>

        <Breadcrumbs />

        {/* Contact Information Section */}
        <section className="py-20 bg-white" aria-labelledby="contact-info-title">
          <div className="container mx-auto px-4">
            <h2 id="contact-info-title" className="sr-only">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Location */}
              <article className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaMapMarkerAlt className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Factory Location</h3>
                <address className="text-gray-600 not-italic">
                  Plot no.01 Shed no.01, Sarurpur Industrial Area, 
                  Ballabgarh, Sohna Road, Sector 53, 
                  Faridabad, Haryana - 121005
                </address>
              </article>

              {/* Phone */}
              <article className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaPhone className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Phone Numbers</h3>
                <div className="text-gray-600">
                  <a href="tel:+919650702747" className="hover:text-blue-600 transition-colors">
                    +91 96507 02747
                  </a>
                </div>
              </article>

              {/* Email */}
              <article className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaEnvelope className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Email Address</h3>
                <div className="text-gray-600">
                  <a href="mailto:moderntechnologies.fbd12@gmail.com" className="hover:text-teal-600 transition-colors ">
                    moderntechnologies.fbd12@gmail.com
                  </a>
                </div>
              </article>

              {/* Business Hours */}
              <article className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaClock className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Working Hours</h3>
                <div className="text-gray-600">
                  <time>Monday - Saturday</time>
                  <br />
                  <time>9:00 AM - 5:00 PM</time>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/919650702747"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg 
          hover:bg-green-600 transition-all transform hover:scale-110 z-50"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" aria-hidden="true" />
        </Link>
      </main>

      <Footer />
    </>
  );
}
