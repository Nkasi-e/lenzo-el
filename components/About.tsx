'use client';

import { motion } from 'framer-motion';
import { getAboutPageStructuredData } from '@/lib/seo';
import { fadeInLeft, fadeInRight, staggerContainer, viewportSettings } from '@/lib/animations';

export default function About() {
  const structuredData = getAboutPageStructuredData();

  return (
    <section 
      id="about" 
      className="py-16 bg-gray-50"
      itemScope 
      itemType="https://schema.org/AboutPage"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.article variants={fadeInLeft}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5d4037] mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-4" itemProp="description">
              We are a boutique fashion brand dedicated to bringing you elegant,
              timeless pieces that reflect your unique style and personality.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to make high-quality fashion accessible while
              maintaining the highest standards of design and craftsmanship.
            </p>
            <p className="text-lg text-gray-700">
              Every piece in our collection is carefully selected to ensure it
              meets our vision of combining classic elegance with modern trends.
            </p>
          </motion.article>
          <motion.aside 
            className="bg-[#5d4037] p-8 rounded-lg text-white"
            variants={fadeInRight}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#ffc107]">Our Values</h3>
            <motion.ul 
              className="space-y-3" 
              role="list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              {[
                'Quality craftsmanship in every piece',
                'Sustainable and ethical fashion',
                'Customer satisfaction as our priority',
                'Timeless designs that never go out of style',
              ].map((value, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  variants={fadeInLeft}
                >
                  <span className="text-[#ffc107] mr-2" aria-hidden="true">✓</span>
                  <span>{value}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}

