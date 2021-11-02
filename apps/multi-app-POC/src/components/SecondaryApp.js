import { Card } from "semantic-ui-react";
import Bar from "./Bar";
import ButtonComponent from "./Button";
import { Motor } from "@motor-js/engine";
import { qlikConfigApp2 } from "../config";

export default function SecondaryApp() {
  return (
    <Motor config={qlikConfigApp2}>
      <Card fluid>
        <Card.Content style={{ margin: "20px" }}>
          <Bar id={"chartdiv2"} />
          <ButtonComponent />
        </Card.Content>
      </Card>
    </Motor>
  );
}
