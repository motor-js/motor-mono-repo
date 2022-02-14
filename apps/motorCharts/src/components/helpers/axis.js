import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

export const setYAxis = (chart, root) => {
  // Create Y-axis
  var yRenderer = am5xy.AxisRendererY.new(root, {});
  // xRenderer.labels.template.setAll({
  //   rotation: -45,
  //   centerY: am5.p50,
  //   centerX: am5.p100,
  //   paddingRight: 15,
  //   // fontSize: "0.5em",
  //   // fill: am5.color(0x0000ff),
  // });
  return chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: yRenderer,
    })
  );
};

export const setXAxis = (chart, root, dataSet, data) => {
  var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
  xRenderer.labels.template.setAll({
    rotation: -45,
    centerY: am5.p50,
    centerX: am5.p100,
    paddingRight: 15,
    // fontSize: "0.5em",
    // fill: am5.color(0x0000ff),
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

  return xAxis;
};
