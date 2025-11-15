'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FASHION_IMAGES, GALLERY_CATEGORIES } from '@/lib/constants';
import { getGalleryStructuredData } from '@/lib/seo';
import { fadeInUp, scaleIn, staggerContainer, viewportSettings } from '@/lib/animations';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? FASHION_IMAGES 
    : FASHION_IMAGES.filter(img => img.category === selectedCategory);

  const galleryStructuredData = getGalleryStructuredData();

  return (
    <section 
      id="gallery" 
      className="py-16 bg-white"
      itemScope 
      itemType="https://schema.org/CollectionPage"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryStructuredData) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5d4037] mb-4" itemProp="name">
            Our Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" itemProp="description">
            Browse through our carefully curated fashion pieces
          </p>
        </motion.header>

        {/* Category Filter */}
        <motion.nav 
          className="flex flex-wrap justify-center gap-2 mb-8" 
          aria-label="Filter collection by category"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {GALLERY_CATEGORIES.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#5d4037] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.nav>

        {/* Image Grid */}
        <AnimatePresence mode="wait">
          {filteredImages.length > 0 ? (
            <motion.div 
              key={selectedCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
              role="list"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
            >
              {filteredImages.map((image, index) => (
                <motion.article
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImage(image.id)}
                  role="listitem"
                  itemScope
                  itemType="https://schema.org/Product"
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      itemProp="image"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-semibold" itemProp="category">{image.category}</p>
                      <p className="sr-only" itemProp="name">{image.alt}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-lg text-gray-600">No items found in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="relative max-w-4xl w-full max-h-[90vh]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="absolute top-4 right-4 text-white text-3xl hover:text-[#ffc107] transition-colors z-10"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
                <div className="relative aspect-[3/4]">
                  <Image
                    src={FASHION_IMAGES.find(img => img.id === selectedImage)?.src || ''}
                    alt={FASHION_IMAGES.find(img => img.id === selectedImage)?.alt || ''}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

