import type { AppProps } from "next/app";
import "../styles/global.css";
import { Rubik, Bebas_Neue } from "@next/font/google";
import Link from "next/link";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
          --font-bebas: ${bebas.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>{`Best Indian Restaurant in Kennesaw`}</title>
        <meta
          name="description"
          content="Best Indian Restaurant in Sandy Springs serving delicious Indian food since 2014. Serving authentic Indian Curries, Authentic Biryanis, Indian Appetizers & Tandoor, Indian Chaat, Snacksn and Indian Desserts."
        />
        <link rel="canonical" href={`https://bawarchiatlanta.com/`} />
        <link rel="icon" href="/favicon.ico" />
        {/* OG Tags */}
        <meta
          property="og:title"
          content={`Best Indian Restaurant in Kennesaw`}
        />
        <meta property="og:image" content={"/BBA.jpg"} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={
            "Best Indian Restaurant in Sandy Springs serving delicious Indian food since 2014. Serving authentic Indian Curries, Authentic Biryanis, Indian Appetizers & Tandoor, Indian Chaat, Snacksn and Indian Desserts."
          }
        />

        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={"Best Indian Restaurant in Atlanta"}
        />
        <meta
          property="twitter:description"
          content={
            "Best Indian Restaurant in Sandy Springs serving delicious Indian food since 2014. Serving authentic Indian Curries, Authentic Biryanis, Indian Appetizers & Tandoor, Indian Chaat, Snacksn and Indian Desserts."
          }
        />
        <meta property="twitter:url" content={`https://bawarchiatlanta.com/`} />
        <meta property="twitter:image" content={"/BBA.jpg"} />
      </Head>
      <Toaster />
      <Component {...pageProps} />

      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        id="analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-228506755-1`}
      />
      <Script strategy="lazyOnload" id="analytics2">
        {`            window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', "UA-228506755-1");`}
      </Script>
      {/* <style jsx global>{`
        @import url("https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap");
      `}</style> */}
    </>
  );
}

export default MyApp;
