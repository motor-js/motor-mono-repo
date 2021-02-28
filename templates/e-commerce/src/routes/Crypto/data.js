// export const increamentData = [
//   { name: "Page A", price: 200 },
//   { name: "Page B", price: 1200 },
//   { name: "Page C", price: 600 },
//   { name: "Page D", price: 1600 },
//   { name: "Page D", price: 1000 },
//   { name: "Page H", price: 2260 },
//   { name: "Page K", price: 800 },
// ];

// export const lineData = [
//   { name: "Page A", price: 200 },
//   { name: "Page B", price: 1100 },
//   { name: "Page C", price: 800 },
//   { name: "Page D", price: 1700 },
//   { name: "Page D", price: 600 },
//   { name: "Page D", price: 1800 },
//   { name: "Page D", price: 600 },
// ];

export const bitCoinKPI = {
  chartConfig: {
    chartType: "area",
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    height: 75,
    gradient: {
      id: "color3",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "0",
      offsetStart: {
        offset: "5%",
        stopColor: "#163469",
        stopOpacity: 0.9,
      },
      offsetEnd: { offset: "95%", stopColor: "#FE9E15", stopOpacity: 0.9 },
    },
    dataKey: "price",
    type: null,
    strokeWidth: 0,
    stackId: 2,
    stroke: "#4D95F3",
    fill: "url(#color3)",
    fillOpacity: 1,
  },
  data: {
    cols: [
      {
        qField: "[name]",
        qLabel: "name",
      },
      {
        qField: "=Sum({$<coin={'bitcoin'}>} price)",
        qLabel: "price",
      },
    ],
    qMetrics: [
      {
        qName: "prize",
        qExpr: "num(Sum(price),'$#,##0')",
        qType: "qStringExpression",
      },
      {
        qName: "desc",
        qExpr: "num(Count(distinct coin)/100,'#,##0%')",
        qType: "qStringExpression",
      },
      {
        qName: "styleName",
        qExpr: "if(Count(distinct coin)>=0,'up','down')",
        qType: "qStringExpression",
      },
    ],
    qTitle:
      "='Bitcoin Max Price : ' & Num(Max({$<coin={'bitcoin'}>}price),'$#,##0')",
  },
  icon: "bitcoin",
  // styleName: "up",
};

export const etheriumKPI = {
  chartConfig: {
    chartType: "area",
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    height: 75,

    gradient: {
      id: "color4",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "0",
      offsetStart: {
        offset: "5%",
        stopColor: "#4ECDE4",
        stopOpacity: 0.9,
      },
      offsetEnd: { offset: "95%", stopColor: "#06BB8A", stopOpacity: 0.9 },
    },
    dataKey: "price",
    type: "monotone",
    strokeWidth: 0,
    stackId: 2,
    stroke: "#4D95F3",
    fill: "url(#color4)",
    fillOpacity: 1,
  },
  data: {
    cols: [
      {
        qField: "[name]",
        qLabel: "name",
      },
      {
        qField: "=Sum({$<coin={'etherium'}>} price)",
        qLabel: "price",
      },
    ],
    qMetrics: [
      {
        qName: "prize",
        qExpr: "num(Sum(price),'$#,##0')",
        qType: "qStringExpression",
      },
      {
        qName: "desc",
        qExpr: "num(Count(distinct coin)/100,'#,##0%')",
        qType: "qStringExpression",
      },
      {
        qName: "styleName",
        qExpr: "if(Count(distinct coin)>=0,'up','down')",
        qType: "qStringExpression",
      },
    ],
    qTitle:
      "='Etherium Max Price : ' & Num(Max({$<coin={'etherium'}>}price),'$#,##0')",
  },
  icon: "etherium",
  // styleName: "up",
};

export const rippleKPI = {
  chartConfig: {
    chartType: "area",
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    height: 75,

    gradient: {
      id: "color5",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1",
      offsetStart: {
        offset: "5%",
        stopColor: "#e81a24",
        stopOpacity: 0.8,
      },
      offsetEnd: { offset: "95%", stopColor: "#FEEADA", stopOpacity: 0.8 },
    },
    dataKey: "price",
    // type: "monotone",
    strokeWidth: 0,
    stackId: 2,
    stroke: "#FEEADA",
    fill: "url(#color5)",
    fillOpacity: 1,
  },
  data: {
    cols: [
      {
        qField: "[name]",
        qLabel: "name",
      },
      {
        qField: "=Sum({$<coin={'ripple'}>} price)",
        qLabel: "price",
      },
    ],
    qMetrics: [
      {
        qName: "prize",
        qExpr: "num(Sum(price),'$#,##0')",
        qType: "qStringExpression",
      },
      {
        qName: "desc",
        qExpr: "num(Count(distinct coin)/100,'#,##0%')",
        qType: "qStringExpression",
      },
      {
        qName: "styleName",
        qExpr: "if(Count(distinct coin)>=0,'up','down')",
        qType: "qStringExpression",
      },
    ],
    qTitle:
      "='Ripple Max Price : ' & Num(Max({$<coin={'ripple'}>}price),'$#,##0')",
  },
  icon: "ripple",
  // styleName: "up",
};
