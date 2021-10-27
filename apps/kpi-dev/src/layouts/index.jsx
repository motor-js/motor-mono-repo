import React from "react";
// import Header from "./header";
// import Footer from "./footer";

const Layout = ({ children, hasSidebar, hideFooter, sidebarLayout }) => {
  return (
    <>
      {/* <Header hasSidebar={hasSidebar} sidebarLayout={sidebarLayout} /> */}
      {children}
      {/* {!hideFooter && <Footer />} */}
    </>
  );
};

Layout.defaultProps = {
  hideFooter: false,
};

export default Layout;
