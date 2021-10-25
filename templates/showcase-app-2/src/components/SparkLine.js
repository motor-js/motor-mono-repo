import React from "react";
import Chart from "react-apexcharts";
import { withTheme } from "@material-ui/styles";

function SimpleBarChart(props) {
  const { theme, dataKeys, data, options } = props;

  const series = data
    ? dataKeys.map((n, i) => ({
        name: n,
        data: data.map((d) => d && parseInt(d[n])),
      }))
    : [];

  const kpiOptions = {
    chart: {
      type: options.type,
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: options.fillOpacity,
    },
    xaxis: {
      type: "category",
      labels: { show: false },
    },
    labels: data ? data.map((n) => (n && n["name"]) || "untitled") : [],
    // yaxis: {
    //   min: 0,
    // },
    colors: theme.palette.kpi,
    title: {
      text: options.title.text,
      offsetX: theme.kpi.title.offsetX,
      style: {
        fontSize: theme.typography.kpi.title.fontSize,
        color: theme.palette.primary.light,
        fontFamily: theme.typography.body1.fontFamily,
        fontWeight: theme.typography.kpi.title.fontWeight,
      },
    },
    // tooltip: {
    //   // theme: false,
    //   fillSeriesColor: true,
    //   // style: { fontSize: "36px" },
    // },
    subtitle: {
      text: options.subtitle.text,
      offsetX: theme.kpi.subtitle.offsetX,
      floating: theme.kpi.subtitle.floating,
      // margin: 10,
      style: {
        fontSize: theme.typography.kpi.subtitle.fontSize,
        fontFamily: theme.typography.body1.fontFamily,
        color: theme.typography.kpi.subtitle.color,
      },
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {/* {data && ( */}
          <Chart
            options={kpiOptions}
            series={series}
            type={kpiOptions.chart.type}
            width="100%"
            height={kpiOptions.chart.height}
          />
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default withTheme(SimpleBarChart);
