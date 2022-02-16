import * as am5 from "@amcharts/amcharts5";

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
export const setScrollbarX = (chart, root) => {
  // chart.set(
  //   "scrollbarX",
  //   am5.Scrollbar.new(root, {
  //     orientation: "horizontal",
  //   })
  // );
  var scrollbarX = am5.Scrollbar.new(root, {
    orientation: "horizontal",
  });

  chart.set("scrollbarX", scrollbarX);
  chart.topAxesContainer.children.push(scrollbarX);
};

export const setScrollbarY = (chart, root) => {
  // chart.set(
  //   "scrollbarY",
  //   am5.Scrollbar.new(root, {
  //     orientation: "vertical",
  //   })
  // );

  // Scrollbar Y
  var scrollbarY = am5.Scrollbar.new(root, {
    orientation: "vertical",
  });

  chart.set("scrollbarY", scrollbarY);
  chart.rightAxesContainer.children.unshift(scrollbarY);
};
