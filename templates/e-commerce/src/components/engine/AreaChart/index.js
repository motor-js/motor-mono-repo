import React from "react";

import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const MotorAreaChart = ({ data, config }) => {
  const {
    type,
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
      <AreaChart data={data} margin={margin}>
        <Tooltip />
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
        <Area
          dataKey={dataKey}
          type={type}
          strokeWidth={strokeWidth}
          stackId={stackId}
          stroke={stroke}
          fill={fill}
          fillOpacity={fillOpacity}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MotorAreaChart;
