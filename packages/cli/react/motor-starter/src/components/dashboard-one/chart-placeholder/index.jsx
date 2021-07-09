import { Card, CardBody } from "../..";

import {
  StyledCardTitle,
  StyledCardBottom,
} from "./style";

const Chart = () => {
  return (
    <Card color='light'>
      <CardBody>
        <StyledCardTitle>{'PLACEHOLDER'}</StyledCardTitle>
        <StyledCardBottom style={{ height: '200px'}}>
        </StyledCardBottom>
      </CardBody>
    </Card>
  );
};

export default Chart;
