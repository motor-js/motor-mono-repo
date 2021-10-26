import "./App.css";
import { Card } from "semantic-ui-react";
import Bar from "./Bar";
import SelectionModal from "./components/SelectionModal";

import isEmpty from "./utils/isEmpty";

export default function App() {
  return (
    <div className="App">
      <div className="ui two column centered grid" style={{ margin: "20px" }}>
        <Card fluid>
          <Card.Content style={{ margin: "20px" }}>
            <Bar />
            {/* <ButtonComponent /> */}
            <SelectionModal
              isOpen={!isEmpty(currentSelectionIds)}
              cancelCallback={cancelCallback}
              confirmCallback={confirmCallback}
              offsetX={0}
              // width={width}
            />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
