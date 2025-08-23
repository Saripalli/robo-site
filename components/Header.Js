import Link from "next/link";
import Image from "next/image";

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
          {/* 👇 This looks for /public/logo.png in your project */}
          <Image
            src="/logo.png"
            alt="Springle Robotics Logo"
            width={140}
            height={40}
            priority
          />
          <span style={{ fontWeight: 800, color: "#2E7D32" }}>
            Springle Robotics
          </span>
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: 16 }}>
          <Link href="/solutions">Solutions</Link>
          <Link href="/products">Products</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/about">About</Link>
          <Link
            href="/contact"
            style={{
              padding: "8px 12px",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
