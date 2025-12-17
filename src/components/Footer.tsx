"use client";

export function Footer() {
  return (
    <footer
      className="w-screen mx-[calc(50%-50vw)] bg-[#021C1A]"
    >
      {/* MAIN CONTENT */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: "1320px",
          width: "100%",
          margin: "0 auto",
          gap: "60px",
          marginBottom: "80px",
          padding: "0 20px", // optional: keeps content from touching edges on small screens
        }}
      >
        {/* LEFT SECTION — LOGO + TAGLINE */}
        <div
          style={{
            flex: "0 0 auto",
            minWidth: "178px", // ensures logo section doesn't shrink
          }}
        >
          <img
            src="/logo.png"
            alt="Sprinten"
            style={{
              width: "178px",
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

        {/* RIGHT SECTION — THREE COLUMNS */}
        <div
          style={{
            display: "flex",
            gap: "120px",
            alignItems: "flex-start",
            flex: 1,
            justifyContent: "flex-end",
            paddingTop: "80px"
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
                  href="https://t.me/Callme_TOC"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  Telegram
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
                  href="https://x.com/Sprint3n"
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
                  href="https://www.linkedin.com/company/sprinten"
                  style={{
                    fontSize: "14px",
                    color: "#A8B5B3",
                    textDecoration: "none",
                  }}
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="https://www.instagram.com/sprint3n"
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
                  href="mailto:sprintenagency@gmail.com"
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
                  href="mailto:sprintenagency@gmail.com"
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
          © 2025 Sprinten - All rights reserved
        </p>
      </div>
    </footer>
  );
}
