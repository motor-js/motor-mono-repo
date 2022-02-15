// https://www.amcharts.com/docs/v5/getting-started/root-element/

import { Root, registry, array } from "@amcharts/amcharts5";

export const createRoot = (divId) => Root.new(divId, {});

export const disposeRoot = (divId) => {
  array.each(registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
};
