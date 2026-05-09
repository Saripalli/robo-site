export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e8e3da",
        color: "#6b7280",
        padding: 24,
        textAlign: "center",
        background: "#fff",
        marginTop: 40,
      }}
    >
      <div style={{ marginBottom: 10, fontSize: 14 }}>
        © 2026 Springle Robotics Pty Ltd.
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
          fontSize: 14,
        }}
      >
        <a
          href="/privacy-policy"
          style={{ color: "#2E7D32", textDecoration: "none" }}
        >
          Privacy Policy
        </a>

        <span>•</span>

        <a
          href="/terms"
          style={{ color: "#2E7D32", textDecoration: "none" }}
        >
          Terms of Use
        </a>

        <span>•</span>

        <a
          href="mailto:info@springlerobotics.com.au?subject=Enquiry from Website"
          style={{ color: "#2E7D32", textDecoration: "none" }}
        >
          Contact Us
      </a>
      </div>
    </footer>
  );
}