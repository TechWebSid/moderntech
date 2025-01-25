import Image from 'next/image';
import { GiMetalBar, GiSteelClaws, GiChemicalDrop, GiMaterialsScience } from 'react-icons/gi';

const Experience = () => {
  const stats = [
    { name: 'CUSTOMER SATISFACTION', percentage: 98 },
    { name: 'ON-TIME DELIVERY', percentage: 95 },
    { name: 'QUALITY ASSURANCE', percentage: 97 },
    { name: 'ECO-FRIENDLY PRACTICES', percentage: 90 },
  ];
  

  const team = [
    {
      name: 'Daniel Jan',
      role: 'Mechanical Engineering',
      icon: GiMetalBar,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      name: 'Jonathan bill',
      role: 'Site Manager',
      icon: GiSteelClaws,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      name: 'Gordon Simad',
      role: 'Testing Specialist',
      icon: GiChemicalDrop,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      name: 'Mike Dave',
      role: 'Chief Officer',
      icon: GiMaterialsScience,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Experience Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Content */}
          <div>
            <span className="text-orange-500 uppercase font-semibold">OUR EXPERTISE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-black">
              We have 6+ years of experience,<br />
              <span className="text-gray-500">in this industry</span>
            </h2>
            <p className="text-gray-600 mb-8">
  Our state-of-the-art facility is equipped with advanced machinery and cutting-edge technology to deliver precision metal finishing solutions. From electroplating to powder coating, we ensure every product meets the highest quality standards, providing durability and a flawless finish for various industries.
</p>


            {/* Progress Bars */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1 text-black">
                    <span className="font-semibold">{stat.name}</span>
                    <span className="text-orange-500">{stat.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-orange-500 rounded-full transition-all duration-500"
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px]">
            <Image
              src="/images/industry2.jpg"
              alt="Industrial facility"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="text-center mb-16">
          <span className="text-orange-500 uppercase font-semibold">MEMBERS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-500">
            Our Dedicated Team<br />
            <span className="text-gray-500">For your service</span>
          </h2>
        </div> */}

        {/* Team Grid with Icons */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className={`mx-auto w-32 h-32 rounded-full ${member.bgColor} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <member.icon className={`w-16 h-16 ${member.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-orange-500">{member.role}</p>
            </div>
          ))}
        </div> */}

        {/* Partner Logos Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Companies We Worked With
            </h2>
            <p className="text-gray-600 mt-4">Trusted by Industry Leaders</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'HMC MM Auto Ltd.', logo: '/images/companies/logo1.webp' },
              { name: 'Indigo Technologies', logo: '/images/companies/logo3.jpg' },
              { name: 'Nidec', logo: '/images/companies/logo4.jpg' },
              { name: 'Auto-Lek', logo: '/images/companies/autolake.jpg' },
              { name: 'Samvardhana Motherson', logo: '/images/companies/logo2.jpg' },
              { name: 'Sidwal', logo: '/images/companies/sidwal.png' }
            ].map((partner, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-32 h-20 mb-3">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700 text-center font-medium">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 