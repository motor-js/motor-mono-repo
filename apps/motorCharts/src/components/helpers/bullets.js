//www.amcharts.com/docs/v5/concepts/common-elements/bullets/
//www.amcharts.com/docs/v5/tutorials/hide-or-relocate-label-bullets-for-small-columns/
//www.amcharts.com/docs/v5/reference/ibulletsettings/#locationX_property

import * as am5 from "@amcharts/amcharts5";

export const setBullets = (root, series) => {
  // Add bullets

  series.bullets.push(function () {
    return am5.Bullet.new(root, {
      locationX: 0.5,
      locationY: 0.5,
      sprite: am5.Circle.new(root, {
        radius: 15,
        fill: am5.color(0xffffff),
      }),
    });
  });

  series.bullets.push(function () {
    return am5.Bullet.new(root, {
      // locationY: 0,
      sprite: am5.Label.new(root, {
        text: "{valueY}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: 0,
        centerX: am5.p50,
        populateText: true,
      }),
    });
  });
};
