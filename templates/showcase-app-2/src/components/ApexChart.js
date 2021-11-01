import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { withTheme } from "@material-ui/styles";

function ApexChart({
  theme,
  dataKeys,
  data,
  setSelection,
  currentSelectionIds,
  options,
}) {
  useEffect(() => {
    ApexCharts.exec(
      "mychart",
      "updateOptions",
      {
        fill: {
          colors: theme.palette.chart,
        },
      },
      false,
      true
    );
  }, [currentSelectionIds, theme.palette.chart]);

  const series = data
    ? dataKeys.map((n, i) => ({
        name: n,
        data: data.map((d) => d && parseInt(d[n])),
        elemNumber: data ? data.map((n) => n && parseInt(n["elemNumber"])) : [],
      }))
    : [];

  const chartOptions = {
    states: {
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none" /* none, lighten, darken */,
        },
      },
    },
    chart: {
      id: "mychart",
      height: 350,
      type: options.type,
      events: {
        click: function (event, chartContext, config) {
          if (config.dataPointIndex !== -1 && setSelection) {
            setSelection(
              config.config.series[0].elemNumber[config.dataPointIndex]
            );
            console.log(currentSelectionIds);
          }

          if (currentSelectionIds.length !== 0)
            ApexCharts.exec(
              "mychart",
              "updateOptions",
              {
                fill: {
                  colors: [
                    function ({ value, seriesIndex, dataPointIndex, w }) {
                      if (
                        currentSelectionIds.indexOf(
                          w.config.series[seriesIndex].elemNumber[
                            dataPointIndex
                          ]
                        ) === -1
                      ) {
                        return "rgba(255, 0, 0, 0.2)";
                      } else {
                        return "#C13D40";
                      }
                    },
                  ],
                },
              },
              false,
              true
            );
          // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
        },
        dataPointMouseEnter: function (event) {
          event.path[0].style.cursor = "pointer";
        },
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
    fill: {
      colors: theme.palette.chart,
    },
    colors: theme.palette.chart,
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

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {data && (
            <Chart
              // ref={myContainer}
              options={chartOptions}
              series={series}
              type={chartOptions.chart.type}
              width="100%"
              height={chartOptions.chart.height}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default withTheme(ApexChart);
