import React from "react";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const MotorBarChart = ({ dataSet, config }) => {
  const { data, dataKeys } = dataSet;
  const {
    type,
    showXAxis = true,
    xAxisDataKey,
    ShowYAxis = true,
    showGrid = true,
    showLegend = true,
    isAnimationActive = true,
    margin,
    height,
    dataKey,
    fill,
  } = config;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={margin}>
        {showXAxis && <XAxis dataKey={xAxisDataKey} />}
        {ShowYAxis && <YAxis />}
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}
        <Tooltip />
        {showLegend && <Legend />}
        {dataKeys &&
          dataKeys.map((measure, index) => (
            <Bar
              key={index}
              dataKey={measure.dataKey}
              fill={measure.fill || fill}
              isAnimationActive={
                isAnimationActive.isAnimationActive || isAnimationActive
              }
            />
          ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MotorBarChart;
