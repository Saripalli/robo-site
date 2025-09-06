// pages/catalog.js
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import RightMenuLayout from "../components/RightMenuLayout";
import ProductCatalog from "../components/ProductCatalog";
import Breadcrumb from "../components/Breadcrumb";

export default function CatalogPage() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Our Robotic Solutions" },
  ];

  return (
    <>
      <Head>
        <title>Our Robotic Solutions — Springle Robotics</title>
        <meta
          name="description"
          content="Explore Springle Robotics product catalog: Butler Bot, Sweeper Bot, Promo Bot, and more. Designed to serve real-world needs."
        />
        <meta property="og:title" content="Our Robotic Solutions — Springle Robotics" />
        <meta
          property="og:description"
          content="Browse our robotic solutions including Butler Bot, Compact Bot, Sweeper Bot and more."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://springlerobotics.com.au/catalog" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div style={{ background: "#fdf8f3", minHeight: "100vh" }}>
        <Header />
        <RightMenuLayout />

        <main style={{ padding: "28px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Breadcrumb items={breadcrumbItems} />

            <h1 style={{ color: "#2E7D32", fontSize: 36, marginBottom: 8 }}>
              Our Robotic Solutions
            </h1>
            <p style={{ color: "#444", marginBottom: 20, fontSize: 18 }}>
              Explore each of our product platforms and choose the right robot for your business needs.
            </p>

            <ProductCatalog />
          </div>
        </main>

        {/* Back to Top button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            style={{
              position: "fixed",
              bottom: 30,
              right: 30,
              backgroundColor: "#2E7D32",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 48,
              height: 48,
              fontSize: 22,
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              transition: "opacity 0.3s ease",
              zIndex: 100,
            }}
          >
            ↑
          </button>
        )}

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
