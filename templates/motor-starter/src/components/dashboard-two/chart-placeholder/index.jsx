import { Card, CardBody } from "../..";

import {
  StyledCardTitle,
  StyledCardBottom,
  StyledCardRate,
  StyledCardText,
  StyledCardChangePercent,
  StyledChart,
} from "./style";

const Chart = () => {
  return (
    <Card color='light'>
      <CardBody>
        <StyledCardTitle>{'PLACEHOLDER'}</StyledCardTitle>
        <StyledCardBottom style={{ height: '180px'}}>
        </StyledCardBottom>
      </CardBody>
    </Card>
  );
};

export default Chart;
