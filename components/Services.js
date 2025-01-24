import { FaIndustry, FaCogs, FaShieldAlt, FaFlask, FaBolt, FaCheck } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Phosphating",
      description: "Advanced zinc and manganese phosphating treatments providing superior corrosion resistance and excellent paint adhesion for automotive and industrial components.",
      icon: FaShieldAlt,
    },
    {
      title: "Hard Anodizing",
      description: "Specialized hard anodizing process creating durable, wear-resistant surfaces with superior hardness up to 100 microns thickness.",
      icon: FaBolt,
    },
    {
      title: "Soft Anodizing",
      description: "Decorative and protective anodizing solutions for aluminum and its alloys, perfect for architectural and aesthetic applications.",
      icon: FaCogs,
    },
    {
      title: "SS Passivation",
      description: "Chemical passivation process for stainless steel enhancing corrosion resistance and surface finish quality.",
      icon: FaFlask,
    },
    {
      title: "Electro Less Nickel",
      description: "High-quality electro less nickel plating services offering excellent corrosion protection for various metal components.",
      icon: FaIndustry,
    },
    {
      title: "Chemical Conversion",
      description: "Advanced surface conversion treatments ensuring superior adhesion and corrosion resistance for various metals.",
      icon: FaCheck,
    },
    {
      title: "Anodic Coating",
      description: "A protective aluminum oxide layer formed on aluminum surfaces for enhanced durability.",
      icon: FaIndustry,
    },
    {
      title: "Chromatic Conversion Plating",
      description: "A coating process that enhances corrosion resistance and conductivity.",
      icon: FaCheck,
    },
    {
      title: "Trivalent Passivation",
      description: "A chromium-based treatment to improve corrosion resistance on metal surfaces.",
      icon: FaShieldAlt,
    }
    
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
              <button className="text-orange-500 hover:text-orange-400 transition-colors text-sm font-semibold">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 