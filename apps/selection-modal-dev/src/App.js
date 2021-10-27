import "./App.css";
import { Card } from "semantic-ui-react";
import SelectionChart from "./components/SelectionChart";
import ButtonComponent from "./components/Button";
import ChartComponent from "./components/ChartComponent";

const cols = [
  {
    qField: "[Category]",
    qLabel: "Category",
  },
  {
    qField: "=sum(Quantity * Price)",
    qLabel: "Revenue",
  },
];

const qlikParams = { cols };

const chartOptions = {
  chart: {
    type: "bar",
    height: 450,
    width: "100%",
  },
};

export default function App() {
  return (
    <div className="App">
      <div className="ui two column centered grid" style={{ margin: "20px" }}>
        <Card fluid>
          <Card.Content style={{ margin: "20px" }}>
            <SelectionChart
              qlikParams={qlikParams}
              chartOptions={chartOptions}
              renderChart={(settings) => <ChartComponent settings={settings} />}
            />

            <ButtonComponent />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
