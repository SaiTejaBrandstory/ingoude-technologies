'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative">
      {/* Video Container */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-banner.webp"
          className="w-full h-full object-cover"
        >
          <source src="/hero-banner-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container - Left Side */}
      <div className="relative z-10 px-8 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            {/* Main Headline */}
            <h1 
              className="mb-6 leading-tight font-extrabold text-white"
              style={{
                fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 800,
                fontStyle: 'normal',
                fontSize: 'clamp(32px, 8vw, 64px)',
                lineHeight: 'clamp(38px, 9vw, 74px)',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              Empower Your<br />
              Brokerage with<br />
              <span style={{ color: 'rgba(3, 105, 161, 1)' }}>API-Driven Speed</span><br />
              <span style={{ color: 'rgba(3, 105, 161, 1)' }}>& Simplicity</span>
            </h1>

            {/* Description */}
            <p 
              className="mb-8 max-w-xl text-white"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: 'clamp(16px, 4vw, 18px)',
                lineHeight: 'clamp(24px, 5vw, 28px)',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              Connect with top UAE insurers, quote in seconds, and<br />
              manage clients from one smart platform - built<br />
              exclusively for brokers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Book a Demo Button */}
              <button 
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 text-white font-semibold rounded-lg transition-all duration-200 text-sm lg:text-base cursor-pointer"
                style={{
                  background: 'rgba(3, 105, 161, 1)',
                  boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0px 2px 4px 0px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0px 4px 6px 0px rgba(0, 0, 0, 0.1)';
                }}
              >
                Book a Demo 
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>

              {/* See How It Works Button */}
              <button 
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 font-semibold rounded-lg transition-all duration-200 text-sm lg:text-base cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 1)',
                  border: '1px solid rgba(209, 213, 219, 1)',
                  color: 'rgba(0, 0, 0, 0.9)'
                }}
              >
                See How It Works 
                <i className="fa-solid fa-play ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
