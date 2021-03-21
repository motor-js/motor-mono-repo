import React, { useContext } from "react";
import Topbar from "./Topbar";
import { Layout, Row, Col } from "antd";
import { ThemeContext } from "store";
import { footer } from "settings/index";

import {
  FitnessKpi,
  etheriumKPI,
  rippleKPI,
  litecoinKPI,
  tableCols,
  BalanceHistoryMultiDim,
} from "./data";

import "assets/vendors/style";
import "styles/wieldy.less";

import ChartKPI from "components/engine/ChartKPI";
import MotorTable from "components/engine/TableComponent";
import Chart from "components/engine/Chart";

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
          <div className="gx-main-content-wrapper">
            <Row>
              <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                <ChartKPI dataProps={FitnessKpi} />
              </Col>
              <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                <ChartKPI dataProps={etheriumKPI} />
              </Col>
              <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                <ChartKPI dataProps={rippleKPI} />
              </Col>
              <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                <ChartKPI dataProps={litecoinKPI} />
              </Col>
              <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                <Chart dataProps={BalanceHistoryMultiDim} />
              </Col>
            </Row>
            <Row>
              <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                <MotorTable tableConfig={tableCols} />
              </Col>
            </Row>
          </div>
        </Content>
        <Footer>
          <div className="gx-layout-footer-content">{footer.footerText}</div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
