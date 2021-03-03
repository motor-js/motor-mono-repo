import React from "react";
import { Layout, Popover } from "antd";
import { Link } from "react-router-dom";

import { toggleCollapsedSideNav } from "appRedux/actions";
import SearchBox from "dev-resources/components/SearchBox";
import UserInfo from "dev-resources/components/UserInfo";
import Auxiliary from "util/Auxiliary";
import Selections from "components/engine/Selections";
import FilterOutlined from "@ant-design/icons/lib/icons/FilterOutlined";
import useSelections from 'dev-resources/hooks/useSelections'

import logo from 'assets/images/motor-black.png'

import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  TAB_SIZE,
} from "../../constants/ThemeSetting";
import { useDispatch, useSelector } from "react-redux";

const { Header } = Layout;

const Topbar = () => {
  const { locale, navStyle } = useSelector(({ settings }) => settings);
  const { navCollapsed, width } = useSelector(({ common }) => common);
  const dispatch = useDispatch();

  const { selections, clearSelections } = useSelections()

  const handleClear = field => clearSelections(field)

  return (
    <Header>
      {navStyle === NAV_STYLE_DRAWER ||
      ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) &&
        width < TAB_SIZE) ? (
        <div className="gx-linebar gx-mr-3">
          <i
            className="gx-icon-btn icon icon-menu"
            onClick={() => {
              dispatch(toggleCollapsedSideNav(!navCollapsed));
            }}
          />
        </div>
      ) : null}
      <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer">
        <img src={logo} alt="Logo" style={{ height: '30px', width: '95px'}} />
      </Link>

      <SearchBox
        styleName="gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg"
        placeholder="Search in app..."
      />
      <ul className="gx-header-notifications gx-ml-auto">
        <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
          <Popover
            overlayClassName="gx-popover-horizantal"
            placement="bottomRight"
            content={
              <SearchBox
                styleName="gx-popover-search-bar"
                placeholder="Search in app..."
              />
            }
            trigger="click"
          >
            <span className="gx-pointer gx-d-block">
              <i className="icon icon-search-new" />
            </span>
          </Popover>
        </li>
        <li className="gx-language">
        <Popover
          overlayClassName="gx-popover-horizantal"
          placement="bottomRight"
          content={<Selections selections={selections} handleClear={handleClear}/>}
          trigger="click"
          >
            <span className="gx-pointer gx-status-pos gx-d-block">
            <FilterOutlined style={{ fontSize: '18px' }} />
            { selections && selections.length > 0 ? 
              <span className="gx-status gx-status-rtl gx-small gx-orange" /> :
              <span className="gx-status gx-status-rtl gx-small" /> }
            </span>          
          </Popover>

        </li>
        {width >= TAB_SIZE ? null : (
          <Auxiliary>
            <li className="gx-user-nav">
              <UserInfo />
            </li>
          </Auxiliary>
        )}
      </ul>
    </Header>
  );
};

export default Topbar;
