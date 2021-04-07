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
  Label,
} from "recharts";

import { formatYAxis, formatXAxis } from "../../../util/formatChart";

const MotorAreaChart = ({ dataSet, config }) => {
  const { data, dataKeys } = dataSet;

  const {
    type,
    showXAxis = true,
    xAxisDataKey,
    ShowYAxis = true,
    xAxisLabel,
    yAxisLabel,
    showGrid = true,
    showLegend = true,
    legendProps,
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
        {showXAxis && (
          <XAxis dataKey={xAxisDataKey} tickFormatter={formatXAxis}>
            {xAxisLabel && (
              <Label
                value={xAxisLabel.value}
                offset={xAxisLabel.offset}
                position={xAxisLabel.position}
              />
            )}
          </XAxis>
        )}
        {ShowYAxis && (
          <YAxis tickFormatter={formatYAxis}>
            {yAxisLabel && (
              <Label
                value={yAxisLabel.value}
                angle={yAxisLabel.angle}
                offset={yAxisLabel.offset}
                position={yAxisLabel.position}
              />
            )}
          </YAxis>
        )}
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}
        <Tooltip />
        {showLegend && (
          <Legend
            iconSize={legendProps.iconSize}
            iconType={legendProps.iconType}
            width={legendProps.width}
            height={legendProps.height}
            layout={legendProps.layout}
            verticalAlign={legendProps.verticalAlign}
            wrapperStyle={legendProps.wrapperStyle}
          />
        )}
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
