import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Solutions() {
  return (
    <>
      <Header />
      <Section title="Solutions" subtitle="Purpose-built robots for your environment.">
        <ul>
          <li>Cafeterias: Delivery, tray return, cleaning assist</li>
          <li>Warehouses: Material movement, zone routing</li>
          <li>Hospitals: Medicine delivery, sanitation patrols</li>
        </ul>
      </Section>
      <Footer />
    </>
  );
}
    