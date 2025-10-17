'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60 translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60 -translate-x-16 translate-y-16"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 text-center md:text-left">
          {/* Logo / Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-indigo-600">QuickLaunch</h3>
            <p className="text-gray-600 max-w-xs">
              Launch your ideas faster, beautifully, and hassle-free.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-gray-600 hover:text-indigo-600">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-600">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-600">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-600">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <Link href="#banner" className="text-gray-600 hover:text-indigo-600 transition">
              Home
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-indigo-600 transition">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-indigo-600 transition">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-indigo-600 transition">
              Contact
            </Link>
          </div>

          {/* Optional: Newsletter */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="text-lg font-semibold text-gray-900">Subscribe</h4>
            <p className="text-gray-600 text-sm">Get updates on new templates & features.</p>
            <form className="flex gap-2 w-full max-w-xs mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} QuickLaunch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
