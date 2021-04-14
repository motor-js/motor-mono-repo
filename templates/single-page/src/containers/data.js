const tooltip = {
  wrapperStyle: {
    backgroundColor: "white",
    borderColor: "white",
    boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)",
    padding: "10px",
  },
};
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
    tooltip,
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
    tooltip,
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
    tooltip,
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
    tooltip,
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
    tooltip,
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

export const orderAnalysis = {
  chartConfig: {
    chartType: "line",
    margin: { top: 10, right: 40, left: 35, bottom: 20 },
    // dot: { stroke: "#FEA931", strokeWidth: 2 },
    dot: { stroke: colourPalette, strokeWidth: 10 },
    showXAxis: true,
    showXAxis: true,
    showGrid: true,
    showLegend: false,
    xAxisLabel: {
      value: "Month of Sale",
      offset: -10,
      position: "insideBottom",
    },
    yAxisLabel: {
      value: "Pages",
      angle: -90,
      offset: -20,
      position: "insideLeft",
    },
    height: 220,
    isAnimationActive: true,
    xAxisDataKey: "Order Date",
    type: "monotone",
    strokeWidth: 0,
    // stroke: "#003366",
    stroke: colourPalette,
    // stacked: true,
    fillOpacity: 1,
    // buttons: [
    //   { type: "measure", label: "Sum", value: "=Sum(price)" },
    //   { type: "measure", label: "Count", value: "=count(price)" },
    //   { type: "dimension", label: "Name", value: "[name]" },
    //   { type: "dimension", label: "Price", value: "price" },
    // ],
    tooltip,
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

    qTitle: "Monthly Sales by Country",
  },
};

export const pieData = {
  chartConfig: {
    chartType: "pie",
    margin: { top: 10, right: 0, left: 0, bottom: 0 },
    showLegend: false,
    height: 356,
    // dataKey: "price",
    strokeWidth: 0,
    fill: colourPalette,
    label: true,
    isAnimationActive: true,
    cx: "50%",
    cy: "50%",
    outerRadius: 130,
    renderLabel: (entry) => {
      return entry.payload.price.toLocaleString().split(".")[0];
    },
    tooltip,
  },
  data: {
    cols: [
      {
        qField: "[Body Location]",
        qLabel: "name",
      },
      {
        qField: "=Sum(Quantity*Price)",
        qLabel: "price",
      },
    ],
    qTitle: "Sales by Body Location",
  },
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const pieDataDonut = {
  chartConfig: {
    chartType: "pie",
    margin: { top: 10, right: 0, left: 0, bottom: 0 },
    // showLegend: false,
    height: 356,
    // dataKey: "Company Name",
    strokeWidth: 0,
    fill: colourPalette,
    label: true,
    isAnimationActive: true,
    cx: "50%",
    cy: "50%",
    outerRadius: 130,
    innerRadius: 60,
    renderLabel: renderCustomizedLabel,
    labelLine: false,
    legendProps: {
      wrapperStyle: {
        padding: "10px",
      },
      iconType: "circle",
      layout: "horizontal",
    },
    tooltip,
  },
  data: {
    qPage: {
      qTop: 0,
      qLeft: 0,
      qWidth: 10,
      qHeight: 5,
    },
    cols: [
      {
        qField: "[Company Name]",
        qLabel: "name",
      },
      {
        qField: "=Sum(Quantity*Price)",
        qLabel: "price",
      },
    ],

    qTitle: "Top 5 Sales by Company",
  },
};
export const reverseCardData = {
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
      {
        qName: "image",
        qExpr: "FirstSortedValue(_Image, -Aggr(Sum(Price*Quantity), _Image))",
        qType: "qStringExpression",
      },
    ],
    qTitle: "Sales by Body Location",
  },
};

export const tableCols = {
  // qTitle: "=Count(Name)",
  qTitle: "Products",
  pagination: {
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "30"],
  },
  scroll: { y: 284 },
  sortCriteria: {},
  cols: [
    {
      dataKey: "img",
      qField: "_Image",
      qLabel: "image",
      render: (text, data) => {
        return (
          <div>
            <img src={data.img} />
          </div>
        );
      },
    },
    {
      dataKey: "Name",
      qField: "Name",
      qLabel: "Name",
    },
    {
      dataKey: "Country",
      qField: "Country",
      qLabel: "Country",
    },
    {
      dataKey: "Category",
      qField: "Category",
      qLabel: "Category",
    },
  ],
  exportFields: {
    Image: "img",
    Name: "Name",
    Country: "Country",
    Category: "Category",
  },
  exportFilename: "Products",
};

