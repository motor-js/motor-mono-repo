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
  Cell,
} from "recharts";

const MotorBarChart = ({ dataSet, config }) => {
  const { data, dataKeys } = dataSet;

  const {
    showXAxis = true,
    xAxisDataKey,
    ShowYAxis = true,
    showGrid = true,
    showLegend = true,
    isAnimationActive = true,
    margin,
    height,
    fill,
    stacked,
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
          dataKeys.map((key, index) => (
            <Bar
              key={index}
              dataKey={key}
              stackId={stacked ? "a" : null}
              fill={fill[index]}
              isAnimationActive={
                isAnimationActive.isAnimationActive || isAnimationActive
              }
            >
              {data.map((entry, index) => (
                // <Cell fill={data[index].color} />
                <Cell fill={fill[index]} />
              ))}
            </Bar>
          ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MotorBarChart;
