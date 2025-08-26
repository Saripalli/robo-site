import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";

export default function Products() {
  return (
    <>
      <Header />
      <Section title="Our Products" subtitle="Robots for cafeterias, warehouses, and hospitals">
        <p>Explore our detailed product offerings in the catalogue below.</p>

        <a
          href="/catalogue.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 12,
            padding: "10px 16px",
            background: "#2E7D32",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600
          }}
        >
          📄 Download Product Catalogue
        </a>
      </Section>
      <Footer />
    </>
  );
}
