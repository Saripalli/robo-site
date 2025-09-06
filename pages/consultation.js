import { useState } from "react";

export default function Consultation() {
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    setFeedback("Sending...");

    try {
      const res = await fetch("/api/send-consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Network error");
      setFeedback("✅ Your consultation request was sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      setFeedback(
        "❌ Something went wrong. Please try again or email info@springlerobotics.com.au"
      );
    }
  }

  return (
    <section id="consultation" className="section">
      <h2>Book a Consultation</h2>
      <form id="consultForm" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" />
        </label>
        <label>
          Message
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Book Consultation</button>
      </form>
      <div role="status" aria-live="polite">{feedback}</div>
    </section>
  );
}
