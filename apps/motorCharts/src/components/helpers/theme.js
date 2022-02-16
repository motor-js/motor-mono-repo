// https://www.amcharts.com/docs/v5/concepts/themes/
// https://www.amcharts.com/docs/v5/concepts/themes/creating-themes/

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";
import am5themes_Dataviz from "@amcharts/amcharts5/themes/Dataviz";
import am5themes_Frozen from "@amcharts/amcharts5/themes/Frozen";
import am5themes_Kelly from "@amcharts/amcharts5/themes/Kelly";
import am5themes_Material from "@amcharts/amcharts5/themes/Material";

export const setTheme = (root, themes = []) => {
  themes.forEach(function (theme) {
    let name;
    switch (theme) {
      case "Animated":
        name = am5themes_Animated;
        break;
      case "Dark":
        name = am5themes_Dark;
        break;
      case "DataViz":
        name = am5themes_Dataviz;
        break;
      case "Frozen":
        name = am5themes_Frozen;
        break;
      case "Kelly":
        name = am5themes_Kelly;
        break;
      case "Material":
        name = am5themes_Material;
        break;
      default:
        name = am5themes_Animated;
    }
    root.setThemes([name.new(root)]);
  });
};
