import Chart from "react-apexcharts";
import PropTypes from "prop-types";

export default function ApexChart({
  id,
  toolbar,
  type,
  series,
  sparkline,
  animation,
  tooltip,
  colors,
  dataLabels,
  legend,
  xaxis,
  yaxis,
  height,
  width,
  fill,
  plotOptions,
  stroke,
  dropShadow,
  markers,
  stacked,
}) {
  ApexChart.defaultProps = {
    colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
    type: "bar",
    width: "100%",
    Height: "80%",
    // plotOptions: {},
  };

  const defaultAnimation = {
    enabled: false,
    // easing: "easeinout",
    // speed: 800,
    // animateGradually: {
    //   enabled: true,
    //   delay: 150,
    // },
    // dynamicAnimation: {
    //   enabled: true,
    //   speed: 350,
    // },
  };

  const defaultTooltip = {
    // y: {
    //   formatter: function (val) {
    //     return "$ " + val + " thousands";
    //   },
    // },
    enabled: false,
  };

  const defaultDataLabels = {
    enabled: false,
  };

  const defaultToolbar = {
    show: false,
  };

  const chartAnimation = { ...defaultAnimation, ...animation };
  const chartTooltop = { ...defaultTooltip, ...tooltip };
  const chartDataLabels = { ...defaultDataLabels, ...dataLabels };
  const chartToolbar = { ...defaultToolbar, ...toolbar };

  ApexChart.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    stacked: PropTypes.bool,
    toolbar: PropTypes.object,
    series: PropTypes.array,
    sparkline: PropTypes.object,
    animation: PropTypes.object,
    tooltip: PropTypes.object,
    colors: PropTypes.array,
    dataLabels: PropTypes.object,
    legend: PropTypes.object,
    height: PropTypes.any,
    width: PropTypes.any,
    fill: PropTypes.object,
    plotOptions: PropTypes.object,
    stroke: PropTypes.object,
    dropShadow: PropTypes.object,
    markers: PropTypes.object,
  };

  const options = {
    chart: {
      id,
      stacked,
      toolbar: chartToolbar,
      sparkline: { ...sparkline },
      animations: chartAnimation,
      dropShadow: { ...dropShadow },
    },
    colors,
    dataLabels: chartDataLabels,
    legend: { ...legend },
    xaxis,
    yaxis,
    plotOptions: { ...plotOptions },
    stroke: { ...stroke },

    fill: { ...fill },
    markers: { ...markers },
    tooltip: chartTooltop,
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type={type}
            height={height}
            width={width}
          />
        </div>
      </div>
    </div>
  );
}
