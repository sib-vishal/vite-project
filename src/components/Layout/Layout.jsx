import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Header from "../Header";
// import Footer from "../Footer";

function Layout({
  title,
  description,
  keywords,
  children,
  noheader,
  nofooter,
}) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <>
        {noheader ? null : <Header />}
        <main
          style={{
            minHeight: "80vh",
          }}
        >
          {children}
        </main>
        {nofooter ? null : <Footer />}
      </>
    </HelmetProvider>
  );
}

export default Layout;
