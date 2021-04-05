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
    labelLine = true,
    isAnimationActive = true,
    cx = "35%",
    cy = "50%",
    outerRadius = 80,
    innerRadius = 0,
    renderLabel,
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
              label={renderLabel}
              labelLine={labelLine}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={fill[index]} />
              ))}
            </Pie>
          ))}
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MotorPieChart;
