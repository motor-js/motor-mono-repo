import React, { useContext } from "react";
import Topbar from "../Topbar";
import { Layout, Row, Col } from "antd";
import { ThemeContext } from "store";
import { footer } from "settings/index";
import { Redirect, Route } from "react-router-dom";

import { bitCoinKPI, etheriumKPI, rippleKPI, litecoinKPI } from "./data";

import "assets/vendors/style";
import "styles/wieldy.less";

import ChartKPI from "components/engine/ChartKPI";
import Filter from "components/engine/Filter";

const { Content, Footer } = Layout;

const App = () => {
  const [state] = useContext(ThemeContext);

  const { theme } = state;

  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }

  return (
    <Layout className="gx-app-layout">
      <Layout>
        <Topbar />
        <Content className={`gx-layout-content gx-container-wrap`}>
          <Row>
            <Col xl={6} lg={12} md={12} sm={12} xs={24}>
              <ChartKPI dataProps={bitCoinKPI} />
            </Col>
            <Col xl={6} lg={12} md={12} sm={12} xs={24}>
              <Filter dimension={["name"]} />
            </Col>
          </Row>
        </Content>
        <Footer>
          <div className="gx-layout-footer-content">{footer.footerText}</div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
