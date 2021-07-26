import { useData } from "@motor-js/engine";

import {
  Card,
  CardBody,
  Row,
  Col,
  ApexAreaChart,
  SectionTitle,
} from "../../../components";

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
  const qMetrics = [
    {
      qName: "MRR GROWTH",
      qExpr: "num(Sum([Growth Actual]*100),'$#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "AVG MRR GROWTH",
      qExpr: "num(Avg([Growth Actual]*100),'$#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
  ];
  const cols = [
    {
      qField: "TimeSeries",
      qLabel: "TimeSeries",
    },
    {
      qField: "=sum([Growth Actual])",
      qLabel: "Growth Actual",
    },
    {
      qField: "=sum(Actual)",
      qLabel: "Actual",
    },
    {
      qField: "=sum(Plan)",
      qLabel: "Plan",
    },
  ];

  const { dataSet, metrics } = useData({
    cols,
    qMetrics,
  });
  const { data } = dataSet;

  const series = [
    {
      name: "Growth Actual",
      data: data
        ? data.map((e) => [parseInt(e.TimeSeries, 10), e["Growth Actual"]])
        : [],
    },
    {
      name: "Actual",
      data: data
        ? data.map((e) => [parseInt(e.TimeSeries, 10), e["Actual"]])
        : [],
    },
    {
      name: "Plan",
      data: data
        ? data.map((e) => [parseInt(e.TimeSeries, 10), e["Plan"]])
        : [],
    },
  ];
  const options = {
    chart: {
      type: "area",
      stacked: true,
      id: "revenue-growth",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    // colors: ["#69b2f8", "#00E396", "#d1e6fa"],
    colors: ["#71cffe", "#71fecf", "#fe7372"],
    // colors: ["#fe7372", "#71fecf", "#71cffe"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      borderColor: "#ffffff",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      column: {
        colors: "#ffffff",
        opacity: 1,
      },
    },
    tooltip: {
      fillSeriesColor: "#ffffff",
    },
    responsive: [
      {
        breakpoint: 575,
        options: {
          chart: {
            height: 200,
          },
          xaxis: {
            show: false,
          },
        },
      },
    ],
  };

  const chartToggle = (e) => {
    // const target = e.currentTarget;
    // target.classList.toggle("hidden");
    // ApexCharts.exec(options.chart.id, "toggleSeries", target.value);
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
              <StyledCardBodyTitle>
                {metrics && metrics["MRR GROWTH"]}
              </StyledCardBodyTitle>
              <StyledCardBodySubtitle>MRR Growth</StyledCardBodySubtitle>
              <StyledCardBodyText>
                Measure How Fast You’re Growing Monthly Recurring Revenue.{" "}
                <a href="/">Learn More</a>
              </StyledCardBodyText>
            </Col>
            <Col sm={5} mt={["20px", "0px"]}>
              <StyledCardBodyTitle>
                {metrics && metrics["AVG MRR GROWTH"]}
              </StyledCardBodyTitle>
              <StyledCardBodySubtitle>AVG. MRR/CUSTOMER</StyledCardBodySubtitle>
              <StyledCardBodyText>
                The revenue generated per account on a monthly or yearly basis.{" "}
                <a href="/">Learn More</a>
              </StyledCardBodyText>
            </Col>
          </Row>
        </StyledCardBodyWrap>
        <StyledChart>
          {data && (
            <ApexAreaChart
              options={options}
              series={series}
              width="100%"
              height={280}
            />
          )}
        </StyledChart>
      </CardBody>
    </Card>
  );
};

export default RevenueGrowth;
