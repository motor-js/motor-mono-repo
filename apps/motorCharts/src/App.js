import "./App.css";
// import AmChartsWrapper from "./components/amChartsWrapper";
import XYChart from "./components/XYChart";
// import PieChart from "./components/PieChart";
import { useButton } from "@motor-js/engine";

const cols = [
  {
    qField: "SALES_DATE.autoCalendar.Year",
    // qField: "SALES_DATE",
    qLabel: "Year",
  },
  {
    qField: "BURGER",
    qLabel: "Burger",
  },

  {
    qField: "=Sum(COST_UK*SALES_QTY)",
    qLabel: "Total_Sales",
  },
  // {
  //   qField: "=Sum(COST_UK)",
  //   qLabel: "Cost",
  // },
  // {
  //   qField: "=Sum(SALES_QTY)",
  //   qLabel: "value",
  // },
];

const config = {
  // // Create pie series
  // series: [
  //   {
  //     type: "PieSeries",
  //     dataFields: {
  //       value: "litres",
  //       category: "country",
  //     },
  //   },
  // ],
  // Add data
  cols: cols,
  // themes: ["Material"],
  // themes: ["Frozen"],
  scrollbars: { showX: true, showY: true },
  legend: { show: true },
};

function App() {
  const { clearSelections, selectValues } = useButton();
  const select = () => selectValues(["Big Mac"], "BURGER", false);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {/* <AmChartsWrapper /> */}
        {/* <Pie chartID="pie-two" /> */}
        {/* <div className="flex-container"> */}
        {/* <MultilevelTreeMap chartID="pie-one" />
          <Gauge chartID="gauge-one" /> */}
        <XYChart chartID="main-bar" config={config} />
        {/* <PieChart chartID="main-pie" /> */}
        {/* </div> */}
        <button onClick={select}>Select Big Mac</button>
        <button onClick={clearSelections}>Clear Selections</button>
      </header>
    </div>
  );
}

export default App;
