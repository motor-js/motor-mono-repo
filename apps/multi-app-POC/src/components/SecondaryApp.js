import { Card } from "semantic-ui-react";
import Pie from "./Pie";
import ButtonComponent from "./Button";
import { Motor } from "@motor-js/engine";
import { qlikConfig } from "../config";

export default function SecondaryApp() {
  return (
    <Motor config={qlikConfig}>
      <Card fluid>
        <Card.Content style={{ margin: "20px" }}>
          <Pie id={"chartdiv2"} />
          <ButtonComponent />
        </Card.Content>
      </Card>
    </Motor>
  );
}
