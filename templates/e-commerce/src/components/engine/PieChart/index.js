import React from "react";

import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const MotorPieChart = ({ dataSet, config }) => {
  const { data, dataKeys } = dataSet;

  const {
    showLegend = true,
    margin,
    height,
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
        {dataKeys &&
          dataKeys.map((key, index) => (
            <Pie
              key={index}
              dataKey={key}
              isAnimationActive={isAnimationActive}
              data={data}
              cx={cx}
              cy={cy}
              outerRadius={outerRadius}
              innerRadius={innerRadius}
              label={label}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={fill[index]} />
              ))}
            </Pie>
          ))}
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
