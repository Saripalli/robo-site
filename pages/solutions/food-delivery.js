// pages/solutions/food-delivery.js
import Head from "next/head";
import Header from "../../components/Header";
import RightMenuLayout from "../../components/RightMenuLayout";

export default function FoodDeliveryPage() {
  const bots = [
    {
      title: "The Butler BOT",
      image: "/solutions/Butler-bot.jpg",
      description: `The Butler Bot is designed to deliver a premium, hands-free service experience. 
With its elegant design and multi-functional trays, it operates like a reliable digital butler, 
assisting staff with effortless item delivery and collection.

• Large load capacity for transporting meals, drinks, or supplies
• Intelligent route planning for smooth and efficient service
• Interactive design with voice and touch features for user-friendly operation

Ideal for hotels, restaurants, aged care, and event venues, the butler bot elevates service 
quality while freeing staff to focus on hospitality, care, and connection.`,
    },
    {
      title: "The Delivery and Promotional BOT",
      image: "/solutions/Kikato-bot.jpg",
      description: `This is a compact, intelligent service robot designed to make everyday operations smoother 
and more efficient. With its multi-tray design and precise navigation system, the BOT delivers 
food, drinks, or items seamlessly across busy environments and also runs campaigns. 

• Easy to set up and operate – ready to work in minutes
• Lightweight and versatile – perfect for restaurants, cafés, aged care, and offices
• Improves customer experience by freeing staff to focus on connection and service

Springle Robotics brings this BOT to Australian businesses as an affordable, reliable solution 
for tackling staff shortages while enhancing guest satisfaction.`,
    },
    {
      title: "Simply Delivery BOT",
      image: "/solutions/Simple-bot.jpg",
      description: `The BOT is a sleek, agile service robot built to navigate tight spaces with ease. 
Compact yet powerful, it delivers meals, drinks, and items efficiently while maintaining 
a smooth and stable service experience.

• Slim design – ideal for narrow aisles and crowded venues
• Stable delivery with shock-absorbing trays
• Smart obstacle avoidance for safe navigation in busy spaces

Perfect for cafés, restaurants, and small venues, the delivery helps reduce staff workload 
and ensures a faster, more enjoyable customer experience.`,
    },
  ];

  return (
    <>
      <Head>
        <title>Food Delivery BOTS — Springle Robotics</title>
      </Head>
      <Header />
      <RightMenuLayout />
      <main style={{ background: "#fdf8f3", padding: "48px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ color: "#2E7D32", fontSize: 32, marginBottom: 20 }}>
            Food Delivery BOTS
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
