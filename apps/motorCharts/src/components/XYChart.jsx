import React, { useEffect, useState } from "react";

// https://codesandbox.io/s/6ovk5?file=/src/styles.css:123-206
// https://codesandbox.io/s/99obk?file=/src/App.js

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import PropTypes from "prop-types";
// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "../tailwind.config";
import { useData } from "@motor-js/engine";
// const { theme } = resolveConfig(tailwindConfig);

// in src type : ln -s ../tailwind.config.js ./
// console.log(theme.colors);

//chart type
function XYChart(props) {
  // XYChart.defaultProps = {
  //   colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
  //   type: "bar",
  //   width: "100%",
  //   Height: "80%",
  //   // plotOptions: {},
  // };

  // ApexChart.propTypes = {
  //   id: PropTypes.string.isRequired,
  //   type: PropTypes.string,
  //   stacked: PropTypes.bool,
  //   toolbar: PropTypes.object,
  //   series: PropTypes.array,
  //   sparkline: PropTypes.object,
  //   animation: PropTypes.object,
  //   tooltip: PropTypes.object,
  //   colors: PropTypes.array,
  //   dataLabels: PropTypes.object,
  //   legend: PropTypes.object,
  //   height: PropTypes.any,
  //   width: PropTypes.any,
  //   fill: PropTypes.object,
  //   plotOptions: PropTypes.object,
  //   stroke: PropTypes.object,
  //   dropShadow: PropTypes.object,
  //   markers: PropTypes.object,
  // };

  const [dataProvided, setDataProvided] = useState(false);
  const cols = [
    {
      qField: "BURGER",
      qLabel: "Burger",
    },

    {
      qField: "=Sum(COST_UK*SALES_QTY)",
      qLabel: "Total Sales",
    },
  ];

  const { dataSet } = useData({
    cols,
  });

  // const { data } = dataSet;

  // console.log(dataSet);
  const { chartID } = props;
  // console.log({ chartID });

  useEffect(() => {
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

    const { data } = dataSet;

    // Define data
    // let data = [
    //   {
    //     category: "Research",
    //     value1: 1000,
    //     value2: 588,
    //   },
    //   {
    //     category: "Marketing",
    //     value1: 1200,
    //     value2: 1800,
    //   },
    //   {
    //     category: "Sales",
    //     value1: 850,
    //     value2: 1230,
    //   },
    // ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -45,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
      fontSize: "0.5em",
    });

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        // renderer: am5xy.AxisRendererX.new(root, {}),
        // categoryField: [dataSet.nameKey],
        maxDeviation: 0.3,
        categoryField: [dataSet.nameKey],
        renderer: xRenderer,
        // tooltip: am5.Tooltip.new(root, {}),
      })
    );
    xAxis.data.setAll(data);

    // console.log(dataSet);

    // let xRenderer = xAxis.get("renderer");
    // xRenderer.labels.template.setAll({
    //   fill: am5.color(0xff0000),
    //   fontSize: "0.5em",
    // });

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: [dataSet.nameKey],
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: [dataSet.valueKey],
        categoryXField: [dataSet.nameKey],
        // sequencedInterpolation: true,
        // userData: "elemNumber",
        // userData: {
        //   foo: "bar",
        // },
      })
    );
    series1.data.setAll(data);
    series1.columns.template.setAll({
      tooltipText: "{name}, {categoryX}:{valueY}",
      width: am5.percent(90),
      tooltipY: 0,
    });
    // series1.setAll("userData", {
    //   foo: "bar",
    // });
    series1.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
    series1.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors").getIndex(series1.columns.indexOf(target));
    });

    series1.columns.template.adapters.add("stroke", (stroke, target) => {
      return chart.get("colors").getIndex(series1.columns.indexOf(target));
    });

    series1.columns.template.events.on("click", function (ev) {
      console.log("Clicked on a column", ev.target);
      // console.log("Clicked on a column", ev.target.dataItem.get("valueY"));
      // console.log(
      //   "Clicked on a column",
      //   ev.target.dataItem.dataContext.elemNumber
      // );

      // console.log(series1.get("userData"));
    });

    // let series2 = chart.series.push(
    //   am5xy.ColumnSeries.new(root, {
    //     name: "Series",
    //     xAxis: xAxis,
    //     yAxis: yAxis,
    //     valueYField: "value2",
    //     categoryXField: "category",
    //   })
    // );
    // series2.data.setAll(data);

    // series2.columns.template.setAll({
    //   tooltipText: "{name}, {categoryX}:{valueY}",
    //   width: am5.percent(90),
    //   tooltipY: 0,
    // });

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // console.log("chart.series.values", chart.series.values);

    // // Add cursor
    // chart.set("cursor", am5xy.XYCursor.new(root, {}));

    // console.log("dataSet", dataSet);
    setDataProvided(true);
  }, [chartID, dataProvided, dataSet]);

  // Load data into chart

  // return <div id={chartID} style={{ width: "100%", height: "500px" }}></div>;
  return <div id={chartID} style={{ width: "100%", height: "500px" }}></div>;
}
export default XYChart;
