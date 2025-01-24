import Image from 'next/image';
import { FaCertificate, FaIndustry, FaUsers, FaChartLine, FaUser, FaUserTie, FaCog, FaFlask, FaTools, FaUserCog } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - Modern Technologies',
  description: 'Leading surface metal finishing company established in 2018, serving automotive and non-automotive sectors with ISO 9001:2015 certification.',
};

const stats = [
  { 
    icon: FaIndustry,
    number: '2018',
    label: 'Established',
    description: 'Started our journey in metal finishing'
  },
  { 
    icon: FaCertificate,
    number: 'ISO',
    label: '9001:2015',
    description: 'Quality Management System Certified'
  },
  { 
    icon: FaChartLine,
    number: '70L+',
    label: 'Target 2024-25',
    description: 'Expected turnover for current financial year'
  },
  { 
    icon: FaUsers,
    number: '100+',
    label: 'Happy Clients',
    description: 'Across automotive & non-automotive sectors'
  }
];

export default function About() {
  return (
    <main>
        <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-teal-800 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/80" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Journey of Excellence
          </h1>
          <p className="text-xl text-teal-50 max-w-2xl">
            Pioneering surface metal finishing solutions since 2018, serving the automotive, 
            non-automotive sectors, and government organizations with precision and quality.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                <stat.icon className="w-12 h-12 text-teal-600 mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-teal-600 mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Company Profile</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="font-bold text-teal-700">MODERN TECHNOLOGIES</span> was founded in 2018 
                  by Mr. Prashant Shukla, bringing his extensive expertise in metal finishing to establish 
                  a company that would set new standards in surface treatment solutions.
                </p>
                <p>
                  Last year, we achieved a remarkable turnover of INR 51 Lakh, and we're projected to 
                  reach INR 70 Lakh in the current financial year (2024-25), showcasing our steady growth 
                  and market trust.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-500 mt-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-2">ISO 9001:2015 Certified</h3>
                  <p>Our commitment to quality is validated by our ISO 9001:2015 certification, ensuring 
                  consistent delivery of high-quality surface finishing solutions.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/industry2.jpg"
                alt="Modern Technologies Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Leadership</h2>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-teal-50 to-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 relative rounded-full overflow-hidden">
                <Image
                  src="/images/founder.jpg"
                  alt="Mr. Prashant Shukla"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Mr. Prashant Shukla</h3>
                <p className="text-teal-600 font-semibold mb-4">Founder & Managing Director</p>
                <p className="text-gray-600">
                  With a Diploma in Chemicals and over 15 years of valuable experience in metal finishing, 
                  Mr. Shukla has transformed his expertise into a thriving business. His vision and 
                  leadership have been instrumental in establishing Modern Technologies as a trusted name 
                  in the surface treatment industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Organization Structure</h2>
          
          <div className="max-w-5xl mx-auto">
            {/* Level 1 - Founder */}
            <div className="flex justify-center mb-8 md:mb-12 relative">
              <div className="relative">
                <div className="bg-teal-700 text-white p-4 rounded-lg shadow-lg w-64">
                  <div className="flex items-center gap-3">
                    <FaUserTie className="w-6 h-6" />
                    <div>
                      <h3 className="font-semibold">Mr. Prashant Shukla</h3>
                      <p className="text-sm text-teal-100">Proprietor/Founder</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 bottom-0 w-0.5 h-8 bg-teal-700 transform translate-y-full -translate-x-1/2"></div>
                {/* Mobile connector */}
                <div className="md:hidden absolute left-1/2 bottom-0 w-0.5 h-4 bg-teal-700 transform translate-y-full -translate-x-1/2"></div>
              </div>
            </div>

            {/* Level 2 - Management Representative */}
            <div className="flex justify-center mb-8 md:mb-12 relative">
              <div className="relative">
                <div className="bg-teal-600 text-white p-4 rounded-lg shadow-lg w-64">
                  <div className="flex items-center gap-3">
                    <FaUser className="w-6 h-6" />
                    <div>
                      <h3 className="font-semibold">Deepak Kumar</h3>
                      <p className="text-sm text-teal-100">Management Representative</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 bottom-0 w-0.5 h-8 bg-teal-600 transform translate-y-full -translate-x-1/2"></div>
                {/* Mobile connector */}
                <div className="md:hidden absolute left-1/2 bottom-0 w-0.5 h-4 bg-teal-600 transform translate-y-full -translate-x-1/2"></div>
              </div>
            </div>

            {/* Level 3 - Department Heads */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-12 relative">
              {/* Desktop Connecting Lines */}
              <div className="hidden md:block absolute top-0 left-1/2 w-[80%] h-0.5 bg-teal-500 transform -translate-x-1/2 -translate-y-4"></div>
              <div className="hidden md:block absolute top-0 left-[16.66%] w-0.5 h-4 bg-teal-500 transform -translate-y-4"></div>
              <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-4 bg-teal-500 transform -translate-x-1/2 -translate-y-4"></div>
              <div className="hidden md:block absolute top-0 left-[83.33%] w-0.5 h-4 bg-teal-500 transform -translate-y-4"></div>

              {/* Mobile Connecting Lines */}
              <div className="md:hidden absolute left-1/2 top-0 w-0.5 h-full bg-teal-500 -translate-x-1/2 -translate-y-4"></div>

              {/* Department Head Cards */}
              {[
                { title: "Production Head", name: "Mr. Deepak Kumar", Icon: FaCog },
                { title: "Engg/NPD/QA", name: "Mr. Prashant Shukla", Icon: FaFlask },
                { title: "Maintenance Head", name: "Mr. Pawan", Icon: FaTools }
              ].map((dept, index) => (
                <div key={index} className="relative">
                  <div className="bg-teal-500 text-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <dept.Icon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">{dept.name}</h3>
                        <p className="text-sm text-teal-100">{dept.title}</p>
                      </div>
                    </div>
                  </div>
                  {/* Mobile connector to next card (except last) */}
                  {index < 2 && (
                    <div className="md:hidden absolute left-1/2 bottom-0 w-0.5 h-4 bg-teal-500 transform translate-y-full -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Level 4 & 5 - Supervisors and Staff */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto relative">
              {/* Mobile Connecting Lines */}
              <div className="md:hidden absolute left-1/2 top-0 w-0.5 h-full bg-teal-400 -translate-x-1/2 -translate-y-4"></div>

              {/* Supervisor Level */}
              {[
                { title: "Supervisor", name: "Mr. Pawan", Icon: FaUserCog },
                { title: "Lab & QA Engg", name: "Mr. Akhilesh", Icon: FaFlask }
              ].map((position, index) => (
                <div key={index} className="relative">
                  <div className="bg-teal-400 text-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <position.Icon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">{position.name}</h3>
                        <p className="text-sm">{position.title}</p>
                      </div>
                    </div>
                  </div>
                  {/* Mobile connector to next level */}
                  {index < 1 && (
                    <div className="md:hidden absolute left-1/2 bottom-0 w-0.5 h-4 bg-teal-400 transform translate-y-full -translate-x-1/2"></div>
                  )}
                </div>
              ))}

              {/* Staff Level */}
              {[
                { title: "Operator", name: "Mr. Aslam", Icon: FaUser },
                { title: "Support Staff", name: "Helper", Icon: FaUser }
              ].map((position, index) => (
                <div key={index} className="relative">
                  <div className="bg-teal-300 text-gray-800 p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <position.Icon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">{position.name}</h3>
                        <p className="text-sm">{position.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 