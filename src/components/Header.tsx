'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/ingoude-technologies-logo.svg"
              alt="Ingoude Technologies Logo"
              width={120}
              height={40}
              priority
              className="h-10 w-auto"
              style={{ height: 'auto' }}
            />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={(e) => e.preventDefault()}
            className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '24px'
            }}
          >
            Features
          </button>
          <button 
            onClick={(e) => e.preventDefault()}
            className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '24px'
            }}
          >
            Products
          </button>
          <button 
            onClick={(e) => e.preventDefault()}
            className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '24px'
            }}
          >
            Pricing
          </button>
          <button 
            onClick={(e) => e.preventDefault()}
            className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '24px'
            }}
          >
            Resources
          </button>
        </nav>

        {/* Right side - Login and CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <button 
            onClick={(e) => e.preventDefault()}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer"
          >
            Login
          </button>
          <button 
            onClick={(e) => e.preventDefault()}
            className="text-white font-medium px-6 py-2 transition-all duration-200 hover:shadow-md cursor-pointer"
            style={{
              background: 'rgba(3, 105, 161, 1)',
              border: '1px solid rgba(229, 231, 235, 1)',
              boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              opacity: 1
            }}
          >
            Book a Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col space-y-1 p-2 relative z-50"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 transition-all duration-300 ease-in-out z-40 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="px-8 py-6 space-y-4">
          <Link 
            href="/features" 
            className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '24px'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="/products" 
            className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '24px'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            href="/pricing" 
            className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '24px'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/resources" 
            className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '24px'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resources
          </Link>
          
          {/* Mobile Login and CTA */}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <Link 
              href="/login" 
              className="block text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              href="/demo" 
              className="block text-white font-medium px-6 py-3 text-center transition-all duration-200"
              style={{
                background: 'rgba(3, 105, 161, 1)',
                border: '1px solid rgba(229, 231, 235, 1)',
                boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                opacity: 1
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
