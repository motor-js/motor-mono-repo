import { Card, CardBody } from "..";
import {
  StyledCardTitle,
  StyledCardBottom
} from "./style";

const KpiPlaceholder = () => {
  return (
    <Card color='light'>
      <CardBody>
        <StyledCardTitle>{'PLACEHOLDER'}</StyledCardTitle>
        <StyledCardBottom>
        </StyledCardBottom>
      </CardBody>
    </Card>
  );
};

export default KpiPlaceholder;
