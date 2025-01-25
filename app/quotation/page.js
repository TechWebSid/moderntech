"use client"
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaFileAlt, FaIndustry, FaTools, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function Quotation() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    quantity: '',
    specifications: '',
    timeline: '',
    industry: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const templateParams = {
        from_name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        quantity: formData.quantity,
        specifications: formData.specifications,
        timeline: formData.timeline,
        industry: formData.industry
      };

      await emailjs.send(
        'service_kiie2ef', // Replace with your EmailJS service ID
        'template_2x9i89j', // Replace with your EmailJS template ID
        templateParams,
        'qDsoS2uMKBXOSLoXa' // Replace with your EmailJS public key
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Thank you! We'll get back to you shortly." }
      });

      // Clear form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        quantity: '',
        specifications: '',
        timeline: '',
        industry: ''
      });

      // Reset form status after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);

    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." }
      });
    }
  };

  const features = [
    {
      icon: FaFileAlt,
      title: "Detailed Quote",
      description: "Get comprehensive pricing based on your specific requirements"
    },
    {
      icon: FaIndustry,
      title: "Custom Solutions",
      description: "Tailored metal finishing solutions for your industry"
    },
    {
      icon: FaTools,
      title: "Expert Consultation",
      description: "Technical guidance from our experienced team"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0B1223]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1223]/90 to-[#0B1223]/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a customized quote for your metal finishing requirements
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 -mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            {status.info.msg && (
              <div className={`mb-6 p-4 rounded-lg ${
                status.info.error ? 
                'bg-red-100 text-red-700' : 
                'bg-green-100 text-green-700'
              }`}>
                {status.info.msg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Industry</label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., Automotive, Aerospace, etc."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Service Required *</label>
                  <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., Phosphating, Anodizing"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Quantity *</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., 1000 pieces"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Technical Specifications *</label>
                <textarea
                  name="specifications"
                  value={formData.specifications}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Please provide detailed specifications, dimensions, and any special requirements"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Expected Timeline</label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., Within 2 weeks"
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full bg-orange-500 text-white py-4 rounded-lg font-semibold 
                transition-all transform hover:scale-105 duration-200 shadow-lg hover:shadow-orange-500/30
                ${status.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600'}`}
              >
                {status.submitting ? 
                  'Submitting...' : 
                  'Submit Quote Request'
                }
              </button>
            </form>
          </div>
        </div>
      </section>
      <Link
        href="https://wa.me/919650702747" // Replace with your WhatsApp number
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