export const orderHistory = {
  qTitle: "Top 5 Orders",
  qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 10,
    qHeight: 5,
  },
  sortCriteria: { qInterColumnSortOrder: [2, 0, 1] },
  cols: [
    {
      dataKey: "company_name",
      qField: "Company Name",
      qLabel: "Company Name",
      // qLibraryId: "cKLXjDf",
    },
    {
      dataKey: "qty_sold",
      qField: "=Sum(Quantity)",
      qLabel: "Quantity Sold",
      qNumType: "I",
      qNumFmt: "#,##0",
    },
    {
      dataKey: "tot_sales",
      qField: "=Sum(Price * Quantity)",
      qLabel: "Total Sales",
      qNumType: "I",
      qNumFmt: "$#,##0.00",
      render: (text, data, i) => {
        return (
          <div className={i === 0 ? "gx-text-red" : "gx-text-green"}>
            {text}
          </div>
        );
      },
    },
  ],
};

export const multipleMeasures = {
  chartConfig: {
    chartType: "bar",
    margin: { top: 10, right: 15, left: -10, bottom: 0 },
    showXAxis: true,
    showXAxis: true,
    showGrid: true,
    showLegend: true,
    legendProps: {
      wrapperStyle: {
        padding: "10px",
      },
      iconType: "circle",
      layout: "horizontal",
    },
    height: 220,
    isAnimationActive: true,
    xAxisDataKey: "Order Date",
    // dataKey: "price",
    tooltip,
    type: "monotone",
    strokeWidth: 0,
    stroke: "#003366",
    fill: colourPalette,
    // stacked: true,
    fillOpacity: 1,
  },
  data: {
    cols: [
      {
        qField: "[OrderDateMonth]",
        qLabel: "Order Date",
      },
      {
        qField: "=count({$<[Body Location]={'Chest'}>} Quantity*Price)",
        qLabel: "chest",
      },
      {
        qField: "=count({$<[Body Location]={'Torso'}>} Quantity*Price)",
        qLabel: "torso",
      },
      {
        qField: "=count({$<[Body Location]={'Waist'}>} Quantity*Price)",
        qLabel: "waist",
      },
    ],

    qTitle: "Bar chart with multiple Measures",
  },
};

export const stackedBar = {
  chartConfig: {
    chartType: "bar",
    // margin: { top: 10, right: 0, left: -15, bottom: 0 },
    margin: { top: 10, right: 20, left: 20, bottom: 0 },
    showXAxis: true,
    showXAxis: true,
    showGrid: true,
    showLegend: true,
    legendProps: {
      wrapperStyle: {
        padding: "10px",
      },
      // iconType: "circle",
      layout: "horizontal",
    },
    height: 180,
    isAnimationActive: true,
    xAxisDataKey: "Order Date",
    tooltip,
    type: "monotone",
    strokeWidth: 0,
    stroke: "#003366",
    fill: colourPalette,
    stacked: true,
    fillOpacity: 1,
    buttons: [
      { type: "measure", label: "Sum", value: "=Sum(Price*Quantity)" },
      { type: "measure", label: "Count", value: "=Count(Price*Quantity)" },
      { type: "dimension", label: "Order Date", value: "[OrderDateMonth]" },
      { type: "dimension", label: "Country", value: "Country" },
    ],
  },
  data: {
    // qDimField: "[coin]",
    qLists: [{ dataKey: "[Body Location]" }, { name: "[Body Location]" }],
    cols: [
      {
        qField: "[OrderDateMonth]",
        qLabel: "Order Date",
      },
      {
        qField: "[Body Location]",
        qLabel: "Body Location",
      },
      {
        qField: "=Sum(Price*Quantity)",
        qLabel: "price",
        qFillStyle: "orange",
      },
    ],

    qTitle: "Stacked Bar chart with buttons to change View",
  },
};
