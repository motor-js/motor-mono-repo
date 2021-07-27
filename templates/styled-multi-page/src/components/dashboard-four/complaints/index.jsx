import { useData } from "@motor-js/engine";

import {
  Card,
  CardBody,
  SectionTitle,
  ApexAreaChart,
  DropdownToggle,
  DropdownMenu,
} from "../../../components";

import {
  StyledHeader,
  StyledDropdown,
  StyledChart,
  StyledDiv,
  StyledDivTop,
  StyledNumb,
  StyledText,
  StyledRate,
  StyledDesc,
} from "./style";

const Complaints = () => {
  const cols = [
    {
      qField: "complaintsData_id",
      qLabel: "id",
    },

    {
      qField: "=sum(complaintsData_value)",
      qLabel: "value",
    },
  ];

  const { dataSet } = useData({
    cols,
  });

  const { data } = dataSet;

  const complaintsData = {
    options: {
      chart: {
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
        curve: "straight",
        width: 1.5,
        lineCap: "butt",
      },
      grid: {
        borderColor: "#c0ccda",
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
      },
      xaxis: {
        type: "numeric",
        labels: {
          offsetY: -15,
          offsetX: -5,
          style: {
            colors: "#8392a5",
            fontWeight: 400,
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tickAmount: 11,
        tickPlacement: "between",
        min: 45,
        max: 100,
        floating: true,
        position: "bottom",
      },
      yaxis: {
        show: false,
        min: 0,
        max: 55,
      },
      colors: ["#fe7372"],
      legend: {
        show: false,
      },
      fill: {
        opacity: 0.05,
        colors: ["#fe7372"],
        type: "solid",
      },
      tooltip: {
        enabled: false,
      },
    },
    series: [
      {
        data: data ? data.map((n) => [parseInt(n["id"]), n["value"]]) : [],
      },
    ],
  };

  return (
    <Card>
      {data && (
        <>
          <StyledHeader>
            <SectionTitle title="Complaints Received" />
            <StyledDropdown>
              <DropdownToggle variant="texted">
                This Month <i className="fa fa-chevron-down" />
              </DropdownToggle>
              <DropdownMenu>
                <button type="button" className="item">
                  January
                </button>
                <button type="button" className="item">
                  February
                </button>
              </DropdownMenu>
            </StyledDropdown>
          </StyledHeader>
          <CardBody p={["0px", "0px"]} position="relative">
            <StyledDiv>
              <StyledDivTop>
                <StyledNumb>165</StyledNumb>
                <StyledText>
                  <StyledRate color="success">
                    0.3% <i className="fa fa-arrow-up" />
                  </StyledRate>{" "}
                  than last month
                </StyledText>
              </StyledDivTop>
              <StyledDesc>
                The total number of complaints that have been received.
              </StyledDesc>
            </StyledDiv>
            <StyledChart>
              <ApexAreaChart
                options={complaintsData.options}
                series={complaintsData.series}
                width="100%"
                height="100%"
              />
            </StyledChart>
          </CardBody>
        </>
      )}
    </Card>
  );
};

export default Complaints;
