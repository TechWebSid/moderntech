import { FaIndustry, FaCogs, FaShieldAlt, FaFlask, FaBolt, FaCheck, FaGem } from 'react-icons/fa';
import Link from 'next/link';
const Services = () => {
  const services = [
    {
      title: "Hard Anodizing",
      description: "Durable, wear-resistant anodized surfaces with up to 100 microns thickness.",
      icon: FaBolt,
    },
    {
      title: "Soft Anodizing",
      description: "Decorative anodizing for aluminum, ideal for architectural applications.",
      icon: FaCogs,
    },
    {
      title: "Anodic Coating",
      description: "Protective oxide layer for enhanced aluminum durability.",
      icon: FaShieldAlt,
    },
    {
      title: "Chromatic Conversion Coating",
      description: "Corrosion-resistant coating for stainless steel surfaces.",
      icon: FaFlask,
    },
    {
      title: "Trivalent Passivation",
      description: "Eco-friendly passivation for superior corrosion resistance.",
      icon: FaIndustry,
    },
    {
      title: "SS Passivation",
      description: "Advanced treatment for improved adhesion and corrosion resistance.",
      icon: FaCheck,
    },
    {
      title: "E.N.P Coating",
      description: "Electroless nickel plating for excellent metal protection.",
      icon: FaIndustry,
    },
    {
      title: "All Types Phosphating",
      description: "Corrosion-resistant coating for enhanced conductivity.",
      icon: FaCheck,
    },
    
    {
      title: "Metal Polishing",
      description: "High-quality polishing for a smooth, reflective metal finish.",
      icon: FaGem,
    },
    
  ];

  return (
    <section className="py-20 bg-[#0B1223] text-white relative">
      {/* Background overlay with reduced opacity */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492')] 
        bg-cover bg-center opacity-10"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase font-semibold">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Metal Finishing Solutions
            <br />
            <span className="text-gray-400">with precision and quality</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border border-gray-700 bg-[#0B1223]/50 backdrop-blur-sm p-8 rounded-lg
              hover:border-orange-500 transition-colors group"
            >
              {/* Icon */}
              <div className="mb-6">
                <service.icon 
                  className="w-12 h-12 text-orange-500 group-hover:text-orange-400 transition-colors"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              <Link href="/services">
                <button className="text-orange-500 hover:text-orange-400 transition-colors text-sm font-semibold">
                  READ MORE
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 