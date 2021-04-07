const colourPalette = [
  "#00a8ff",
  "#9c88ff",
  "#fbc531",
  "#4cd137",
  "#487eb0",
  "#0097e6",
  "#27ae60",
  "#e1b12c",
  "#44bd32",
  "#40739e",
  "#e84118",
];

export const bodyLocationKPI = {
  chartConfig: {
    chartType: "bar",
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    height: 75,

    // gradient: {
    //   id: "color5",
    //   x1: "0",
    //   y1: "0",
    //   x2: "0",
    //   y2: "1",
    //   offsetStart: {
    //     offset: "5%",
    //     stopColor: "#e81a24",
    //     stopOpacity: 0.8,
    //   },
    //   offsetEnd: { offset: "95%", stopColor: "#FEEADA", stopOpacity: 0.8 },
    // },
    strokeWidth: 0,
    stackId: 2,
    stroke: "#FEEADA",
    // fill: "url(#color5)",
    fill: colourPalette,
    fillOpacity: 1,
    // stacked: true,
    tooltip: {
      wrapperStyle: {
        backgroundColor: "white",
        borderColor: "white",
        boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)",
        padding: "10px",
      },
    },
  },
  data: {
    cols: [
      {
        qField: "[Body Location]",
        qLabel: "Location",
      },
      {
        qField: "=Count(Quantity)",
        qLabel: "price",
      },
    ],
    qMetrics: [
      {
        qName: "prize",
        qExpr: "num(Sum(Quantity*Price),'$#,##0')",
        qType: "qStringExpression",
      },
      {
        qName: "desc",
        qExpr:
          "num(Sum({$<[Body Location]={'Wrist'}>} Quantity*Price)/Sum( Quantity*Price),'#,##0%')",
        qType: "qStringExpression",
      },
      {
        qName: "styleName",
        qExpr:
          "if(Sum({$<[Body Location]={'Wrist'}>} Quantity*Price)/Sum( Quantity*Price)>=0,'up','down')",
        qType: "qStringExpression",
      },
    ],
    qTitle: "Orders by Body Location",
  },
  icon: "ripple",
};

export const tableCols = {
  qTitle: "Products",
  pagination: {
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "30"],
  },
  qInterColumnSortOrder: [3, 2, 1, 0],
  cols: [
    {
      qField: "_Image",
      qLabel: "image",
      render: (text, data) => {
        return (
          <div>
            <img src={data.image} />
          </div>
        );
      },
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

export const FitnessKpi = {
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
        // stopColor: colourPalette[0],
        stopOpacity: 0.9,
      },
      offsetEnd: {
        offset: "95%",
        stopColor: "#163469",
        // stopColor: colourPalette[1],
        stopOpacity: 0.9,
      },
    },
    // dataKey: "price",
    // type: null,
    // type: "monotone",
    strokeWidth: 0,
    stackId: 2,
    stroke: "#4D95F3",
    // stroke: colourPalette[1],
    fill: "url(#color3)",
    fillOpacity: 1,
  },
  data: {
    cols: [
      {
        qField: "[OrderDateMonth]",
        qLabel: "Month",
      },
      {
        qField: "=Sum({$<Category={'Fitness'}>} Quantity)",
        qLabel: "price",
      },
    ],
    qMetrics: [
      {
        qName: "prize",
        qExpr: "num(Sum({$<Category={'Fitness'}>} Quantity*Price),'$#,##0')",
        qType: "qStringExpression", // qValueExpression if a pure number is to be returned
      },
      {
        qName: "desc",
        qExpr:
          "num(Sum({$<Category={'Fitness'}>} Quantity*Price)/Sum( Quantity*Price),'#,##0%')",
        qType: "qStringExpression",
      },
      {
        qName: "styleName",
        qExpr:
          "if(Sum({$<Category={'Fitness'}>} Quantity*Price)/Sum( Quantity*Price)>=0,'up','down')",
        qType: "qStringExpression",
      },
    ],
    qTitle:
      "='Fitness Orders : ' & Num(Count({$<Category={'Fitness'}>}TransactionItemID),'#,##0') ",
  },
  icon: "growth",
  // styleName: "up",
};

