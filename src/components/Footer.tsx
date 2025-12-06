"use client";

export function Footer() {
  return (
    <footer 
      className="relative"
      style={{
        width: '1440px',
        height: '384px',
        backgroundColor: '#021514'
      }}
    >
      {/* Main footer content */}
      <div 
        className="absolute flex justify-between"
        style={{
          width: '1320px',
          height: '148px',
          top: '80px',
          left: '60px'
        }}
      >
        {/* Left side - Logo and tagline */}
        <div>
          <img 
            src="/logo.png" 
            alt="Sprinten" 
            style={{
              width: '175.35px',
              height: '90px',
              marginBottom: '16px'
            }}
          />
          <p 
            style={{
              fontSize: '16px',
              color: '#8B9FFF',
              marginTop: '12px'
            }}
          >
            Ship Faster. Build Better. Onchain.
          </p>
        </div>

        {/* Quick link */}
        <div>
          <h3 
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '16px'
            }}
          >
            Quick link
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px' }}>
              <a 
                href="#home" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a 
                href="#services" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a 
                href="#work" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Work
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '16px'
            }}
          >
            Connect
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px' }}>
              <a 
                href="https://twitter.com" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a 
                href="https://linkedin.com" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Linkidin
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a 
                href="https://instagram.com" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="mailto:contact@sprinten.com" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '16px'
            }}
          >
            Legal
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px' }}>
              <a 
                href="#terms" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Terms
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a 
                href="#privacy" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Privacy
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a 
                href="#work" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Work
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                style={{ fontSize: '14px', color: '#8B9FFF', textDecoration: 'none' }}
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright with divider */}
      <div 
        className="absolute"
        style={{
          bottom: '40px',
          left: '60px',
          right: '60px'
        }}
      >
        <div 
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#8B9FFF',
            opacity: 0.2,
            marginBottom: '24px'
          }}
        />
        <p 
          style={{
            fontSize: '14px',
            color: '#8B9FFF',
            textAlign: 'center'
          }}
        >
          © 2025 Sprinten- All right reserved
        </p>
      </div>
    </footer>
  );
}
