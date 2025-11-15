import type { Metadata } from 'next';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, CONTACT_INFO, SOCIAL_LINKS, ORGANIZATION, FASHION_IMAGES } from './constants';

// Open Graph Image Configuration
// Primary: Use og-image.jpg if it exists in /public folder
// Fallback: Use first gallery image from Unsplash (always available)
const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;
// Fallback to a properly sized Unsplash image (1200x630 for OG image standard)
const OG_IMAGE_FALLBACK =  'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&h=630&fit=crop&q=80';
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

// Use fallback as primary for now (replace with OG_IMAGE_URL once you add og-image.jpg to /public)
const OG_IMAGE = OG_IMAGE_FALLBACK;

// Base Metadata Configuration
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Elegant Fashion & Style Redefined`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'fashion',
    'Lenzo-El',
    'style',
    'Abuja, Nigeria',
    'fashion brand',
    'brand',
    'elegant fashion',
    'premium clothing',
    'sustainable fashion',
    'timeless style',
    'fashion boutique',
    'designer clothing',
    'quality fashion',
    'ethical fashion',
    'fashion collection',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL, // WhatsApp requires absolute URL (not relative)
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Elegant Fashion & Style Redefined`,
    description: SITE_DESCRIPTION.substring(0, 200), // WhatsApp prefers shorter descriptions
    images: [
      {
        url: OG_IMAGE, // Must be absolute HTTPS URL (already is from Unsplash)
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: `${SITE_NAME} Fashion Collection`,
        // WhatsApp requires secure image URLs
        secureUrl: OG_IMAGE, // Explicit secure URL for WhatsApp
        type: 'image/jpeg', // Explicit type for WhatsApp
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Elegant Fashion & Style Redefined`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
    creator: '@lenzoel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: '/',
  },
  category: 'Fashion',
};

// Home Page Metadata
export const homeMetadata: Metadata = {
  title: 'Home - Elegant Fashion Collection',
  description: `Discover timeless elegance with ${SITE_NAME}'s curated fashion collection. Browse our gallery, learn about our mission, and explore premium quality, sustainable fashion pieces designed to elevate your style.`,
  keywords: [
    'fashion collection',
    'elegant fashion',
    'premium clothing',
    'fashion gallery',
    'sustainable fashion',
    'timeless style',
    'fashion boutique',
    'Lenzo-El',
    'Lenzo-El Fashion',
    'Lenzo-El Fashion Collection',
    'Lenzo-El Fashion Gallery',
    'Lenzo-El Fashion Boutique',
    'Lenzo-El Fashion Store',
    'Lenzo-El Fashion Online',
    'Lenzo-El Fashion Online Store',
    'fashion design',
    'fashion brand',
    'fashion store',
    'fashion online',
    'fashion online store',
    'fashion online boutique',
  ],
  openGraph: {
    title: `${SITE_NAME} - Elegant Fashion & Style Redefined`,
    description: SITE_DESCRIPTION,
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Elegant Fashion & Style Redefined`,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: '/',
  },
};

// Structured Data Generators
export const getOrganizationStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORGANIZATION.name,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  email: CONTACT_INFO.email,
  telephone: CONTACT_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: CONTACT_INFO.address.locality,
    addressRegion: CONTACT_INFO.address.region,
    postalCode: CONTACT_INFO.address.postalCode,
    addressCountry: CONTACT_INFO.address.country,
  },
  sameAs: SOCIAL_LINKS.map(link => link.href),
  foundingDate: ORGANIZATION.foundingDate,
  foundingLocation: {
    '@type': 'Place',
    name: ORGANIZATION.foundingLocation.name,
  },
});

export const getWebsiteStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

export const getAboutPageStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: ORGANIZATION.name,
    description: 'Boutique fashion brand dedicated to bringing elegant, timeless pieces that reflect unique style and personality',
    mission: 'To make high-quality fashion accessible while maintaining the highest standards of design and craftsmanship',
    foundingDate: ORGANIZATION.foundingDate,
  },
});

export const getGalleryStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: `${SITE_NAME} Fashion Collection`,
  description: 'Browse through our carefully curated fashion pieces including dresses, casual wear, formal attire, and accessories',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: FASHION_IMAGES.map((img, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: img.alt,
        category: img.category,
        image: img.src,
      },
    })),
  },
});

export const getContactPageStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `${SITE_NAME} Contact`,
  description: `Contact ${SITE_NAME} for inquiries, collaborations, or questions`,
  mainEntity: {
    '@type': 'Organization',
    name: ORGANIZATION.name,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.locality,
      addressRegion: CONTACT_INFO.address.region,
      addressCountry: CONTACT_INFO.address.country,
    },
    sameAs: SOCIAL_LINKS.map(link => link.href),
  },
});

