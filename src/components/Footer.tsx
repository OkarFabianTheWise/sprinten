"use client";

export function Footer() {
  return (
    <footer
      className="w-screen mx-[calc(50%-50vw)] bg-[#021C1A]"
    >
      {/* MAIN CONTENT */}
      <div
        className="flex flex-col md:flex-row justify-between items-start max-w-[1320px] w-full mx-auto gap-10 md:gap-[60px] mb-20 px-5"
        style={{
          padding: "0 20px", // optional: keeps content from touching edges on small screens
        }}
      >
        {/* LEFT SECTION — LOGO + TAGLINE */}
        <div
          className="flex-none w-full md:w-auto min-w-0 md:min-w-[178px]"
          style={{
            minWidth: "178px", // ensures logo section doesn't shrink
          }}
        >
          <img
            src="/logo.png"
            alt="Sprinten"
            className="w-[175px] h-[56px] md:w-[178px] md:h-[198px]"
            style={{
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
          className="flex flex-row md:flex-row gap-10 md:gap-[120px] items-start flex-1 justify-center md:justify-end pt-10 md:pt-20"
          style={{
            alignItems: "flex-start",
            paddingTop: "80px"
          }}
        >
          {/* QUICK LINK */}
          <div className="w-[65px] md:w-auto">
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
          <div className="w-[61px] md:w-auto">
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
          <div className="w-[45px] md:w-auto">
            <h3
            // go to route /privacy
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
                  href="/privacy"
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
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="w-[416px] md:w-full mx-auto"
        style={{
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
            fontWeight: 600,
            color: "#8CA1A0",
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
