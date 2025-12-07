"use client";

export function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: "#021C1A",
        margin: 0,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "60px 0 0 0",
      }}
    >
      {/* MAIN CONTENT */}
      <div
        style={{
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 60px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "80px",
        }}
      >
        {/* LEFT SECTION — LOGO + TAGLINE */}
        <div style={{ flex: "0 0 auto" }}>
          <img
            src="/logo.png"
            alt="Sprinten"
            style={{
              width: "178.35px",
              height: "198px",
              marginBottom: "16px",
            }}
          />

          <p
            style={{
              fontSize: "16px",
              color: "#A8B5B3",
              margin: 0,
            }}
          >
            Ship Faster. Build Better. Onchain.
          </p>
        </div>

        {/* RIGHT SECTION - THREE COLUMNS */}
        <div
          style={{
            display: "flex",
            gap: "120px",
            alignItems: "flex-start",
          }}
        >
          {/* QUICK LINK */}
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: "20px",
                marginTop: 0,
              }}
            >
              Quick link
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#home"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#services"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#work"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: "20px",
                marginTop: 0,
              }}
            >
              Connect
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="https://twitter.com"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="https://linkedin.com"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Linkidin
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="https://instagram.com"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@sprinten.com"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: "20px",
                marginTop: 0,
              }}
            >
              Legal
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#terms"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Terms
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#privacy"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#work"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          width: "100%",
          padding: "20px 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            color: "#A8B5B3",
            textAlign: "center",
            margin: 0,
          }}
        >
          © 2025 Sprinten- All right reserved
        </p>
      </div>
    </footer>
  );
}