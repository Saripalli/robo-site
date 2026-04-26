import Head from "next/head";

export default function Press() {
  const pressArticles = [
    {
      title: "Interview with Tech Entrepreneur – Shynitha",
      source: "Empowered BWB",
      date: "April 2026",
      link: "https://empoweredbwb.com/2026/04/13/interview-with-tech-entrepreneur-shynitha/",
      type: "Article",
      description:
        "An in-depth interview discussing the vision behind Springle Robotics and the future of service robots in Australia.",
    },
    {
      title: "Springle Robotics in Action",
      source: "Instagram",
      date: "2026",
      link: "https://www.instagram.com/p/DPVtBTfj-hd/",
      type: "Social",
      description:
        "A real-world glimpse of our robots supporting hospitality operations and improving efficiency.",
    },
  ];

  return (
    <>
      <Head>
        <title>Press & Media | Springle Robotics</title>
        <meta
          name="description"
          content="Explore media coverage, articles and press mentions about Springle Robotics and service robots in Australia."
        />
      </Head>

      <div style={{ background: "#fdf8f3", minHeight: "100vh", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          
          {/* Page Title */}
          <h1 style={{ color: "#2E7D32", fontSize: 36, marginBottom: 16 }}>
            Press & Media
          </h1>

          <p style={{ color: "#444", fontSize: 18, marginBottom: 30 }}>
            Discover how Springle Robotics is featured across media, showcasing innovations in 
            <strong> service robots in Australia</strong>, hospitality automation, and business transformation.
          </p>

          {/* Articles List */}
          {pressArticles.map((article, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                border: "1px solid #ece6da",
                borderRadius: 10,
                padding: 20,
                marginBottom: 20,
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <h2 style={{ marginBottom: 8 }}>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2E7D32", textDecoration: "none" }}
                >
                  {article.title}
                </a>
              </h2>

              <p style={{ fontSize: 14, color: "#777", marginBottom: 10 }}>
                {article.source} • {article.date} • {article.type}
              </p>

              <p style={{ color: "#444", marginBottom: 10 }}>
                {article.description}
              </p>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#2E7D32",
                  fontWeight: 600,
                  textDecoration: "underline",
                }}
              >
                Read full article →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}