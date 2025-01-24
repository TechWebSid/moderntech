import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { FaIndustry, FaFlask, FaCog, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Services - Modern Technologies',
  description: 'Comprehensive metal finishing solutions including Phosphating, Anodizing, SS Passivation, and more.',
};

const mainServices = [
  {
    title: "Phosphating Line",
    description: "Advanced zinc phosphating and manganese phosphating treatments for superior corrosion resistance and paint adhesion.",
    image: "/images/service1.jpg",
    features: [
      "Zinc Phosphating",
      "Manganese Phosphating",
      "Heavy Coating",
      "Di-Coating Process"
    ]
  },
  {
    title: "Hard Anodizing Line",
    description: "Specialized hard anodizing process creating durable, wear-resistant surfaces for industrial applications.",
    image: "/images/service2.jpg",
    features: [
      "Type III Anodizing",
      "High Wear Resistance",
      "Thickness up to 100 microns",
      "Superior Hardness"
    ]
  },
  {
    title: "Soft Anodizing Line",
    description: "Decorative and protective anodizing solutions for aluminum and its alloys.",
    image: "/images/service3.jpg",
    features: [
      "Type II Anodizing",
      "Colored Anodizing",
      "Architectural Finish",
      "Decorative Applications"
    ]
  }
];

const additionalServices = [
  {
    title: "SS Passivation",
    icon: FaShieldAlt,
    description: "Chemical passivation process for stainless steel to enhance corrosion resistance.",
    features: [
      "Nitric Acid Passivation",
      "Citric Acid Passivation",
      "ASTM A967 Standards",
      "QC Documentation"
    ]
  },
  {
    title: "Chromatic Conversion Plating",
    icon: FaIndustry,
    description: "A coating process that enhances corrosion resistance and conductivity.",
    features: [
     "Chromatic Conversion",
     "Trivalent Passivation",
     "QC Documentation",
     "Quality Testing"
    ]
  },
  {
    title: "Chemical Conversion",
    icon: FaFlask,
    description: "Surface conversion treatments for various metals and alloys.",
    features: [
      "Chromate Conversion",
      "Alodine Treatment",
      "Blue/Yellow Passivation",
      "Quality Testing",
    ]
  },
  {
    title: "Anodic Coating",
    icon: FaIndustry,
    description: "A protective aluminum oxide layer formed on aluminum surfaces for enhanced durability.",
    features: [
      "Anodic Coating",
      "QC Documentation",
      "Quality Testing"
    ]
  },
  {
    title: "Trivalent Passivation",
    icon: FaShieldAlt,
    description: "A chromium-based treatment to improve corrosion resistance on metal surfaces.",
    features: [
      "Trivalent Passivation",
      "QC Documentation",
      "Quality Testing"
    ]
  },
  {
    title: "Comprehensive Phosphating Services",
    icon: FaFlask,
    description: "High-quality phosphating solutions for enhanced surface treatment and corrosion resistance.",
    features: [
      "Chromate Conversion",
      "Alodine Treatment",
      "Blue/Yellow Passivation",
      "Quality Testing",
    ]
  },
  

];

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0B1223]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1223]/90 to-[#0B1223]/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Metal Finishing Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive surface treatment solutions with state-of-the-art facilities and ISO 9001:2015 certified processes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Processing Lines</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <FaCheckCircle className="text-teal-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-teal-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Quality Assurance</h2>
            <p className="text-gray-600 mb-8">
              Our metal finishing processes adhere to international standards and specifications. 
              Each process is monitored and tested to ensure consistent quality and performance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-teal-600">100%</div>
                <div className="text-gray-600">Quality Check</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-teal-600">ISO</div>
                <div className="text-gray-600">9001:2015</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-teal-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-teal-600">6+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 