export const orderHistory = {
  qTitle: "Top 5 Orders",
  qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 10,
    qHeight: 5,
  },
  qInterColumnSortOrder: [2, 1, 0],
  cols: [
    {
      qField: "Company Name",
      qLabel: "Company Name",
    },
    {
      qField: "=Sum(Quantity)",
      qLabel: "Quantity Sold",
    },
    {
      qField: "=Sum(Price  * Quantity)",
      qLabel: "Total Sales",
      qNumType: "I",
      qNumFmt: "$#,##0.00",
      useFormatting: true,
      render: (text, data, i) => {
        return (
          <div className={i === 0 ? "gx-text-red" : "gx-text-green"}>
            {text}
          </div>
        );
      },
    },
    // {
    //   qField: "Country",
    //   qLabel: "Country",
    // },
    // {
    //   qField: "Category",
    //   qLabel: "Category",
    // },
  ],
};

export const wristKPI = {
  chartConfig: {
    chartType: "line",
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    height: 75,
    stroke: "#038FDE",
    dot: { stroke: "#FEA931", strokeWidth: 2 },
    tooltip: {
      wrapperStyle: {
        backgroundColor: "white",
        borderColor: "white",
        boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)",
        padding: "10px",
      },
    },
  },
  data: {
    cols: [
      {
        qField: "[OrderDateMonth]",
        qLabel: "Month",
      },
      {
        qField: "=Sum({$<[Body Location]={'Wrist'}>} Quantity*Price)",
        qLabel: "price",
      },
    ],
    qMetrics: [
      {
        qName: "prize",
        qExpr:
          "num(Sum({$<[Body Location]={'Wrist'}>} Quantity*Price),'$#,##0')",
        qType: "qStringExpression",
      },
      {
        qName: "desc",
        qExpr:
          "num(Sum({$<[Body Location]={'Wrist'}>} Quantity)/Sum( Quantity),'#,##0%')",
        qType: "qStringExpression",
      },
      {
        qName: "styleName",
        qExpr:
          "if(Sum({$<[Body Location]={'Wrist'}>} Quantity)/Sum( Quantity)>=0,'down','up')",
        qType: "qStringExpression",
      },
    ],
    qTitle:
      "='Wrist Items Sales: '& Num(Count({$<[Body Location]={'Wrist'}>}TransactionItemID),'#,##0') & ' orders'",
  },
  icon: "litecoin",
};

export const ordersByCategory = {
  chartConfig: {
    chartType: "bar",
    margin: { top: 10, right: 40, left: 20, bottom: 20 },
    showXAxis: true,
    showXAxis: true,
    showGrid: true,
    showLegend: false,
    height: 220,
    isAnimationActive: true,
    xAxisDataKey: "Category",
    tooltip: {
      wrapperStyle: {
        backgroundColor: "white",
        borderColor: "white",
        boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)",
        padding: "10px",
      },
    },
    xAxisLabel: {
      value: "Categpry",
      offset: -10,
      position: "insideBottom",
    },
    yAxisLabel: {
      value: "Number of Orders",
      angle: -90,
      position: "insideBottomLeft",
    },
    // dataKey: "price",
    type: "monotone",
    strokeWidth: 0,
    stroke: "#003366",
    fill: colourPalette,

    fillOpacity: 1,
    // buttons: [
    //   { type: "measure", label: "Sum", value: "=Sum(price)" },
    //   { type: "measure", label: "Count", value: "=count(price)" },
    //   { type: "dimension", label: "Name", value: "[name]" },
    //   { type: "dimension", label: "Price", value: "price" },
    // ],
  },
  data: {
    // qDimField: "[coin]",
    // qLists: [{ dataKey: "[coin]" }, { name: "[name]" }],
    cols: [
      {
        qField: "[Category]",
        qLabel: "Category",
      },
      {
        qField: "=Count(TransactionItemID)",
        qLabel: "price",
        qFillStyle: "orange",
      },
    ],

    qTitle: "=Num(Count(TransactionItemID),'#,##0') & ' Orders by Category'",
  },
};
