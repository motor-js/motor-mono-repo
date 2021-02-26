import React, { useEffect, useState } from "react";
import useData from "../../../dev-resources/hooks/useData";
// import Widget from "components/Widget";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

// import { increamentData } from "../../routes/Crypto/data";

const MotorLineChart = () => {
  const [loading, setLoading] = useState(true);

  const cols = [
    { qField: "[name]", qLabel: "name" },
    {
      qField: "=Sum({$<coin={'bitcoin'}>} price)",
      qLabel: "price",
    },
  ];

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
      <LineChart data={mData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <Tooltip />
        <Line
          dataKey="price"
          stroke="#038FDE"
          dot={{ stroke: "#FEA931", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MotorLineChart;
