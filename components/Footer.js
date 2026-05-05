export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e8e3da",
        color: "#6b7280",
        padding: 18,
        textAlign: "center",
        fontSize: 14,
      }}
    >
      <div style={{ marginBottom: 6 }}>
        © {new Date().getFullYear()} Springle Robotics. All rights reserved.
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", lineHeight: 1.5 }}>
        We respect your privacy. Any information you share with Springle Robotics will be used only to respond to your enquiry and will never be sold or shared with third parties.
      </div>
    </footer>
  );
}