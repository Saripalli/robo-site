import Header from "../components/Header";
import Footer from "../components/footer";
import Section from "../components/Section";

export default function Testimonials() {
  return (
    <>
      <Header />
      <Section title="Testimonials" subtitle="What our customers say">
        <blockquote>
          “Reduced staff walking by 40% in our cafeteria.” — Café Bloom
        </blockquote>
      </Section>
      <Footer />
    </>
  );
}
