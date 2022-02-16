import React, { useEffect } from "react";

// https://codesandbox.io/s/6ovk5?file=/src/styles.css:123-206
// https://codesandbox.io/s/99obk?file=/src/App.js
// https://codepen.io/team/amcharts/pen/podWdBM/369f78a1933e954d35c2379960ef229a?editors=0010

// Chart with title adn legen on right
// https://codepen.io/team/amcharts/pen/podWdBM/369f78a1933e954d35c2379960ef229a?editors=0010

// import * as am5 from "@amcharts/amcharts5";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
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
  makeSeries,
  createRoot,
  disposeRoot,
  setTheme,
} from "./helpers";

const { theme } = resolveConfig(tailwindConfig);

// in src type : ln -s ../tailwind.config.js ./
console.log(theme.colors);

//chart type
function XYChart({
  chartID,
  config,
  // cols,
  // showScrollbarX = false,
  // showScrollbarY = false,
}) {
  XYChart.propTypes = {
    chartID: PropTypes.string.isRequired,
    // showScrollbarX: PropTypes.bool,
    // showScrollbarY: PropTypes.bool,
  };

  const { cols, themes, legend, scrollbars } = config;

  const { dataSet, dataKeys } = useData({
    cols,
  });

  useEffect(() => {
    if (Object.keys(dataSet).length === 0 && dataSet.constructor === Object)
      return;

    disposeRoot(chartID);
    var root = createRoot(chartID);

    setTheme(root, themes); // Set themes

    let chart = setContainer(root);

    scrollbars.showX && setScrollbarX(chart, root);
    scrollbars.showY && setScrollbarY(chart, root);

    const { data } = dataSet;

    let yAxis = setYAxis(chart, root); // Create Y-Axis

    let xAxis = setXAxis(chart, root, dataSet, data); // Create X-Axis

    setCursor(chart, root); // Add cursor

    dataKeys.forEach(function (sweetItem) {
      // Add series
      makeSeries(
        sweetItem,
        sweetItem,
        root,
        chart,
        xAxis,
        yAxis,
        // legend,
        dataSet,
        data
      );
    });

    setLegend(chart, root, legend); // Add legend
    // legend.data.setAll(chart.series.values);

    // legend.data.setAll(chart.series.dataItems);
    // console.log(chart.series.dataItems);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
  }, [chartID, dataSet, dataKeys, themes]);

  // Load data into chart
  return <div id={chartID} style={{ width: "100%", height: "500px" }}></div>;
}
export default XYChart;
