import { Instagram, Facebook, Twitter, Share2 } from 'lucide-react';

// Site Information
export const SITE_NAME = 'Lenzo-El';
export const SITE_DESCRIPTION = 'Elegant fashion brand offering timeless, sustainable, and premium quality clothing';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lenzo-el.com';

// Contact Information
export const CONTACT_INFO = {
  email: 'contact@lenzo-el.com',
  phone: '+234 8100000000',
  address: {
    street: 'Shop 1, ecopie plaza, arab road, kubwa, abuja',
    city: 'Abuja',
    locality: 'Abuja',
    region: 'Abuja',
    postalCode: '901101',
    country: 'Nigeria',
  },
} as const;

// Social Media Links
export const SOCIAL_LINKS = [
  { name: 'Instagram', Icon: Instagram, href: 'https://www.instagram.com/lenzoel' },
  { name: 'Facebook', Icon: Facebook, href: 'https://www.facebook.com/lenzoel' },
  { name: 'Twitter', Icon: Twitter, href: 'https://www.twitter.com/lenzoel' },
//   { name: 'Pinterest', Icon: Share2, href: 'https://www.pinterest.com/lenzoel' },
] as const;

// Web3Forms Configuration
export const WEB3FORMS_API_URL = 'https://api.web3forms.com/submit';
export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'cdcb740d-208e-45ab-a36f-eaf7242e2115';

// Form Configuration
export const FORM_CONFIG = {
  SUCCESS_MESSAGE_DURATION: 5000,
  ERROR_MESSAGE_DURATION: 8000,
} as const;

// Gallery Images - All unique images, no duplicates
export const FASHION_IMAGES = [
  // Elegant Dresses
  { id: 1, src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop', alt: 'Elegant Dress Collection', category: 'Dresses' },
  { id: 2, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop', alt: 'Casual Fashion Style', category: 'Casual' },
  { id: 3, src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop', alt: 'Formal Attire', category: 'Formal' },
  { id: 4, src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1000&fit=crop', alt: 'Summer Collection', category: 'Summer' },
  { id: 5, src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop', alt: 'Street Fashion', category: 'Streetwear' },
  { id: 6, src: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1000&fit=crop', alt: 'Evening Wear', category: 'Evening' },
  { id: 7, src: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=800&h=1000&fit=crop', alt: 'Business Attire', category: 'Business' },
  { id: 8, src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop', alt: 'Vintage Style', category: 'Vintage' },
  // African Fashion - Unique images
  { id: 9, src: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1000&fit=crop', alt: 'African Print Dress', category: 'African' },
  { id: 10, src: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&h=1000&fit=crop', alt: 'Ankara Fashion Style', category: 'African' },
  { id: 11, src: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1000&fit=crop', alt: 'African Traditional Wear', category: 'African' },
  // Nigerian Fashion - Unique images (no duplicates with above)
  { id: 12, src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop', alt: 'Nigerian Ankara Outfit', category: 'Nigerian' },
  { id: 13, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop', alt: 'Nigerian Traditional Attire', category: 'Nigerian' },
  { id: 14, src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1000&fit=crop', alt: 'Nigerian Fashion Design', category: 'Nigerian' },
] as const;

export const GALLERY_CATEGORIES = ['All', 'Dresses', 'Casual', 'Formal', 'Summer', 'Streetwear', 'Evening', 'Business', 'Vintage'] as const;

// Organization Information
export const ORGANIZATION = {
  name: SITE_NAME,
  foundingDate: '2010',
  foundingLocation: {
    name: 'Abuja, Nigeria',
  },
} as const;

