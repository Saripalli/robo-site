export default function Section({ title, subtitle, children }) {
    return (
      <section className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
        {title && <h2 style={{ marginBottom: 8 }}>{title}</h2>}
        {subtitle && <p style={{ color: "#6b7280", marginTop: 0 }}>{subtitle}</p>}
        <div style={{ marginTop: 16 }}>{children}</div>
      </section>
    );
  }
  