import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        zIndex: 10,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          padding: "0 24px",
        }}
      >
        {/* Logo + brand */}
        <Link
          href="/"
          aria-label="Springle Robotics Home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          {/* Using plain <img> to avoid Next/Image requirements */}
          <img
            src="/logo.png"
            alt="Springle Robotics Logo"
            style={{ height: 50, width: "auto", display: "block" }}
          />
          <span style={{ fontWeight: 800, color: "#2E7D32" }}>
            Springle Robotics
          </span>
        </Link>

        {/* Navigation links (all uniform now) */}
        <nav style={{ display: "flex", gap: 16 }}>
          <Link href="/products">Products</Link>
          <a href="#about">About</a>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
