import React, { useLayoutEffect } from "react";

// https://codesandbox.io/s/6ovk5?file=/src/styles.css:123-206
// https://codesandbox.io/s/99obk?file=/src/App.js

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";
import { useData } from "@motor-js/engine";
const { theme } = resolveConfig(tailwindConfig);

// in src type : ln -s ../tailwind.config.js ./
// console.log(theme.colors);

//chart type
const cols = [
  // {
  //   // qField: "SALES_DATE.autoCalendar.Year",
  //   qField: "SALES_DATE.autoCalendar.Year",
  //   // qField: "SALES_DATE",
  //   // qLabel: "Year",
  //   qLabel: "country",
  // },
  // {
  //   // qField: "SALES_DATE.autoCalendar.Year",
  //   qField: "RESTAURANT",
  //   // qField: "SALES_DATE",
  //   // qLabel: "Year",
  //   qLabel: "country",
  // },
  {
    // qField: "SALES_DATE.autoCalendar.Year",
    qField: "BURGER",
    // qField: "SALES_DATE",
    // qLabel: "Year",
    qLabel: "country",
  },
  // {
  //   qField: "BURGER",
  //   qLabel: "Burger",
  // },

  {
    qField: "=Sum(COST_UK*SALES_QTY)",
    // qLabel: "Total_Sales",
    qLabel: "value",
  },
  // {
  //   qField: "=Sum(COST_UK)",
  //   qLabel: "Cost",
  // },
  // {
  //   qField: "=Sum(SALES_QTY)",
  //   qLabel: "value",
  // },
];

function XYChart(props) {
  //const chart = useRef(null);

  const { dataSet, dataKeys } = useData({
    cols,
  });
  const chartID = props.chartID;
  console.log({ chartID });

  useLayoutEffect(() => {
    //var root = am5.Root.new("chartdiv2");
    var root = am5.Root.new(chartID);

    // Create root and chart

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );

    // Define data
    let data = [
      {
        category: "Research",
        value1: 1000,
        value2: 588,
      },
      {
        category: "Marketing",
        value1: 1200,
        value2: 1800,
      },
      {
        category: "Sales",
        value1: 850,
        value2: 1230,
      },
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category",
      })
    );
    series1.data.setAll(data);
    series1.columns.template.setAll({
      tooltipText: "{name}, {categoryX}:{valueY}",
      width: am5.percent(90),
      tooltipY: 0,
    });

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category",
      })
    );
    series2.data.setAll(data);

    series2.columns.template.setAll({
      tooltipText: "{name}, {categoryX}:{valueY}",
      width: am5.percent(90),
      tooltipY: 0,
    });

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    // chart.set("cursor", am5xy.XYCursor.new(root, {}));
  }, [chartID]);

  // return <div id={chartID} style={{ width: "100%", height: "500px" }}></div>;
  return <div id={chartID} style={{ width: "100%", height: "500px" }}></div>;
}
export default XYChart;
