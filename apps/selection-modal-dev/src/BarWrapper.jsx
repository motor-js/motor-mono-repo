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

  const options = {
    chart: {
      height: 450,
      type: "bar",
      events: {
        click: function (event, chartContext, config) {
          console.log(config);
          // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
        },

        // dataPointSelection(event, chartContext, config) {
        //   // gets the position of the marker in the series
        //   const dp = config.dataPointIndex;
        //   console.log(config);

        //   // use the series position of the clicked marker to find the corresponding x axis data at that point in the series
        //   let date = chartContext.data.twoDSeriesX[dp];

        //   //   console.log("data", date);

        //   // convert to date
        //   //   date = moment(date).toDate()
        // },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,

      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: data
        ? data.map((n) => (n && n["Category"]) || "untitled")
        : [],

      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    title: {
      text: "Monthly Inflation in Argentina, 2002",
      floating: true,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

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
            <Bar
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

export default BarWrapper;
