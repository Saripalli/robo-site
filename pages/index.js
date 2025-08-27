import Head from "next/head";
import Header from "../components/Header";
import RightMenuLayout from "../components/RightMenuLayout";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Springle Robotics – Service Robots for Real-World Work</title>
        <meta name="description" content="Robots for cafés, restaurants, aged care, malls, airports, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="top" style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fdf8f3", minHeight: "100vh" }}>
        <Header />

        {/* Right-side floating menu */}
        <RightMenuLayout />

        {/* Full-width slider */}
        <div style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}>
          <HeroSlider />
        </div>

        {/* About Us */}
        <section id="about" style={{ background: "#ffffff", padding: "60px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "32px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 500px" }}>
              <h2 style={{ color: "#2E7D32", margin: "0 0 16px", fontSize: 32 }}>About Us</h2>

              <div style={{ background: "#f0fdf4", borderLeft: "6px solid #2E7D32", borderRadius: 8, padding: 20, marginBottom: 24 }}>
                <p style={{ margin: 0, fontSize: 18, fontWeight: 600, color: "#1b4332", lineHeight: 1.6 }}>
                  At <strong>Springle Robotics</strong>, our vision is simple yet powerful: to serve people through technology.
                  We believe robots should never replace human connection — instead, they should empower it. By taking care
                  of repetitive and time-consuming tasks, our service robots allow people to focus on what truly matters:
                  care, creativity, and meaningful interactions.
                </p>
              </div>

              <p style={{ color: "#444", margin: "0 0 16px", maxWidth: 850, lineHeight: 1.6 }}>
                Based in Sydney, Springle Robotics is proudly shaping the future of service innovation in Australia. From cafés and restaurants
                to aged care facilities, shopping centres, and community events, our robots are designed to support businesses and communities
                with reliability, efficiency, and heart.
              </p>
              <p style={{ color: "#444", margin: "0 0 16px", maxWidth: 850, lineHeight: 1.6 }}>
                We partner with world-leading manufacturers and combine cutting-edge robotics with a human-centered approach, ensuring every
                solution we deliver is not just smart, but also practical and people-first.
              </p>
              <p style={{ color: "#444", margin: 0, maxWidth: 850, lineHeight: 1.6 }}>
                Springle Robotics isn’t just about machines — it’s about building a future where technology uplifts lives, strengthens
                communities, and helps people shine.
              </p>
            </div>

            <div style={{ flex: "1 1 400px", textAlign: "center" }}>
              <img src="/demo1.jpg" alt="Springle Robot in action" style={{ width: "100%", maxWidth: 400, borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* Robots: Food Delivery & BOTS */}
        <section id="robots-food" style={{ background: "#faf6ee", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>Food Delivery & BOTS</h2>
            <ul style={{ color: "#444", lineHeight: 1.8, marginTop: 10 }}>
              <li>The Butler BOT</li>
              <li>Kikato</li>
              <li>Simply delivery BOT</li>
            </ul>
          </div>
        </section>

        {/* Robots: Commercial Cleaning BOTS */}
        <section id="robots-cleaning" style={{ background: "#ffffff", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>Commercial Cleaning BOTS</h2>
            <ul style={{ color: "#444", lineHeight: 1.8, marginTop: 10 }}>
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
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>Industries</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
              marginTop: 12,
              color: "#444"
            }}>
              {[
                "Restaurants","Cafes","Hotels / Hospitality venues","Aged care / Assisted living",
                "Schools & Universities","Airports","Libraries","Malls","Retail stores",
                "RSL and clubs","Gaming Venues"
              ].map(item => (
                <div key={item} style={{ background: "#fff", border: "1px solid #ece6da", borderRadius: 10, padding: 12 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book a consultation (form) */}
        <section id="consult" style={{ background: "#ffffff", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>Book a consultation</h2>
            <form method="post" action="/api/contact" style={{ display: "grid", gap: 12, maxWidth: 560 }}>
              <input name="name" placeholder="Name" required style={inputStyle} />
              <input name="phone" placeholder="Phone" required style={inputStyle} />
              <input name="email" placeholder="Email id" type="email" required style={inputStyle} />
              <input name="org" placeholder="Org/Company name" style={inputStyle} />
              <input name="location" placeholder="Location" style={inputStyle} />
              <textarea name="description" placeholder="Description of what you are looking for" rows={5} style={inputStyle} />
              <button type="submit" style={{ padding: "10px 14px", background: "#2E7D32", color: "#fff", borderRadius: 8, fontWeight: 700 }}>
                Send
              </button>
            </form>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" style={{ background: "#faf6ee", padding: "48px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>Case Studies</h2>
            <p style={{ color: "#444", marginTop: 8 }}>Coming soon</p>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" style={{ background: "#ffffff", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ color: "#2E7D32", margin: "0 0 6px", fontSize: 28 }}>Contact Us</h2>
            <div style={{ color: "#444", lineHeight: 1.8 }}>
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

const inputStyle = {
  padding: 10,
  border: "1px solid #e5e7eb",
  borderRadius: 8,
  background: "#fff"
};
