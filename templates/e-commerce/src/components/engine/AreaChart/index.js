import React, { useEffect, useState } from "react";

// import Widget from "components/Widget";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const MotorAreaChart = ({ data, config }) => {
  const [loading, setLoading] = useState(true);

  const { type, margin, height, gradient } = config;
  const { id, x1, y1, x2, y2, offsetStart, offsetEnd } = gradient;

  // useEffect(() => {
  //   // mData && console.log(mData);
  //   mData && setLoading(false);
  // }, [mData]);

  //     <Area
  //       dataKey="price"
  //       type="monotone"
  //       strokeWidth={0}
  //       stackId="2"
  //       stroke="#4D95F3"
  //       fill="url(#color4)"
  //       fillOpacity={1}
  //     />

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={margin}>
        <Tooltip />
        <defs>
          <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2}>
            <stop
              offset={offsetStart.offset}
              stopColor={offsetStart.stopColor}
              stopOpacity={offsetStart.stopOpacity}
            />
            <stop
              offset={offsetEnd.offset}
              stopColor={offsetEnd.stopColor}
              stopOpacity={offsetEnd.stopOpacity}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="price"
          strokeWidth={0}
          stackId="2"
          stroke="#4D95F3"
          fill="url(#color3)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MotorAreaChart;
