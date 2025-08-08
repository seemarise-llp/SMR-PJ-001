'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

type ContactItem = {
  icon: React.ElementType;
  text: string;
};

type SocialLink = {
  icon: React.ElementType;
  href: string;
};

const quickLinks: string[] = ['Home', 'About Us', 'Products', 'Services', 'Contact', 'Career'];

const products: string[] = [
  'Industrial Tools',
  'Electrical Systems',
  'Metal Fabrication',
  'Safety Equipment',
  'Precision Instruments',
  'View All Products',
];

const contactDetails: ContactItem[] = [
  { icon: MapPin, text: '123 Manufacturing Way Industrial District New York, NY 10001' },
  { icon: Phone, text: '+1 (555) 123-4567' },
  { icon: Mail, text: 'info@jkskygroup.com' },
];

const socialLinks: SocialLink[] = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">JK</span>
              <span className="text-2xl font-bold ml-1">SKY</span>
              <span className="text-2xl font-bold text-sky-400 ml-1">GROUP</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Leading the manufacturing industry with innovative solutions and unparalleled quality for over two decades.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a key={index} href={href} className="text-blue-200 hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactDetails.map(({ icon: Icon, text }, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                  <span className="text-blue-100 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} JK SKY GROUP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, index) => (
              <Link key={index} href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
