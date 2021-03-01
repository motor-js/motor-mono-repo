import React from "react";

import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from "recharts";

const MotorPieChart = ({ data, config }) => {
  const {
    showLegend = true,
    margin,
    height,
    dataKey,
    fill,
    label = true,
    isAnimationActive = true,
    cx = "35%",
    cy = "50%",
    outerRadius = 80,
    innerRadius = 0,
  } = config;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart margin={margin}>
        {showLegend && <Legend />}
        <Pie
          dataKey={dataKey}
          isAnimationActive={isAnimationActive}
          data={data}
          cx={cx}
          cy={cy}
          outerRadius={outerRadius}
          innerRadius={innerRadius}
          fill={fill}
          label={label}
        />
        {/* <Pie
          dataKey="value"
          data={data02}
          cx="70%"
          cy="50%"
          outerRadius={80}
          fill="#FE9E15"
        /> */}
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MotorPieChart;
