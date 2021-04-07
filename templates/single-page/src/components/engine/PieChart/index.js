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
    legendProps,
  } = config;

  const renderLegend = (props) => {
    const { payload } = props;
    console.log(payload);

    return (
      <ul>
        {payload.map((entry, index) => (
          <li key={`item-${index}`}>{entry.payload.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart margin={margin}>
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
