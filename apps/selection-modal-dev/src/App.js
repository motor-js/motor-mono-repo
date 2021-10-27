import "./App.css";
import { Card } from "semantic-ui-react";
import SelectionChart from "./components/SelectionChart";
import ButtonComponent from "./components/Button";

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

export default function App() {
  return (
    <div className="App">
      <div className="ui two column centered grid" style={{ margin: "20px" }}>
        <Card fluid>
          <Card.Content style={{ margin: "20px" }}>
            <SelectionChart qlikParams={qlikParams} />
            <ButtonComponent />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
