import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from "dev-resources/constants/ThemeSetting";
import { useSelector } from "react-redux";

const SidebarContent = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  let { navStyle, themeType } = useSelector(({ settings }) => settings);
  let { pathname } = useSelector(({ common }) => common);

  const getNoHeaderClass = (navStyle) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <>
      <SidebarLogo
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      <div className="gx-sidebar-content">
        <div
          className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}
        >
          {/*  <UserProfile /> */}
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
            mode="inline"
          >
            <Menu.Item key="crypto">
              <Link to="/crypto">
                <i className="icon icon-crypto" />
                <span>
                  {/* <IntlMessages id="sidebar.dashboard.crypto" /> */}
                  Crypto
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="crm">
              <Link to="/crm">
                <i className="icon icon-crm" />
                <span>
                  {/* <IntlMessages id="sidebar.dashboard.crm" /> */}
                  CRM
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;
