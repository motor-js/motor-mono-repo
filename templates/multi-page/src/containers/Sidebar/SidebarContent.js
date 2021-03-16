import React, { useContext} from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ThemeContext, LayoutContext } from "store";
import CustomScrollbars from "util/CustomScrollbars";
//import SidebarLogo from "./SidebarLogo";

const SidebarContent = ({ sidebarCollapsed, setSidebarCollapsed }) => {

//  let { navStyle, themeType } = useSelector(({ settings }) => settings);
//  let { pathname } = useSelector(({ common }) => common);
const [themeState] = useContext(ThemeContext);
  
const { theme } = themeState;

  let pathname = '/Home'
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];

  return (
    <>
      {/*<SidebarLogo
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />*/}
      <div className="gx-sidebar-content">
        <div
          className={`gx-sidebar-notifications`}
        >
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={theme === "light" ? "light" : "dark"}
            mode="inline"
          >
            <Menu.Item key="crypto">
              <Link to="/crypto">
                <i className="icon icon-crypto" />
                <span>
                  Home
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="crm">
              <Link to="/crm">
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
