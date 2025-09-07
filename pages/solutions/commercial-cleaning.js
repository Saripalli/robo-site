// pages/solutions/commercial-cleaning.js
import Head from "next/head";
import Header from "../../components/Header";
import RightMenuLayout from "../../components/RightMenuLayout";

export default function CleaningPage() {
  const bots = [
    {
      title: "AI-Powered Scrubber Cleaning Robot",
      image: "/solutions/Super-bot.jpg",
      description: `This AI powered BOT is a next-generation cleaning robot built for large commercial 
and public spaces. Combining autonomous navigation with powerful cleaning functions, 
it ensures spotless, hygienic environments with minimal human effort. 

• Multi-function cleaning – sweeping, vacuuming, and mopping in one unit
• Advanced obstacle detection for safe, smooth operation
• Long battery life for extended cleaning sessions
• Smart scheduling to work around business hours
• 5,000m² per charge

Perfect for shopping centres, offices, airports, and hospitals, the BOT delivers consistent 
cleanliness and efficiency, reducing costs while maintaining a welcoming environment.`,
    },
    {
      title: "AI-Powered Spot Cleaner, Sweeper & Vacuum Robot",
      image: "/solutions/Mega-bot.jpg",
      description: `This BOT is an advanced AI-driven cleaning robot designed for precise spot cleaning 
and intelligent floor care. With its powerful suction, sweeping capability, and autonomous 
navigation, it delivers spotless results in high-traffic environments. 

• 3-in-1 cleaning – spot cleaning, sweeping, and vacuuming
• AI-powered path planning for efficient, targeted performance
• Compact and agile – ideal for tight or busy spaces
• Quiet operation to minimize disruption in workplaces and public venues
• 8000m² per charge

Perfect for offices, retail spaces, hotels, libraries and healthcare facilities, the BOT ensures 
clean, safe, and welcoming spaces while reducing manual workload.`,
    },
    {
      title: "Compact Everyday Maintenance Robots (All-In-One & Vacuum Only)",
      image: "/solutions/Cute-bot.jpg",
      description: `This BOT delivers fast, autonomous floor care for busy indoor spaces. It sweeps, 
vacuums, and dust-mops with a 61 cm cleaning width, covering up to 2,500 m² on a full 
charge. Use dual operation modes  

• 3-in-1 cleaning: sweeping, vacuuming, dust mopping
• Coverage: up to 2,500 m²/charge; ~600 m²/h efficiency
• Battery life: up to 6 h (sweep/vac) or 10 h (dust-mop); 5–6 h charge time
• Controls: extendable handle + remote tasking in the KEENON App
• Power: up to 19,000 Pa suction for debris pickup`,
    },
    {
      title: "Handheld Scrubber & Dryer",
      image: "/solutions/Micro-bot.jpg",
      description: `This BOT is a powerful and versatile handheld floor-cleaning robot designed for 
quick, effective maintenance in high-traffic areas. Combining scrubbing and drying functions 
in one compact unit, it ensures spotless, slip-free floors with minimal effort. 

• 2-in-1 cleaning – scrubs tough stains and dries instantly
• Ergonomic handheld design for comfort and easy maneuverability
• Strong suction and water recovery for streak-free floors
• Compact & flexible – ideal for corners, edges, and small spaces

Perfect for restaurants, hotels, offices, and public venues, the BOT delivers professional-grade 
cleaning in a lightweight, user-friendly design that saves both time and labour.`,
    },
  ];

  return (
    <>
      <Head>
        <title>Commercial Cleaning BOTS — Springle Robotics</title>
      </Head>
      <Header />
      <RightMenuLayout />
      <main style={{ background: "#fdf8f3", padding: "48px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ color: "#2E7D32", fontSize: 32, marginBottom: 20 }}>
            Commercial Cleaning BOTS
          </h1>
          {bots.map((bot, idx) => (
            <section
              key={idx}
              style={{
                background: "#fff",
                padding: 24,
                borderRadius: 12,
                marginBottom: 28,
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 20,
                alignItems: "center",
              }}
            >
              <img
                src={bot.image}
                alt={bot.title}
                style={{
                  width: "100%",
                  maxWidth: 200,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
              <div>
                <h2 style={{ color: "#2E7D32", margin: "0 0 10px" }}>
                  {bot.title}
                </h2>
                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    fontFamily: "inherit",
                    color: "#444",
                    lineHeight: 1.6,
                  }}
                >
                  {bot.description}
                </pre>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
