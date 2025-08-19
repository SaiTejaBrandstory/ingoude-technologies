'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Sign Up & Connect",
      description: "Get started quickly. No setup fees. Just log in and connect with leading insurers."
    },
    {
      number: "2",
      title: "Quote, Compare & Sell",
      description: "Use our smart engine to generate quotes and close sales from one dashboard."
    },
    {
      number: "3",
      title: "Manage Everything",
      description: "Track clients, handle renewals, and manage payments - all in one place."
    }
  ];

  return (
    <section 
      className="py-20"
      style={{ background: '#FFFFFF' }}
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
            How It Works
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
            Three simple steps to transform your brokerage operations
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center flex flex-col items-center relative">
              {/* Number Circle */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10"
                style={{ background: '#E3F2FD' }}
              >
                <span 
                  className="text-2xl font-bold"
                  style={{ color: '#1976D2' }}
                >
                  {step.number}
                </span>
              </div>

              {/* Dotted Line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[70%] h-0.5 border-t-2 border-dotted" style={{ borderColor: '#D1D5DB', width: '240px' }}></div>
              )}

              {/* Step Title */}
              <h3 
                className="mb-3 font-bold"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: '20px',
                  color: 'rgba(0, 0, 0, 1)'
                }}
              >
                {step.title}
              </h3>

              {/* Step Description */}
              <p 
                className="max-w-xs"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgba(0, 0, 0, 0.6)'
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
