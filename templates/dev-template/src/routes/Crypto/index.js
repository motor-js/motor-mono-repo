import React, { useContext } from "react";
import { Col, Row, Tabs } from "antd";
import Auxiliary from "util/Auxiliary";
import ComplexTable from "../../components/engine/ComplexTable";

import {
  bitCoinKPI,
  etheriumKPI,
  rippleKPI,
  litecoinKPI,
  tableCols,
  BalanceHistory,
  BalanceHistoryMultiDim,
  orderAnalysis,
  wristKPI,
  bodyLocationKPI,
  ordersByCategory,
  FitnessKpi,
  pieData,
  orderHistory,
} from "./data";
// import ChartCard from "dev-resources/components/dashboard/Crypto/ChartCard";
import Portfolio from "dev-resources/components/dashboard/Crypto/Portfolio";
// import BalanceHistory from "dev-resources/components/dashboard/Crypto/BalanceHistory";
import SendMoney from "dev-resources/components/dashboard/Crypto/SendMoney";
import RewardCard from "dev-resources/components/dashboard/Crypto/RewardCard";
import CurrencyCalculator from "dev-resources/components/dashboard/Crypto/CurrencyCalculator";
// import OrderHistory from "components/dashboard/Crypto/OrderHistory";

import MotorTable from "components/engine/MotorTable";
import MotorFilter from "components/engine/Filter";
import ChartKPI from "components/engine/ChartKPI";
import Chart from "components/engine/Chart";

const { TabPane } = Tabs;
const Crypto = () => {
  return (
    <Auxiliary>
      <Row>
        {/* <ComplexTable tableConfig={tableCols} /> */}
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <MotorFilter
            dimension={["Company Name"]}
            // style={{ width: "50%" }}
          />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <MotorFilter
            dimension={["Country"]}
            // style={{ width: "50%" }}
          />
        </Col>
      </Row>
      <Row>
        <ComplexTable tableConfig={orderHistory} />
      </Row>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          {/* <ChartKPI dataProps={FitnessKpi} /> */}
          <ChartKPI dataProps={bodyLocationKPI} />
        </Col>
        {/* <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartKPI dataProps={etheriumKPI} />
        </Col>*/}
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartKPI dataProps={wristKPI} />
        </Col>
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          <Tabs defaultActiveKey="1" type="card" size={"Default"}>
            <TabPane tab="Multiple Dimensions" key="1">
              <Chart dataProps={BalanceHistoryMultiDim} />
            </TabPane>
            <TabPane tab="Multiple Measures" key="2">
              <Chart dataProps={BalanceHistory} />
            </TabPane>
            <TabPane tab="Pie Chart" key="3">
              <Chart dataProps={rippleKPI} />
            </TabPane>
          </Tabs>
        </Col>
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          <Chart dataProps={orderAnalysis} />
        </Col>
      </Row>
    </Auxiliary>
  );
};

export default Crypto;
