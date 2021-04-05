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

import { formatYAxis, formatXAxis } from "../../../util/formatChart";

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
        {/* {showXAxis && <XAxis dataKey={xAxisDataKey} />}
        {ShowYAxis && <YAxis />} */}
        {showXAxis && (
          <XAxis dataKey={xAxisDataKey} tickFormatter={formatXAxis} />
        )}
        {ShowYAxis && <YAxis tickFormatter={formatYAxis} />}
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
                <Cell key={index} fill={fill[index]} />
              ))}
            </Bar>
          ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MotorBarChart;
