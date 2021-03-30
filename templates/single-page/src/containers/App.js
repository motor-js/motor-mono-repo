import React, { useContext } from "react";
import Topbar from "./Topbar";
import { Layout, Row, Col } from "antd";
import { ThemeContext } from "store";
import { footer } from "settings/index";
import Filter from "components/engine/Filter";
import ChartKPI from "components/engine/ChartKPI";
import TableComponent from "components/engine/TableComponent";
import Chart from "components/engine/Chart";
import RewardCard from "components/engine/RewardCard";
import Callout from "components/Callout";
import OrderHistory from "components/OrderHistory";

import {
  FitnessKpi,
  garminKPI,
  bodyLocationKPI,
  wristKPI,
  tableCols,
  ordersByCategory,
  orderAnalysis,
  pieData,
  reverseCardData,
  orderHistory,
} from "./data";

import "assets/vendors/style";
import "styles/wieldy.less";
import Widget from "components/Widget";

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
                <ChartKPI dataProps={garminKPI} />
              </Col>
              <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                <ChartKPI dataProps={bodyLocationKPI} />
              </Col>
              <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                <ChartKPI dataProps={wristKPI} />
              </Col>
              <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                <Chart dataProps={ordersByCategory} />
              </Col>
              <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                <Chart dataProps={orderAnalysis} />
              </Col>
            </Row>
            <Row>
              <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                <Widget>
                  <Filter
                    dimension={["Company Name"]}
                    // style={{ width: "50%" }}
                  />
                </Widget>
              </Col>
              <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                <Widget>
                  <Filter
                    dimension={["Body Location"]}
                    // style={{ width: "50%" }}
                  />
                </Widget>
              </Col>
            </Row>
            <Row>
              <Col xl={9} lg={24} md={24} sm={24} xs={24}>
                {/* <SendMoney /> */}
                <Chart dataProps={pieData} />
              </Col>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <RewardCard dataProps={reverseCardData} />
              </Col>
              <Col xl={9} lg={12} md={12} sm={24} xs={24}>
                <Chart dataProps={orderAnalysis} />
              </Col>
            </Row>
            <Row>
              <Col xl={15} lg={24} md={24} sm={24} xs={24}>
                <TableComponent tableConfig={tableCols} />
                {/* <CryptoNews /> */}
              </Col>
              <Col xl={9} lg={24} md={24} sm={24} xs={24}>
                <Callout />
                <TableComponent tableConfig={orderHistory} />
                <OrderHistory />
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ position: "sticky", bottom: "0" }}>
          <div className="gx-layout-footer-content">{footer.footerText}</div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
