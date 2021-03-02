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
  const { data, measureInfo } = dataSet;
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
        <Line
          isAnimationActive={isAnimationActive}
          dataKey={dataKey}
          stroke={stroke}
          dot={{
            stroke: dot ? dot.stroke : null,
            strokeWidth: dot ? dot.strokeWidth : null,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MotorLineChart;
