'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CTA() {
  return (
    <section 
      className="py-20"
      style={{
        backgroundColor: 'rgba(3, 105, 161, 1)',
        background: 'linear-gradient(90deg, #0C4A6E 0%, #075985 50%, #0369A1 65.87%)'
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h2 
          className="text-3xl font-semibold mb-4"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: 'clamp(24px, 6vw, 30px)',
            lineHeight: 'clamp(28px, 7vw, 36px)',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 1)'
          }}
        >
          Ready to Take Your Brokerage to the Next Level?
        </h2>

        {/* Description */}
        <p 
          className="text-lg mb-12"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: 'clamp(16px, 4vw, 18px)',
            lineHeight: 'clamp(22px, 5vw, 28px)',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          Book a free demo and see Ingoude in action.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Left Button - Schedule Your Demo */}
          <button 
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center justify-center px-8 py-4 bg-white font-medium rounded-lg transition-colors w-60 cursor-pointer"
            style={{
              color: 'rgba(3, 105, 161, 1)',
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '16px',
              textAlign: 'center'
            }}
          >
            Schedule Your Demo
          </button>

          {/* Right Button - Get Started Free */}
          <button 
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors w-60 cursor-pointer"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '16px',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 1)'
            }}
          >
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  )
}
