import { Col } from "../../../components";
// import { conversions } from "../../../components/data/dashboard-one";
import Conversion from "../../../components/dashboard-one/conversion";
import { useData, useTable } from "@motor-js/engine";

const RowOne = () => {
  const cols = [
    {
      qField: "Period",
      qLabel: "Period",
    },

    {
      qField: "=sum(Conversions)",
      qLabel: "Conversions",
    },
    {
      qField: "=sum(Purchases)",
      qLabel: "Purchases",
    },
    {
      qField: "=sum(Values)",
      qLabel: "Values",
    },
    {
      qField: "=sum(Quantities)",
      qLabel: "Quantities",
    },
  ];

  const { dataSet } = useData({
    cols,
  });
  const conversionCols = [
    {
      dataKey: "id",
      qField: "conversions_id",
      qLabel: "id",
    },
    {
      dataKey: "title",
      qField: "title",
      qLabel: "title",
    },
    {
      dataKey: "rate",
      qField: "rate",
      qLabel: "rate",
    },
    {
      dataKey: "percentageChange",
      qField: "percentageChange",
      qLabel: "percentageChange",
    },
    {
      dataKey: "growthChange",
      qField: "growthChange",
      qLabel: "growthChange",
    },
    {
      dataKey: "timeChange",
      qField: "timeChange",
      qLabel: "timeChange",
    },
  ];

  const { dataSet: dataSet2 } = useTable({
    cols: conversionCols,
  });

  const { data } = dataSet;

  const labels = data ? data.map((n) => n["Period"]) : [];

  const conversionChart1 = {
    options: {
      chart: {
        id: "sparkline1",
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 1,
      },
      labels,
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
      },
      colors: ["#DCE6EC"],
      title: {
        text: undefined,
      },
      subtitle: {
        text: undefined,
      },
    },
    series: [
      {
        name: "Conversions",
        data: data ? data.map((n) => n["Conversions"]) : [],
      },
    ],
  };

  const conversionChart2 = {
    options: {
      chart: {
        id: "sparkline2",
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 1,
      },
      labels,
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
      },
      colors: ["#DCE6EC"],
      title: {
        text: undefined,
      },
      subtitle: {
        text: undefined,
      },
    },
    series: [
      {
        name: "Purchases",
        data: data ? data.map((n) => n["Purchases"]) : [],
      },
    ],
  };

  const conversionChart3 = {
    options: {
      chart: {
        id: "sparkline3",
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 1,
      },
      labels,
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
      },
      colors: ["#DCE6EC"],
      title: {
        text: undefined,
      },
      subtitle: {
        text: undefined,
      },
    },
    series: [
      {
        name: "Values",
        data: data ? data.map((n) => n["Values"]) : [],
      },
    ],
  };

  const conversionChart4 = {
    options: {
      chart: {
        id: "sparkline4",
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 1,
      },
      labels,
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
      },
      colors: ["#DCE6EC"],
      title: {
        text: undefined,
      },
      subtitle: {
        text: undefined,
      },
    },
    series: [
      {
        name: "Quantities",
        data: data ? data.map((n) => n["Quantities"]) : [],
      },
    ],
  };

  const conversions = [
    {
      id: 1,
      title: dataSet2 && dataSet2[0].title.text,
      rate: dataSet2 && dataSet2[0].rate.text,
      change: {
        percentage: dataSet2 && dataSet2[0].percentageChange.text,
        growth: dataSet2 && dataSet2[0].growthChange.text,
        time: dataSet2 && dataSet2[0].timeChange.text,
      },
      chart: conversionChart1,
    },
    {
      id: 2,
      title: dataSet2 && dataSet2[1].title.text,
      rate: dataSet2 && dataSet2[1].rate.text,
      change: {
        percentage: dataSet2 && dataSet2[1].percentageChange.text,
        growth: dataSet2 && dataSet2[1].growthChange.text,
        time: dataSet2 && dataSet2[1].timeChange.text,
      },
      chart: conversionChart2,
    },
    {
      id: 3,
      title: dataSet2 && dataSet2[2].title.text,
      rate: dataSet2 && dataSet2[2].rate.text,
      change: {
        percentage: dataSet2 && dataSet2[2].percentageChange.text,
        growth: dataSet2 && dataSet2[2].growthChange.text,
        time: dataSet2 && dataSet2[2].timeChange.text,
      },
      chart: conversionChart3,
    },
    {
      id: 4,
      title: dataSet2 && dataSet2[3].title.text,
      rate: dataSet2 && dataSet2[3].rate.text,
      change: {
        percentage: dataSet2 && dataSet2[3].percentageChange.text,
        growth: dataSet2 && dataSet2[3].growthChange.text,
        time: dataSet2 && dataSet2[3].timeChange.text,
      },
      chart: conversionChart4,
    },
  ];

  return (
    <>
      {dataSet2 &&
        conversions.map((data) => (
          <Col sm={6} lg={3} mt={["10px", null, null, "0px"]} key={data.id}>
            <Conversion
              title={data.title}
              rate={data.rate}
              change={data.change}
              chart={data.chart}
            />
          </Col>
        ))}
    </>
  );
};

export default RowOne;
