// pages/index.js
import Head from "next/head";
import Header from "../components/Header";        // ← uses the Header.js you just fixed
import HeroSlider from "../components/HeroSlider"; // ← your Swiper-based slider

export default function Home() {
  return (
    <>
      <Head>
        <title>Springle Robotics – Smart Robots for Smarter Workplaces</title>
        <meta
          name="description"
          content="Autonomous service robots for cafeterias, warehouses, and hospitals — delivery, logistics, and sanitation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Optional social share image (add /public/og-cover.jpg if you have one) */}
        {/* <meta property="og:image" content="/og-cover.jpg" /> */}
      </Head>

      {/* Page background + base font */}
      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fdf8f3", minHeight: "100vh" }}>
        {/* Top navigation/header (with logo) */}
        <Header />

        {/* Full-width slider under the header */}
        {/* The wrapper below ensures the slider spans edge-to-edge even if other content is centered */}
        <div style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}>
          <HeroSlider />
        </div>

        {/* Intro blurb */}
        <section style={{ maxWidth: 1000, margin: "32px auto", padding: "0 24px", textAlign: "center" }}>
          <h1 style={{ color: "#2E7D32", fontSize: 36, margin: "0 0 8px" }}>
            Smart Robots for Smarter Workplaces
          </h1>
          <p style={{ color: "#444", margin: 0, lineHeight: 1.6 }}>
            We build autonomous service robots for cafeterias, warehouses, and hospitals — to move, deliver,
            and sanitize with precision and safety.
          </p>
        </section>

        {/* About */}
        <section id="about" style={{ background: "#ffffff", padding: "60px 24px" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <h2 style={{ color: "#2E7D32", margin: "0 0 16px", fontSize: 32 }}>
      About Us
    </h2>

    {/* Highlighted Vision Statement */}
    <div style={{
      background: "#f0fdf4",       // light green background
      borderLeft: "6px solid #2E7D32",
      borderRadius: "8px",
      padding: "20px",
      marginBottom: "24px"
    }}>
      <p style={{
        margin: 0,
        fontSize: "18px",
        fontWeight: "600",
        color: "#1b4332",
        lineHeight: 1.6
      }}>
        At <strong>Springle Robotics</strong>, our vision is simple yet powerful: 
        to serve people through technology. We believe robots should never replace 
        human connection — instead, they should empower it. By taking care of 
        repetitive and time-consuming tasks, our service robots allow people 
        to focus on what truly matters: care, creativity, and meaningful interactions.
      </p>
    </div>

    {/* Rest of About Us content */}
    <p style={{ color: "#444", margin: "0 0 16px", maxWidth: 850, lineHeight: 1.6 }}>
      Based in Sydney, Springle Robotics is proudly shaping the future of service 
      innovation in Australia. From cafés and restaurants to aged care facilities, 
      shopping centres, and community events, our robots are designed to support 
      businesses and communities with reliability, efficiency, and heart.
    </p>
    <p style={{ color: "#444", margin: "0 0 16px", maxWidth: 850, lineHeight: 1.6 }}>
      We partner with world-leading manufacturers and combine cutting-edge robotics 
      with a human-centered approach, ensuring every solution we deliver is not just 
      smart, but also practical and people-first.
    </p>
    <p style={{ color: "#444", margin: 0, maxWidth: 850, lineHeight: 1.6 }}>
      Springle Robotics isn’t just about machines — it’s about building a future 
      where technology uplifts lives, strengthens communities, and helps people shine.
    </p>
  </div>
</section>

        {/* Services */}
        <section id="services" style={{ background: "#faf6ee", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>Our Services</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 18,
                marginTop: 16,
              }}
            >
              <div style={card}>
                <h3 style={cardTitle}>Cafeteria Robots</h3>
                <p style={cardText}>
                  Food delivery, table service, tray return, and cleaning assistance to reduce staff walking and improve throughput.
                </p>
              </div>

              <div style={card}>
                <h3 style={cardTitle}>Warehouse Robots</h3>
                <p style={cardText}>
                  Autonomous material movement, zone routing, and inventory shuttles that streamline dock-to-zone flows.
                </p>
              </div>

              <div style={card}>
                <h3 style={cardTitle}>Hospital Robots</h3>
                <p style={cardText}>
                  Medicine & specimen delivery, linen logistics, and sanitation patrols with safety lockouts and smart routing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" style={{ background: "#ffffff", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>Contact Us</h2>
            <p style={{ color: "#444", margin: 0, maxWidth: 780, lineHeight: 1.6 }}>
              Want to explore our robots for your facility? Get in touch and we’ll arrange a live demo.
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
              <a
                href="/contact"
                style={{
                  background: "#F57C00",
                  color: "#fff",
                  padding: "12px 18px",
                  borderRadius: 10,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Book a Demo
              </a>

              <a
                href="https://www.instagram.com/springlebots/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: "1px solid #e3dfd7",
                  background: "#fdf8f3",
                  color: "#2E7D32",
                  padding: "12px 18px",
                  borderRadius: 10,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Follow us on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Simple footer */}
        <footer style={{ borderTop: "1px solid #e8e3da", color: "#6b7280", padding: 18, textAlign: "center" }}>
          © {new Date().getFullYear()} Springle Robotics. All rights reserved.
        </footer>
      </div>
    </>
  );
}

/* ===== Tiny style helpers (same file to keep it simple) ===== */
const card = {
  background: "#ffffff",
  border: "1px solid #ece6da",
  borderRadius: 12,
  padding: 18,
  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
};
const cardTitle = { color: "#F57C00", margin: "0 0 6px", fontSize: 20 };
const cardText = { color: "#444", margin: 0, lineHeight: 1.6 };
