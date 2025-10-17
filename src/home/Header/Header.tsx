'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            QuickLaunch
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link href="features" className="hover:text-indigo-600 transition">Features</Link>
            <Link href="pricing-plans" className="hover:text-indigo-600 transition">Pricing</Link>
            <Link href="about-us" className="hover:text-indigo-600 transition">About</Link>
            <Link href="contact" className="hover:text-indigo-600 transition">Contact</Link>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/signin"
              className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col space-y-2 p-4 text-gray-700 font-medium">
            <Link href="#features" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">Features</Link>
            <Link href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">Pricing</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">About</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-indigo-600">Contact</Link>

            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <Link
                href="/signin"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition text-center"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-center"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
