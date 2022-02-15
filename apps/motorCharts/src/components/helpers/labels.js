// https://www.amcharts.com/docs/v5/concepts/common-elements/labels/

import { Label } from "@amcharts/amcharts5";

export const setLabel = (chart, root, text) => {
  chart.children.push(
    Label.new(root, {
      text,
    })
  );
};
export const setLabelBefore = (chart, root, text) => {
  chart.children.unshift(
    Label.new(root, {
      text,
    })
  );
};
