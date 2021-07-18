/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { useData } from "@motor-js/engine";
import {
  Card,
  CardBody,
  Row,
  Col,
  HorizontalBarChart,
  SectionTitle,
} from "../../..//components";

import {
  StyledBodyTitle,
  StyledBullet,
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledListText,
  StyledBodyStatus,
  StyledBodyText,
  StyledChart,
} from "./style";

const RealTimeSales = () => {
  const qMetrics = [
    {
      qName: "TOTAL SALES",
      qExpr: "num(Sum(today),'$#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "TOTAL SALES CHANGE",
      qExpr: "num(Sum(today)/Sum(yesterday),'#,##0%')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "AVG. SALES PER DAY",
      qExpr: "num(Avg(today),'$#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "AVG. SALES PER DAY CHNAGE",
      qExpr: "num(Avg(today)/Avg(yesterday),'#,##%')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
  ];
  const cols = [
    {
      qField: "[time]",
      qLabel: "Category",
    },
    {
      qField: "=sum(today)",
      qLabel: "today",
    },
    {
      qField: "=sum(yesterday)", // TODO why does today and yesterday not appear in legend
      qLabel: "yesterday",
    },
  ];

  const { dataSet, metrics } = useData({
    cols,
    qSortByAscii: 0,
    qMetrics,
  });

  // console.log("check sort order of dimension", dataSet); //TODO sort by laodorder

  const { data, dataKeys } = dataSet;

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
            beginAtZero: true,
            fontSize: 10,
            fontColor: "#182b49",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: true,
            color: "#eceef4",
          },
          barPercentage: 0.6,
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: "#8392a5",
            max: 80,
          },
        },
      ],
    },
  };
  const RealTimeSalesData = {
    datasets: [{}, {}],
  };

  const inputEl = useRef(null);
  const [legendRendered, setLegendRendered] = useState(false);
  // const [, forceUpdate] = useState();
  RealTimeSalesData.labels = (data && data.map((n) => n.Category)) || [];
  RealTimeSalesData.datasets[0].data = (data && data.map((n) => n.today)) || [];
  RealTimeSalesData.datasets[0].backgroundColor = "#69b2f8";
  RealTimeSalesData.datasets[0].lebel = (dataKeys && dataKeys[0]) || null;
  RealTimeSalesData.datasets[1].data =
    (data && data.map((n) => n.yesterday)) || [];
  RealTimeSalesData.datasets[1].backgroundColor = "#d1e6fa";
  RealTimeSalesData.datasets[1].lebel = (dataKeys && dataKeys[1]) || null;
  const { datasets } = RealTimeSalesData;

  const handleLegendClick = (datasetIndex) => {
    // const chart = inputEl.current.chartInstance;
    // chart.getDatasetMeta(datasetIndex).hidden =
    //   chart.getDatasetMeta(datasetIndex).hidden === null
    //     ? true
    //     : !chart.getDatasetMeta(datasetIndex).hidden;
    // chart.update(); // re-draw chart to hide dataset
    // forceUpdate({}); // re-draw component to update legend styles
  };

  const plugins = [
    {
      afterDatasetsDraw() {
        // hack to force re-render component in order to show legend
        if (!legendRendered) {
          setLegendRendered(true);
        }
      },
    },
  ];

  return (
    <Card height="100%">
      <StyledHeader>
        <SectionTitle title="Real-Time Sales" />
        {legendRendered && (
          <StyledList>
            {inputEl.current.chartInstance.legend.legendItems.map((tick) => {
              const chart = inputEl.current.chartInstance;
              const bgColor =
                typeof tick.fillStyle === "string"
                  ? tick.fillStyle // lines
                  : "linear-gradient(to bottom, #13B080, rgba(23,172,126,0.4))"; // canvas gradient
              const isHidden = chart.getDatasetMeta(tick.datasetIndex).hidden; // TODO when hidden should only show one item
              return (
                <StyledListItem
                  type="button"
                  key={tick.datasetIndex}
                  onClick={() => handleLegendClick(tick.datasetIndex)}
                  className={isHidden ? "hidden" : ""}
                >
                  <StyledBullet bg={bgColor} />
                  <div style={{ background: bgColor }} />
                  <StyledListText>
                    {datasets[tick.datasetIndex].lebel}
                  </StyledListText>
                </StyledListItem>
              );
            })}
          </StyledList>
        )}
      </StyledHeader>
      <CardBody pb={["0px", "0px"]}>
        <Row mb="36px">
          <Col col>
            <StyledBodyTitle>
              {/* $150,200{" "} */}
              {metrics && metrics["TOTAL SALES"]}{" "}
              <StyledBodyStatus color="success">
                <i className="fa fa-arrow-up" />{" "}
                {metrics && metrics["TOTAL SALES CHANGE"]}
              </StyledBodyStatus>
            </StyledBodyTitle>
            <StyledBodyText>Total Sales</StyledBodyText>
          </Col>
          <Col col>
            <StyledBodyTitle>
              {/* $21,880{" "} */}
              {metrics && metrics["AVG. SALES PER DAY"]}{" "}
              <StyledBodyStatus color="danger">
                <i className="fa fa-arrow-down" />{" "}
                {metrics && metrics["AVG. SALES PER DAY CHNAGE"]}
              </StyledBodyStatus>
            </StyledBodyTitle>
            <StyledBodyText>Avg. Sales Per Day</StyledBodyText>
          </Col>
        </Row>
        <StyledChart>
          <HorizontalBarChart
            data={RealTimeSalesData}
            options={options}
            width={341}
            height={225}
            ref={inputEl}
            plugins={plugins}
          />
        </StyledChart>
      </CardBody>
    </Card>
  );
};

export default RealTimeSales;
