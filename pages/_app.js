import Head from "next/head";
import "../styles/globals.css"; // if you have it

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png?v=3" />
        <link rel="icon" href="/favicon.ico?v=3" />
        <meta name="theme-color" content="#2E7D32" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
