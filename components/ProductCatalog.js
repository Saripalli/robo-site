// components/ProductCatalog.js
import React from "react";

/**
 * ProductCatalog (animated, thumbnail-optimized)
 *
 * - Images expected in /public/images/*.jpg (you already added them)
 * - Thumbnails are smaller for faster layout and cleaner look
 * - Cards animate in with staggered fade+slide
 */

const PRODUCTS = [
  {
    title: "Butler Bot",
    slug: "butler-bot",
    image: "/images/butler-bot.jpg",
    short: "Indoor assistant robot for hospitality and homes.",
    details:
      "Helps with tray delivery, guest support, and small logistics in hotels and homes. Payload up to 5 kg, battery life 8–12 hours.",
  },
  {
    title: "Compact Bot",
    slug: "compact-bot",
    image: "/images/compact-bot.jpg",
    short: "Small footprint automation bot.",
    details:
      "Designed for tight spaces where larger robots can’t operate. Ideal for labs, offices, and lightweight automation tasks.",
  },
  {
    title: "Dryer Bot",
    slug: "dryer-bot",
    image: "/images/dryer-bot.jpg",
    short: "Smart drying automation bot.",
    details:
      "Automates material or equipment drying processes. Integrated sensors ensure optimal results with minimal supervision.",
  },
  {
    title: "Promo Bot",
    slug: "promo-bot",
    image: "/images/promo-bot.jpg",
    short: "Interactive promotional and marketing bot.",
    details:
      "Engages customers in malls, expos, or retail environments. Features interactive displays and voice guidance.",
  },
  {
    title: "Scrubber Bot",
    slug: "scrubber-bot",
    image: "/images/scrubber-bot.jpg",
    short: "Autonomous floor cleaning bot.",
    details:
      "Provides industrial-grade floor scrubbing with minimal human intervention. Perfect for warehouses and public spaces.",
  },
  {
    title: "Simple Bot",
    slug: "simple-bot",
    image: "/images/simple-bot.jpg",
    short: "Entry-level robot for basic automation.",
    details:
      "Affordable and versatile, designed for simple automation tasks and educational purposes.",
  },
  {
    title: "Sweeper Bot",
    slug: "sweeper-bot",
    image: "/images/sweeper-bot.jpg",
    short: "Smart sweeping bot for large areas.",
    details:
      "Handles sweeping in factories, campuses, or malls. Efficient navigation and extended battery life.",
  },
];

export default function ProductCatalog({ className = "" }) {
  return (
    <div className={`product-catalog ${className}`}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gap: 20 }}>
          {PRODUCTS.map((p, i) => (
            <article
              id={`product-${p.slug}`}
              key={p.slug}
              className="product-card animate-in"
              style={{
                // use CSS for layout; animation delay per-card for stagger
                animationDelay: `${i * 90}ms`,
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: 18,
                alignItems: "center",
                background: "#fff",
                padding: 18,
                borderRadius: 8,
                boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
              }}
            >
              <div
                className="product-image"
                style={{
                  width: "100%",
                  maxWidth: 160,
                  minHeight: 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderRadius: 6,
                  background: "#fafafa",
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.png";
                  }}
                />
              </div>

              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: 20 }}>{p.title}</h3>
                <p style={{ margin: "0 0 8px", color: "#333", fontWeight: 600 }}>
                  {p.short}
                </p>
                <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>{p.details}</p>

                <div style={{ marginTop: 12 }}>
                  <a
                    href="/#consult"
                    className="cta"
                    style={{
                      display: "inline-block",
                      padding: "8px 14px",
                      borderRadius: 8,
                      border: "1px solid #2E7D32",
                      background: "transparent",
                      color: "#2E7D32",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .product-catalog {
          padding: 28px 20px;
          background: #faf6ee;
        }

        /* animation: fade + slide up */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* initial state: invisible, then animation plays */
        .animate-in {
          opacity: 0;
          transform: translateY(10px);
          animation-name: fadeUp;
          animation-duration: 420ms;
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.2, 0.9, 0.2, 1);
        }

        /* respect user's reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-in {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }

        /* responsive: stack on smaller screens */
        @media (max-width: 880px) {
          .product-card {
            grid-template-columns: 1fr !important;
          }
          .product-image {
            min-height: 160px;
          }
        }

        /* tighten up images & text for a cleaner look */
        .product-card h3 {
          margin-bottom: 4px;
        }
        .product-card .cta:hover {
          background: #2E7D32;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

// named export for reuse (if needed)
export { PRODUCTS };
