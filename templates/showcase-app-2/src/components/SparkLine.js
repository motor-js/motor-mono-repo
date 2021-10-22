import React from "react";
import Chart from "react-apexcharts";
import { withTheme } from "@material-ui/styles";

var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

function SimpleBarChart(props) {
  const { theme, data, options } = props;

  var sparklineData = [
    47,
    45,
    54,
    38,
    56,
    24,
    65,
    31,
    37,
    39,
    62,
    51,
    35,
    41,
    35,
    27,
    93,
    53,
    61,
    27,
    54,
    43,
    19,
    46,
  ];

  const series = [
    {
      data: randomizeArray(sparklineData),
    },
  ];

  // console.log(theme.palette);
  const kpiOptions = {
    chart: {
      type: "area",
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 0.3,
    },
    yaxis: {
      min: 0,
    },
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
