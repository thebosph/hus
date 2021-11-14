import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Huseyin Icen | Istanbul Univercity</title>
        <meta charset="utf-8"></meta>
        <meta
          name="Description"
          CONTENT="Econometrics, Economics, Articles"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
