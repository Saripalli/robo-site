import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Testimonials() {
  return (
    <>
      <Header />
      <Section title="Testimonials" subtitle="What our customers say">
        <blockquote>“Reduced staff walking by 40% in our cafeteria.” — Café Bloom</blockquote>
      </Section>
      <Footer />
    </>
  );
}
``]
- **Why:** “Social proof builds trust and helps conversion.”

Create **`pages/contact.js`**:
```js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Contact() {
  return (
    <>
      <Header />
      <Section title="Contact Us" subtitle="Tell us about your facility and we’ll arrange a demo.">
        <form method="post" action="/api/contact" style={{ display: "grid", gap: 12, maxWidth: 560 }}>
          <input name="name" placeholder="Name" required style={{ padding: 10, border: "1px solid #e5e7eb", borderRadius: 8 }} />
          <input name="email" placeholder="Email" type="email" required style={{ padding: 10, border: "1px solid #e5e7eb", borderRadius: 8 }} />
          <input name="company" placeholder="Company" style={{ padding: 10, border: "1px solid #e5e7eb", borderRadius: 8 }} />
          <textarea name="message" placeholder="What problem are you trying to solve?" rows={5} style={{ padding: 10, border: "1px solid #e5e7eb", borderRadius: 8 }} />
          <button type="submit" style={{ padding: "10px 14px", background: "#111827", color: "#fff", borderRadius: 8 }}>Send</button>
        </form>
      </Section>
      <Footer />
    </>
  );
}
