// components/Header.js
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header style={{ position: "sticky", top: 0, background: "#fff", borderBottom: "1px solid #e5e7eb", zIndex: 10 }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, padding: "0 24px" }}>
        <Link href="/" aria-label="Springle Robotics Home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          {/* Give next/image required intrinsic size, then visually lock height and let width auto-scale */}
          <Image
            src="/logo.png"
            alt="Springle Robotics Logo"
            width={200}           // intrinsic width (adjust if your logo is wider/narrower)
            height={60}           // intrinsic height (ratio only matters)
            priority
            style={{ height: 50, width: "auto" }}  // final display size: 50px tall, keeps aspect ratio
          />
          <span style={{ fontWeight: 800, color: "#2E7D32" }}>Springle Robotics</span>
        </Link>

        <nav style={{ display: "flex", gap: 16 }}>
          <Link href="/solutions">Solutions</Link>
          <Link href="/products">Products</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" style={{ padding: "8px 12px", border: "1px solid #e5e7eb", borderRadius: 8 }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
