import React, { useContext } from "react";
import { Col, Row, Tabs } from "antd";
import Auxiliary from "util/Auxiliary";

import {
  bitCoinKPI,
  etheriumKPI,
  rippleKPI,
  litecoinKPI,
  BalanceHistory,
  BalanceHistoryMultiDim,
  pieData,
} from "./data";
// import ChartCard from "dev-resources/components/dashboard/Crypto/ChartCard";
import Portfolio from "dev-resources/components/dashboard/Crypto/Portfolio";
// import BalanceHistory from "dev-resources/components/dashboard/Crypto/BalanceHistory";
import SendMoney from "dev-resources/components/dashboard/Crypto/SendMoney";
import RewardCard from "dev-resources/components/dashboard/Crypto/RewardCard";
import CurrencyCalculator from "dev-resources/components/dashboard/Crypto/CurrencyCalculator";
// import OrderHistory from "components/dashboard/Crypto/OrderHistory";

import MotorTable from "components/engine/MotorTable";
import MotorFilter from "components/engine/MotorFilter";
import MotorButton from "components/engine/MotorButton";

import ChartKPI from "components/engine/ChartKPI";
import Chart from "components/engine/Chart";

const { TabPane } = Tabs;
const Crypto = () => {
  return (
    <Auxiliary>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <MotorFilter dimension={["name"]} />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <MotorFilter dimension={["coin"]} />
        </Col>
      </Row>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartKPI dataProps={bitCoinKPI} />
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
          <Portfolio />
        </Col>
        {/* <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          <BalanceHistory />
        </Col> */}
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          {/* <BalanceHistory /> */}
          {/* <Chart dataProps={pieData} /> */}
          <Tabs defaultActiveKey="1" type="card" size={"Default"}>
            <TabPane tab="Multiple Measures" key="1">
              <Chart dataProps={BalanceHistory} />
              {/* Content of card tab 1 */}
            </TabPane>
            <TabPane tab="Multiple Dimensions" key="2">
              <Chart dataProps={BalanceHistoryMultiDim} />
              {/* Content of card tab 2 */}
            </TabPane>
            <TabPane tab="Card Tab 3" key="3">
              Content of card tab 3
            </TabPane>
          </Tabs>
        </Col>

        <Col xl={9} lg={24} md={24} sm={24} xs={24}>
          <SendMoney />
        </Col>
        <Col xl={6} lg={12} md={12} sm={24} xs={24}>
          <RewardCard />
        </Col>
        <Col xl={9} lg={12} md={12} sm={24} xs={24}>
          <CurrencyCalculator />
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          {/* <OrderHistory /> */}
          <MotorTable />
        </Col>
      </Row>
    </Auxiliary>
  );
};

export default Crypto;
