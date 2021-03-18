import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";


const NavItems = () => {

  let pathname = window.location.pathname
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  
  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal"
    >
      <Menu.Item key="main/home">
        <Link to="/home">
          <i className="icon icon-home" />
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="main/components">
        <Link to="/components">
          <i className="icon icon-components" />
          <span>Components</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavItems;
