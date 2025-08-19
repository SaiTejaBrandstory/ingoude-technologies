'use client';

import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: "/service-1.svg",
      title: "12+ API-Ready Insurance Products",
      description: "Access a wide range of instantly quotable products from auto and health to property and life with seamless insurer integrations"
    },
    {
      icon: "/service-2.svg",
      title: "Smart Comparison Engine",
      description: "Quote, compare, and bind policies - all on a single screen, no toggling, no delays just intelligent matchmaking"
    },
    {
      icon: "/service-3.svg",
      title: "Built-in CRM",
      description: "Track leads, follow up with clients, and manage renewals all from the same workspace, Stay organized, stay ahead."
    },
    {
      icon: "/service-4.svg",
      title: "Integrated Payment Gateway",
      description: "Secure, fast, and reliable payments. clients can pay online instantly, making policy binding frictionless"
    },
    {
      icon: "/service-5.svg",
      title: "Ultra-Fast Lightweight Architecture",
      description: "Lightning-fast platform optimized for real time API transactions and multi user teams, no lag, no crash"
    },
    {
      icon: "/service-6.svg",
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, secure access controls and continuous monitoring to keep your data safe and compliant"
    }
  ];

  return (
    <section 
      className="py-20"
      style={{ background: 'rgba(248, 248, 248, 1)' }}
    >
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
            Powerful Features Built for Brokers
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
            Everything you need to streamline your insurance brokerage operations in one powerful platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{
                background: 'rgba(255, 255, 255, 1)',
                boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                padding: '45px'
              }}
            >
              <div className="text-left">
                <div className="mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <h3 
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '20px'
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'rgba(0, 0, 0, 0.6)'
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
