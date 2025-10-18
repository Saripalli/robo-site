// pages/case-studies/index.js
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import RightMenuLayout from "../../components/RightMenuLayout";

const CASES = [
  {
    id: "kikato-cafe",
    title: "Kikato in a CBD Coffee Lounge",
    summary: "One-month pilot showing efficiency, customer approval, and sales growth.",
    thumb: "/case-studies/kikato-thumb.jpg",
    href: "/case-studies/kikato-cafe",
  },
  {
    id: "robot-ready",
    title: "Getting a Restaurant “Robot-Ready”",
    summary: "Smart layout tweaks helped Kikato integrate smoothly in a busy venue.",
    thumb: "/case-studies/robotready-thumb.jpg",
    href: "/case-studies/robot-ready",
  },
  {
    id: "slope",
    title: "Navigating Slopes with Kikato",
    summary: "A venue adapted layout to handle a tricky 11-degree incline.",
    thumb: "/case-studies/slope-thumb.jpg",
    href: "/case-studies/slope",
  },
  {
    id: "mall-marketing",
    title: "Mall Marketing Activation",
    summary: "How Springle Robotics helped improve engagement in a mall setting.",
    thumb: "/case-studies/mall-marketing-thumb.jpg",
    href: "/case-studies/mall-marketing",
  },
  {
    id: "hosp",
    title: "Robotics in Hospitality",
    summary: "How Springle robots enhance efficiency in hospitality environments.",
    thumb: "/case-studies/hosp.jpg",
    href: "/case-studies/hosp",
  },
];

export default function CaseStudiesIndex() {
  return (
    <>
      <Head>
        <title>Case Studies — Springle Robotics</title>
        <meta
          name="description"
          content="See real-world examples of how Springle Robotics solutions improve service and efficiency across industries."
        />
      </Head>

      <Header />
      <RightMenuLayout />

      <main
        style={{
          padding: "36px 20px",
          background: "#fdf8f3",
          minHeight: "80vh",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ color: "#2E7D32", fontSize: 32, marginBottom: 12 }}>
            Case Studies
          </h1>
          <p style={{ color: "#444", marginBottom: 20 }}>
            Explore how Springle Robotics has improved productivity and customer
            experience across various industries.
          </p>

          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {CASES.map((c) => (
              <Link key={c.id} href={c.href} legacyBehavior>
                <a
                  style={{
                    background: "#fff",
                    border: "1px solid #ece6da",
                    borderRadius: 10,
                    textDecoration: "none",
                    color: "inherit",
                    overflow: "hidden",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    transition: "transform 0.18s ease, box-shadow 0.18s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow =
                      "0 2px 6px rgba(0,0,0,0.05)";
                  }}
                >
                  <img
                    src={c.thumb}
                    alt={c.title}
                    style={{
                      width: "100%",
                      height: 130,
                      objectFit: "contain",
                      background: "#fff",
                      padding: 10,
                      display: "block",
                    }}
                  />
                  <div style={{ padding: 14 }}>
                    <h3 style={{ margin: "0 0 8px", color: "#2E7D32" }}>
                      {c.title}
                    </h3>
                    <p style={{ margin: 0, color: "#444" }}>{c.summary}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 28, textAlign: "center" }}>
            <Link href="/" legacyBehavior>
              <a
                style={{
                  display: "inline-block",
                  padding: "10px 16px",
                  background: "#fff",
                  color: "#2E7D32",
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                ← Back to Home
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
