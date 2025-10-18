// pages/case-studies/hosp.js
import Head from "next/head";
import Header from "../../components/Header";
import RightMenuLayout from "../../components/RightMenuLayout";

export default function HospCaseStudy() {
  const pdfPath = "/case-studies/springle_hosp.pdf";

  return (
    <>
      <Head>
        <title>Robotics in Hospitality — Springle Robotics</title>
      </Head>
      <Header />
      <RightMenuLayout />

      <main
        style={{
          padding: "32px 20px",
          background: "#fdf8f3",
          minHeight: "80vh",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ color: "#2E7D32" }}>Robotics in Hospitality</h1>
          <p style={{ color: "#444" }}>
            Discover how Springle Robotics enhanced efficiency and guest
            experience in the hospitality sector.
          </p>

          <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
            <a
              href={pdfPath}
              download
              style={{
                background: "#2E7D32",
                color: "#fff",
                padding: "10px 14px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Download PDF
            </a>
            <a
              href="/case-studies"
              style={{
                alignSelf: "center",
                color: "#2E7D32",
                textDecoration: "none",
              }}
            >
              ← Back to Case Studies
            </a>
          </div>

          <div
            style={{
              marginTop: 20,
              border: "1px solid #ddd",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <object
              data={pdfPath}
              type="application/pdf"
              width="100%"
              height="900px"
            >
              <iframe
                src={pdfPath + "#view=FitH"}
                width="100%"
                height="900px"
                style={{ border: "none" }}
                title="Hospitality PDF"
              />
              <div style={{ padding: 20 }}>
                <p style={{ color: "#444" }}>
                  PDF viewer not available.{" "}
                  <a
                    href={pdfPath}
                    download
                    style={{ color: "#2E7D32", fontWeight: 700 }}
                  >
                    Download PDF
                  </a>{" "}
                  to view.
                </p>
              </div>
            </object>
          </div>
        </div>
      </main>
    </>
  );
}
