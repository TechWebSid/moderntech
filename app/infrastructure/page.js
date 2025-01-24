import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  FaIndustry, FaFlask, FaCog, FaTools, FaChartLine, FaCheckCircle, 
  FaLeaf, FaShieldAlt, FaRecycle, FaUserShield, FaMicroscope, FaWarehouse 
} from 'react-icons/fa';

export const metadata = {
  title: 'Infrastructure - Modern Technologies',
  description: 'State-of-the-art metal finishing facilities and equipment at Modern Technologies.',
};

const processingLines = [
  {
    title: "Phosphating Line",
    capacity: "1000 pieces/day",
    specs: [
      "Tank Capacity: 2000L",
      "Temperature Control: 0-100°C",
      "Automated Process Control",
      "Multiple Stage Treatment"
    ],
    image: "/images/service1.jpg"
  },
  {
    title: "Anodizing Line",
    capacity: "800 pieces/day",
    specs: [
      "Hard & Soft Anodizing",
      "Precise Current Control",
      "Multiple Color Options",
      "Thickness: 5-100 microns"
    ],
    image: "/images/service2.jpg"
  },
  {
    title: "Passivation Line",
    capacity: "1200 pieces/day",
    specs: [
      "SS Passivation",
      "Chemical Treatment",
      "Quality Testing",
      "Process Monitoring"
    ],
    image: "/images/service3.jpg"
  }
];

const testingEquipment = [
  {
    name: "Salt Spray Chamber",
    purpose: "Corrosion resistance testing",
    specs: "ASTM B117 Standards"
  },
  {
    name: "Coating Thickness Gauge",
    purpose: "Surface coating measurement",
    specs: "Accuracy ±1%"
  },
  {
    name: "Hardness Tester",
    purpose: "Material hardness testing",
    specs: "Multiple scales (HRA, HRB, HRC)"
  },
  {
    name: "Digital Microscope",
    purpose: "Surface inspection",
    specs: "500x magnification"
  }
];

const facilitySections = [
  {
    title: "Manufacturing Units",
    description: "State-of-the-art production lines with automated controls",
    image: "/images/service1.jpg",
    features: ["Automated Process Control", "Real-time Monitoring", "Quality Checks"]
  },
  {
    title: "Quality Control Lab",
    description: "Advanced testing facilities for precise measurements",
    image: "/images/service2.jpg",
    features: ["Spectrometry Analysis", "Thickness Testing", "Material Testing"]
  },
  {
    title: "Storage & Logistics",
    description: "Organized storage with efficient material handling",
    image: "/images/service3.jpg",
    features: ["Inventory Management", "Safe Storage", "Quick Retrieval"]
  }
];

const sustainabilityFeatures = [
  {
    icon: FaRecycle,
    title: "Waste Management",
    description: "Advanced wastewater treatment and recycling systems"
  },
  {
    icon: FaLeaf,
    title: "Energy Efficiency",
    description: "Energy-efficient equipment and processes"
  },
  {
    icon: FaShieldAlt,
    title: "Environmental Compliance",
    description: "Adherence to environmental regulations"
  }
];

export default function Infrastructure() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section - Enhanced */}
      <section className="relative h-[80vh] bg-[#0B1223] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1223]/90 to-[#0B1223]/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              World-Class Metal Finishing Facilities
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Where Precision Meets Innovation
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section - New */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Infrastructure at a Glance</h2>
            <p className="text-lg text-gray-600 mb-12">
              Our state-of-the-art facilities are equipped with cutting-edge technology and automated 
              processes to ensure precision and quality in every metal finishing project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <FaCog className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold">Cutting-edge Machinery</h3>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <FaIndustry className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold">Automated Processes</h3>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <FaMicroscope className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold">Quality Labs</h3>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <FaLeaf className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold">Eco-friendly Operations</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Showcase - Enhanced */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Facilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {facilitySections.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <FaCheckCircle className="text-teal-500 flex-shrink-0" />
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

      {/* Testing Laboratory */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Testing Laboratory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testingEquipment.map((equipment, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <FaFlask className="w-12 h-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{equipment.name}</h3>
                  <p className="text-gray-600 mb-2">{equipment.purpose}</p>
                  <div className="text-sm text-teal-600 font-semibold">{equipment.specs}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Quality Control</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <FaCog className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Process Control</h3>
                <p className="text-gray-600">Automated monitoring and control systems for consistent quality</p>
              </div>
              <div className="text-center p-6">
                <FaTools className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Maintenance</h3>
                <p className="text-gray-600">Regular preventive maintenance to ensure optimal performance</p>
              </div>
              <div className="text-center p-6">
                <FaChartLine className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Data Analysis</h3>
                <p className="text-gray-600">Continuous monitoring and analysis of process parameters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Facility Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Plant Layout</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                    <span className="text-gray-600">10,000 sq. ft. production area</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                    <span className="text-gray-600">Dedicated storage facilities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                    <span className="text-gray-600">Modern testing laboratory</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                    <span className="text-gray-600">Efficient material handling system</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Safety Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                    <span className="text-gray-600">Fire safety equipment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                    <span className="text-gray-600">Emergency response system</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                    <span className="text-gray-600">Personal protective equipment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                    <span className="text-gray-600">Environmental protection measures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section - New */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Sustainability and Responsibility
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sustainabilityFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <feature.icon className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - New */}
      <section className="py-20 bg-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Excellence</h2>
          <p className="text-xl mb-8">
            Contact us to learn more about our facilities or schedule a visit today!
          </p>
          <button className="bg-white text-teal-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
} 