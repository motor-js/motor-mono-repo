import React from "react";
import NavItems from "./NavItems";
import Topbar from "../";

const HorizontalNav = () => {

  return (
    <div className="gx-header-horizontal gx-below-header-horizontal">
      <Topbar topNav />
        <div className="gx-container gx-d-none gx-d-lg-block">
          <div className="gx-header-horizontal-nav">
            <NavItems/>
          </div>
      </div>          
    </div>
  );
};

export default HorizontalNav;
