import React, { useContext } from "react";
import { Col, Row } from "antd";
import Auxiliary from "util/Auxiliary";

import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { increamentData, lineData } from "./data";
import ChartCard from "dev-resources/components/dashboard/Crypto/ChartCard";
import Portfolio from "dev-resources/components/dashboard/Crypto/Portfolio";
import BalanceHistory from "dev-resources/components/dashboard/Crypto/BalanceHistory";
import SendMoney from "dev-resources/components/dashboard/Crypto/SendMoney";
import RewardCard from "dev-resources/components/dashboard/Crypto/RewardCard";
import CurrencyCalculator from "dev-resources/components/dashboard/Crypto/CurrencyCalculator";
// import OrderHistory from "components/dashboard/Crypto/OrderHistory";

import MotorTable from "components/engine/MotorTable";
import MotorFilter from "components/engine/MotorFilter";
import MotorButton from "components/engine/MotorButton";
import MotorAreaChart from "components/engine/MotorAreaChart";
import MotorLineChart from "components/engine/MotorLineChart";
import MotorKPI from "components/engine/MotorKPI";

const Crypto = () => {
  return (
    <Auxiliary>
      {/* <MotorFilter dimension={["currency"]} />
      <MotorTable /> */}
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <MotorKPI
            prize="$9,626"
            title="23"
            icon="bitcoin"
            children={<MotorAreaChart />}
            styleName="up"
            desc="Bitcoin Price"
          />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard
            prize="$7,831"
            title="07"
            icon="etherium"
            children={
              <ResponsiveContainer width="100%" height={75}>
                <AreaChart
                  data={increamentData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <defs>
                    <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                      <stop
                        offset="95%"
                        stopColor="#06BB8A"
                        stopOpacity={0.9}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="price"
                    type="monotone"
                    strokeWidth={0}
                    stackId="2"
                    stroke="#4D95F3"
                    fill="url(#color4)"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            }
            styleName="up"
            desc="Etherium Price"
          />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard
            prize="$1,239"
            title="08"
            icon="ripple"
            children={
              <ResponsiveContainer width="100%" height={75}>
                <AreaChart
                  data={increamentData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <Tooltip />
                  <defs>
                    <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#FEEADA"
                        stopOpacity={0.8}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="price"
                    strokeWidth={0}
                    stackId="2"
                    stroke="#FEEADA"
                    fill="url(#color5)"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            }
            styleName="down"
            desc="Ripple Price"
          />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard
            prize="$849"
            title="47"
            icon="litcoin"
            children={<MotorLineChart />}
            styleName="down"
            desc="Litecoin Price"
          />
        </Col>
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          <Portfolio />
        </Col>
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          <BalanceHistory />
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
        </Col>
      </Row>
    </Auxiliary>
  );
};

export default Crypto;
