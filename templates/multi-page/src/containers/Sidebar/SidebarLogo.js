import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "store";

import logoLight from "assets/images/motor-red.png";
import logoDark from "assets/images/motor-white.png";
import logoSymbol from "assets/images/m-logo.png";

const SidebarLogo = () => {
  const [themeState] = useContext(ThemeContext);

  return (
    <div className="gx-layout-sider-header">
      <Link to="/" className="gx-site-logo">
        {themeState.theme === "light" ? (
          <div>
            <img
              src={logoSymbol}
              alt="Logo"
              style={{ height: "40px", width: "40px" }}
            />
            <img
              src={logoLight}
              alt="Logo"
              style={{ height: "40px", width: "120px" }}
            />
          </div>
        ) : (
          <div>
            <img
              src={logoSymbol}
              alt="Logo"
              style={{ height: "40px", width: "40px" }}
            />
            <img
              src={logoDark}
              alt="Logo"
              style={{ height: "40px", width: "120px" }}
            />
          </div>
        )}
      </Link>
    </div>
  );
};

export default SidebarLogo;
