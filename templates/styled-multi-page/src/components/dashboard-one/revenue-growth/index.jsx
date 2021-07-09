import {
  Card,
  CardBody,
  Row,
  Col,
  ApexCharts,
  ApexAreaChart,
  SectionTitle,
} from "../../../components";

import { RevenueChart } from "../../data/dashboard-one";
import {
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledBullet,
  StyledListText,
  StyledCardBodyWrap,
  StyledCardBodyTitle,
  StyledCardBodySubtitle,
  StyledCardBodyText,
  StyledChart,
} from "./style";

const RevenueGrowth = () => {
  const { series, options } = RevenueChart;
  const chartToggle = (e) => {
    const target = e.currentTarget;
    target.classList.toggle("hidden");
    ApexCharts.exec(options.chart.id, "toggleSeries", target.value);
  };

  return (
    <Card>
      <StyledHeader>
        <SectionTitle title="Account &amp; Monthly Recurring Revenue Growth" />
        <StyledList>
          {series.map((sr, i) => (
            <StyledListItem key={sr.name} value={sr.name} onClick={chartToggle}>
              <StyledBullet bg={options.colors[i]} />
              <StyledListText>{sr.name}</StyledListText>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledHeader>
      <CardBody p={["0px", "0px"]} position="relative">
        <StyledCardBodyWrap>
          <Row>
            <Col sm={5}>
              <StyledCardBodyTitle>$620,076</StyledCardBodyTitle>
              <StyledCardBodySubtitle>MRR Growth</StyledCardBodySubtitle>
              <StyledCardBodyText>
                Measure How Fast You’re Growing Monthly Recurring Revenue.{" "}
                <a href="/">Learn More</a>
              </StyledCardBodyText>
            </Col>
            <Col sm={5} mt={["20px", "0px"]}>
              <StyledCardBodyTitle>$1,200</StyledCardBodyTitle>
              <StyledCardBodySubtitle>AVG. MRR/CUSTOMER</StyledCardBodySubtitle>
              <StyledCardBodyText>
                The revenue generated per account on a monthly or yearly basis.{" "}
                <a href="/">Learn More</a>
              </StyledCardBodyText>
            </Col>
          </Row>
        </StyledCardBodyWrap>
        <StyledChart>
          <ApexAreaChart
            options={options}
            series={series}
            width="100%"
            height={280}
          />
        </StyledChart>
      </CardBody>
    </Card>
  );
};

export default RevenueGrowth;