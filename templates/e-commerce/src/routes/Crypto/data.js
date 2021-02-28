export const increamentData = [
  { name: "Page A", price: 200 },
  { name: "Page B", price: 1200 },
  { name: "Page C", price: 600 },
  { name: "Page D", price: 1600 },
  { name: "Page D", price: 1000 },
  { name: "Page H", price: 2260 },
  { name: "Page K", price: 800 },
];

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
    type: "area",
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
    qTitle: "='There are ' & count(distinct coin) & ' coins'",
  },
  icon: "bitcoin",
  // styleName: "up",
};
