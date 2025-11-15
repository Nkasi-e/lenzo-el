'use client';

import { useState, useCallback, useRef, useEffect, memo } from 'react';
import type { FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  SOCIAL_LINKS, 
  CONTACT_INFO, 
  WEB3FORMS_API_URL, 
  WEB3FORMS_ACCESS_KEY,
  FORM_CONFIG 
} from '@/lib/constants';
import { getContactPageStructuredData } from '@/lib/seo';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportSettings } from '@/lib/animations';

type SubmitStatus = 'idle' | 'success' | 'error';

interface SocialLinkProps {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const SocialLink = memo(({ name, Icon, href }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
    aria-label={name}
  >
    <Icon className="w-5 h-5" />
    <span>{name}</span>
  </a>
));

SocialLink.displayName = 'SocialLink';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const resetStatus = useCallback((duration: number) => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setSubmitStatus('idle');
      setErrorMessage('');
      timeoutRef.current = null;
    }, duration);
  }, []);

  const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!WEB3FORMS_ACCESS_KEY) {
      setErrorMessage('Form configuration error. Please contact support.');
      setSubmitStatus('error');
      resetStatus(FORM_CONFIG.ERROR_MESSAGE_DURATION);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New Contact Form Submission from Lenzo-El Website');

    try {
      const response = await fetch(WEB3FORMS_API_URL, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // Always clear the form on successful submission
        form.reset();
        setSubmitStatus('success');
        resetStatus(FORM_CONFIG.SUCCESS_MESSAGE_DURATION);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMsg = error instanceof Error ? error.message : 'Failed to send message';
      setErrorMessage(errorMsg);
      setSubmitStatus('error');
      resetStatus(FORM_CONFIG.ERROR_MESSAGE_DURATION);
    } finally {
      setIsSubmitting(false);
    }
  }, [resetStatus]);

  // Structured data for SEO
  const structuredData = getContactPageStructuredData();

  return (
    <section 
      id="contact" 
      className="py-16 bg-[#5d4037] text-white"
      itemScope 
      itemType="https://schema.org/ContactPage"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Have a question or want to work with us? We'd love to hear from you!
          </p>
        </motion.header>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {/* Contact Form */}
          <motion.article 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            variants={fadeInLeft}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#ffc107]">Send us a message</h3>
            <form 
              onSubmit={onSubmit} 
              className="space-y-6"
              aria-label="Contact form"
              noValidate
            >
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name <span className="text-red-400" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffc107] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email <span className="text-red-400" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffc107] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message <span className="text-red-400" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffc107] focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-live="polite"
                className="w-full px-6 py-3 bg-[#ffc107] text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submitStatus === 'success' && (
                <div 
                  role="alert" 
                  aria-live="polite"
                  className="text-green-300 text-center"
                >
                  <p>Message sent successfully!</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div 
                  role="alert" 
                  aria-live="assertive"
                  className="text-red-300 text-center space-y-1"
                >
                  <p className="font-medium">Failed to send message</p>
                  {errorMessage && (
                    <p className="text-sm text-red-200">{errorMessage}</p>
                  )}
                </div>
              )}
            </form>
          </motion.article>

          {/* Contact Info & Social Links */}
          <motion.aside 
            className="space-y-8" 
            itemScope 
            itemType="https://schema.org/Organization"
            variants={fadeInRight}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#ffc107]">Contact Information</h3>
              <address className="space-y-4 not-italic">
                <div className="flex items-start" itemProp="email">
                  <Mail className="w-6 h-6 mr-3 mt-1 text-[#ffc107]" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-gray-200 hover:text-[#ffc107] transition-colors"
                      itemProp="email"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start" itemProp="telephone">
                  <Phone className="w-6 h-6 mr-3 mt-1 text-[#ffc107]" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                      className="text-gray-200 hover:text-[#ffc107] transition-colors"
                      itemProp="telephone"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <MapPin className="w-6 h-6 mr-3 mt-1 text-[#ffc107]" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Address</p>
                    <div className="text-gray-200" itemProp="streetAddress">
                      {CONTACT_INFO.address.street}
                    </div>
                    <div className="text-gray-200" itemProp="addressLocality">
                      {CONTACT_INFO.address.city}
                    </div>
                  </div>
                </div>
              </address>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#ffc107]">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <SocialLink
                    key={social.name}
                    name={social.name}
                    Icon={social.Icon}
                    href={social.href}
                  />
                ))}
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}

