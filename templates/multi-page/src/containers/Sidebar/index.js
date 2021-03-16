import React, { useState, useContext } from "react";
import { Drawer, Layout } from "antd";
import { ThemeContext, NavContext } from "store";

import SidebarContent from "./SidebarContent";

const { Sider } = Layout;

const Sidebar = () => {
  let [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  
  const [themeState] = useContext(ThemeContext);
  const [navState, navDispatch] = useContext(NavContext);
  
  const { theme } = themeState;
  const { nav } = navState

  let drawerStyle = "gx-collapsed-sidebar";

  const onToggleCollapsedNav = () => {
      navDispatch({
       type: "TOGGLE_NAV",
       payload: !navState,
     })
  };

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
        visible={nav}
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
