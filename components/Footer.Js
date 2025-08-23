export default function Footer() {
    return (
      <footer style={{ borderTop: "1px solid #e5e7eb", marginTop: 40 }}>
        <div className="container" style={{ color: "#6b7280", padding: 16 }}>
          © {new Date().getFullYear()} RoboServe Automation. All rights reserved.
        </div>
      </footer>
    );
  }
  