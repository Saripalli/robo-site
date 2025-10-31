// pages/index.js
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import RightMenuLayout from "../components/RightMenuLayout";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  // Consultation form state
  const [formStatus, setFormStatus] = useState(null);

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

  // Reusable styles
  const inputStyle = {
    padding: 10,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    background: "#fff",
    fontSize: "16px",
  };

  const teaserCard = {
    display: "block",
    background: "#fff",
    border: "1px solid #ece6da",
    borderRadius: 10,
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    transition: "transform 0.2s ease",
  };

 const thumbStyle = {
  width: "100%",
  height: 130,        // smaller than before
  objectFit: "contain", // keeps full logo visible
  background: "#fff",   // clean background
  padding: 10,          // spacing around the logo
  display: "block",
};

  return (
    <>
      <Head>
        <title>Springle Robotics – Service Robots for Real-World Work</title>
        <meta
          name="description"
          content="Springle Robotics – service robots for hospitality, cleaning, and more."
        />
      </Head>

      <div id="top" style={{ backgroundColor: "#fdf8f3", minHeight: "100vh" }}>
        <Header />
        <RightMenuLayout />

        {/* Hero */}
        <div style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}>
          <HeroSlider />
        </div>

        {/* About Us */}
        <section
          id="about"
          style={{ background: "#ffffff", padding: "60px 24px", scrollMarginTop: 92 }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", marginBottom: 16, fontSize: 32 }}>
              About Us
            </h2>
            <p style={{ color: "#444", maxWidth: 850, lineHeight: 1.7, fontSize: 18 }}>
              At <strong>Springle Robotics</strong>, our vision is simple yet powerful: to
              serve people through technology. We believe robots should never replace human
              connection — instead, they should empower it. By taking care of repetitive
              and time-consuming tasks, our service robots allow people to focus on what
              truly matters: care, creativity, and meaningful interactions.
            </p>
            <p style={{ color: "#444", maxWidth: 850, lineHeight: 1.7, fontSize: 18 }}>
              Based in Sydney, Springle Robotics is proudly shaping the future of service
              innovation in Australia. From cafés and restaurants to aged care facilities,
              shopping centres, and community events, our robots are designed to support
              businesses and communities with reliability, efficiency, and heart.
            </p>
            <p style={{ color: "#444", maxWidth: 850, lineHeight: 1.7, fontSize: 18 }}>
              We partner with world-leading manufacturers and combine cutting-edge robotics
              with a human-centered approach, ensuring every solution we deliver is not just
              smart, but also practical and people-first. Importantly, we believe robotics
              shouldn’t demand heavy upfront investment or be out of reach for small and
              medium businesses. That’s why Springle offers an accessible lease-a-robot
              model — making advanced robotics economically friendly, flexible, and scalable
              for businesses of all sizes.
            </p>
            <p style={{ color: "#444", maxWidth: 850, lineHeight: 1.7, fontSize: 18 }}>
              Springle Robotics isn’t just about machines — it’s about building a future
              where technology uplifts lives, strengthens communities, and helps people
              shine.
            </p>
          </div>
        </section>

        {/* Industries */}
        <section
          id="industries"
          style={{ background: "#faf6ee", padding: "48px 24px", scrollMarginTop: 92 }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", marginBottom: 6, fontSize: 28 }}>Industries</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 12,
                marginTop: 12,
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
                <div
                  key={item}
                  style={{
                    background: "#fff",
                    border: "1px solid #ece6da",
                    borderRadius: 10,
                    padding: 12,
                    color: "#444",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Our Robotic Solutions 
        <section
          id="solutions"
          style={{ background: "#ffffff", padding: "48px 24px", scrollMarginTop: 92 }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", marginBottom: 24, fontSize: 28 }}>
              Our Robotic Solutions
            </h2>
            <p style={{ color: "#444", fontSize: 16 }}>
              Explore Food Delivery and Commercial Cleaning robots tailored to industry
              needs.
            </p>
          </div>
        </section>
      
      */}

        {/* Case Studies teaser */}
        <section
          id="case-studies"
          style={{ background: "#ffffff", padding: "48px 24px", scrollMarginTop: 92 }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", marginBottom: 18, fontSize: 28 }}>
              Case Studies
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              <a href="/case-studies/kikato-cafe" style={teaserCard}>
                <img src="/case-studies/kikato-thumb.jpg" alt="Kikato café case study" style={thumbStyle} />
                <div style={{ padding: 12 }}>
                  <h3 style={{ margin: 0, color: "#2E7D32" }}>
                    Kikato in a CBD Coffee Lounge
                  </h3>
                  <p style={{ color: "#444", marginTop: 8 }}>
                    One-month pilot showing efficiency, customer approval, and sales growth.
                  </p>
                </div>
              </a>

              <a href="/case-studies/robot-ready" style={teaserCard}>
                <img src="/case-studies/robotready-thumb.jpg" alt="Robot-ready case study" style={thumbStyle} />
                <div style={{ padding: 12 }}>
                  <h3 style={{ margin: 0, color: "#2E7D32" }}>
                    Getting a Restaurant “Robot-Ready”
                  </h3>
                  <p style={{ color: "#444", marginTop: 8 }}>
                    Smart layout tweaks helped Kikato integrate smoothly in a busy venue.
                  </p>
                </div>
              </a>

              <a href="/case-studies/slope" style={teaserCard}>
                <img src="/case-studies/slope-thumb.jpg" alt="Slope case study" style={thumbStyle} />
                <div style={{ padding: 12 }}>
                  <h3 style={{ margin: 0, color: "#2E7D32" }}>
                    Navigating Slopes with Kikato
                  </h3>
                  <p style={{ color: "#444", marginTop: 8 }}>
                    A venue adapted layout to handle a tricky 11-degree incline.
                  </p>
                </div>
              </a>
            </div>
            <div style={{ marginTop: 18, textAlign: "center" }}>
              <a
                href="/case-studies"
                style={{
                  padding: "10px 14px",
                  background: "#2E7D32",
                  color: "#fff",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                View all case studies
              </a>
            </div>
          </div>
        </section>

        {/* Consultation */}
        <section
          id="consult"
          style={{ background: "#ffffff", padding: "48px 24px", scrollMarginTop: 92 }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", marginBottom: 12, fontSize: 28 }}>
              Book a consultation
            </h2>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 560 }}>
              <input name="name" placeholder="Name" required style={inputStyle} />
              <input name="phone" placeholder="Phone" required style={inputStyle} />
              <input name="email" placeholder="Email id" type="email" required style={inputStyle} />
              <input name="org" placeholder="Org/Company name" style={inputStyle} />
              <input name="location" placeholder="Location" style={inputStyle} />
              <textarea name="description" placeholder="Description" rows={5} style={inputStyle} />
              <button
                type="submit"
                disabled={formStatus === "sending"}
                style={{
                  padding: "10px 14px",
                  background: "#2E7D32",
                  color: "#fff",
                  borderRadius: 8,
                  fontWeight: 700,
                }}
              >
                {formStatus === "sending" ? "Sending..." : "Send"}
              </button>
              {formStatus === "success" && (
                <div
                  style={{
                    color: "#0f5132",
                    background: "#d1e7dd",
                    padding: "8px 12px",
                    borderRadius: 8,
                  }}
                >
                  Thanks — we received your enquiry.
                </div>
              )}
              {formStatus === "error" && (
                <div
                  style={{
                    color: "#842029",
                    background: "#f8d7da",
                    padding: "8px 12px",
                    borderRadius: 8,
                  }}
                >
                  Oops — something went wrong.
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          style={{ background: "#ffffff", padding: "48px 24px", scrollMarginTop: 92 }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", marginBottom: 6, fontSize: 28 }}>
              Contact Us
            </h2>
            <div style={{ color: "#444", lineHeight: 1.8, fontSize: "18px" }}>
              <p>
                Email:{" "}
                <a href="mailto:Info@springlerobotics.com.au">
                  Info@springlerobotics.com.au
                </a>
              </p>
              <p>
                Phone: <a href="tel:+61422502660">+61-422502660</a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/springlebots/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @springlebots
                </a>
              </p>
            </div>
          </div>
        </section>


        {/* Quick FAQs */}
        <section
          id="quick-faqs"
          style={{ background: "#faf6ee", padding: "36px 24px", scrollMarginTop: 92 }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", marginBottom: 12, fontSize: 28 }}>
              Quick FAQs
            </h2>
            <ol style={{ margin: 0, paddingLeft: 18, color: "#444", lineHeight: 1.7 }}>
              <li style={{ marginBottom: 10 }}>
                <strong>Do I need to buy the robots?</strong> No, we offer flexible leasing.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Is it hard for staff to use?</strong> Setup and training are simple —
                ready in under an hour.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Can I try before committing?</strong> Yes — free 2-week pilot available.
              </li>
            </ol>
            <div style={{ marginTop: 16 }}>
              <a
                href="/faqs"
                style={{
                  color: "#fff",
                  background: "#2E7D32",
                  padding: "10px 14px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                more questions...
              </a>
            </div>
          </div>
        </section>


        <footer
          style={{
            borderTop: "1px solid #e8e3da",
            color: "#6b7280",
            padding: 18,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Springle Robotics. All rights reserved.
        </footer>
      </div>
    </>
  );
}
