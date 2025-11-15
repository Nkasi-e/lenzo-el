'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/constants';
import { handleSmoothScroll, smoothScrollTo } from '@/lib/smooth-scroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-[#5d4037] text-white shadow-lg" 
      role="banner"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2" aria-label="Lenzo-El Fashion Home">
              <span className="text-2xl font-bold">Lenzo-El</span>
              <span className="text-[#ffc107]">Fashion</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {[
              { href: '#gallery', label: 'Gallery', ariaLabel: 'View our fashion gallery', id: 'gallery' },
              { href: '#about', label: 'About', ariaLabel: 'Learn about Lenzo-El', id: 'about' },
              { href: '#contact', label: 'Contact', ariaLabel: 'Contact us', id: 'contact' },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a 
                  href={link.href} 
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className="hover:text-[#ffc107] transition-colors relative group cursor-pointer" 
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc107] group-hover:w-full transition-all duration-300"
                  />
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map((social, index) => {
              const Icon = social.Icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffc107] transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-[#8d6e63]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
            <nav className="flex flex-col space-y-4">
              <a
                href="#gallery"
                className="hover:text-[#ffc107] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  // Small delay to allow menu to close before scrolling
                  setTimeout(() => {
                    smoothScrollTo('gallery');
                  }, 100);
                }}
              >
                Gallery
              </a>
              <a
                href="#about"
                className="hover:text-[#ffc107] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  // Small delay to allow menu to close before scrolling
                  setTimeout(() => {
                    smoothScrollTo('about');
                  }, 100);
                }}
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-[#ffc107] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  // Small delay to allow menu to close before scrolling
                  setTimeout(() => {
                    smoothScrollTo('contact');
                  }, 100);
                }}
              >
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.Icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ffc107] transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </nav>
          </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

