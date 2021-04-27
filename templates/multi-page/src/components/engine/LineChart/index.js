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
  Tick,
} from "recharts";

import {
  formatYAxis,
  formatXAxis,
  tooltipNumFormat,
} from "../../../util/formatChart";

import { CustomTooltip } from "../../../util";

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
    showGrid = true,
    showLegend = true,
    tooltip = null,
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
                className="gx-recharts-label"
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
                className="gx-recharts-label"
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
            iconSize={legendProps && legendProps.iconSize}
            iconType={legendProps && legendProps.iconType}
            width={legendProps && legendProps.width}
            height={legendProps && legendProps.height}
            layout={legendProps && legendProps.layout}
            verticalAlign={legendProps && legendProps.verticalAlign}
            wrapperStyle={legendProps && legendProps.wrapperStyle}
          />
        )}
        {dataKeys &&
          dataKeys.map((key, index) => (
            <Line
              formatter={tooltipNumFormat}
              key={index}
              dataKey={key}
              stroke={typeof stroke === "string" ? stroke : stroke[index]}
              isAnimationActive={
                isAnimationActive.isAnimationActive || isAnimationActive
              }
              dot={{
                // os use mesaureInfo
                stroke: dot
                  ? typeof dot.stroke === "string"
                    ? dot.stroke
                    : dot.stroke[index]
                  : null,
                strokeWidth: dot ? dot.strokeWidth : null,
              }}
            />
          ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MotorLineChart;
