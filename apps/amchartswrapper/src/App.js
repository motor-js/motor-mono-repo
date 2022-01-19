import "./App.css";
// import AmChartsWrapper from "./components/amChartsWrapper";
import Pie from "./components/amChartsWrapper";

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
        <Pie chartID="pie-two" />
        {/* </div> */}
      </header>
    </div>
  );
}

export default App;
