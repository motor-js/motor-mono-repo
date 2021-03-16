import React, { useContext} from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ThemeContext } from "store";
import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";

const SidebarContent = (props) => {

const [themeState] = useContext(ThemeContext);
  
const { theme } = themeState;

  let pathname = window.location.pathname
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];

  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={theme === "light" ? "light" : "dark"}
            mode="inline"
          >
            <Menu.Item key="home">
              <Link to="/home">
                <i className="icon icon-home" />
                <span>
                  Home
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="components">
              <Link to="/components">
                <i className="icon icon-crm" />
                <span>
                  Components
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
