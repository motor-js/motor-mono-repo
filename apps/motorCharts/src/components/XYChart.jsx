import React, { useEffect, useState } from "react";

// https://codesandbox.io/s/6ovk5?file=/src/styles.css:123-206
// https://codesandbox.io/s/99obk?file=/src/App.js

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import PropTypes from "prop-types";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";
import { useData } from "@motor-js/engine";
import { setScrollbarX, setScrollbarY } from "./helpers/scrollbars";
import { setCursor } from "./helpers/cursor";
import { setLegend } from "./helpers/legend";
const { theme } = resolveConfig(tailwindConfig);

// in src type : ln -s ../tailwind.config.js ./
console.log(theme.colors);

//chart type
function XYChart({ chartID, cols, showScrollbarX, showScrollbarY }) {
  XYChart.propTypes = {
    chartID: PropTypes.string.isRequired,
    showScrollbarX: PropTypes.bool,
    showScrollbarY: PropTypes.bool,
  };

  XYChart.defaultProps = {
    // colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
    showScrollbarX: false,
    showScrollbarY: false,
  };
  const [dataProvided, setDataProvided] = useState(false);

  const { dataSet, dataKeys } = useData({
    cols,
  });

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
        layout: root.horizontalLayout,
      })
    );

    if (showScrollbarX) setScrollbarX(chart, root);
    if (showScrollbarY) setScrollbarY(chart, root);

    const { data } = dataSet;

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
      // fontSize: "0.5em",
    });
    // let xRenderer = xAxis.get("renderer");
    // xRenderer.labels.template.setAll({
    //   fill: am5.color(0xff0000),
    //   fontSize: "0.5em",
    // });

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

    // Add legend
    let legend = setLegend(chart, root);

    // // // Add cursor
    // // chart.set("cursor", am5xy.XYCursor.new(root, {}));
    setCursor(chart, root);

    // // console.log("dataSet", dataSet);

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          categoryXField: [dataSet.nameKey],
        })
      );

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: 0,
      });

      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true,
          }),
        });
      });

      legend.data.push(series);
    }

    dataKeys.forEach(function (sweetItem) {
      makeSeries(sweetItem, sweetItem);
    });

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    setDataProvided(true);
  }, [chartID, dataProvided, dataSet, dataKeys]);

  // Load data into chart
  return <div id={chartID} style={{ width: "100%", height: "500px" }}></div>;
}
export default XYChart;
