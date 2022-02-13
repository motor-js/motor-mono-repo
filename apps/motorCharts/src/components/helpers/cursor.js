// https://www.amcharts.com/docs/v5/reference/ixycursorsettings/
import * as am5xy from "@amcharts/amcharts5/xy";
// import * as am5 from "@amcharts/amcharts5";

export const setCursor = (chart, root) => {
  // Add cursor
  let cursor = chart.set(
    "cursor",
    am5xy.XYCursor.new(root, {
      behavior: "none",
      alwaysShow: true,
      // "cursorOverStyle": null
    })
  );

  return cursor;
};
