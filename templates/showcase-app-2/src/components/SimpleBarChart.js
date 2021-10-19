import React from "react";
import Chart from "react-apexcharts";
import { withTheme } from "@material-ui/styles";

function SimpleBarChart(props) {
  const { theme, data } = props;

  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    fill: {
      colors: theme.palette.chart,
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
      categories: data ? data.map((n) => (n && n["name"]) || "untitled") : [],

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
        // formatter: function (val) {
        //   return val + "%";
        // },
      },
    },
    legend: {
      position: "right",
      offsetY: 40,

      markers: {
        fillColors: theme.palette.chart,
      },
    },
    // title: {
    //   text: "Monthly Inflation in Argentina, 2002",
    //   floating: true,
    //   align: "center",
    //   style: {
    //     color: "#444",
    //   },
    // },
  };

  const series = [
    {
      name: "Type",
      data: data ? data.map((n) => n && parseInt(n["Type"])) : [],
    },
    {
      name: "OtherType",
      data: data ? data.map((n) => n && parseInt(n["OtherType"])) : [],
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
              type={options.chart.type}
              width="100%"
              height={options.chart.height}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default withTheme(SimpleBarChart);
