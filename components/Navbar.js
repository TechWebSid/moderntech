'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    {name: 'Blog', href: '/blog'},
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

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-300/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-24 h-24">
              <Image
                src="/images/mt_logo.png"
                alt="Modern Technologies Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Modern Technologies
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-orange-500 transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/quotation"
              className={`px-6 py-2.5 rounded-full bg-orange-500 text-white font-semibold 
              hover:bg-orange-600 transition-colors transform hover:scale-105 duration-200 
              shadow-lg hover:shadow-orange-500/30`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? 'top-20 opacity-100' : '-top-96 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 px-4 py-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-orange-500 transition-colors"
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