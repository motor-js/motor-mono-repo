//www.amcharts.com/docs/v5/concepts/common-elements/containers/
//www.amcharts.com/docs/v5/reference/root/#horizontalLayout_property
//www.amcharts.com/docs/v5/reference/icontainersettings/#mask_property

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

export const setContainer = (root) => {
  // Create chart

  const chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panY: false,
      layout: root.horizontalLayout,
      // background: am5.RoundedRectangle.new(root, {
      //   fill: am5.color(0xff5599),
      //   fillOpacity: 0.2,
      // }),
      // centerX: am5.percent(50),
      // x: am5.percent(50),
      // height: am5.percent(100),
      // verticalScrollbar: am5.Scrollbar.new(root, {
      //   orientation: "vertical",
      // }),
    })
  );
  // chart.set(
  //   "mask",
  //   am5.Star.new(root, {
  //     radius: 200,
  //     innerRadius: 150,
  //     spikes: 20,
  //     fill: am5.color(0x000000),
  //     x: am5.percent(50),
  //     y: am5.percent(50),
  //   })
  // );
  chart.children.push(
    am5.Label.new(root, {
      text: "Copyright 2021 amCharts",
    })
  );
  chart.children.unshift(
    am5.Label.new(root, {
      text: "Chart title",
    })
  );
  return chart;
};
