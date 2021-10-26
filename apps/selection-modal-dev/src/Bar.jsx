// import React, { useRef, useEffect } from "react";
import React from "react";
import Chart from "react-apexcharts";

import { useData } from "@motor-js/engine";

const Bar = (props) => {
  const { options } = props;
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

  const series = [
    {
      name: "Revenue",
      data: data ? data.map((n) => n && parseInt(n["Revenue"])) : [],
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {data && (
            <Chart
              options={options}
              series={series}
              type="bar"
              width="100%"
              height={options.chart.height}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Bar;
