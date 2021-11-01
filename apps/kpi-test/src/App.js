// import logo from './logo.svg';
// import './App.css';

import { useData } from "@motor-js/engine";

import KPI from "./components/kpi";

function App() {
  const qMetrics = [
    {
      qName: "uniquePurchase",
      qExpr: "num(Count( distinct Purchases),'#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "TOTAL SALES",
      qExpr: "num(Sum(today),'$#,##0')",
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

  const cols = [
    {
      qField: "Period",
      qLabel: "Period",
    },

    {
      qField: "=sum(Conversions)",
      qLabel: "Conversions",
    },
  ];

  const { dataSet, metrics } = useData({
    cols,
    qMetrics,
  });

  const { data, nameKey, valueKey } = dataSet;

  const labels = data ? data.map((n) => n[nameKey]) : [];

  const chart = {
    options: {
      type: "area",
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
        name: valueKey,
        data: data ? data.map((n) => n[valueKey]) : [],
      },
    ],
  };

  const title = "Unique Purchases";
  const vakue = metrics && Object.values(metrics)[0];
  const change = {
    percentage: Math.random().toFixed(1) + "%",
    growth: "up",
    time: "than last week",
  };
  return (
    <div className="App" style={{ padding: "10px" }}>
      {metrics && (
        <KPI title={title} vakue={vakue} change={change} chart={chart} />
      )}
    </div>
  );
}

export default App;
