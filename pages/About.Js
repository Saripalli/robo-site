import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function About() {
  return (
    <>
      <Header />
      <Section title="About RoboServe" subtitle="Automation that empowers people.">
        <p>We design practical service robots so your teams can focus on high-value work.</p>
      </Section>
      <Footer />
    </>
  );
}
