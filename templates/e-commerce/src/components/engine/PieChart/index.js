import React from "react";

import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const MotorPieChart = ({ data, config }) => {
  const {
    type,
    showXAxis = true,
    xAxisDataKey,
    ShowYAxis = true,
    showGrid = true,
    margin,
    height,
    gradient,
    dataKey,
    strokeWidth,
    stackId,
    stroke,
    fill,
    fillOpacity,
  } = config;

  const chartGradient = gradient || {};

  const { id, x1, y1, x2, y2, offsetStart, offsetEnd } = chartGradient;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          dataKey="price"
          isAnimationActive={false}
          data={data}
          cx="35%"
          cy="50%"
          outerRadius={80}
          fill="#003366"
          label
        />
        {/* <Pie
          dataKey="value"
          data={data02}
          cx="70%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#FE9E15"
        /> */}
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MotorPieChart;
