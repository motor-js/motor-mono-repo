import Conversion from "../components/conversion";
import { useData } from "@motor-js/engine";

const RowOne = () => {
  const qMetrics = [
    {
      qName: "TOTAL SALES",
      qExpr: "num(Sum(today),'$#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "uniquePurchase",
      // qExpr: "num(Sum(today)/Sum(yesterday),'#,##0%')",
      qExpr: "num(Count( distinct Purchases),'#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "avgOrderValue",
      qExpr: "num(Avg(Values),'$#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "quantities",
      qExpr: "num(Sum(Quantities),'#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
  ];

  const { dataSet, metrics } = useData({
    cols: [
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
    ],
    qMetrics,
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

  const conversions = [
    {
      id: 1,
      title: "Conversion Rate",
      rate: Math.random().toFixed(2) + "%",
      change: {
        percentage: Math.random().toFixed(1) + "%",
        growth: "up",
        time: "than last week",
      },
      chart: conversionChart1,
    },
  ];

  return (
    <>
      {metrics &&
        conversions.map((data) => (
          // <Col sm={6} lg={3} mt={["10px", null, null, "0px"]} key={data.id}>
          <Conversion
            title={data.title}
            rate={data.rate}
            change={data.change}
            chart={data.chart}
          />
          // </Col>
        ))}
    </>
  );
};

export default RowOne;
