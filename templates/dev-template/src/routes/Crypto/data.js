export const tableCols = {
  qTitle: "Products",
  imageRender: (text, data) => {
    return (
      <div>
        <img src={data.image} />
      </div>
    );
  },
  pagination: {
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "30"],
  },
  cols: [
    {
      qField: "_Image",
      qLabel: "image",
      qImage: true,
    },
    {
      qField: "Name",
      qLabel: "Name",
    },
    {
      qField: "Country",
      qLabel: "Country",
    },
    {
      qField: "Category",
      qLabel: "Category",
    },
  ],
};

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
    // dataKey: "price",
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
        qType: "qStringExpression", // qValueExpression if a pure number is to be returned
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
    // dataKey: "price",
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
    strokeWidth: 0,
    stackId: 2,
    stroke: "#FEEADA",
    fill: "url(#color5)",
    fillOpacity: 1,
    // stacked: true,
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
      // {
      //   qField: "=Sum({$<coin={'bitcoin'}>} price)",
      //   qLabel: "price",
      // },
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
};

export const litecoinKPI = {
  chartConfig: {
    chartType: "line",
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    height: 75,
    stroke: "#038FDE",
    dot: { stroke: "#FEA931", strokeWidth: 2 },
  },
  data: {
    cols: [
      {
        qField: "[name]",
        qLabel: "name",
      },
      {
        qField: "=Sum({$<coin={'litecoin'}>} price)",
        qLabel: "price",
      },
      // {
      //   qField: "=Sum({$<coin={'bitcoin'}>} price)",
      //   qLabel: "bitcoin",
      // },
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
        qExpr: "if(Count(distinct coin)>=0,'down','up')",
        qType: "qStringExpression",
      },
    ],
    qTitle:
      "='Litecoin Max Price : ' & Num(Max({$<coin={'litecoin'}>}price),'$#,##0')",
  },
  icon: "litecoin",
};

export const BalanceHistory = {
  chartConfig: {
    chartType: "bar",
    margin: { top: 10, right: 0, left: 0, bottom: 0 },
    showXAxis: true,
    showXAxis: true,
    showGrid: true,
    showLegend: false,
    height: 180,
    isAnimationActive: true,
    xAxisDataKey: "name",
    // dataKey: "price",
    type: "monotone",
    strokeWidth: 0,
    stroke: "#003366",
    fill: ["#6b5b95", "#feb236", "#d64161", "#ff7b25"],
    stacked: true,
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
        qFillStyle: "orange",
      },
      {
        qField: "=Sum({$<coin={'ripple'}>} price)*2.1",
        qLabel: "count",
      },
    ],

    qTitle:
      "='Ripple Max Price : ' & Num(Max({$<coin={'ripple'}>}price),'$#,##0')",
  },
};

export const BalanceHistoryMultiDim = {
  chartConfig: {
    chartType: "bar",
    // margin: { top: 10, right: 0, left: -15, bottom: 0 },
    margin: { top: 10, right: 10, left: 0, bottom: 0 },
    showXAxis: true,
    showXAxis: true,
    showGrid: true,
    showLegend: false,
    height: 180,
    isAnimationActive: true,
    xAxisDataKey: "name",
    // dataKey: "price",
    type: "monotone",
    strokeWidth: 0,
    stroke: "#003366",
    fill: ["#6b5b95", "#feb236", "#d64161", "#ff7b25"],

    fillOpacity: 1,
    buttons: [
      { type: "measure", label: "Sum", value: "=Sum(price)" },
      { type: "measure", label: "Count", value: "=count(price)" },
      { type: "dimension", label: "Name", value: "[name]" },
      { type: "dimension", label: "Price", value: "price" },
    ],
  },
  data: {
    // qDimField: "[coin]",
    qLists: [{ dataKey: "[coin]" }, { name: "[name]" }],
    cols: [
      {
        qField: "[name]",
        qLabel: "name",
      },
      {
        qField: "[coin]",
        qLabel: "coin",
      },
      {
        qField: "=Sum(price)",
        qLabel: "price",
        qFillStyle: "orange",
      },
    ],

    qTitle:
      "='Ripple Multi Dim Max Price : ' & Num(Max({$<coin={'ripple'}>}price),'$#,##0')",
    // qSubTitle: "test",
  },
};

export const pieData = {
  chartConfig: {
    chartType: "pie",
    margin: { top: 10, right: 0, left: -15, bottom: 0 },
    showLegend: false,
    height: 180,
    // dataKey: "price",
    strokeWidth: 0,
    fill: ["#6b5b95", "#feb236", "#d64161", "#ff7b25"],
    label: true,
    isAnimationActive: true,
    cx: "35%",
    cy: "50%",
    outerRadius: 60,
    innerRadius: 40,
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
};
