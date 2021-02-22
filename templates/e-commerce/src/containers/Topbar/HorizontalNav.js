import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
} from "../../constants/ThemeSetting";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const HorizontalNav = () => {
  const navStyle = useSelector(({ settings }) => settings.navStyle);
  const { pathname } = useSelector(({ common }) => common);

  const getNavStyleSubMenuClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
      default:
        return "gx-menu-horizontal";
    }
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal"
    >
      <SubMenu
        className={getNavStyleSubMenuClass(navStyle)}
        key="main"
        title="Menu 1"
      >
        <SubMenu
          className="gx-menu-horizontal"
          key="dashboard"
          title={
            <span>
              {" "}
              <i className="icon icon-dasbhoard" />
              Sub Menu 1
            </span>
          }
        >
          <Menu.Item key="main/dashboard/crypto">
            <Link to="/Crypto">
              <i className="icon icon-crypto" />
              Crypo
            </Link>
          </Menu.Item>
          <Menu.Item key="main/dashboard/crm">
            <Link to="/CRM">
              <i className="icon icon-crm" />
              CRM
            </Link>
          </Menu.Item>
          <Menu.Item key="main/dashboard/listing">
            <Link to="/main/dashboard/listing">
              <i className="icon icon-listing-dbrd" />
              Listing
            </Link>
          </Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;
