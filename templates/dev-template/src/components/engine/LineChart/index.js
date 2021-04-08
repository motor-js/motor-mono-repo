import React from "react";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
} from "recharts";

import {
  formatYAxis,
  formatXAxis,
  tooltipNumFormat,
} from "../../../util/formatChart";

import { CustomTooltip } from "../../../util/CustomTooltip";

const MotorLineChart = ({ dataSet, config }) => {
  const { data, dataKeys } = dataSet;

  const {
    margin,
    height,
    stroke,
    dot,
    showXAxis = true,
    xAxisDataKey,
    ShowYAxis = true,
    xAxisLabel,
    yAxisLabel,
    tooltip = null,
    showGrid = true,
    showLegend = true,
    legendProps,
    isAnimationActive = true,
  } = config;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={margin}>
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
        <Tooltip
          wrapperStyle={tooltip && tooltip.wrapperStyle}
          content={tooltip && <CustomTooltip fill={stroke} />}
        />
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
        {dataKeys &&
          dataKeys.map((key, index) => (
            <Line
              formatter={tooltipNumFormat}
              key={index}
              dataKey={key}
              stroke={stroke}
              isAnimationActive={
                isAnimationActive.isAnimationActive || isAnimationActive
              }
              dot={{
                // os use mesaureInfo
                stroke: dot ? dot.stroke : null,
                strokeWidth: dot ? dot.strokeWidth : null,
              }}
            />
          ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MotorLineChart;
