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
  chart: { type: "area", margin: { top: 0, right: 0, left: 0, bottom: 0 } },
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
  ],
  qTitle: "='There are ' & count(distinct coin) & ' coins'",
  icon: "bitcoin",
  styleName: "up",
};
