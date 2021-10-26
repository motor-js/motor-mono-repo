// import React, { useRef, useEffect } from "react";
import React from "react";
import Bar from "./Bar";
// import SelectionModal from "./components/SelectionModal";

import { useData } from "@motor-js/engine";

const BarWrapper = () => {
  const cols = [
    {
      qField: "[Category]",
      qLabel: "Category",
    },
    {
      qField: "=sum(Quantity * Price)",
      qLabel: "Revenue",
    },
  ];

  const { dataSet } = useData({
    cols,
  });

  const { data } = dataSet;

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">{data && <Bar data={data} />}</div>
      </div>
    </div>
  );
};

export default BarWrapper;
