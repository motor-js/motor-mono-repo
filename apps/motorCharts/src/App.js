import "./App.css";
// import AmChartsWrapper from "./components/amChartsWrapper";
import XYChart from "./components/XYChart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {/* <AmChartsWrapper /> */}
        {/* <Pie chartID="pie-two" /> */}
        {/* <div className="flex-container"> */}
        {/* <MultilevelTreeMap chartID="pie-one" />
          <Gauge chartID="gauge-one" /> */}
        <XYChart chartID="pie-two" />
        {/* </div> */}
      </header>
    </div>
  );
}

export default App;
