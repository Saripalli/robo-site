// pages/faqs.js
import Head from "next/head";
import Header from "../components/Header";
import RightMenuLayout from "../components/RightMenuLayout";

export default function FaqsPage() {
  return (
    <>
      <Head>
        <title>FAQs — Springle Robotics</title>
        <meta name="description" content="Frequently Asked Questions about Springle Robotics leasing, pilots, training and robot models." />
      </Head>

      <div style={{ background: "#fdf8f3", minHeight: "100vh" }}>
        <Header />
        <RightMenuLayout />

        <main style={{ padding: "32px 20px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h1 style={{ color: "#2E7D32", fontSize: 32, marginBottom: 12 }}>Frequently Asked Questions (FAQ)</h1>

            <section style={{ background: "#fff", padding: 18, borderRadius: 10, border: "1px solid #ece6da" }}>
              <h2 style={{ fontSize: 18, color: "#2E7D32", marginTop: 0 }}>About Springle Robotics</h2>

              <ol style={{ paddingLeft: 18, color: "#444", lineHeight: 1.7 }}>
                <li style={{ marginBottom: 12 }}>
                  <strong>Do I need to pay anything upfront to get started?</strong><br />
                  No. Our robots are offered on a flexible leasing model — there are no upfront costs. You only pay
                  the agreed leasing fee once the robots are in use.
                </li>

                <li style={{ marginBottom: 12 }}>
                  <strong>How does onboarding and training work?</strong><br />
                  Onboarding is simple and quick. Our team sets up the robot, provides hands-on training for your staff,
                  and ensures your team is confident using it from day one.
                </li>

                <li style={{ marginBottom: 12 }}>
                  <strong>Can my staff easily operate the robot?</strong><br />
                  Yes. The robots are designed to be intuitive and user-friendly. Staff training takes less than an hour,
                  and ongoing support is always available.
                </li>
              </ol>
            </section>

            <section style={{ marginTop: 18, background: "#fff", padding: 18, borderRadius: 10, border: "1px solid #ece6da" }}>
              <h2 style={{ fontSize: 18, color: "#2E7D32", marginTop: 0 }}>Benefits & Value</h2>

              <ol style={{ paddingLeft: 18, color: "#444", lineHeight: 1.7 }}>
                <li style={{ marginBottom: 12 }}>
                  <strong>What are the main benefits of using delivery robots?</strong>
                  <ul style={{ marginTop: 8 }}>
                    <li>Faster table service and reduced waiting times</li>
                    <li>Increased staff efficiency and focus on customer care</li>
                    <li>Higher customer satisfaction and return visits</li>
                    <li>A unique and memorable experience for your guests</li>
                    <li>Added promotional and branding opportunities</li>
                  </ul>
                </li>

                <li style={{ marginBottom: 12 }}>
                  <strong>Do robots help increase revenue?</strong><br />
                  Yes. By improving service efficiency, reducing wait times, and creating a “wow factor,” our robots help
                  bring in more repeat business and boost turnover.
                </li>

                <li style={{ marginBottom: 12 }}>
                  <strong>Are they just functional, or do they also attract attention?</strong><br />
                  Both! Our robots are highly efficient but also create a novel, cool, and promotional experience that customers love to talk about and share.
                </li>
              </ol>
            </section>

            <section style={{ marginTop: 18, background: "#fff", padding: 18, borderRadius: 10, border: "1px solid #ece6da" }}>
              <h2 style={{ fontSize: 18, color: "#2E7D32", marginTop: 0 }}>Setup & Requirements</h2>

              <ol style={{ paddingLeft: 18, color: "#444", lineHeight: 1.7 }}>
                <li style={{ marginBottom: 12 }}>
                  <strong>What layouts work best for delivery robots?</strong><br />
                  Robots work best in level-floor venues with a minimum of 59 cm gap between tables for smooth navigation.
                </li>

                <li style={{ marginBottom: 12 }}>
                  <strong>Can robots work in spaces with stairs or uneven flooring?</strong><br />
                  Robots require level floors to operate safely. For venues with multiple levels, we recommend using them on the main floor or in designated service areas.
                </li>

                <li style={{ marginBottom: 12 }}>
                  <strong>What languages do the robots support?</strong><br />
                  Robots can be set in different languages and are voice-enabled to interact with customers in a natural way.
                </li>
              </ol>
            </section>

            <section style={{ marginTop: 18, background: "#fff", padding: 18, borderRadius: 10, border: "1px solid #ece6da" }}>
              <h2 style={{ fontSize: 18, color: "#2E7D32", marginTop: 0 }}>Plans & Pilots</h2>

              <ol style={{ paddingLeft: 18, color: "#444", lineHeight: 1.7 }}>
                <li style={{ marginBottom: 12 }}>
                  <strong>Do you offer a trial before committing?</strong><br />
                  Yes. We offer a free 2-week pilot for delivery robots. If the pilot converts into a contract, we also cover transport costs.
                </li>

                <li style={{ marginBottom: 12 }}>
                  <strong>What happens if I don’t proceed after the pilot?</strong><br />
                  No problem — you can return the robot at no charge.
                </li>

                <li style={{ marginBottom: 12 }}>
                  <strong>How much does leasing cost after the pilot?</strong><br />
                  Leasing costs vary depending on the robot model and contract duration. Our team will provide a tailored quote for your business.
                </li>
              </ol>
            </section>

            <section style={{ marginTop: 18, background: "#fff", padding: 18, borderRadius: 10, border: "1px solid #ece6da" }}>
              <h2 style={{ fontSize: 18, color: "#2E7D32", marginTop: 0 }}>Robot Models</h2>

              <ol style={{ paddingLeft: 18, color: "#444", lineHeight: 1.7 }}>
                <li style={{ marginBottom: 12 }}>
                  <strong>What types of robots do you offer?</strong><br />
                  We currently provide three models:
                  <ul style={{ marginTop: 8 }}>
                    <li>Delivery Bot – Simple, efficient table-to-kitchen delivery</li>
                    <li>Delivery & Promotional Bot – Handles deliveries while also promoting specials, offers, and ads</li>
                    <li>Closed Butler Bot – Designed for hotels and accommodation, offering secure and contactless delivery to rooms</li>
                  </ul>
                </li>

                <li style={{ marginBottom: 12 }}>
                  <strong>Can I switch or upgrade to a different robot model later?</strong><br />
                  Yes. We offer flexible leasing, and you can upgrade or switch models as your business needs change.
                </li>

                <li style={{ marginBottom: 12 }}>
                  <strong>Are the robots customizable for my brand?</strong><br />
                  Absolutely. Promotional bots can feature your branding, messages, and promotional campaigns.
                </li>
              </ol>
            </section>

            <div style={{ marginTop: 20, textAlign: "center" }}>
              <a href="/" style={{ color: "#2E7D32", textDecoration: "none", fontWeight: 700 }}>Back to home</a>
            </div>
          </div>
        </main>

        <footer style={{ borderTop: "1px solid #e8e3da", color: "#6b7280", padding: 18, textAlign: "center" }}>
          © {new Date().getFullYear()} Springle Robotics. All rights reserved.
        </footer>
      </div>
    </>
  );
}
