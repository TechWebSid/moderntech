import Image from "next/image";

const Features = () => {
  const features = [
    {
      id: "01",
      title: "Quality Materials",
      description:
        "We ensure the highest quality materials for all our metal finishing processes, delivering superior results.",
      icon: "📦",
    },
    {
      id: "02",
      title: "Expert Team",
      description:
        "Our skilled professionals bring years of experience in advanced metal finishing techniques.",
      icon: "👥",
    },
    {
      id: "03",
      title: "Timely Delivery",
      description:
        "We commit to precise timelines and ensure on-time delivery for all projects.",
      icon: "🚚",
    },
    {
      id: "04",
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to address all your queries and requirements.",
      icon: "👨‍💼",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      {/* Features Grid */}
      <div className="container mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-orange-500 font-semibold">
                  {feature.id}.
                </span>
                <h3 className="font-bold text-lg">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="px-4 lg:px-0">
            <div className="mb-6">
              <span className="text-orange-500 uppercase font-semibold text-sm md:text-base">
                ABOUT US
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-4 text-black">
                Leading Experts in
                <br className="hidden md:block" />
                Anodizing & Surface Treatment
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              We specialize in delivering high-quality metal finishing solutions,
              including anodizing and advanced surface treatment plating, ensuring
              durability, precision, and excellence for every project.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "ISO 9001:2015 Certified Company",
                "State-of-the-art Manufacturing Facility",
                "Expert Technical Team",
                "Comprehensive Quality Testing",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <button className="w-full sm:w-auto bg-orange-500 text-white px-6 py-3 rounded-lg 
                hover:bg-orange-600 transition-colors text-base font-semibold whitespace-nowrap">
                MORE ABOUT US
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square">
            <Image
              src="/images/herobg2.jpg"
              alt="Modern Industry Illustration"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
