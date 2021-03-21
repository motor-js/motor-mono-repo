import React, { useState, useContext } from "react";
import { Layout, Popover, Switch } from "antd";
import FilterOutlined from "@ant-design/icons/lib/icons/FilterOutlined";
import SelectOutlined from "@ant-design/icons/lib/icons/SelectOutlined";

import Selections from "components/engine/Selections";
import Filters from "components/engine/Filters";
import MotorSearch from "components/engine/MotorSearch";

import { useSelections } from "@motor-js/engine";
import { ThemeContext } from "store";
import { appSettings } from "settings";

import logoLight from "assets/images/motor-red.png";
import logoDark from "assets/images/motor-white.png";

const { Header } = Layout;

const Topbar = () => {
  const [searchText, setSearchText] = useState("");
  const [themeState, themeDispatch] = useContext(ThemeContext);

  const { selections, clearSelections } = useSelections();
  const { showThemeSwitch } = appSettings;

  const handleClear = (field) => clearSelections(field);

  const handleSearch = (evt) => {
    setSearchText(evt.target.value);
  };

  const handleSwitch = () =>
    themeDispatch({
      type: "TOGGLE_THEME",
      payload: themeState.theme === "light" ? "dark" : "light",
    });

  return (
    <Header>
      {/* <div className="gx-header-horizontal-main-flex">*/}
      {themeState.theme === "light" ? (
        <img
          src={logoLight}
          alt="Logo"
          style={{ height: "40px", width: "120px" }}
        />
      ) : (
        <img
          src={logoDark}
          alt="Logo"
          style={{ height: "40px", width: "120px" }}
        />
      )}
      <ul className="gx-header-notifications">
        <li className="gx-nav-icon gx-ml-auto">
          <MotorSearch
            styleName="gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg"
            placeholder="Search in app..."
            onChange={handleSearch}
            value={searchText}
          />
        </li>
        <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
          <Popover
            overlayClassName="gx-popover-horizantal"
            placement="bottomRight"
            trigger="click"
            content={
              <div className="gx-d-flex">
                <MotorSearch
                  styleName="gx-popover-search-bar"
                  placeholder="Search in app..."
                  onChange={handleSearch}
                  value={searchText}
                />
              </div>
            }
          >
            <span className="gx-pointer gx-d-block">
              <i className="icon icon-search-new" />
            </span>
          </Popover>
        </li>
        <li className="gx-nav-icon">
          <Popover
            overlayClassName="gx-popover-horizantal"
            placement="bottomRight"
            content={
              // <Selections selections={selections} handleClear={handleClear} />
              // <MotorFilter dimension={["Country"]} />
              <Filters />
            }
            trigger="click"
          >
            <span className="gx-pointer gx-status-pos gx-d-block">
              <FilterOutlined style={{ fontSize: "18px" }} />
              {selections && selections.length > 0 ? (
                <span className="gx-status gx-status-rtl gx-small gx-orange" />
              ) : (
                <span className="gx-status gx-status-rtl gx-small" />
              )}
            </span>
          </Popover>
        </li>
        <li className="gx-nav-icon">
          <Popover
            overlayClassName="gx-popover-horizantal"
            placement="bottomRight"
            content={
              <Selections selections={selections} handleClear={handleClear} />
            }
            trigger="click"
          >
            <span className="gx-pointer gx-status-pos gx-d-block">
              <SelectOutlined style={{ fontSize: "18px" }} />
              {selections && selections.length > 0 ? (
                <span className="gx-status gx-status-rtl gx-small gx-orange" />
              ) : (
                <span className="gx-status gx-status-rtl gx-small" />
              )}
            </span>
          </Popover>
        </li>
        {showThemeSwitch && (
          <li className="gx-nav-icon">
            <Switch onChange={handleSwitch} />
          </li>
        )}
      </ul>
      {/*</div>*/}
    </Header>
  );
};

export default Topbar;
