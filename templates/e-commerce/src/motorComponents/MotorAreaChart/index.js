import React, { useEffect, useState } from "react";
// import { Table } from "antd";
// import { useTable } from "@motor-js/engine";
// import { useData } from "../../hooks/useData";
import useData from "../../dev-resources/hooks/useData";
// import Widget from "components/Widget";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

import { increamentData } from "../../routes/Crypto/data";
// import { useHyperCube } from "@motor-js/engine";

const MotorAreaChart = () => {
  const [loading, setLoading] = useState(true);

  const cols = [
    { qField: "[name]", qLabel: "name" },
    {
      qField: "=Sum({$<coin={'bitcoin'}>} price)",
      qLabel: "price",
    },
  ];

  // const { mData, headerGroup } = useTable({
  //   cols,
  // });

  const {
    // qLayout,
    // qData,
    mData,
    // endSelections,
    // beginSelections,
    // changePage,
    // selections,
    // select,
    // applyPatches,
  } = useData({
    cols,
    //qColumnOrder: columnOrder,
    //qCalcCondition: calcCondition,
    // qPage,
    //qInterColumnSortOrder: columnSortOrder,
    // qSupressMissing: true,
    // qSuppressZero: true,
  });

  // useEffect(() => {
  //   // mData && console.log(mData);
  //   mData && setLoading(false);
  // }, [mData]);

  return (
    <ResponsiveContainer width="100%" height={75}>
      <AreaChart data={mData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
