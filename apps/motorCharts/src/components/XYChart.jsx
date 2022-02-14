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

import {
  setCursor,
  setLegend,
  setScrollbarX,
  setScrollbarY,
  setYAxis,
  setXAxis,
  setContainer,
  setBullets,
} from "./helpers";

const { theme } = resolveConfig(tailwindConfig);

// in src type : ln -s ../tailwind.config.js ./
console.log(theme.colors);

//chart type
function XYChart({
  chartID,
  cols,
  showScrollbarX = false,
  showScrollbarY = false,
}) {
  XYChart.propTypes = {
    chartID: PropTypes.string.isRequired,
    showScrollbarX: PropTypes.bool,
    showScrollbarY: PropTypes.bool,
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

    let chart = setContainer(root);

    showScrollbarX && setScrollbarX(chart, root);
    showScrollbarY && setScrollbarY(chart, root);

    const { data } = dataSet;

    // Create Y-Axis
    let yAxis = setYAxis(chart, root);

    // Create X-Axis
    let xAxis = setXAxis(chart, root, dataSet, data);

    // Add legend
    let legend = setLegend(chart, root);

    // Add cursor
    setCursor(chart, root);

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

      setBullets(root, series);

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