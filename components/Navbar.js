'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog'},
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (href) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B1223]/95 backdrop-blur-md shadow-lg' : 'bg-[#0B1223]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-16 h-16">
              <Image
                src="/images/mt_logo.png"
                alt="Modern Technologies Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white whitespace-nowrap">
                Modern
              </span>
              <span className="text-xl font-bold text-white whitespace-nowrap">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-orange-500 transition-colors text-sm lg:text-base ${
                  isActivePath(item.href) ? 'text-orange-500 font-medium' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/quotation"
              className="px-6 py-2 rounded-full bg-orange-500 text-white text-sm lg:text-base font-semibold 
              hover:bg-orange-600 transition-colors transform hover:scale-105 duration-200 
              shadow-lg hover:shadow-orange-500/30 whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-[#0B1223] shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? 'top-20 opacity-100' : '-top-96 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 px-4 py-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-white hover:text-orange-500 transition-colors ${
                  isActivePath(item.href) ? 'text-orange-500 font-medium' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/quotation"
              onClick={() => setIsOpen(false)}
              className="bg-orange-500 text-white text-center py-2.5 rounded-full font-semibold 
              hover:bg-orange-600 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 