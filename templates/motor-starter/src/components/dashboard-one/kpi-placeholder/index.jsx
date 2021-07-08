import { Card, CardBody } from "../..";

import {
  StyledCardTitle,
  StyledCardBottom
} from "./style";

const KPI = ({ data }) => {
  return (
    <Card color='light'>
      <CardBody>
        <StyledCardTitle>{'PLACEHOLDER'}</StyledCardTitle>
        <StyledCardBottom style={{ height: '80px'}}>
        </StyledCardBottom>
      </CardBody>
    </Card>
  );
};

export default KPI;
