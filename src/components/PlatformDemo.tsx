export default function PlatformDemo() {
  return (
    <section 
      className="py-20"
      style={{
        background: 'linear-gradient(90deg, #0C4A6E 0%, #075985 50%, #0369A1 65.87%)'
      }}
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
              color: 'rgba(255, 255, 255, 1)'
            }}
          >
            See the Platform in Action
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
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Experience the speed and simplicity of our modern insurance platform
          </p>
        </div>

        {/* Platform Demo Content */}
        <div className="text-center">
          <div className="w-full max-w-5xl mx-auto rounded-lg shadow-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/uTbDkVLb13I"
              className="w-full h-full"
              style={{ aspectRatio: '16/9' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="Platform Demo"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
