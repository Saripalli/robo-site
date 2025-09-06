// pages/catalog.js
import Head from "next/head";
import Header from "../components/Header";
import RightMenuLayout from "../components/RightMenuLayout";
import ProductCatalog from "../components/ProductCatalog";

export default function CatalogPage() {
  return (
    <>
      <Head>
        <title>Product Catalogue — Springle Robotics</title>
      </Head>

      <div style={{ background: "#fdf8f3", minHeight: "100vh" }}>
        <Header />
        <RightMenuLayout />

        <main style={{ padding: "32px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h1 style={{ color: "#2E7D32", fontSize: 36, marginBottom: 8 }}>
              Product Catalogue
            </h1>
            <p style={{ color: "#444", marginBottom: 20, fontSize: 18 }}>
              Explore each of our product platforms and choose the right robot for your use case.
            </p>

            {/* ProductCatalog is the component you already created */}
            <ProductCatalog />
          </div>
        </main>

        <footer
          style={{
            borderTop: "1px solid #e8e3da",
            color: "#6b7280",
            padding: 18,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Springle Robotics. All rights reserved.
        </footer>
      </div>
    </>
  );
}
