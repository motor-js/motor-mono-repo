/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const getSiblings = (elem) => {
  const siblings = [];
  let sibling = elem?.parentNode?.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

export const hexTorgb = (hex, opacity) => {
  const h = hex.replace("#", "");
  // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
  const hh = h.match(new RegExp(`(.{${h.length / 3}})`, "g"));
  const rgba = [];
  if (!hh) return;
  for (let i = 0; i < hh.length; i += 1)
    rgba[i] = parseInt(hh[i].length === 1 ? hh[i] + hh[i] : hh[i], 16);

  if (typeof opacity !== "undefined") rgba.push(opacity);

  // eslint-disable-next-line consistent-return
  return `rgba(${rgba.join(",")})`;
};

export const flatDeep = (arr, d = 1) => {
  return d > 0
    ? arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val);
      }, [])
    : arr.slice();
};

export const formatNumber = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const hasKey = (obj, key) => {
  return !!Object.prototype.hasOwnProperty.call(obj, key);
};

export const generateDayWiseTimeSeries = (baseval, count, yrange) => {
  let i = 0;
  let value = baseval;
  const series = [];
  while (i < count) {
    const y =
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([value, y]);
    value += 86400000;
    i += 1;
  }
  return series;
};

export const flattenData = (d) => {
  let arr = [];
  let newObj = {};
  d.map((res) => {
    Object.keys(res).forEach((item) => {
      if (item === "key") {
        newObj[item] = res[item];
      } else {
        newObj[item] = res[item].text;
      }
    });
    arr.push(newObj);
    newObj = {};
    return null;
  });
  return arr;
};
