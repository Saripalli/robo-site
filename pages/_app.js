import Head from "next/head";
import "../styles/globals.css";
import { Poppins } from "next/font/google";

// Load Poppins (400 = regular, 600 = semi-bold, 700 = bold)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#2E7D32" />
      </Head>
      {/* Apply Poppins globally */}
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
