import { useRouter } from "next/router";
import caseStudies from "../../data/case-studies";
import Link from "next/link";

export default function CaseStudyDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) return <p>Loading or Case Study not found...</p>;

  return (
    <main style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>{caseStudy.title}</h1>
      {caseStudy.highlights.length > 0 && (
        <section style={{ backgroundColor: "#e6f4e6", padding: "1rem", borderRadius: 8 }}>
          <h3>Highlights</h3>
          <ul>
            {caseStudy.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </section>
      )}
      {caseStudy.content.map((paragraph, i) => (
        <p key={i} style={{ lineHeight: 1.6 }}>
          {paragraph}
        </p>
      ))}
      <Link href="/case-studies">
        <a style={{ display: "inline-block", marginTop: "2rem", color: "#2E7D32" }}>&larr; Back to Case Studies</a>
      </Link>
    </main>
  );
}
