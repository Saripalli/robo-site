// components/Header.js
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/#about", label: "About Us" },
    { href: "/#industries", label: "Industries" },
    { href: "/#solutions", label: "Our Robotic Solutions" },
    { href: "/#quick-faqs", label: "FAQs" }, // now points to quick FAQs on home
    { href: "/#consult", label: "Consultation" },
    { href: "/#contact", label: "Contact Us" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
          padding: "0 24px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Logo + Brand */}
        <Link
          href="/"
          aria-label="Springle Robotics Home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <img
            src="/logo.png"
            alt="Springle Robotics Logo"
            style={{ height: 70, width: "auto", display: "block" }}
          />
          <span style={{ fontWeight: 900, color: "#2E7D32", fontSize: 28 }}>
            Springle Robotics
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 28, fontSize: 18, alignItems: "center" }}>
          <div className="desktop-links" style={{ display: "none", gap: 28 }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  position: "relative",
                  textDecoration: "none",
                  color: "#1f2937",
                  fontWeight: 500,
                  padding: "4px 0",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2E7D32")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1f2937")}
              >
                {item.label}
                <span
                  className="underline"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: "2px",
                    width: "0",
                    backgroundColor: "#2E7D32",
                    transition: "width 0.3s ease",
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            style={{
              background: "transparent",
              border: "1px solid #ddd",
              padding: "6px 8px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            padding: 12,
            borderTop: "1px solid #eee",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} legacyBehavior>
                <a
                  onClick={() => setOpen(false)}
                  style={{
                    color: "#1f2937",
                    textDecoration: "none",
                    fontSize: 16,
                  }}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 880px) {
          .desktop-links {
            display: flex !important;
            align-items: center;
          }
          button[aria-label="Toggle menu"] {
            display: none;
          }
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
}
