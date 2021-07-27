import { useTable } from "@motor-js/engine";
import { Col } from "../../../components";
import RadialPercentage from "../../../components/dashboard-four/radial-percentage";

const chartOptions = {
  chart: {
    sparkline: {
      enabled: true,
    },
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "65%",
      },
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: 20,
          show: true,
          color: "#8392a5",
          fontSize: "9px",
        },
        value: {
          offsetY: -10,
          color: "#001737",
          fontSize: "1.53125rem",
          show: true,
        },
      },
    },
  },
  labels: ["Reached"],
  responsive: [
    {
      breakpoint: "576px",
      options: {
        chart: {
          offsetX: -78,
        },
      },
    },
  ],
};

const chart1 = {
  series: [86],
  options: {
    ...chartOptions,
    colors: ["#fe7372"],
  },
};

const chart2 = {
  series: [69],
  options: {
    ...chartOptions,
    colors: ["#71fecf"],
  },
};

const RightRowOne = () => {
  const cols = [
    {
      dataKey: "id",
      qField: "radial_id",
      qLabel: "id",
    },
    {
      dataKey: "title",
      qField: "radial_title",
      qLabel: "title",
    },
    {
      dataKey: "desc",
      qField: "desc",
      qLabel: "desc",
    },
    {
      dataKey: "min",
      qField: "min",
      qLabel: "mon",
    },
    {
      dataKey: "sec",
      qField: "sec",
      qLabel: "sec",
    },
  ];

  const { dataSet } = useTable({
    cols,
    qSortCriterias: [
      {
        qSortByAscii: 0,
        qSortByLoadOrder: 1,
      },
    ],
  });

  const RadialData = dataSet
    ? [
        {
          id: dataSet[0].id.text,
          title: dataSet[0].title.text,
          desc: dataSet[0].desc.text,
          min: dataSet[0].min.text,
          sec: dataSet[0].sec.text,
          chart: chart1,
        },
        {
          id: dataSet[1].id.text,
          title: dataSet[1].title.text,
          desc: dataSet[1].desc.text,
          min: dataSet[1].min.text,
          sec: dataSet[1].sec.text,
          chart: chart2,
        },
      ]
    : [];

  let restProps = {};
  return (
    <>
      {dataSet &&
        RadialData.map((data, i) => {
          if (i !== 0) {
            restProps = {
              ...restProps,
              mt: ["10px", null, 0, "10px"],
            };
          }
          return (
            <Col key={data.id} col={12} md={6} lg={12} {...restProps}>
              <RadialPercentage
                title={data.title}
                desc={data.desc}
                min={data.min}
                sec={data.sec}
                chart={data.chart}
              />
            </Col>
          );
        })}
    </>
  );
};

export default RightRowOne;
