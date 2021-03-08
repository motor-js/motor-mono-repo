import React from "react";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const MotorAreaChart = ({ dataSet, config }) => {
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
    gradient,
    stacked,
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
      <AreaChart data={data} margin={margin}>
        {showXAxis && <XAxis dataKey={xAxisDataKey} />}
        {ShowYAxis && <YAxis />}
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}
        <Tooltip />
        {showLegend && <Legend />}
        <defs>
          <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2}>
            {offsetStart && (
              <stop
                offset={offsetStart.offset}
                stopColor={offsetStart.stopColor}
                stopOpacity={offsetStart.stopOpacity}
              />
            )}
            {offsetEnd && (
              <stop
                offset={offsetEnd.offset}
                stopColor={offsetEnd.stopColor}
                stopOpacity={offsetEnd.stopOpacity}
              />
            )}
          </linearGradient>
        </defs>
        {dataKeys &&
          dataKeys.map((key, index) => (
            <Area
              key={index}
              dataKey={key}
              stackId={stacked ? "a" : null}
              type={type}
              strokeWidth={strokeWidth}
              stackId={stackId}
              stroke={stroke}
              fill={fill}
              fillOpacity={fillOpacity}
              isAnimationActive={isAnimationActive}
            />
          ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MotorAreaChart;
