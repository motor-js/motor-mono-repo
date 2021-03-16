import React, { useEffect, useState, useContext } from "react";
import { Drawer, Layout } from "antd";
import { ThemeContext, LayoutContext } from "store";
import { appSettings } from "settings";

import SidebarContent from "./SidebarContent";


/*
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE,
} from "../../constants/ThemeSetting";
*/

const { Sider } = Layout;

const Sidebar = () => {
  let [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  
  const [themeState] = useContext(ThemeContext);
  
  const { theme } = themeState;

  let drawerStyle = "gx-collapsed-sidebar";

  const onToggleCollapsedNav = () => {
    // dispatch(toggleCollapsedSideNav(!navCollapsed));
  };

  /*
  useEffect(() => {
    setSidebarCollapsed(navStyle === NAV_STYLE_MINI_SIDEBAR);
  }, [navStyle]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      //dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);

  
  */

  /*
  if (navStyle === NAV_STYLE_FIXED) {
    drawerStyle = "";
  } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
    drawerStyle = "gx-mini-sidebar gx-mini-custom-sidebar";
  } else if (navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
    drawerStyle = "gx-custom-sidebar"
  } else if (navStyle === NAV_STYLE_MINI_SIDEBAR) {
    drawerStyle = "gx-mini-sidebar";
  } else if (navStyle === NAV_STYLE_DRAWER) {
    drawerStyle = "gx-collapsed-sidebar"
  }
  if ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR
    || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) && width < TAB_SIZE) {
    drawerStyle = "gx-collapsed-sidebar"
  }
  */

  return (
    <Sider
      className={`gx-app-sidebar ${drawerStyle} ${
        theme !== "light" ? "gx-layout-sider-dark" : null
      }`}
      trigger={null}
      collapsed={sidebarCollapsed}
      theme={theme === "light" ? "light" : "dark"}
      collapsible
    >
      <Drawer
        className={`gx-drawer-sidebar ${
          theme !== "light" ? "gx-drawer-sidebar-dark" : null
        }`}
        placement="left"
        closable={false}
        onClose={onToggleCollapsedNav}
        visible={false}
      >
        <SidebarContent
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />
        </Drawer>
    </Sider>
  );
};

export default Sidebar;
