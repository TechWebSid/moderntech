'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const images = [
    '/images/herobg2.jpg',
    '/images/herobg1.jpg',  
    '/images/herobg3.jpg',
    '/images/hero.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute object-cover inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={image}
            alt={`Modern metal finishing facility ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full 
        transition-all transform hover:scale-110 z-20"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full 
        transition-all transform hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>

      {/* Hero Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-4 pt-20 md:pt-0">
          <div className="max-w-4xl">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight">
              Modern<br className="md:hidden" />{' '}
              <span className="block mt-2 md:mt-4">Technologies</span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-6 mb-12">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light leading-relaxed">
                Your Premier Partner in Advanced Metal Finishing Solutions
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                ISO Certified Excellence in Surface Treatment & Metal Processing
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
  <Link 
    href="/services"
    className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg 
    transition-all transform hover:scale-105 duration-200 flex items-center justify-center gap-2 text-base sm:text-lg font-medium
    w-full sm:w-auto lg:w-56 xl:w-64"
  >
    Explore Services
    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
  </Link>
  <Link 
    href="/contact"
    className="border-2 border-white/80 hover:bg-white hover:text-black text-white 
    px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg transition-colors duration-300 text-base sm:text-lg font-medium text-center
    w-full sm:w-auto lg:w-56 xl:w-64"
  >
    Contact Us
  </Link>
</div>

          </div>
        </div>
      </div>

      {/* Slide Indicators - Moved up and adjusted for mobile */}
      <div className="absolute bottom-28 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-20 ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-6 sm:w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Adjusted position */}
      <div className="absolute bottom-12 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white/80"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero; 