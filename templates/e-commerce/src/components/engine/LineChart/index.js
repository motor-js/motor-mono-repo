import React from "react";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const MotorLineChart = ({ data, config }) => {
  const { margin, height, dataKey, stroke, dot } = config;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={margin}>
        <Tooltip />
        <Line
          dataKey={dataKey}
          stroke={stroke}
          dot={{ stroke: dot.stroke, strokeWidth: dot.strokeWidth }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MotorLineChart;
