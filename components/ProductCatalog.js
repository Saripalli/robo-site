// components/ProductCatalog.js
import React, { useEffect, useRef } from "react";

const PRODUCTS = [
  {
    title: "Butler Bot",
    slug: "butler-bot",
    image: "/Butlerbot.jpeg",
    short: "Indoor assistant robot for hospitality and homes.",
    details:
      "Helps with tray delivery, guest support, and small logistics in hotels and homes. Payload up to 5 kg, battery life 8–12 hours.",
  },
  {
    title: "Compact Bot",
    slug: "compact-bot",
    image: "/Compactbot.jpeg",
    short: "Small footprint automation bot.",
    details:
      "Designed for tight spaces where larger robots can’t operate. Ideal for labs, offices, and lightweight automation tasks.",
  },
  /*
  {
    title: "Dryer Bot",
    slug: "dryer-bot",
    image: "/Dryerbot.jpeg",
    short: "Smart drying automation bot.",
    details:
      "Automates material or equipment drying processes. Integrated sensors ensure optimal results with minimal supervision.",
  },*/
  {
    title: "Promo Bot",
    slug: "promo-bot",
    image: "/Promobot.jpeg",
    short: "Interactive promotional and marketing bot.",
    details:
      "Engages customers in malls, expos, or retail environments. Features interactive displays and voice guidance.",
  },
  {
    title: "Scrubber Bot",
    slug: "scrubber-bot",
    image: "/Scrubberbot.jpeg",
    short: "Autonomous floor cleaning bot.",
    details:
      "Provides industrial-grade floor scrubbing with minimal human intervention. Perfect for warehouses and public spaces.",
  },
  {
    title: "Simple Bot",
    slug: "simple-bot",
    image: "/Simplebot.jpeg",
    short: "Entry-level robot for basic automation.",
    details:
      "Affordable and versatile, designed for simple automation tasks and educational purposes.",
  },
  {
    title: "Sweeper Bot",
    slug: "sweeper-bot",
    image: "/Sweeperbot.jpeg",
    short: "Smart sweeping bot for large areas.",
    details:
      "Handles sweeping in factories, campuses, or malls. Efficient navigation and extended battery life.",
  },
];

export default function ProductCatalog() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="product-catalog">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gap: 24 }}>
          {PRODUCTS.map((p, i) => (
            <article
              id={`product-${p.slug}`}
              key={p.slug}
              ref={(el) => (cardRefs.current[i] = el)}
              className="product-card"
            >
              {/* Image Section */}
              <div className="product-image">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) =>
                    (e.currentTarget.src = "/images/placeholder.png")
                  }
                />
              </div>

              {/* Text Section */}
              <div>
                <h3>{p.title}</h3>
                <p className="short">{p.short}</p>
                <p className="details">{p.details}</p>
                <div style={{ marginTop: 12 }}>
                  <a href="/#consult" className="cta">
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

        .product-card {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 18px;
          align-items: center;
          background: #fff;
          padding: 18px;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .product-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .product-image {
          width: 200px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 8px;
          background: #fafafa;
          padding: 8px;
        }

        .product-image img {
          width: auto;
          height: 100%;
          max-width: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .product-image img:hover {
          transform: scale(1.05);
        }

        h3 {
          margin: 0 0 6px;
          font-size: 20px;
          color: #1b4332;
        }

        .short {
          margin: 0 0 8px;
          color: #333;
          font-weight: 600;
        }

        .details {
          margin: 0;
          color: #555;
          line-height: 1.6;
        }

        .cta {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid #2e7d32;
          background: transparent;
          color: #2e7d32;
          text-decoration: none;
          font-weight: 700;
        }

        .cta:hover {
          background: #2e7d32;
          color: #fff;
        }

        @media (max-width: 880px) {
          .product-card {
            grid-template-columns: 1fr;
          }

          .product-image {
            width: 100%;
            max-width: 240px;
            height: auto;
            margin: 0 auto 12px;
          }

          .product-image img {
            width: 100%;
            height: auto;
            object-fit: contain;
          }
        }
      `}</style>
    </div>
  );
}

export { PRODUCTS };
