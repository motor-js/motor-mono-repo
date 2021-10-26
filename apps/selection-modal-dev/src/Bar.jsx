import React from "react";
import Chart from "react-apexcharts";

const BarExampleCompact = (props) => {
  //   const [dataPointIndex, setDataPointIndex] = useState([]);
  //   const [dataPointIndex, setDataPointIndex] = useState([]);
  const { data, setSelection } = props;

  const options = {
    states: {
      //   hover: {
      //     filter: {
      //       type: "lighten",
      //       value: 0.15,
      //     },
      //   },
      active: {
        allowMultipleDataPointsSelection: true,
        // filter: {
        //   type: "none" /* none, lighten, darken */,
        // },
      },
    },
    chart: {
      height: 450,
      type: "bar",
      events: {
        click: function (event, chartContext, config) {
          //   setDataPointIndex(0);
          console.log(config.config.title.text);
          config.config.title.text = "ff";

          //   setSelection(
          //     config.config.series[0].elemNumber[config.dataPointIndex]
          //   );
          // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
        },
        updated: function (chartContext, config) {},
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,

      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    // colors: [
    //   function ({ value, seriesIndex, dataPointIndex, w }) {
    //     console.log("tt");
    //     if (dataPointIndex === 0) {
    //       return "#7E36AF";
    //     } else {
    //       return "#D9534F";
    //     }
    //   },
    // ],

    xaxis: {
      categories: data
        ? data.map((n) => (n && n["Category"]) || "untitled")
        : [],

      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    title: {
      text: "Monthly Inflation in Argentina, 2002",
      floating: true,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  const series = [
    {
      name: "Revenue",
      data: data ? data.map((n) => n && parseInt(n["Revenue"])) : [],
      elemNumber: data ? data.map((n) => n && parseInt(n["elemNumber"])) : [],
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {data && (
            <Chart
              options={options}
              series={series}
              type="bar"
              width="100%"
              height={options.chart.height}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BarExampleCompact;
