'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { handleSmoothScroll } from '@/lib/smooth-scroll';

export default function Hero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-[#5d4037] via-[#8d6e63] to-black text-white"
      itemScope 
      itemType="https://schema.org/WebPage"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.header 
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" 
            itemProp="headline"
            variants={fadeInUp}
          >
            Elegant Fashion
            <motion.span 
              className="block text-[#ffc107] mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Redefined
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200" 
            itemProp="description"
            variants={fadeInUp}
          >
            Discover timeless elegance with our curated collection of fashion pieces
            designed to elevate your style.
          </motion.p>
          <motion.nav 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center" 
            aria-label="Main navigation"
            variants={fadeInUp}
          >
            <motion.a
              href="#gallery"
              className="px-8 py-3 bg-[#ffc107] text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg w-[240px] sm:w-[220px] text-center whitespace-nowrap"
              aria-label="Explore our fashion collection gallery"
              onClick={(e) => handleSmoothScroll(e, 'gallery')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#5d4037] transition-colors w-[240px] sm:w-[220px] text-center whitespace-nowrap"
              aria-label="Contact us for inquiries"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.nav>
        </motion.header>
      </div>
    </section>
  );
}

