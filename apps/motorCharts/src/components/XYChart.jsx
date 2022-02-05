import React, { useLayoutEffect, useState } from "react";

// https://codesandbox.io/s/6ovk5?file=/src/styles.css:123-206
// https://codesandbox.io/s/99obk?file=/src/App.js

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "../tailwind.config";
import { useData } from "@motor-js/engine";
// const { theme } = resolveConfig(tailwindConfig);

// in src type : ln -s ../tailwind.config.js ./
// console.log(theme.colors);

//chart type
function XYChart(props) {
  const [dataProvided, setDataProvided] = useState(false);
  const cols = [
    {
      qField: "BURGER",
      qLabel: "Burger",
    },

    {
      qField: "=sum(Calories)",
      qLabel: "Total Calories",
    },
  ];

  const { dataSet } = useData({
    cols,
  });

  // const { data } = dataSet;

  // console.log(dataSet);
  const chartID = props.chartID;
  // console.log({ chartID });

  useLayoutEffect(() => {
    if (Object.keys(dataSet).length === 0 && dataSet.constructor === Object)
      return;
    if (dataProvided) return;
    var root = am5.Root.new(chartID);

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
    console.log("useEffectlayout");

    // const data2 = dataSet.data.map();

    // const new_adat = kvArray.map((obj) => {
    //   let rObj = {};
    //   rObj[obj.key] = obj.value;
    //   return rObj;
    // });

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

    // console.log("chart.series.values", chart.series.values);

    // // Add cursor
    // chart.set("cursor", am5xy.XYCursor.new(root, {}));

    console.log("dataSet", dataSet);
    setDataProvided(true);
  }, [chartID, dataProvided, dataSet]);

  // Load data into chart

  // return <div id={chartID} style={{ width: "100%", height: "500px" }}></div>;
  return <div id={chartID} style={{ width: "100%", height: "500px" }}></div>;
}
export default XYChart;
