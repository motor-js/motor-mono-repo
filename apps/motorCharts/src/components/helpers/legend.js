//www.amcharts.com/docs/v5/reference/legend/
//www.amcharts.com/docs/v5/reference/icontainersettings/#paddingBottom_property
//www.amcharts.com/docs/v5/reference/rectangle/#className_property
//www.amcharts.com/docs/v5/reference/roundedrectangle/

import * as am5 from "@amcharts/amcharts5";

export const setLegend = (chart, root, legend) => {
  // Add legend

  if (!legend.show) return;

  const chartLegend = chart.rightAxesContainer.children.push(
    // if leget on right
    am5.Legend.new(root, {
      active: null,
      background: am5.Rectangle.new(root, {
        fill: am5.color(0xff5599),
        fillOpacity: 0.2,
      }),

      // background: am5.RoundedRectangle.new(root, {
      //   fill: am5.color(0xff7272),
      //   fillOpacity: 0.6,
      //   cornerRadiusBR: 150,
      // }),
      // calculateAggregates:null,
      // x:null,
      // centerX:null,
      // y:null,
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
      // layout: am5.GridLayout.new(root, {
      //   maxColumns: 2,
      //   fixedWidthGrid: true,
      // }),
    })
  );

  chartLegend.data.setAll(chart.series.values);

  // return legend;
  // legend.data.setAll(chart.series.values);
};
