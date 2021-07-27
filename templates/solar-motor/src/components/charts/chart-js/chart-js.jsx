/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { Bar, HorizontalBar, Line, Pie, Doughnut } from "react-chartjs-2";

export const BarChart = ({ data, options, width, height }) => {
  const datasetKeyProvider = () => {
    return Math.random().toString();
  };
  return (
    <Bar
      data={data}
      options={options}
      width={width}
      height={height}
      datasetKeyProvider={datasetKeyProvider}
    />
  );
};

export const HorizontalBarChart = forwardRef(
  ({ data, options, width, height, plugins }, ref) => {
    const datasetKeyProvider = () => {
      return Math.random().toString();
    };
    return (
      <HorizontalBar
        data={data}
        options={options}
        width={width}
        height={height}
        datasetKeyProvider={datasetKeyProvider}
        ref={ref}
        plugins={plugins}
      />
    );
  }
);

HorizontalBarChart.displayName = "HorizontalBarChart";

export const LineChart = ({ data, options, width, height }) => {
  const datasetKeyProvider = () => {
    return Math.random().toString();
  };
  return (
    <Line
      data={data}
      options={options}
      width={width}
      height={height}
      datasetKeyProvider={datasetKeyProvider}
    />
  );
};

export const PieChart = ({ data, options, width, height }) => {
  const datasetKeyProvider = () => {
    return Math.random().toString();
  };
  return (
    <Pie
      data={data}
      options={options}
      width={width}
      height={height}
      datasetKeyProvider={datasetKeyProvider}
    />
  );
};

export const DonutChart = ({ data, options, width, height }) => {
  const datasetKeyProvider = () => {
    return Math.random().toString();
  };
  return (
    <Doughnut
      data={data}
      options={options}
      width={width}
      height={height}
      datasetKeyProvider={datasetKeyProvider}
    />
  );
};
