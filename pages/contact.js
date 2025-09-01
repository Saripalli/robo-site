import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
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

    try {
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
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us – Springle Robotics</title>
      </Head>

      <Header />

      <main style={{ background: "#ffffff", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ color: "#2E7D32", margin: "0 0 16px", fontSize: 32 }}>
            Contact Us
          </h2>
          <p style={{ color: "#444", marginBottom: 24, fontSize: "18px" }}>
            Tell us about your facility and we’ll arrange a demo. Or reach us directly at:
          </p>

          <div style={{ marginBottom: 32, fontSize: "18px", lineHeight: 1.8 }}>
            <p>
              📧 Email:{" "}
              <a href="mailto:Info@springlerobotics.com.au">
                Info@springlerobotics.com.au
              </a>
            </p>
            <p>
              📞 Phone:{" "}
              <a href="tel:+61422502660">+61-422502660</a>
            </p>
            <p>
              📷 Instagram:{" "}
              <a
                href="https://www.instagram.com/springlebots/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @springlebots
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: 12, maxWidth: 560 }}
          >
            <input name="name" placeholder="Name" required style={inputStyle} />
            <input name="phone" placeholder="Phone" required style={inputStyle} />
            <input
              name="email"
              placeholder="Email"
              type="email"
              required
              style={inputStyle}
            />
            <input name="org" placeholder="Org/Company name" style={inputStyle} />
            <input name="location" placeholder="Location" style={inputStyle} />
            <textarea
              name="description"
              placeholder="What problem are you trying to solve?"
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
      </main>

      <Footer />
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
