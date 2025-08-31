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
            {/* ... other About Us paragraphs ... */}
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

        {/* Consultation Form */}
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
              <textarea name="description" placeholder="Description of what you are looking for" rows={5} style={inputStyle} />
              <button type="submit" style={{ padding: "10px 14px", background: "#2E7D32", color: "#fff", borderRadius: 8, fontWeight: 700 }}>
                Send
              </button>
            </form>
          </div>
        </section>

        {/* Case Studies + Contact sections remain same */}
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
