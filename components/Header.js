import Link from "next/link";

export default function Header() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#robots-food", label: "Our Robots" },
    { href: "#industries", label: "Industries" },
    { href: "#consult", label: "Consultation" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" }, // ✅ goes to standalone page now
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
          padding: "0 24px",
        }}
      >
        {/* Logo + Brand */}
        <Link
          href="/"
          aria-label="Springle Robotics Home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <img
            src="/logo.png"
            alt="Springle Robotics Logo"
            style={{ height: 70, width: "auto", display: "block" }}
          />
          <span style={{ fontWeight: 900, color: "#2E7D32", fontSize: 28 }}>
            Springle Robotics
          </span>
        </Link>

        {/* Horizontal nav */}
        <nav style={{ display: "flex", gap: 28, fontSize: 18 }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                position: "relative",
                textDecoration: "none",
                color: "#1f2937",
                fontWeight: 500,
                padding: "4px 0",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2E7D32")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1f2937")}
            >
              {item.label}
              <span
                className="underline"
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  height: "2px",
                  width: "0",
                  backgroundColor: "#2E7D32",
                  transition: "width 0.3s ease",
                }}
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
