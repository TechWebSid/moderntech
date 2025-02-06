import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' },
    { name: 'Infrastructure', href: '/infrastructure' },
  ];

  const services = [
    { name: 'Hard Anodizing', href: '/services#hard-anodizing' },
    { name: 'Soft Anodizing', href: '/services#soft-anodizing' },
    { name: 'SS Passivation', href: '/services#ss-passivation' },
    { name: 'Phosphating', href: '/services#phosphating' },
    { name: 'Metal Polishing', href: '/services#metal-polishing' },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-gray-400">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/mt_logo.png"
                  alt="Modern Technologies Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Modern Technologies</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading metal finishing company providing comprehensive surface treatment solutions with ISO 9001:2015 certified excellence.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 flex items-center gap-2"
                >
                  <span className="text-orange-500">›</span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <p className="break-words">Plot no.01 Shed no.01, Sarurpur Industrial area, Ballabgarh, Sohna Road, Sector 53, Faridabad, Haryana - 121005</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-orange-500 flex-shrink-0" size={20} />
                <p className="break-words">+91 9650702747</p>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <p className="break-words">info@moderntechnologies.in</p>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-orange-500 flex-shrink-0" size={20} />
                <p className="break-words">Mon - Sat: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Modern Technologies. All rights reserved.
            </p>
            <p className="text-sm text-center md:text-right">
              Designed and Developed by{' '}
              <Link href="https://sntrudratech.com" target="_blank" className="text-orange-500 hover:text-orange-400">
                SNT Rudra Tech LLP
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 