import React, { useEffect, useState } from "react";

// import Widget from "components/Widget";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const MotorAreaChart = ({ data, margin, height }) => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // mData && console.log(mData);
  //   mData && setLoading(false);
  // }, [mData]);

  return (
    <ResponsiveContainer width="100%" height={height}>
      {/* <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}> */}
      <AreaChart data={data} margin={margin}>
        <Tooltip />
        <defs>
          <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="5%" stopColor="#163469" stopOpacity={0.9} />
            <stop offset="95%" stopColor="#FE9E15" stopOpacity={0.9} />
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
