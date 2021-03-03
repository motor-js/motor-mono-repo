import React, { useState, useContext } from "react";
import { Layout, Popover, Switch } from "antd";
import { Link } from "react-router-dom";
import FilterOutlined from "@ant-design/icons/lib/icons/FilterOutlined";

//import SearchBox from "dev-resources/components/SearchBox";
//import UserInfo from "dev-resources/components/UserInfo";
import Auxiliary from "util/Auxiliary";
import Selections from "components/engine/Selections";
import MotorSearch from "components/engine/MotorSearch"
import useSelections from 'dev-resources/hooks/useSelections'
import { ThemeContext } from 'store'
import { appSettings } from 'settings'

import logo from 'assets/images/motor-black.png'

const { Header } = Layout;

const Topbar = () => {

  const [searchText, setSearchText] = useState("");
  const [state, dispatch] = useContext(ThemeContext);

  const { selections, clearSelections } = useSelections()
  const { showThemeSwitch } = appSettings

  const handleClear = field => clearSelections(field)
  
  const handleSearch = (evt) => {
    setSearchText(evt.target.value);
  };

  const handleSwitch = () => dispatch({type: 'TOGGLE_THEME', payload: state.theme === 'light' ? 'dark' : 'light'})

  return (
    <Header>
      {/*navStyle === NAV_STYLE_DRAWER ||
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
          ) : null*/}
      <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer">
        <img src={logo} alt="Logo" style={{ height: '30px', width: '95px'}} />
      </Link>
      <MotorSearch
        styleName="gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg"
        placeholder="Search in app..."
        onChange={handleSearch}
        value={searchText}
      />
      <ul className="gx-header-notifications gx-ml-auto">
        <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
          <Popover
            overlayClassName="gx-popover-horizantal"
            placement="bottomRight"
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
        { showThemeSwitch && 
          <li className="gx-language">
          <Switch onChange={handleSwitch}/> 
          </li>
        }
        {/*width >= TAB_SIZE ? null : (
          <Auxiliary>
            <li className="gx-user-nav">
              <UserInfo />
            </li>
          </Auxiliary>
        )*/}
      </ul>
    </Header>
  );
};

export default Topbar;
