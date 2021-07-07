import { Card, CardBody, ApexAreaChart } from "../../../components";

import {
  StyledCardTitle,
  StyledCardBottom,
  StyledCardRate,
  StyledCardText,
  StyledCardChangePercent,
  StyledChart,
} from "./style";

const Conversion = ({ title, rate, change, chart }) => {
  return (
    <Card>
      <CardBody>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardBottom>
          <StyledCardRate>{rate}</StyledCardRate>
          <StyledCardText>
            <StyledCardChangePercent $growth={change.growth}>
              {change?.percentage}{" "}
              {change?.growth === "up" && <i className="fa fa-arrow-up" />}
              {change?.growth === "down" && (
                <i className="fa fa-arrow-down" />
              )}{" "}
            </StyledCardChangePercent>
            {change?.time && <>{change?.time}</>}
          </StyledCardText>
        </StyledCardBottom>
        <StyledChart>
          {chart && (
            <ApexAreaChart
              options={chart?.options}
              series={chart?.series}
              height={70}
            />
          )}
        </StyledChart>
      </CardBody>
    </Card>
  );
};

export default Conversion;
