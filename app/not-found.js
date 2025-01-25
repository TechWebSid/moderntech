'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaTools, FaCog } from 'react-icons/fa';

export default function NotFound() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Gears */}
        <div className="relative h-48 mb-8">
          <motion.div
            animate={{
              rotate: isAnimating ? 360 : 0
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <FaCog className="text-orange-500 w-32 h-32 opacity-90" />
          </motion.div>
          <motion.div
            animate={{
              rotate: isAnimating ? -360 : 0
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity
            }}
            className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <FaCog className="text-blue-500 w-24 h-24 opacity-80" />
          </motion.div>
          <motion.div
            animate={{
              rotate: isAnimating ? 360 : 0
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity
            }}
            className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2"
          >
            <FaCog className="text-teal-500 w-24 h-24 opacity-80" />
          </motion.div>
        </div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-8xl font-bold text-white mb-4">
            4
            <motion.span
              animate={{
                rotateX: [0, 360],
                color: ['#F97316', '#0EA5E9', '#14B8A6']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-block"
            >
              0
            </motion.span>
            4
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Looks like this process needs recalibration!
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for might have been moved, deleted, or possibly 
            never existed. Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg 
            hover:bg-orange-600 transition-colors group"
          >
            <FaHome className="group-hover:animate-bounce" />
            Back to Home
          </Link>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg 
            hover:bg-blue-600 transition-colors group"
          >
            <FaTools className="group-hover:animate-spin" />
            Contact Support
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-blue-500 to-teal-500"></div>
        
        {/* Background Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 opacity-20">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 45, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaTools className="w-16 h-16 text-gray-500" />
            </motion.div>
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -45, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaSearch className="w-16 h-16 text-gray-500" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 