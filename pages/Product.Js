import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Products() {
  return (
    <>
      <Header />
      <Section title="Products" subtitle="Modular platforms. Real-world durability.">
        <ul>
          <li>RoboServe Carry — compact delivery robot</li>
          <li>RoboServe Lift — elevator-integrated transporter</li>
          <li>RoboServe UV — autonomous UV-C sanitation</li>
        </ul>
      </Section>
      <Footer />
    </>
  );
}
