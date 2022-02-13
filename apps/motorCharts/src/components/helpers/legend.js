//www.amcharts.com/docs/v5/reference/legend/
import * as am5 from "@amcharts/amcharts5";

export const setLegend = (chart, root) => {
  // Add legend

  let legend = chart.children.push(
    am5.Legend.new(root, {
      // active: null,
      background: am5.Rectangle.new(root, {
        fill: am5.color(0xff5599),
        fillOpacity: 0.2,
      }),
      // calculateAggregates:null,
      // centerX:null,
      // centerY: null,
      // clickTarget:null,
      // cursorOverStyle:null,
      // dateFormatter:null,
      // disabled: true,
      fill: am5.color(0xff0000),
      // https://www.amcharts.com/docs/v5/concepts/common-elements/containers/#Layout
      layout: root.verticalLayout,
      // marginTop: 500,
      paddingBottom: null,
      paddingLeft: null,
      paddingRight: null,
      paddingTop: null,
      reverseChildren: null,
      rotation: null,
    })
  );
  // legend.data.setAll(chart.series.values);

  return legend;
};
