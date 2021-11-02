import "./styles.css";
import { Card } from "semantic-ui-react";
import Pie from "./Pie";
import ButtonComponent from "./Button";

export default function App() {
  return (
    <div className="App">
      <div className="ui grid">
        <div className="eight wide column">
          <Card fluid>
            <Card.Content style={{ margin: "20px" }}>
              <Pie id={"chartdiv"} />
              <ButtonComponent />
            </Card.Content>
          </Card>
        </div>
        <div className="eight wide column">
          <Card fluid>
            <Card.Content style={{ margin: "20px" }}>
              <Pie id={"chartdiv2"} />
              <ButtonComponent />
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
}
