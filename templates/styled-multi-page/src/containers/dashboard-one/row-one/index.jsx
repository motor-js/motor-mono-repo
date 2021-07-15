import { Col } from "../../../components";
// import { conversions } from "../../../components/data/dashboard-one";
import Conversion from "../../../components/dashboard-one/conversion";
import { useData } from "@motor-js/engine";

const RowOne = () => {
  const cols = [
    {
      qField: "Period",
      qLabel: "Period",
    },

    {
      qField: "=sum(Conversions)",
      qLabel: "Conversions",
    },
    {
      qField: "=sum(Purchases)",
      qLabel: "Purchases",
    },
    {
      qField: "=sum(Values)",
      qLabel: "Values",
    },
    {
      qField: "=sum(Quantities)",
      qLabel: "Quantities",
    },
  ];

  const { dataSet } = useData({
    cols,
  });

  const { data } = dataSet;

  const labels = data ? data.map((n) => n["Period"]) : [];

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
      labels,
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
        data: data ? data.map((n) => n["Conversions"]) : [],
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
      labels,
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
        data: data ? data.map((n) => n["Purchases"]) : [],
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
      labels,
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
        data: data ? data.map((n) => n["Values"]) : [],
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
      labels,
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
        data: data ? data.map((n) => n["Quantities"]) : [],
      },
    ],
  };

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

  // console.log("conversions", conversions);
  // console.log("dataSet", dataSet);
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
