import Link from 'next/link';
import { SOCIAL_LINKS, SITE_NAME } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div itemScope itemType="https://schema.org/Organization">
            <Link href="/" className="flex items-center space-x-2 mb-4" aria-label={`${SITE_NAME} Fashion Home`}>
              <span className="text-2xl font-bold" itemProp="name">{SITE_NAME}</span>
              <span className="text-[#ffc107]">Fashion</span>
            </Link>
            <p className="text-gray-400" itemProp="description">
              Elegant fashion for the modern lifestyle. Quality, style, and sophistication.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-semibold mb-4 text-[#ffc107]">Quick Links</h3>
            <ul className="space-y-2" role="list">
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-[#ffc107] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#ffc107] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#ffc107] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ffc107]">Connect With Us</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-[#5d4037] hover:bg-[#8d6e63] rounded-full transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {SITE_NAME} Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

