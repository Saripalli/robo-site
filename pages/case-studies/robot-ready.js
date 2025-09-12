// pages/case-studies/robot-ready.js
import Head from "next/head";
import Header from "../../components/Header";
import RightMenuLayout from "../../components/RightMenuLayout";

export default function RobotReady() {
  const pdfPath = "/case-studies/springle_kikato_robotready.pdf";

  return (
    <>
      <Head>
        <title>Getting a Restaurant “Robot-Ready” — Case Study</title>
      </Head>

      <Header />
      <RightMenuLayout />

      <main style={{ padding: "32px 20px", background: "#fdf8f3", minHeight: "80vh" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ color: "#2E7D32" }}>Getting a Restaurant “Robot-Ready”</h1>
          <p style={{ color: "#444" }}>How layout changes enabled smooth Kikato deployment. Read online or download below.</p>

          <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
            <a
              href={pdfPath}
              download
              style={{ background: "#2E7D32", color: "#fff", padding: "10px 14px", borderRadius: 8, textDecoration: "none", fontWeight: 700 }}
            >
              Download PDF
            </a>
            <a href="/case-studies" style={{ alignSelf: "center", color: "#2E7D32", textDecoration: "none" }}>
              ← Back to Case Studies
            </a>
          </div>

          <div style={{ marginTop: 20, border: "1px solid #ddd", borderRadius: 8, overflow: "hidden" }}>
            <object data={pdfPath} type="application/pdf" width="100%" height="900">
              <p>If the PDF doesn’t display, <a href={pdfPath} download>download it here</a>.</p>
            </object>
          </div>
        </div>
      </main>
    </>
  );
}
      