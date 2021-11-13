import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="w-screen max-w-6xl  mx-auto">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
