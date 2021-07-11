import {
  Card,
  Row,
  Col,
  ApexBarChart,
  SectionTitle,
} from "../../../components";
import { useData } from "@motor-js/engine";

import {
  StyledCardHeader,
  StyledCardBody,
  StyledCardBodyTitle,
  StyledCardBodySubtitle,
  StyledCardBodyText,
  StyledChart,
} from "./style";

const AccountRetention = () => {
  const cols = [
    {
      qField: "[categories]",
      qLabel: "categories",
    },
    {
      qField: "=sum(Series1)",
      qLabel: "Series1",
    },
    {
      qField: "=sum(Series2)",
      qLabel: "Series2",
    },
  ];

  // TODO sort order

  const { dataSet } = useData({
    cols,
  });

  const { data } = dataSet;

  const RetentionChart = {
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              height: 220,
            },
          },
        },
        {
          breakpoint: 1199,
          options: {
            chart: {
              height: 228,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          endingShape: "rounded",
        },
      },
      xaxis: {
        categories: (data && data.map((n) => n.categories)) || [],

        tooltip: {
          enabled: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      legend: {
        show: false,
      },
      grid: {
        borderColor: "#ffffff",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      colors: ["#69b2f8", "#f0f1f5"],
    },
    series: [
      {
        data: (data && data.map((n) => n.Series1)) || [],
      },
      {
        data: (data && data.map((n) => n.Series2)) || [],
      },
    ],
  };

  return (
    <Card>
      <StyledCardHeader>
        <SectionTitle
          title="Account Retention"
          desc="Number of customers who have active subscription with you."
          descProps={{ fontSize: "12px" }}
        />
      </StyledCardHeader>
      <StyledCardBody>
        <StyledChart>
          <ApexBarChart
            series={RetentionChart.series}
            options={RetentionChart.options}
            width="100%"
            height={282}
          />
        </StyledChart>
        <Row>
          <Col col={12} sm>
            <StyledCardBodyTitle>
              $1,680<small>.50</small>
            </StyledCardBodyTitle>
            <StyledCardBodySubtitle color="primary">
              Expansions
            </StyledCardBodySubtitle>
            <StyledCardBodyText>
              Customers who have upgraded the level of your products or service.
            </StyledCardBodyText>
          </Col>
          <Col col={12} sm mt={["20px", "0px"]}>
            <StyledCardBodyTitle>
              $1,520<small>.00</small>
            </StyledCardBodyTitle>
            <StyledCardBodySubtitle color="pink">
              Cancellations
            </StyledCardBodySubtitle>
            <StyledCardBodyText>
              Customers who have ended their subscription with you.
            </StyledCardBodyText>
          </Col>
        </Row>
      </StyledCardBody>
    </Card>
  );
};

export default AccountRetention;
