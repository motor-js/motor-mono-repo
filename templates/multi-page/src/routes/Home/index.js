import React, { useContext } from "react";
import { Layout, Col, Row, Tabs } from "antd";
import Auxiliary from "util/Auxiliary";

import Filter from "components/engine/Filter";
import ChartKPI from "components/engine/ChartKPI";
import TableComponent from "components/engine/TableComponent";
import Chart from "components/engine/Chart";
import RewardCard from "components/engine/RewardCard";

import {
  FitnessKpi,
  bodyLocationKPI,
  wristKPI,
  tableCols,
  ordersByCategory,
  orderAnalysis,
  pieData,
  pieDataDonut,
  reverseCardData,
  orderHistory,
  stackedBar,
  multipleMeasures,
} from "./data";

import Widget from "components/Widget";

const { Content } = Layout;

const Home = () => {
  return (
    <Auxiliary>
      <Layout className="gx-app-layout">
        <Layout>
          {/* <Topbar /> */}
          <Content className={`gx-layout-content gx-container-wrap`}>
            {/* <div className="gx-main-content-wrapper"> */}
            <div>
              <Row>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <ChartKPI dataProps={FitnessKpi} />
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <ChartKPI dataProps={bodyLocationKPI} />
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <ChartKPI dataProps={wristKPI} />
                </Col>
              </Row>
              <Row>
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
                    <Filter dimension={["Company Name"]} />
                  </Widget>
                </Col>
                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                  <Widget>
                    <Filter dimension={["Body Location"]} />
                  </Widget>
                </Col>
              </Row>
              <Row>
                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                  <Chart dataProps={stackedBar} />
                </Col>
                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                  <Chart dataProps={multipleMeasures} />
                </Col>
              </Row>
              <Row>
                <Col xl={9} lg={24} md={24} sm={24} xs={24}>
                  <Chart dataProps={pieData} />
                </Col>
                <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                  <RewardCard dataProps={reverseCardData} />
                </Col>
                <Col xl={9} lg={12} md={12} sm={24} xs={24}>
                  <Chart dataProps={pieDataDonut} />
                </Col>
              </Row>
              <Row>
                <Col xl={15} lg={24} md={24} sm={24} xs={24}>
                  <TableComponent tableConfig={tableCols} />
                </Col>
                <Col xl={9} lg={24} md={24} sm={24} xs={24}>
                  {/* <Callout /> */}
                  <TableComponent tableConfig={orderHistory} />
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Auxiliary>
  );
};

export default Home;
