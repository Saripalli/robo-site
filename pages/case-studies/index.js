// pages/case-studies/index.js
import Head from "next/head";
import Header from "../../components/Header";
import RightMenuLayout from "../../components/RightMenuLayout";

const CASES = [
  {
    id: "kikato-cafe",
    title: "Kikato in a CBD Coffee Lounge",
    summary: "One-month pilot showing efficiency, customer approval, and sales growth.",
    thumb: "/case-studies/kikato-thumb.jpg",
  },
  {
    id: "robot-ready",
    title: "Getting a Restaurant “Robot-Ready”",
    summary: "Smart layout tweaks helped Kikato integrate smoothly in a busy venue.",
    thumb: "/case-studies/robotready-thumb.jpg",
  },
  {
    id: "slope",
    title: "Navigating Slopes with Kikato",
    summary: "A venue adapted layout to handle a tricky 11-degree incline.",
    thumb: "/case-studies/slope-thumb.jpg",
  },
];

export default function CaseStudiesIndex() {
  return (
    <>
      <Head>
        <title>Case Studies — Springle Robotics</title>
      </Head>

      <Header />
      <RightMenuLayout />

      <main style={{ padding: "36px 20px", background: "#fdf8f3", minHeight: "80vh" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ color: "#2E7D32", fontSize: 32, marginBottom: 12 }}>Case Studies</h1>
          <p style={{ color: "#444", marginBottom: 20 }}>
            Real deployments showing how Kikato improved service, staff wellbeing, and revenue.
          </p>

          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {CASES.map((c) => (
              <a
                key={c.id}
                href={`/case-studies/${c.id}`}
                style={{
                  background: "#fff",
                  border: "1px solid #ece6da",
                  borderRadius: 10,
                  textDecoration: "none",
                  color: "inherit",
                  overflow: "hidden",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                }}
              >
                <img src={c.thumb} alt={c.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
                <div style={{ padding: 14 }}>
                  <h3 style={{ margin: "0 0 8px", color: "#2E7D32" }}>{c.title}</h3>
                  <p style={{ margin: 0, color: "#444" }}>{c.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
