import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "store";

import logoLight from "assets/images/motor-red.png";
import logoDark from "assets/images/motor-white.png";

const SidebarLogo = () => {
  
  const [themeState] = useContext(ThemeContext);
  
  const { theme } = themeState;

  return (
    <div className="gx-layout-sider-header">
      <Link to="/" className="gx-site-logo">
        {themeState.theme === "light" ? (
          <img
            src={logoLight}
            alt="Logo"
            style={{ height: "40px", width: "120px" }}
          />
        ) : (
          <img
            src={logoDark}
            alt="Logo"
            style={{ height: "40px", width: "120px" }}
          />
        )}      
      </Link>
    </div>
  );
};

export default SidebarLogo;
