export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  
    try {
      // If form posts as URL-encoded, Next parses it differently; for this simple demo, accept both:
      const data = req.body && Object.keys(req.body).length ? req.body : {};
      console.log("New lead:", data);
  
      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Server error" });
    }
  }
  