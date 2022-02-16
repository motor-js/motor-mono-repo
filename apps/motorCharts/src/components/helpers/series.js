import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

import { setBullets } from "./bullets";

// // Create series
// let series1 = chart.series.push(
//   am5xy.ColumnSeries.new(root, {
//     name: [dataSet.nameKey],
//     xAxis: xAxis,
//     yAxis: yAxis,
//     valueYField: [dataSet.valueKey],
//     categoryXField: [dataSet.nameKey],
//     sequencedInterpolation: true,
//     // userData: "elemNumber",
//     // userData: {
//     //   foo: "bar",
//     // },
//   })
// );
// series1.data.setAll(data);
// series1.columns.template.setAll({
//   tooltipText: "{name}, {categoryX}:{valueY}",
//   width: am5.percent(90),
//   tooltipY: 0,
// });
// // series1.setAll("userData", {
// //   foo: "bar",
// // });
// series1.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
// series1.columns.template.adapters.add("fill", (fill, target) => {
//   return chart.get("colors").getIndex(series1.columns.indexOf(target));
// });

// series1.columns.template.adapters.add("stroke", (stroke, target) => {
//   return chart.get("colors").getIndex(series1.columns.indexOf(target));
// });

// series1.columns.template.events.on("click", function (ev) {
//   console.log("Clicked on a column", ev.target);
//   // console.log("Clicked on a column", ev.target.dataItem.get("valueY"));
//   // console.log(
//   //   "Clicked on a column",
//   //   ev.target.dataItem.dataContext.elemNumber
//   // );

//   // console.log(series1.get("userData"));
// });

// // Make stuff animate on load
// // https://www.amcharts.com/docs/v5/concepts/animations/
// series1.appear(1000);
// series.animate({
//   key: "startAngle",
//   to: 180,
//   loops: Infinity,
//   duration: 2000,
//   easing: am5.ease.yoyo(am5.ease.cubic),
// });

// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
export function makeSeries(
  name,
  fieldName,
  root,
  chart,
  xAxis,
  yAxis,
  dataSet,
  data
) {
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
    // showTooltipOn: "always",
    width: am5.percent(90),
    tooltipY: 0,
  });

  series.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();

  setBullets(root, series);
}
