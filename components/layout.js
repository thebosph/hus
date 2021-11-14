import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div className="w-screen max-w-6xl  mx-auto">
      <Head>
        <title>Hüseyin İcen | Istanbul Univercity</title>
        <meta charset="utf-8"></meta>
        <meta
          name="Description"
          CONTENT="Econometrics, Economics, Articles"
        ></meta>
      </Head>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
