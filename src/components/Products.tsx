'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const slides = [
    {
      id: 1,
      title: "CRM & Sales Performance Dashboard",
      features: [
        "Manage leads and customer interactions in one place.",
        "Monitor sales, renewals, and revenue in real time.",
        "Visualize data with intuitive charts and reports."
      ],
      image: "/products-1.webp"
    },
    {
      id: 2,
      title: "Insurance Product Management",
      features: [
        "Access 12+ API-ready insurance products instantly.",
        "Auto, health, property, and life coverage options.",
        "Seamless integration with top UAE insurers."
      ],
      image: "/products-2.webp"
    },
    {
      id: 3,
      title: "Client Portal & Communication",
      features: [
        "Secure client access to policies and documents.",
        "Real-time notifications and updates.",
        "Integrated messaging and support system."
      ],
      image: "/products-3.webp"
    }
  ]

  // Preload all images and wait for them to be ready
  useEffect(() => {
    let loadedCount = 0
    const totalImages = slides.length

    const preloadImage = (src: string) => {
      return new Promise((resolve) => {
        const img = new window.Image()
        img.onload = () => {
          loadedCount++
          if (loadedCount === totalImages) {
            setImagesLoaded(true)
          }
          resolve(true)
        }
        img.onerror = () => {
          loadedCount++
          if (loadedCount === totalImages) {
            setImagesLoaded(true)
          }
          resolve(false)
        }
        img.src = src
      })
    }

    // Preload all images
    slides.forEach(slide => preloadImage(slide.image))
  }, [])

  const nextSlide = () => {
    if (currentSlide === slides.length - 1 || !imagesLoaded) return
    setCurrentSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    if (currentSlide === 0 || !imagesLoaded) return
    setCurrentSlide(currentSlide - 1)
  }

  const goToSlide = (index: number) => {
    if (index === currentSlide || !imagesLoaded) return
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl font-semibold mb-4"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: 'clamp(24px, 6vw, 30px)',
              lineHeight: 'clamp(28px, 7vw, 36px)',
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 1)'
            }}
          >
            Our Products
          </h2>
          <p 
            className="text-lg"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: 'clamp(16px, 4vw, 18px)',
              lineHeight: 'clamp(22px, 5vw, 28px)',
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 0.6)'
            }}
          >
            Comprehensive coverage across all major insurance categories with instant API access
          </p>
        </div>

        {/* Main Content - Left Text + Right Image */}
        <div className="relative">
          {/* Left Arrow Button - Outside Content - Hidden on Mobile */}
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0 || !imagesLoaded}
            className={`hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full transition-colors items-center justify-center z-10 ${
              currentSlide === 0 || !imagesLoaded ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:bg-blue-600'
            }`}
            style={{
              backgroundColor: currentSlide === 0 || !imagesLoaded
                ? 'rgba(203, 203, 203, 1)' 
                : 'rgba(3, 105, 161, 1)'
            }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button - Outside Content - Hidden on Mobile */}
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1 || !imagesLoaded}
            className={`hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full transition-colors items-center justify-center z-10 ${
              currentSlide === slides.length - 1 || !imagesLoaded ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:bg-blue-600'
            }`}
            style={{
              backgroundColor: currentSlide === slides.length - 1 || !imagesLoaded
                ? 'rgba(203, 203, 203, 1)' 
                : 'rgba(3, 105, 161, 1)'
            }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Content Container - Between Arrows - Reduced Padding on Mobile */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 px-4 lg:px-20">
            {/* Left Content Area */}
            <div className="w-full lg:w-5/12">
              {/* Dynamic Content based on current slide */}
              <div>
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: 'clamp(24px, 6vw, 30px)',
                    lineHeight: 'clamp(28px, 7vw, 36px)',
                    color: 'rgba(0, 0, 0, 1)'
                  }}
                >
                  {currentSlideData.title}
                </h3>
                
                <ul className="space-y-4">
                  {currentSlideData.features.map((feature, index) => (
                    <li key={index} className="flex items-baseline">
                      <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}></div>
                      <span 
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 500,
                          fontStyle: 'normal',
                          fontSize: 'clamp(14px, 4vw, 16px)',
                          lineHeight: 'clamp(20px, 5vw, 24px)',
                          color: 'rgba(0, 0, 0, 0.6)'
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Dashboard Image */}
            <div className="w-full lg:w-7/12">
              <Image
                src={currentSlideData.image}
                alt={currentSlideData.title}
                width={600}
                height={400}
                priority
                className="w-full h-auto"
                style={{ imageRendering: 'auto' }}
              />
            </div>
          </div>
        </div>

        {/* Slick Dots */}
        <div className="flex justify-center items-center space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={!imagesLoaded}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                !imagesLoaded ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={{
                backgroundColor: index === currentSlide 
                  ? 'rgba(2, 132, 199, 1)' 
                  : 'rgba(203, 203, 203, 1)'
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
