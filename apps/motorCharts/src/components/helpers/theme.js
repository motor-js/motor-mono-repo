// https://www.amcharts.com/docs/v5/concepts/themes/

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export const setTheme = (root) =>
  root.setThemes([am5themes_Animated.new(root)]);
