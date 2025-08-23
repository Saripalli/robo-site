import Link from "next/link";

export default function Header() {
  return (
    <header style={{ position: "sticky", top: 0, background: "#fff", borderBottom: "1px solid #e5e7eb", zIndex: 10 }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <Link href="/" className="logo" style={{ fontWeight: 800 }}>RoboServe</Link>
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
