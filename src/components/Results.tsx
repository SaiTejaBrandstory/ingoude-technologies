export default function Results() {
  return (
    <section className="py-20 bg-white">
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
            Results That Speak Volumes
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
            See the impact Ingoude has on insurance brokerages across the UAE
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Metric */}
          <div className="text-center">
            <div 
              className="mb-3"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: 'clamp(28px, 8vw, 36px)',
                textAlign: 'center',
                color: 'rgba(3, 105, 161, 1)'
              }}
            >
              12+
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: 'clamp(14px, 4vw, 16px)',
                lineHeight: 'clamp(20px, 5vw, 24px)',
                textAlign: 'center',
                color: 'rgba(0, 0, 0, 0.6)'
              }}
            >
              API-integrated insurance products
            </p>
          </div>

          {/* Second Metric */}
          <div className="text-center">
            <div 
              className="mb-3"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: 'clamp(28px, 8vw, 36px)',
                textAlign: 'center',
                color: 'rgba(3, 105, 161, 1)'
              }}
            >
              2x
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: 'clamp(14px, 4vw, 16px)',
                lineHeight: 'clamp(20px, 5vw, 24px)',
                textAlign: 'center',
                color: 'rgba(0, 0, 0, 0.6)'
              }}
            >
              Faster quote-to-bind time
            </p>
          </div>

          {/* Third Metric */}
          <div className="text-center">
            <div 
              className="mb-3"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: 'clamp(28px, 8vw, 36px)',
                textAlign: 'center',
                color: 'rgba(3, 105, 161, 1)'
              }}
            >
              40%
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: 'clamp(14px, 4vw, 16px)',
                lineHeight: 'clamp(20px, 5vw, 24px)',
                textAlign: 'center',
                color: 'rgba(0, 0, 0, 0.6)'
              }}
            >
              Increase in policy conversion rates
            </p>
          </div>

          {/* Fourth Metric */}
          <div className="text-center">
            <div 
              className="mb-3"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: 'clamp(28px, 8vw, 36px)',
                textAlign: 'center',
                color: 'rgba(3, 105, 161, 1)'
              }}
            >
              100%
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: 'clamp(14px, 4vw, 16px)',
                lineHeight: 'clamp(20px, 5vw, 24px)',
                textAlign: 'center',
                color: 'rgba(0, 0, 0, 0.6)'
              }}
            >
              Digital client experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
