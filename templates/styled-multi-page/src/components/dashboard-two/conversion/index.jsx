/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardBody, Row, Col, ApexBarChart } from "../../../components";
import { StyledNumber, StyledTitle, StyledText, StyledChart } from "./style";

const Conversion = ({ number, title, text, color, chart }) => {
  return (
    <Card>
      <CardBody px={["25px", "25px"]} py={["20px"]}>
        <Row gutters={10}>
          <Col col={7}>
            <StyledNumber>{number}</StyledNumber>
            <StyledTitle color={color}>{title}</StyledTitle>
            <StyledText>{text}</StyledText>
          </Col>
          <Col col={5}>
            <StyledChart>
              <ApexBarChart
                options={chart.options}
                series={chart.series}
                width="100%"
                height="100%"
              />
            </StyledChart>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Conversion;
