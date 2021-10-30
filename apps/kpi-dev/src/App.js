import React from "react";
import { useData } from "@motor-js/engine";

import KPI from "./components/kpi";

const App = () => {
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

  const chart = {
    options: {
      type: "area",
      // height:
      // width:
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

  const title = "Unique Purchases";
  const rate = metrics && metrics["uniquePurchase"];
  const change = {
    percentage: Math.random().toFixed(1) + "%",
    growth: "down",
    time: "than last week",
  };

  return (
    <>
      {metrics && (
        <KPI title={title} rate={rate} change={change} chart={chart} />
      )}
      ;
    </>
  );
};

export default App;
