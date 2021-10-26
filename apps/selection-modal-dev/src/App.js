import "./App.css";
import { Card } from "semantic-ui-react";
import BarWrapper from "./BarWrapper";

export default function App() {
  return (
    <div className="App">
      <div className="ui two column centered grid" style={{ margin: "20px" }}>
        <Card fluid>
          <Card.Content style={{ margin: "20px" }}>
            <BarWrapper />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
