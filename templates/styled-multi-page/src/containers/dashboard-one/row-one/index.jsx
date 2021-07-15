import { Col } from "../../../components";
// import { conversions } from "../../../components/data/dashboard-one";
import Conversion from "../../../components/dashboard-one/conversion";
// import { useData } from "@motor-js/engine";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
const randomizeArray = (arg) => {
  const args = arg.slice();
  let currentIndex = args.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = args[currentIndex];
    args[currentIndex] = args[randomIndex];
    args[randomIndex] = temporaryValue;
  }

  return args;
};

const sparklineData = [
  47,
  45,
  54,
  38,
  56,
  24,
  65,
  31,
  37,
  39,
  62,
  51,
  35,
  41,
  35,
  27,
  93,
  53,
  61,
  27,
  54,
  43,
  19,
  46,
];

const conversionChart1 = {
  options: {
    chart: {
      id: "sparkline1",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 1,
    },
    labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    yaxis: {
      show: false,
    },
    xaxis: {
      show: false,
    },
    colors: ["#DCE6EC"],
    title: {
      text: undefined,
    },
    subtitle: {
      text: undefined,
    },
  },
  series: [
    {
      name: "Conversions",
      data: randomizeArray(sparklineData),
    },
  ],
};

const conversionChart2 = {
  options: {
    chart: {
      id: "sparkline2",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 1,
    },
    labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    yaxis: {
      show: false,
    },
    xaxis: {
      show: false,
    },
    colors: ["#DCE6EC"],
    title: {
      text: undefined,
    },
    subtitle: {
      text: undefined,
    },
  },
  series: [
    {
      name: "Purchases",
      data: randomizeArray(sparklineData),
    },
  ],
};

const conversionChart3 = {
  options: {
    chart: {
      id: "sparkline3",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 1,
    },
    labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    yaxis: {
      show: false,
    },
    xaxis: {
      show: false,
    },
    colors: ["#DCE6EC"],
    title: {
      text: undefined,
    },
    subtitle: {
      text: undefined,
    },
  },
  series: [
    {
      name: "Values",
      data: randomizeArray(sparklineData),
    },
  ],
};

const conversionChart4 = {
  options: {
    chart: {
      id: "sparkline4",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 1,
    },
    labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    yaxis: {
      show: false,
    },
    xaxis: {
      show: false,
    },
    colors: ["#DCE6EC"],
    title: {
      text: undefined,
    },
    subtitle: {
      text: undefined,
    },
  },
  series: [
    {
      name: "Quantities",
      data: randomizeArray(sparklineData),
    },
  ],
};

console.log(conversionChart1);
console.log(conversionChart2);
console.log(conversionChart3);
console.log(conversionChart4);

const conversions = [
  {
    id: 1,
    title: "Conversion Rate",
    rate: "0.81%",
    change: {
      percentage: "1.2%",
      growth: "up",
      time: "than last week",
    },
    chart: conversionChart1,
  },
  {
    id: 2,
    title: "Unique Purchases",
    rate: "3,137",
    change: {
      percentage: "0.7%",
      growth: "down",
      time: "than last week",
    },
    chart: conversionChart2,
  },
  {
    id: 3,
    title: "Avg. Order Value",
    rate: "$306.20",
    change: {
      percentage: "0.3%",
      growth: "down",
      time: "than last week",
    },
    chart: conversionChart3,
  },
  {
    id: 4,
    title: "Order Quantity",
    rate: "1,650",
    change: {
      percentage: "2.1%",
      growth: "up",
      time: "than last week",
    },
    chart: conversionChart4,
  },
];

const RowOne = () => {
  // const cols = [
  //   {
  //     qField: "transaction_id",
  //     qLabel: "id",
  //   },
  //   {
  //     qField: "title",
  //     qLabel: "id",
  //   },
  //   {
  //     qField: "=sum(Quantity * Price)",
  //     qLabel: "Revenue",
  //     // useFormatting: true,
  //     // qNumType: "M",
  //     // qNumFmt: "£#,##0",
  //   },
  // ];

  // const { dataSet, select } = useData({
  //   cols,
  // });

  // console.log("conversions", conversions);
  return (
    <>
      {conversions.map((data) => (
        <Col sm={6} lg={3} mt={["10px", null, null, "0px"]} key={data.id}>
          <Conversion
            title={data.title}
            rate={data.rate}
            change={data.change}
            chart={data.chart}
          />
        </Col>
      ))}
    </>
  );
};

export default RowOne;
