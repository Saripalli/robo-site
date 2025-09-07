// pages/index.js
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import RightMenuLayout from "../components/RightMenuLayout";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  // refs for solution cards
  const cardRefs = useRef([]);
  cardRefs.current = [];

  // Intersection observer for solutions cards
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      // fallback: reveal all
      document.querySelectorAll(".solution-card").forEach((c) => c.classList.add("visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    cardRefs.current.forEach((el, i) => {
      if (el) {
        el.style.transitionDelay = `${i * 80}ms`;
        obs.observe(el);
      }
    });

    return () => obs.disconnect();
  }, []);

  // add refs helper
  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  // Consultation form state
  const [formStatus, setFormStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      org: e.target.org.value,
      location: e.target.location.value,
      description: e.target.description.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus("success");
        e.target.reset();
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error(err);
      setFormStatus("error");
    }
  };

  const inputStyle = {
    padding: 10,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    background: "#fff",
    fontSize: "16px",
  };

  return (
    <>
      <Head>
        <title>Springle Robotics – Service Robots for Real-World Work</title>
        <meta name="description" content="Springle Robotics – service robots for hospitality, cleaning and more." />
      </Head>

      <div id="top" style={{ fontSize: "18px", backgroundColor: "#fdf8f3", minHeight: "100vh" }}>
        <Header />
        <RightMenuLayout />

        {/* Hero */}
        <div style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}>
          <HeroSlider />
        </div>

        {/* About */}
        <section id="about" style={{ background: "#ffffff", padding: "60px 24px", scrollMarginTop: 92 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 16px", fontSize: 32 }}>About Us</h2>
            <p style={{ color: "#444", margin: "0 0 16px", maxWidth: 850, lineHeight: 1.7, fontSize: 18 }}>
              At <strong>Springle Robotics</strong>, our vision is simple yet powerful: to serve people through
              technology. We believe robots should never replace human connection — instead, they should empower it.
              By taking care of repetitive and time-consuming tasks, our service robots allow people to focus on what
              truly matters: care, creativity, and meaningful interactions.
            </p>
            <p style={{ color: "#444", margin: 0, maxWidth: 850, lineHeight: 1.7, fontSize: 18 }}>
              Based in Sydney, Springle Robotics is proudly shaping the future of service innovation in Australia.
            </p>
          </div>
        </section>

        {/* Industries */}
        <section
          id="industries"
          style={{ background: "#faf6ee", padding: "48px 24px", scrollMarginTop: 92 }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>Industries</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 12,
                marginTop: 12,
                color: "#444",
                fontSize: "18px",
              }}
            >
              {[
                "Restaurants",
                "Cafes",
                "Hotels / Hospitality venues",
                "Aged care / Assisted living",
                "Schools & Universities",
                "Airports",
                "Libraries",
                "Malls",
                "Retail stores",
                "RSL and clubs",
                "Gaming Venues",
              ].map((item) => (
                <div key={item} style={{ background: "#fff", border: "1px solid #ece6da", borderRadius: 10, padding: 12 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Robotic Solutions (preview cards with thumbnails) */}
        <section id="solutions" style={{ background: "#ffffff", padding: "48px 24px", scrollMarginTop: 92 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 24px", fontSize: 28 }}>Our Robotic Solutions</h2>

            <div className="solutions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
              {/* Food Delivery */}
              <Link href="/solutions/food-delivery" legacyBehavior>
                <a
                  ref={addCardRef}
                  className="solution-card"
                  aria-label="Food Delivery BOTS — view details"
                >
                  <div className="card-content">
                    <h3 className="card-title">Food Delivery BOTS</h3>
                    <p className="card-desc">
                      Explore our service robots designed for hospitality and delivery: Butler BOT, Kikato,
                      and Simple Delivery BOT.
                    </p>

                    <div className="thumb-row">
                      <figure className="thumb">
                        <img src="/solutions/Butler-bot.jpg" alt="Butler BOT" />
                        <figcaption>Butler BOT</figcaption>
                      </figure>

                      <figure className="thumb">
                        <img src="/solutions/Kikato-bot.jpg" alt="Kikato" />
                        <figcaption>Kikato</figcaption>
                      </figure>

                      <figure className="thumb">
                        <img src="/solutions/Simple-bot.jpg" alt="Simple Delivery BOT" />
                        <figcaption>Simple Delivery BOT</figcaption>
                      </figure>
                    </div>
                  </div>
                </a>
              </Link>

              {/* Commercial Cleaning */}
              <Link href="/solutions/commercial-cleaning" legacyBehavior>
                <a
                  ref={addCardRef}
                  className="solution-card"
                  aria-label="Commercial Cleaning BOTS — view details"
                >
                  <div className="card-content">
                    <h3 className="card-title">Commercial Cleaning BOTS</h3>
                    <p className="card-desc">
                      Discover AI-powered cleaning solutions: Megabot, Superbot, Cutebot, and Microbot for every environment.
                    </p>

                    <div className="thumb-row">
                      <figure className="thumb">
                        <img src="/solutions/Mega-bot.jpg" alt="Megabot" />
                        <figcaption>Megabot</figcaption>
                      </figure>

                      <figure className="thumb">
                        <img src="/solutions/Super-bot.jpg" alt="Superbot" />
                        <figcaption>Superbot</figcaption>
                      </figure>

                      <figure className="thumb">
                        <img src="/solutions/Cute-bot.jpg" alt="Cutebot" />
                        <figcaption>Cutebot</figcaption>
                      </figure>

                      <figure className="thumb">
                        <img src="/solutions/Micro-bot.jpg" alt="Microbot" />
                        <figcaption>Microbot</figcaption>
                      </figure>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <style jsx>{`
            .solution-card {
              display: block;
              background: #fff;
              border: 1px solid #ece6da;
              border-radius: 12px;
              text-decoration: none;
              color: inherit;
              padding: 18px;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
              transition: transform 0.22s ease, box-shadow 0.22s ease, opacity 0.3s ease;
              opacity: 0;
              transform: translateY(10px);
            }
            .solution-card.visible {
              opacity: 1;
              transform: translateY(0);
            }
            .solution-card:focus,
            .solution-card:hover {
              transform: translateY(-4px) scale(1.01);
              box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
            }

            .card-title {
              color: #2e7d32;
              margin: 0 0 8px;
              font-size: 20px;
              font-weight: 700;
            }
            .card-desc {
              margin: 0 0 14px;
              color: #444;
              line-height: 1.6;
              font-size: 15px;
            }

            .thumb-row {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(86px, 1fr));
              gap: 12px;
              align-items: center;
              margin-top: 6px;
            }

            .thumb {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              gap: 8px;
              margin: 0;
              text-align: center;
              background: white;
            }

            .thumb img {
              width: 86px;
              height: 86px;
              object-fit: cover;
              border-radius: 8px;
              display: block;
              background: #fff;
              box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
            }

            .thumb figcaption {
              font-size: 13px;
              color: #333;
              margin-top: 6px;
            }

            @media (max-width: 880px) {
              .thumb img {
                width: 96px;
                height: 96px;
              }
            }
          `}</style>
        </section>

        {/* Book a consultation */}
        <section id="consult" style={{ background: "#ffffff", padding: "48px 24px", scrollMarginTop: 92 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 12px", fontSize: 28 }}>Book a consultation</h2>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 560 }}>
              <input name="name" placeholder="Name" required style={inputStyle} />
              <input name="phone" placeholder="Phone" required style={inputStyle} />
              <input name="email" placeholder="Email id" type="email" required style={inputStyle} />
              <input name="org" placeholder="Org/Company name" style={inputStyle} />
              <input name="location" placeholder="Location" style={inputStyle} />
              <textarea name="description" placeholder="Description of what you are looking for" rows={5} style={inputStyle} />

              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button type="submit" disabled={formStatus === "sending"} style={{ padding: "10px 14px", background: "#2E7D32", color: "#fff", borderRadius: 8, fontWeight: 700 }}>
                  {formStatus === "sending" ? "Sending..." : "Send"}
                </button>

                {formStatus === "success" && <div style={{ color: "#0f5132", background: "#d1e7dd", padding: "8px 12px", borderRadius: 8 }}>Thanks — we received your enquiry.</div>}
                {formStatus === "error" && <div style={{ color: "#842029", background: "#f8d7da", padding: "8px 12px", borderRadius: 8 }}>Oops — something went wrong.</div>}
              </div>
            </form>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ background: "#ffffff", padding: "48px 24px", scrollMarginTop: 92 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>Contact Us</h2>
            <div style={{ color: "#444", lineHeight: 1.8, fontSize: "18px" }}>
              <p>Email: <a href="mailto:Info@springlerobotics.com.au">Info@springlerobotics.com.au</a></p>
              <p>Phone: <a href="tel:+61422502660">+61-422502660</a></p>
              <p>Instagram: <a href="https://www.instagram.com/springlebots/" target="_blank" rel="noopener noreferrer">@springlebots</a></p>
            </div>
          </div>
        </section>

        <footer style={{ borderTop: "1px solid #e8e3da", color: "#6b7280", padding: 18, textAlign: "center" }}>
          © {new Date().getFullYear()} Springle Robotics. All rights reserved.
        </footer>
      </div>
    </>
  );
}
