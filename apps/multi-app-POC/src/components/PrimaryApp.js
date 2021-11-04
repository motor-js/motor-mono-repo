import { Card } from "semantic-ui-react";
import PieWrapper from "./PieWrapper";
import ButtonComponent from "./Button";
import { Motor } from "@motor-js/engine";
import { qlikConfigApp1 } from "../config";

export default function PrimaryApp() {
  return (
    <Motor config={qlikConfigApp1}>
      <Card fluid>
        <Card.Content style={{ margin: "20px" }}>
          <PieWrapper id={"chartdiv"} />
          <ButtonComponent />
        </Card.Content>
      </Card>
    </Motor>
  );
}
