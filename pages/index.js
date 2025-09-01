import Head from "next/head";
import Header from "../components/Header";
import RightMenuLayout from "../components/RightMenuLayout";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  const para = {
    color: "#444",
    margin: "0 0 16px",
    maxWidth: 850,
    lineHeight: 1.7,
    fontSize: "18px",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      org: e.target.org.value,
      location: e.target.location.value,
      description: e.target.description.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("✅ Your enquiry has been sent successfully!");
      e.target.reset();
    } else {
      alert("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <Head>
        <title>Springle Robotics – Service Robots for Real-World Work</title>
      </Head>

      <div
        id="top"
        style={{
          fontSize: "18px",
          backgroundColor: "#fdf8f3",
          minHeight: "100vh",
        }}
      >
        <Header />
        <RightMenuLayout />

        {/* Hero Slider */}
        <div style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}>
          <HeroSlider />
        </div>

        {/* About Us */}
        <section id="about" style={{ background: "#ffffff", padding: "60px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 16px", fontSize: 32 }}>
              About Us
            </h2>
            <p style={para}>
              At <strong>Springle Robotics</strong>, our vision is simple yet powerful: to
              serve people through technology. We believe robots should never replace human
              connection — instead, they should empower it. By taking care of repetitive and
              time-consuming tasks, our service robots allow people to focus on what truly
              matters: care, creativity, and meaningful interactions.
            </p>
            <p style={para}>
              Based in Sydney, Springle Robotics is proudly shaping the future of service
              innovation in Australia. From cafés and restaurants to aged care facilities,
              shopping centres, and community events, our robots are designed to support
              businesses and communities with reliability, efficiency, and heart.
            </p>
            <p style={para}>
              We partner with world-leading manufacturers and combine cutting-edge robotics
              with a human-centered approach, ensuring every solution we deliver is not just
              smart, but also practical and people-first. Importantly, we believe robotics
              shouldn’t demand heavy upfront investment or be out of reach for small and
              medium businesses. That’s why Springle offers an accessible lease-a-robot
              model — making advanced robotics economically friendly, flexible, and scalable
              for businesses of all sizes.
            </p>
            <p style={para}>
              Springle Robotics isn’t just about machines — it’s about building a future
              where technology uplifts lives, strengthens communities, and helps people
              shine.
            </p>
          </div>
        </section>

        {/* Food Delivery BOTS */}
        <section id="robots-food" style={{ background: "#faf6ee", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>
              Food Delivery & BOTS
            </h2>
            <ul style={{ color: "#444", lineHeight: 1.8, marginTop: 10, fontSize: "18px" }}>
              <li>Kikato (Delivery & Promotion)</li>
              <li>Simply delivery BOT</li>
              <li>The Butler BOT (Closed delivery)</li>
            </ul>
          </div>
        </section>

        {/* Commercial Cleaning BOTS */}
        <section id="robots-cleaning" style={{ background: "#ffffff", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>
              Commercial Cleaning BOTS
            </h2>
            <ul style={{ color: "#444", lineHeight: 1.8, marginTop: 10, fontSize: "18px" }}>
              <li>Megabot — Spot Cleaner, Sweeper & Vacuum Robot (AI powered)</li>
              <li>Superbot — Scrubber cleaning BOT (AI powered)</li>
              <li>Cutebot — Everyday Maintenance Robots (vacuum only)</li>
              <li>Microbot — Handheld scrubber & Dryer</li>
            </ul>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" style={{ background: "#faf6ee", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>
              Industries
            </h2>
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
                <div
                  key={item}
                  style={{
                    background: "#fff",
                    border: "1px solid #ece6da",
                    borderRadius: 10,
                    padding: 12,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book a consultation */}
        <section id="consult" style={{ background: "#ffffff", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>
              Book a consultation
            </h2>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 560 }}>
              <input name="name" placeholder="Name" required style={inputStyle} />
              <input name="phone" placeholder="Phone" required style={inputStyle} />
              <input name="email" placeholder="Email id" type="email" required style={inputStyle} />
              <input name="org" placeholder="Org/Company name" style={inputStyle} />
              <input name="location" placeholder="Location" style={inputStyle} />
              <textarea
                name="description"
                placeholder="Description of what you are looking for"
                rows={5}
                style={inputStyle}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 14px",
                  background: "#2E7D32",
                  color: "#fff",
                  borderRadius: 8,
                  fontWeight: 700,
                }}
              >
                Send
              </button>
            </form>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" style={{ background: "#faf6ee", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>
              Case Studies
            </h2>
            <p style={{ color: "#444", marginTop: 8, fontSize: "18px" }}>Coming soon</p>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" style={{ background: "#ffffff", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>
              Contact Us
            </h2>
            <div style={{ color: "#444", lineHeight: 1.8, fontSize: "18px" }}>
              <p>Email: <a href="mailto:Info@springlerobotics.com.au">Info@springlerobotics.com.au</a></p>
              <p>Phone: <a href="tel:+61422502660">+61-422502660</a></p>
              <p>Instagram: <a href="https://www.instagram.com/springlebots/" target="_blank" rel="noopener noreferrer">@springlebots</a></p>
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

const inputStyle = {
  padding: 10,
  border: "1px solid #e5e7eb",
  borderRadius: 8,
  background: "#fff",
  fontSize: "16px",
};
