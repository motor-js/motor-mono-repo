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

const MotorBarChart = ({ dataSet, config }) => {
  const { data, dataKeys } = dataSet;

  const {
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
    fill,
    stacked,
  } = config;

  // const CustomTooltip = (props) => {
  //   // we don't need to check payload[0] as there's a better prop for this purpose
  //   if (!props.active) {
  //     // I think returning null works based on this: http://recharts.org/en-US/examples/CustomContentOfTooltip
  //     return null;
  //   }
  //   // mutating props directly is against react's conventions
  //   // so we create a new payload with the name and value fields set to what we want
  //   const newPayload = [
  //     {
  //       name: "Name",
  //       // all your data which created the tooltip is located in the .payload property
  //       value: props.payload[0].payload.name,
  //       // you can also add "unit" here if you need it
  //     },
  //     ...props.payload,
  //   ];

  //   // we render the default, but with our overridden payload
  //   console.log(props);
  //   return null;
  //   return <DefaultTooltipContent {...props} payload={newPayload} />;
  // };

  // const CustomTooltip = ({ active, payload, label }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className="custom-tooltip">
  //         <p className="label">{`${label} : ${payload[0].value}`}</p>
  //         {/* <p className="intro">{getIntroOfPage(label)}</p>
  //         <p className="desc">Anything you want can be displayed here.</p> */}
  //       </div>
  //     );
  //   }

  //   return null;
  // };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // console.log(payload, label, payload[0].payload.key);
      return (
        <div className="custom-tooltip" style={{ margin: 10 }}>
          {/* <div className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-top"> */}
          <span
            style={{ color: fill[payload[0].payload.key] }}
            className="label"
          >{`${label} : ${payload[0].value}`}</span>
          {/* <p className="intro">{getIntroOfPage(label)}</p> */}
          {/* <p className="desc">Anything you want can be displayed here.</p> */}
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={margin}>
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
        {/* <Tooltip /> */}
        {/* <Tooltip content={<CustomTooltip />} /> */}

        <Tooltip
          wrapperStyle={{ backgroundColor: "white" }}
          // labelStyle={{ color: "black" }}
          // itemStyle={{ color: "cyan" }}
          // contentStyle={{ color: "yellow" }}
          // formatter={function (value, name) {
          //   return `${value}`;
          // }}
          // labelFormatter={function (value) {
          //   return `label: ${value}`;
          // }}
          content={<CustomTooltip />}
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
