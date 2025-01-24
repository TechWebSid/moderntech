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
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-black"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-orange-500 uppercase font-semibold">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-black">
                Leading Experts in
                <br />
                Anodizing & Surface Treatment
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              We specialize in delivering high-quality metal finishing
              solutions, including anodizing and advanced surface treatment
              plating, ensuring durability, precision, and excellence for every
              project.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Fitted out with a fur hat and fur boa",
                "It showed a lady fitted out with a fur hat and fur boa who sat",
                "Samsa was a travelling salesman and above it there hung a picture that",
                "Muff that covered the whole of her",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2"></div>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                MORE ABOUT US
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px]">
            <Image
              src="/images/hero.jpg"
              alt="Modern Industry Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
