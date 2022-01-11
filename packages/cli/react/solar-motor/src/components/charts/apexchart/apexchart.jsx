import ApexChart from "react-apexcharts";

export const ApexChartComponent = ({
  type,
  options,
  series,
  width,
  height,
}) => {
  return (
    <ApexChart
      type={type}
      options={options}
      series={series}
      height={height}
      width={width}
    />
  );
};

export const ApexBarChart = ({ options, series, width, height }) => {
  return (
    <ApexChart
      type="bar"
      options={options}
      series={series}
      height={height}
      width={width}
    />
  );
};

export const ApexLineChart = ({ options, series, width, height }) => {
  return (
    <ApexChart
      type="line"
      options={options}
      series={series}
      height={height}
      width={width}
    />
  );
};

export const ApexAreaChart = ({ options, series, width, height }) => {
  return (
    <ApexChart
      type="area"
      options={options}
      series={series}
      height={height}
      width={width}
    />
  );
};

export const ApexPieChart = ({ options, series, width, height }) => {
  return (
    <ApexChart
      type="pie"
      options={options}
      series={series}
      height={height}
      width={width}
    />
  );
};

export const ApexDonutChart = ({ options, series, width, height }) => {
  return (
    <ApexChart
      type="donut"
      options={options}
      series={series}
      height={height}
      width={width}
    />
  );
};

export const ApexRadialChart = ({ options, series, width, height }) => {
  return (
    <ApexChart
      type="radialBar"
      options={options}
      series={series}
      height={height}
      width={width}
    />
  );
};

export default ApexChartComponent;
