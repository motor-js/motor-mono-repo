//www.amcharts.com/docs/v5/concepts/common-elements/containers/
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

export const setContainer = (root) => {
  // Create chart

  return root.container.children.push(
    am5xy.XYChart.new(root, {
      panY: false,
      layout: root.horizontalLayout,
      background: am5.Rectangle.new(root, {
        fill: am5.color(0xff5599),
        fillOpacity: 0.2,
      }),
    })
  );
};
