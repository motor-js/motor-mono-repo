import {
  Card,
  CardBody,
  CardFooter,
  SectionTitle,
  ApexCharts,
  ApexLineChart,
  Row,
  Col,
  Progress,
} from "../../../components";
// import { ticketChart } from "../../data/dashboard-four";
import {
  StyledHeader,
  StyledHeaderLeft,
  StyledList,
  StyledListItem,
  StyledListText,
  StyledBullet,
  StyledChart,
  StyledNumb,
  StyleTitle,
  StyledText,
  StyledRate,
} from "./style";

import { generateDayWiseTimeSeries } from "../../../methods";

const ticketChart = {
  options: {
    chart: {
      id: "ticket-chart",
      height: 480,
      type: "line",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1.5,
    },
    fill: {
      type: "solid",
      opacity: 1,
    },
    grid: {
      borderColor: "#485e9029",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      type: "datetime",
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      tickAmount: 6,
      labels: {
        style: {
          colors: ["#67788e"],
          fontSize: "9px",
          fontFamily: "Inter UI",
          fontWeight: 500,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        min: 0,
        max: 90,
        tickAmount: 6,
        decimalsInFloat: false,
        labels: {
          style: {
            colors: ["#67788e"],
            fontSize: "9px",
            fontFamily: "Inter UI",
            fontWeight: 500,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
    ],
    colors: ["#69b2f8", "#65e0e0", "#0168fa"],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "55%",
      },
    },
  },
  series: [
    {
      name: "New Tickets",
      type: "column",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        30,
        {
          min: 10,
          max: 50,
        }
      ),
    },
    {
      name: "Solved Tickets",
      type: "column",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        30,
        {
          min: 10,
          max: 30,
        }
      ),
    },
    {
      name: "Open Tickets",
      type: "line",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        30,
        {
          min: 20,
          max: 30,
        }
      ),
    },
  ],
};

console.log("ticketChart", ticketChart.series);

const TicketStatus = () => {
  const { series, options } = ticketChart;
  const chartToggle = (e) => {
    const target = e.currentTarget;
    target.classList.toggle("hidden");
    ApexCharts.exec(options.chart.id, "toggleSeries", target.value);
  };
  return (
    <Card>
      <StyledHeader>
        <StyledHeaderLeft>
          <SectionTitle
            title="Current Ticket Status"
            desc="as of 10th to 17th of March 2019"
          />
        </StyledHeaderLeft>
        <StyledList>
          {series.map((sr, i) => {
            const name = sr.name.split(" ");
            return (
              <StyledListItem
                key={sr.name}
                value={sr.name}
                onClick={chartToggle}
              >
                <StyledBullet bg={options.colors[i]} />
                <StyledListText>
                  {name[0]} <span>{name[1]}</span>
                </StyledListText>
              </StyledListItem>
            );
          })}
        </StyledList>
      </StyledHeader>
      <CardBody pt={[0, 0]}>
        <StyledChart>
          <ApexLineChart
            options={ticketChart.options}
            series={ticketChart.series}
            width="100%"
            height="100%"
          />
        </StyledChart>
      </CardBody>
      <CardFooter px="20px" py="15px">
        <Row gutters={20}>
          <Col col={6} sm={4} md={3} lg>
            <StyledNumb>156</StyledNumb>
            <Progress bg="malibu" height="2px" now={100} mb="10px" />
            <StyleTitle>New Tickets</StyleTitle>
            <StyledText>
              <StyledRate color="success">
                1.2% <i className="fa fa-arrow-up" />
              </StyledRate>{" "}
              than yesterday
            </StyledText>
          </Col>
          <Col col={6} sm={4} md={3} lg>
            <StyledNumb>86</StyledNumb>
            <Progress bg="malibu" height="2px" now={85} mb="10px" />
            <StyleTitle>Solved Tickets</StyleTitle>
            <StyledText>
              <StyledRate color="danger">
                -0.6% <i className="fa fa-arrow-down" />
              </StyledRate>{" "}
              than yesterday
            </StyledText>
          </Col>
          <Col col={6} sm={4} md={3} lg mt={["20px", 0]}>
            <StyledNumb>27</StyledNumb>
            <Progress bg="malibu" height="2px" now={25} mb="10px" />
            <StyleTitle>Unresolved Tickets</StyleTitle>
            <StyledText>
              <StyledRate color="success">
                0.3% <i className="fa fa-arrow-up" />
              </StyledRate>{" "}
              than yesterday
            </StyledText>
          </Col>
          <Col col={6} sm={4} md={3} lg mt={["20px", null, 0]}>
            <StyledNumb>45</StyledNumb>
            <Progress bg="malibu" height="2px" now={45} mb="10px" />
            <StyleTitle>Open Tickets</StyleTitle>
            <StyledText>
              <StyledRate color="success">
                0.3% <i className="fa fa-arrow-up" />
              </StyledRate>{" "}
              than yesterday
            </StyledText>
          </Col>
          <Col col={6} sm={4} md={3} lg mt={["20px", null, null, 0]}>
            <StyledNumb>30</StyledNumb>
            <Progress bg="malibu" height="2px" now={30} mb="10px" />
            <StyleTitle>Unassigned</StyleTitle>
            <StyledText>
              <StyledRate color="success">
                0.3% <i className="fa fa-arrow-up" />
              </StyledRate>{" "}
              than yesterday
            </StyledText>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default TicketStatus;
