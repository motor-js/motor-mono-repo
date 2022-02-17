/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root and chart
var root = am5.Root.new("chartdiv");

root.setThemes([am5themes_Animated.new(root)]);

var chart = root.container.children.push(
  am5xy.XYChart.new(root, {
    panY: false,
    wheelY: "zoomX",
    layout: root.verticalLayout,
  })
);

// Define data
var data = [
  {
    category: "Research",
    value: 690,
  },
  {
    category: "Marketing",
    value: 1000,
  },
  {
    category: "Sales",
    value: 850,
  },
];

// Craete Y-axis
var yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    min: 400,
    max: 1400,
    renderer: am5xy.AxisRendererY.new(root, {}),
  })
);

// Create X-Axis
var xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
    maxDeviation: 0.2,
    renderer: am5xy.AxisRendererX.new(root, {}),
    categoryField: "category",
  })
);
xAxis.data.setAll(data);

// Create series
var series = chart.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    categoryXField: "category",
    interpolationDuration: 2000,
    interpolationEasing: am5.ease.inOut(am5.ease.elastic),
  })
);
series.data.setAll(data);

// Update data
setInterval(function () {
  series.data.setIndex(1, {
    category: "Marketing",
    value: Math.round(Math.random() * 800 + 400),
  });
}, 3000);
