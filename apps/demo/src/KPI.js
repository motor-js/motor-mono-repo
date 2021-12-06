import { useData } from "@motor-js/engine";
import { KPI } from "@motor-js/components";


const MotorKPI = () => {
  const qMetrics = [
    {
      qName: "sales",
      qExpr: "num(Sum({<BURGER={'Big Mac'}>}SALES_QTY),'#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
  ];

  const { dataSet, metrics } = useData({
    cols: [
      {
        qField: "SALES_DATE",
        qLabel: "Sales Date",
      },

      {
        qField: "=num(Sum({<BURGER={'Big Mac'}>}SALES_QTY),'$#,##0')",
        qLabel: "sales1",
      },
    ],
    qMetrics,
  });

  const { data } = dataSet;
  const labels = data ? data.map((n) => n["Sales Date"]) : [];

  const conversionChart1 = {
    type: "area",
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
      colors: ["#FF0000"],
      title: {
        text: undefined,
      },
      subtitle: {
        text: undefined,
      },
    },
    series: [
      {
        name: "Sales over time",
        data: data ? data.map((n) => n["sales1"]) : [],
      },
    ],
  };

  const bigMac = {
    id: 1,
    title: "Big Mac Sales",
    rate: metrics && metrics.sales,
    change: {
      percentage: Math.random().toFixed(1) + "%",
      growth: "up",
      time: "than last week",
    },
    chart: conversionChart1,
  };

  return (
    <>
    <KPI
        title={bigMac.title}
        rate={bigMac.rate}
        change={bigMac.change}
        chart={bigMac.chart}
      />
    </>
  );
};

export default MotorKPI;
