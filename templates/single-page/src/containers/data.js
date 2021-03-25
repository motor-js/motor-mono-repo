// const colourPalette = [
//   "#F6C860",
//   "#6F4E7B",
//   "#9DD967",
//   "#CB472F",
//   "#FFA056",
//   "#0984A5",
// ];
// const colourPalette = [
//   "#1abc9c",
//   "#2ecc71",
//   "#3498db",
//   "#9b59b6",
//   "#34495e",
//   "#16a085",
//   "#27ae60",
//   "#2980b9",
//   "#8e44ad",
//   "#2c3e50",
// ];
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
        // stopColor: "#163469",
        stopColor: colourPalette[0],
        stopOpacity: 0.9,
      },
      offsetEnd: {
        offset: "95%",
        stopColor: colourPalette[1],
        stopOpacity: 0.9,
      },
    },
    // dataKey: "price",
    // type: null,
    // type: "monotone",
    strokeWidth: 0,
    stackId: 2,
    // stroke: "#4D95F3",
    stroke: colourPalette[1],
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

export const garminKPI = {
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
        stopColor: colourPalette[2],
        stopOpacity: 0.9,
      },
      offsetEnd: {
        offset: "95%",
        stopColor: colourPalette[3],
        stopOpacity: 0.9,
      },
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
        qField: "[OrderDateMonth]",
        qLabel: "Month",
      },
      {
        qField: "=Sum({$<[Company Name]={'Garmin'}>} Quantity)",
        qLabel: "price",
      },
    ],
    qMetrics: [
      {
        qName: "prize",
        qExpr:
          "num(Sum({$<[Company Name]={'Garmin'}>} Quantity*Price),'$#,##0')",
        qType: "qStringExpression", // qValueExpression if a pure number is to be returned
      },
      {
        qName: "desc",
        qExpr:
          "num(Sum({$<[Company Name]={'Garmin'}>} Quantity*Price)/Sum( Quantity*Price),'#,##0%')",
        qType: "qStringExpression",
      },
      {
        qName: "styleName",
        qExpr:
          "if(Sum({$<[Company Name]={'Garmin'}>} Quantity*Price)/Sum( Quantity*Price)>=0,'up','down')",
        qType: "qStringExpression",
      },
    ],
    qTitle:
      "='Garmin Orders :' & Num(Count({$<[Company Name]={'Garmin'}>}TransactionItemID),'#,##0') ",
  },
  icon: "etherium",
};

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
  },
  data: {
    cols: [
      {
        qField: "[Body Location]",
        qLabel: "Month",
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

export const wristKPI = {
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

export const ordersByCategory = {
  chartConfig: {
    chartType: "bar",
    // margin: { top: 10, right: 0, left: -15, bottom: 0 },
    margin: { top: 10, right: 40, left: 0, bottom: 0 },
    showXAxis: true,
    showXAxis: true,
    showGrid: true,
    showLegend: false,
    height: 220,
    isAnimationActive: true,
    xAxisDataKey: "Category",
    // dataKey: "price",
    type: "monotone",
    strokeWidth: 0,
    stroke: "#003366",
    // fill: ["#6b5b95", "#feb236", "#d64161", "#ff7b25"],
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

export const orderAnalysis = {
  chartConfig: {
    chartType: "line",
    margin: { top: 10, right: 40, left: 10, bottom: 0 },
    dot: { stroke: "#FEA931", strokeWidth: 2 },
    showXAxis: true,
    showXAxis: true,
    showGrid: true,
    showLegend: false,
    height: 220,
    isAnimationActive: true,
    xAxisDataKey: "Category",
    // dataKey: "price",
    type: "monotone",
    strokeWidth: 0,
    stroke: "#003366",
    fill: colourPalette,
    // stacked: true,
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
    qLists: [{ dataKey: "[Country]" }],
    cols: [
      {
        qField: "[OrderDateMonth]",
        qLabel: "Order Date",
      },
      {
        qField: "[Country",
        qLabel: "Body Location",
      },
      {
        qField: "=Sum(Price*Quantity)",
        qLabel: "price",
        qFillStyle: "orange",
      },
    ],

    qTitle:
      // "='Ripple Multi Dim Max Price : ' & Num(Max({$<coin={'ripple'}>}price),'$#,##0')",
      "Monthly Sales by Country",
    // qSubTitle: "test",
  },
};

export const pieData = {
  chartConfig: {
    chartType: "pie",
    margin: { top: 10, right: 0, left: -15, bottom: 0 },
    showLegend: false,
    height: 205,
    // dataKey: "price",
    strokeWidth: 0,
    fill: colourPalette,
    label: true,
    isAnimationActive: true,
    cx: "35%",
    cy: "50%",
    // outerRadius: 60,
    // innerRadius: 40,
  },
  data: {
    cols: [
      {
        qField: "[Body Location]",
        qLabel: "Location",
      },
      {
        qField: "=Sum(Quantity*Price)",
        qLabel: "price",
      },
    ],
    // qMetrics: [
    //   {
    //     qName: "prize",
    //     qExpr: "num(Sum(price),'$#,##0')",
    //     qType: "qStringExpression",
    //   },
    //   {
    //     qName: "desc",
    //     qExpr: "num(Count(distinct coin)/100,'#,##0%')",
    //     qType: "qStringExpression",
    //   },
    //   {
    //     qName: "styleName",
    //     qExpr: "if(Count(distinct coin)>=0,'up','down')",
    //     qType: "qStringExpression",
    //   },
    // ],
    qTitle:
      // "='Ripple Max Price : ' & Num(Max({$<coin={'ripple'}>}price),'$#,##0')",
      "Sales by Body Location",
  },
};
export const reverseCardData = {
  // chartConfig: {
  //   chartType: "pie",
  //   margin: { top: 10, right: 0, left: -15, bottom: 0 },
  //   showLegend: false,
  //   height: 205,
  //   // dataKey: "price",
  //   strokeWidth: 0,
  //   fill: colourPalette,
  //   label: true,
  //   isAnimationActive: true,
  //   cx: "35%",
  //   cy: "50%",
  //   // outerRadius: 60,
  //   // innerRadius: 40,
  // },
  data: {
    cols: [
      {
        qField: "[Body Location]",
        qLabel: "Location",
      },
      {
        qField: "=Sum(Quantity*Price)",
        qLabel: "price",
      },
    ],
    qMetrics: [
      {
        qName: "bestSelling",
        qExpr: "FirstSortedValue(Name,-Aggr(Sum(Price*Quantity),  Name))",
        qType: "qStringExpression",
      },
      {
        qName: "companyName",
        qExpr:
          "FirstSortedValue([Company Name], -Aggr(Sum(Price*Quantity), [Company Name]))",
        qType: "qStringExpression",
      },
      {
        qName: "price",
        qExpr:
          "Num(FirstSortedValue([Price], -Aggr(Sum(Price*Quantity), [Price])),'$#,##0.00')",
        qType: "qStringExpression",
      },
    ],
    qTitle:
      // "='Ripple Max Price : ' & Num(Max({$<coin={'ripple'}>}price),'$#,##0')",
      "Sales by Body Location",
  },
};

export const tableCols = {
  // qTitle: "=Count(Name)",
  qTitle: "Title",
  imageRender: (text, data) => {
    return (
      <div>
        <img src={data.image} />
      </div>
    );
  },
  cols: [
    // {
    //   qField: "Image",
    //   qLabel: "image",
    //   qImage: true,
    // },
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
