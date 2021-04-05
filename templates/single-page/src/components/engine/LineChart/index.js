import React from "react";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
} from "recharts";

import { formatYAxis, formatXAxis } from "../../../util/formatChart";

const MotorLineChart = ({ dataSet, config }) => {
  const { data, dataKeys } = dataSet;

  const {
    margin,
    height,
    stroke,
    dot,
    showXAxis = true,
    xAxisDataKey,
    ShowYAxis = true,
    showGrid = true,
    showLegend = true,
    isAnimationActive = true,
  } = config;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={margin}>
        {showXAxis && (
          <XAxis dataKey={xAxisDataKey} tickFormatter={formatXAxis}>
            <Label
              value="Pages of my website"
              offset={0}
              position="insideBottom"
            />
          </XAxis>
        )}
        {ShowYAxis && (
          <YAxis
            tickFormatter={formatYAxis}
            // label={{ value: "pv of page", angle: -90, position: "insideLeft" }}
          >
            <Label
              value="Pages"
              angle={-90}
              offset={-20}
              position="insideLeft"
            />
          </YAxis>
        )}
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}
        <Tooltip />
        {showLegend && <Legend />}
        {dataKeys &&
          dataKeys.map((key, index) => (
            <Line
              key={index}
              dataKey={key}
              stroke={stroke}
              isAnimationActive={
                isAnimationActive.isAnimationActive || isAnimationActive
              }
              dot={{
                // os use mesaureInfo
                stroke: dot ? dot.stroke : null,
                strokeWidth: dot ? dot.strokeWidth : null,
              }}
            />
          ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MotorLineChart;
