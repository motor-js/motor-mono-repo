import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

import MainApp from "./MainApp";
import { ThemeContext } from "store";

const App = (props) => {
  const [state] = useContext(ThemeContext);

  const { theme } = state;

  const { match, location } = props;

  const themeType = theme;

  if (themeType === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }

  if (location.pathname === "/") {
    return <Redirect to={"/crypto"} />;
  }

  return (
    <ConfigProvider>
      <Route path={`${match.url}`} component={MainApp} />
    </ConfigProvider>
  );
};

export default App;
