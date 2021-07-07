import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  ApexAreaChart,
  SectionTitle,
} from "../../../components";
import { deviceSessionsChart } from "../../data/dashboard-two";
import {
  StyledDiv,
  StyledBullet,
  StyledText,
  StyledNumber,
  StyledChart,
} from "./style";

const DeviceSessions = () => {
  return (
    <Card>
      <CardHeader>
        <SectionTitle title="Device Sessions" />
      </CardHeader>
      <CardBody>
        <Row gutters={10}>
          <Col col={4} lg>
            <StyledDiv>
              <StyledBullet bg="primary" />
              <StyledText>Mobile</StyledText>
            </StyledDiv>
            <StyledNumber>6,098</StyledNumber>
          </Col>
          <Col col={4} lg>
            <StyledDiv>
              <StyledBullet bg="teal" />
              <StyledText>Desktop</StyledText>
            </StyledDiv>
            <StyledNumber>3,902</StyledNumber>
          </Col>
          <Col col={4} lg>
            <StyledDiv>
              <StyledBullet bg="gray300" />
              <StyledText>Other</StyledText>
            </StyledDiv>
            <StyledNumber>1,065</StyledNumber>
          </Col>
        </Row>
        <StyledChart>
          <ApexAreaChart
            options={deviceSessionsChart.options}
            series={deviceSessionsChart.series}
            width="100%"
            height="100%"
          />
        </StyledChart>
      </CardBody>
    </Card>
  );
};

export default DeviceSessions;
