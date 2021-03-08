import React, { useState } from "react";
import { Button, Dropdown, Layout, Menu, message, Popover, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import CustomScrollbars from "util/CustomScrollbars";
import languageData from "../languageData";
import SearchBox from "components/engine/SearchBox";
import UserInfo from "dev-resources/components/UserInfo";
import Selections from "components/engine/Selections";
import { toggleCollapsedSideNav } from "../../../appRedux/actions/Setting";
import HorizontalNav from "../HorizontalNav";
import { Link } from "react-router-dom";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import SelectOutlined from "@ant-design/icons/lib/icons/SelectOutlined";
import useSelections from "dev-resources/hooks/useSelections";

const { Header } = Layout;

const Option = Select.Option;
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Products</Menu.Item>
    <Menu.Item key="2">Apps</Menu.Item>
    <Menu.Item key="3">Blogs</Menu.Item>
  </Menu>
);

function handleMenuClick(e) {
  message.info("Click on menu item.");
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const BelowHeader = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const { navCollapsed } = useSelector(({ common }) => common);

  const { selections, clearSelections } = useSelections();

  const handleClear = (field) => clearSelections(field);

  const updateSearchChatUser = (evt) => {
    setSearchText(evt.target.value);
  };

  return (
    <div className="gx-header-horizontal gx-header-horizontal-dark gx-below-header-horizontal">
      <Header className="gx-header-horizontal-main">
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">
            <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3">
              <i
                className="gx-icon-btn icon icon-menu"
                onClick={() => {
                  dispatch(toggleCollapsedSideNav(!navCollapsed));
                }}
              />
            </div>
            <Link
              to="/"
              className="gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo"
            >
              <img alt="" src={require("assets/images/w-logo.png")} />
            </Link>
            <Link
              to="/"
              className="gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo"
            >
              <img alt="" src={require("assets/images/logo.png")} />
            </Link>
            <div className="gx-header-search gx-d-none gx-d-lg-flex">
              <SearchBox
                styleName="gx-lt-icon-search-bar-lg"
                placeholder="Search in app..."
                onChange={updateSearchChatUser}
                value={searchText}
              />

              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="jack">Products</Option>
                <Option value="lucy">Apps</Option>
                <Option value="Yiminghe">Blogs</Option>
              </Select>
            </div>

            <ul className="gx-header-notifications gx-ml-auto">
              <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
                <Popover
                  overlayClassName="gx-popover-horizantal"
                  placement="bottomRight"
                  content={
                    <div className="gx-d-flex">
                      <Dropdown overlay={menu}>
                        <Button>
                          Category <DownOutlined />
                        </Button>
                      </Dropdown>
                      <SearchBox
                        styleName="gx-popover-search-bar"
                        placeholder="Search in app..."
                        onChange={updateSearchChatUser}
                        value={searchText}
                      />
                    </div>
                  }
                  trigger="click"
                >
                  <span className="gx-pointer gx-d-block">
                    <i className="icon icon-search-new" />
                  </span>
                </Popover>
              </li>
              <li className="gx-msg">
                <Popover
                  overlayClassName="gx-popover-horizantal"
                  placement="bottomRight"
                  content={
                    <Selections
                      selections={selections}
                      handleClear={handleClear}
                    />
                  }
                  trigger="click"
                >
                  <span className="gx-pointer gx-status-pos gx-d-block">
                    <SelectOutlined />
                    {selections && selections.length > 0 ? (
                      <span className="gx-status gx-status-rtl gx-small gx-orange" />
                    ) : (
                      <span className="gx-status gx-status-rtl gx-small" />
                    )}
                  </span>
                </Popover>
              </li>
              <li className="gx-user-nav">
                <UserInfo />
              </li>
            </ul>
          </div>
        </div>
      </Header>
      <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block">
        <div className="gx-container">
          <div className="gx-header-horizontal-nav-flex">
            <HorizontalNav />
            <ul className="gx-header-notifications gx-ml-auto">
              <li>
                <span className="gx-pointer gx-d-block">
                  <i className="icon icon-menu-lines" />
                </span>
              </li>
              <li>
                <span className="gx-pointer gx-d-block">
                  <i className="icon icon-setting" />
                </span>
              </li>
              <li>
                <span className="gx-pointer gx-d-block">
                  <i className="icon icon-apps-new" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowHeader;