'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1 - Company Information */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/footer-logo.svg"
                  alt="Ingoude Technologies Logo"
                  width={120}
                  height={40}
                  priority
                  className="h-10 w-auto"
                  style={{ height: 'auto' }}
                />
              </Link>
            </div>
            
            {/* Description */}
            <p className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{
                color: 'rgba(209, 213, 219, 1)'
              }}
            >
              Empowering insurance brokers with API-driven technology to quote faster and sell more.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-1">
              <i className="fa-brands fa-linkedin text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              <i className="fa-brands fa-square-x-twitter text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              <i className="fa-brands fa-square-facebook text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button 
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition-colors text-sm cursor-pointer"
                style={{
                  color: 'rgba(209, 213, 219, 1)'
                }}
              >Home</button></li>
              <li><button 
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition-colors text-sm cursor-pointer"
                style={{
                  color: 'rgba(209, 213, 219, 1)'
                }}
              >Features</button></li>
              <li><button 
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition-colors text-sm cursor-pointer"
                style={{
                  color: 'rgba(209, 213, 219, 1)'
                }}
              >Products</button></li>
              <li><button 
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition-colors text-sm cursor-pointer"
                style={{
                  color: 'rgba(209, 213, 219, 1)'
                }}
              >Pricing</button></li>
              <li><button 
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition-colors text-sm cursor-pointer"
                style={{
                  color: 'rgba(209, 213, 219, 1)'
                }}
              >Resources</button></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="fa-solid fa-envelope mr-2" style={{ color: 'rgba(3, 105, 161, 1)' }}></i>
                <span className="text-sm"
                  style={{
                    color: 'rgba(209, 213, 219, 1)'
                  }}
                >hello@ingoude.com</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-phone mr-2" style={{ color: 'rgba(3, 105, 161, 1)' }}></i>
                <span className="text-sm"
                  style={{
                    color: 'rgba(209, 213, 219, 1)'
                  }}
                >+971 50 123 4567</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Address */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Address</h3>
            <p className="text-sm leading-relaxed"
              style={{
                color: 'rgba(209, 213, 219, 1)'
              }}
            >
              Office 1205, Business Bay,<br />
              Dubai, UAE
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8">
          <div className="text-center">
            <p className="text-sm"
              style={{
                color: 'rgba(209, 213, 219, 1)'
              }}
            >
              © 2025 Ingoude Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
