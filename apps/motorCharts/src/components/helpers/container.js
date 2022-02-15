//www.amcharts.com/docs/v5/concepts/common-elements/containers/
//www.amcharts.com/docs/v5/reference/root/#horizontalLayout_property
//www.amcharts.com/docs/v5/reference/icontainersettings/#mask_property

// import * as am5 from "@amcharts/amcharts5";
// import { Label } from "@amcharts/amcharts5";
import { XYChart } from "@amcharts/amcharts5/xy";
import { setLabel, setLabelBefore } from "./labels";

export const setContainer = (root) => {
  // Create chart

  const chart = root.container.children.push(
    XYChart.new(root, {
      panY: false,
      layout: root.verticalLayout,
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
  // chart.children.push(
  //   Label.new(root, {
  //     text: "Copyright 2021 amCharts",
  //   })
  // );
  setLabel(chart, root, "Copyright 2021 amCharts");
  setLabelBefore(chart, root, "Chart title");
  //   chart.children.unshift(
  //     Label.new(root, {
  //       text: "Chart title",
  //     })
  //   );
  return chart;
};
