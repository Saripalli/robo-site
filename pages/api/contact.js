import sgMail from "@sendgrid/mail";

// Load API key from Vercel environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, phone, email, org, location, description } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const msg = {
      to: "Info@springlerobotics.com.au", // ✅ your receiving email
      from: "Info@springlerobotics.com.au", // ✅ must be verified in SendGrid
      subject: "New Consultation Request - Springle Robotics",
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Company: ${org || "N/A"}
        Location: ${location || "N/A"}
        Message: ${description || "N/A"}
      `,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${org || "N/A"}</p>
        <p><strong>Location:</strong> ${location || "N/A"}</p>
        <p><strong>Message:</strong><br/>${description || "N/A"}</p>
      `,
    };

    await sgMail.send(msg);

    return res.status(200).json({ message: "Enquiry sent successfully" });
  } catch (error) {
    console.error("SendGrid error:", error);

    if (error.response) {
      console.error(error.response.body);
    }

    return res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
}
