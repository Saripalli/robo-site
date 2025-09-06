// components/Breadcrumb.js
import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  // items: [{ href: '/', label: 'Home' }, ...]
  return (
    <nav aria-label="Breadcrumb" style={{ margin: "8px 0 18px", fontSize: 14 }}>
      <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: 8, alignItems: "center", color: "#555" }}>
        {items.map((it, idx) => (
          <li key={idx} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {it.href ? (
              <Link href={it.href} style={{ color: "#2E7D32", textDecoration: "none", fontWeight: 600 }}>
                {it.label}
              </Link>
            ) : (
              <span style={{ color: "#444" }}>{it.label}</span>
            )}

            {idx < items.length - 1 && (
              <span aria-hidden="true" style={{ color: "#9CA3AF" }}>
                ›
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
