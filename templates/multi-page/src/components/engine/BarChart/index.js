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
  Label,
  Cell,
} from "recharts";

import { formatYAxis, formatXAxis } from "../../../util/formatChart";
import { CustomTooltip } from "../../../util";

const MotorBarChart = ({ dataSet, config, select }) => {
  const { data, dataKeys } = dataSet;

  const {
    showXAxis = true,
    xAxisDataKey,
    ShowYAxis = true,
    xAxisLabel,
    tooltip = null,
    yAxisLabel,
    showGrid = true,
    showLegend = true,
    legendProps,
    isAnimationActive = true,
    margin,
    height,
    fill,
    stacked,
  } = config;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={margin}>
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
          content={tooltip && <CustomTooltip fill={fill} />}
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
            <Bar
              key={index}
              dataKey={key}
              stackId={stacked ? "a" : null}
              fill={fill[index]}
              isAnimationActive={
                isAnimationActive.isAnimationActive || isAnimationActive
              }
              onClick={(c) => select(0, [c.qElemNumber || c.elemNumber], false)}
            >
              {dataKeys.length === 1 &&
                data.map((entry, index) => (
                  <Cell key={index} fill={fill[index]} />
                ))}
            </Bar>
          ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MotorBarChart;
