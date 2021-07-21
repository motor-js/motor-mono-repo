import { useData } from "@motor-js/engine";
import {
  Card,
  CardBody,
  SectionTitle,
  HorizontalBarChart,
} from "../../../components";
import { StyledHeader, StyledChart } from "./style";

const TicketRequest = () => {
  const cols = [
    {
      qField: "labels",
      qLabel: "labels",
    },

    {
      qField: "=sum(value1)",
      qLabel: "value1",
    },
    {
      qField: "=sum(value2)",
      qLabel: "value2",
    },
  ];

  const { dataSet, title } = useData({
    cols,
    qTitle: "Tickets By Request Type",
    qSortByAscii: 0,
  });

  const { data } = dataSet;

  const ticketRequestChart = {
    data: {
      labels: data ? data.map((n) => n["labels"]) : [],
      datasets: [
        {
          data: data ? data.map((n) => n["value1"]) : [],
          backgroundColor: [
            "#65e0e0",
            "#69b2f8",
            "#6fd39b",
            "#f77eb9",
            "#fdb16d",
            "#c693f9",
          ],
        },
        {
          data: data ? data.map((n) => n["value2"]) : [],
          backgroundColor: "#e5e9f2",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
        labels: {
          display: false,
        },
      },
      layout: {
        padding: {
          left: 5,
        },
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
            },
            barPercentage: 0.5,
            ticks: {
              beginAtZero: true,
              fontSize: 13,
              fontColor: "#182b49",
              fontFamily: "IBM Plex Sans",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: "#e5e9f2",
            },
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              fontColor: "#182b49",
              max: 100,
            },
          },
        ],
      },
    },
  };

  return (
    <Card>
      {data && (
        <>
          <StyledHeader>
            <SectionTitle title={title} />
          </StyledHeader>
          <CardBody>
            <StyledChart>
              <HorizontalBarChart
                data={ticketRequestChart.data}
                options={ticketRequestChart.options}
                width={395}
                height={260}
              />
            </StyledChart>
          </CardBody>
        </>
      )}
    </Card>
  );
};

export default TicketRequest;
