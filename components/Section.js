export default function Section({ title, subtitle, children, id }) {
  return (
    <section id={id} className="container">
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
      <div style={{ marginTop: 16 }}>{children}</div>
    </section>
  );
}
