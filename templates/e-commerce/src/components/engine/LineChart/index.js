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
} from "recharts";

const MotorLineChart = ({ dataSet, config }) => {
  const { data, dataKeys } = dataSet;
  const {
    margin,
    height,
    dataKey,
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
        {showXAxis && <XAxis dataKey={xAxisDataKey} />}
        {ShowYAxis && <YAxis />}
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}
        <Tooltip />
        {showLegend && <Legend />}
        {dataKeys &&
          dataKeys.map((measure, index) => (
            <Line
              key={index}
              dataKey={measure.name}
              stroke={measure.stroke || stroke}
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
