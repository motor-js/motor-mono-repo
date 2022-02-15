// https://www.amcharts.com/docs/v5/concepts/common-elements/labels/

import { Label } from "@amcharts/amcharts5";
import * as am5 from "@amcharts/amcharts5";

export const setLabel = (chart, root, text) => {
  chart.children.push(
    Label.new(root, {
      text,
      //   text: "And this is a smaller sub-title",
      fontSize: 14,
      textAlign: "center",
      x: am5.percent(50),
      centerX: am5.percent(50),
    })
  );
};
export const setLabelBefore = (chart, root, text) => {
  chart.children.unshift(
    Label.new(root, {
      text,
      fontSize: 25,
      fontWeight: "500",
      textAlign: "center",
      x: am5.percent(50),
      centerX: am5.percent(50),
      paddingTop: 0,
      paddingBottom: 0,
    })
  );
};
