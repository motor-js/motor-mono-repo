import * as am5xy from "@amcharts/amcharts5/xy";

export const setCursor = (chart, root) => {
  // Add cursor
  chart.set("cursor", am5xy.XYCursor.new(root, {}));
};
