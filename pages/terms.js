import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use | Springle Robotics</title>
      </Head>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "48px 24px",
          lineHeight: 1.8,
          color: "#444",
        }}
      >
        <h1 style={{ color: "#2E7D32" }}>Terms of Use</h1>

        <p>
          The information provided on this website is for general informational
          purposes only.
        </p>

        <p>
          Springle Robotics makes reasonable efforts to ensure information is
          accurate but does not guarantee completeness or reliability.
        </p>

        <p>
          Users should independently evaluate products and services before making
          business decisions.
        </p>

        <p>
          All website content, branding, and materials are the property of
          Springle Robotics Pty Ltd unless otherwise stated.
        </p>
      </div>
    </>
  );
}