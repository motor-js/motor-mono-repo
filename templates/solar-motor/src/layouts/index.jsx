import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, hideFooter }) => {
  return (
    <>
      <Header />
      {children}
      {!hideFooter && <Footer />}
    </>
  );
};

Layout.defaultProps = {
  hideFooter: false,
};

export default Layout;
