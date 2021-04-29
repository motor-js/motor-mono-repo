import React from "react";
import { Layout, Col, Row, Tabs } from "antd";
import Auxiliary from "util/Auxiliary";

import Filter from "components/engine/Filter";
import ChartKPI from "components/engine/ChartKPI";
import TableComponent from "components/engine/TableComponent";
import Chart from "components/engine/Chart";

import {
  FitnessKpi,
  bodyLocationKPI,
  bodyLocationStackedKPI,
  wristKPI,
  tableCols,
  ordersByCategory,
  orderAnalysis,
  pieData,
  pieDataDonut,
  orderHistory,
  stackedBar,
  multipleMeasures,
} from "./data";

import Widget from "components/Widget";

const { Content } = Layout;

const Components = () => {
  return (
    <Auxiliary>
      <Layout className="gx-app-layout">
        <div className="gx-page-heading">
          <h2 className="gx-page-title">Filters</h2>
        </div>
        <Layout>
          {/* <Topbar /> */}
          <Content className={`gx-layout-content gx-container-wrap`}>
            {/* <div className="gx-main-content-wrapper"> */}
            <div>
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
              <div className="gx-page-heading">
                <h2 className="gx-page-title">KPI Charts</h2>
              </div>
              <Row>
                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                  <ChartKPI dataProps={FitnessKpi} />
                </Col>
                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                  <ChartKPI dataProps={bodyLocationKPI} />
                </Col>
              </Row>
              <Row>
                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                  <ChartKPI dataProps={wristKPI} />
                </Col>

                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                  <ChartKPI dataProps={bodyLocationStackedKPI} />
                </Col>
              </Row>
              <div className="gx-page-heading">
                <h2 className="gx-page-title">Charts</h2>
              </div>
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
                  <Chart dataProps={stackedBar} />
                </Col>
                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                  <Chart dataProps={multipleMeasures} />
                </Col>
              </Row>
              <Row>
                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                  <Chart dataProps={pieData} />
                </Col>
                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                  <Chart dataProps={pieDataDonut} />
                </Col>
              </Row>
              <div className="gx-page-heading">
                <h2 className="gx-page-title">Tables</h2>
              </div>
              <Row>
                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                  <TableComponent tableConfig={tableCols} />
                </Col>
                <Col xl={12} lg={24} md={12} sm={24} xs={24}>
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

export default Components;
