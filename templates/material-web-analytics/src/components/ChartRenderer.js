import React, { useState } from "react";
import PropTypes from "prop-types";
import { useData } from "@motor-js/engine";

import {
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
} from "recharts";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

import moment from "moment";
import numeral from "numeral";

const numberFormatter = (item) => numeral(item).format("0,0");
const dateFormatter = (item) => moment(item).format("MMM DD");

const xAxisFormatter = (item) => {
  if (moment(item).isValid()) {
    return dateFormatter(item);
  } else {
    return item;
  }
};

const CartesianChart = ({ data, legend, children, ChartComponent, height }) => (
  <ResponsiveContainer width="100%" height={height || 250}>
    <ChartComponent
      margin={{
        top: 16,
        right: 16,
        bottom: 0,
        left: 0,
      }}
      data={data}
    >
      <XAxis
        axisLine={false}
        tickLine={false}
        tickFormatter={xAxisFormatter}
        // TODO replace nameKey={nameKey} from useData
        dataKey="Period"
        minTickGap={20}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tickFormatter={numberFormatter}
      />
      <CartesianGrid vertical={false} />
      {children}
      {legend && <Legend />}
      <Tooltip labelFormatter={dateFormatter} formatter={numberFormatter} />
    </ChartComponent>
  </ResponsiveContainer>
);

CartesianChart.defaultProps = {
  legend: true,
};

const colors = ["#4791db", "#e33371", "#e57373"];

// eslint-disable-next-line no-unused-vars
const stackedChartData = (resultSet) => {
  const data = resultSet
    .pivot()
    .map(({ xValues, yValuesArray }) =>
      yValuesArray.map(([yValues, m]) => ({
        x: resultSet.axisValuesString(xValues, ", "),
        color: resultSet.axisValuesString(yValues, ", "),
        measure: m && Number.parseFloat(m),
      }))
    )
    .reduce((a, b) => a.concat(b), []);
  return data;
};

const TypeToChartComponent = {
  line: ({ resultSet, ...props }) => {
    const { data, dataKeys } = resultSet.dataSet;
    const { legend } = resultSet;

    return (
      <CartesianChart
        data={data}
        legend={legend}
        ChartComponent={LineChart}
        {...props}
      >
        {dataKeys.map((series, i) => (
          <Line
            key={i}
            stackId="a"
            dataKey={series}
            name={series}
            stroke={colors[i]}
          />
        ))}
      </CartesianChart>
    );
  },
  bar: ({ resultSet }) => {
    const { data, dataKeys } = resultSet.dataSet;
    const { legend } = resultSet;

    return (
      <CartesianChart data={data} legend={legend} ChartComponent={BarChart}>
        {dataKeys.map((series, i) => (
          <Bar
            key={i}
            stackId="a"
            dataKey={series}
            name={series}
            fill={colors[i]}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        ))}
      </CartesianChart>
    );
  },
  area: ({ resultSet }) => (
    <CartesianChart resultSet={resultSet} ChartComponent={AreaChart}>
      {resultSet.seriesNames().map((series, i) => (
        <Area
          key={series.key}
          stackId="a"
          dataKey={series.key}
          name={series.title}
          stroke={colors[i]}
          fill={colors[i]}
        />
      ))}
    </CartesianChart>
  ),
  pie: ({ resultSet, height }) => {
    const { data, dataKeys } = resultSet.dataSet;
    const { select, legend } = resultSet;

    return (
      <ResponsiveContainer width="100%" height={height || 250}>
        <PieChart>
          {dataKeys &&
            dataKeys.map((key, index) => (
              <Pie
                // TODO replace nameKey={nameKey} from useData
                nameKey="Type"
                key={index}
                dataKey={key}
                isAnimationActive={false}
                data={data}
                label={(value) => numeral(value.percent).format("0.00%")}
                onClick={(c) => select(0, [c.elemNumber], false)}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            ))}
          {legend && <Legend layout={legend} align="right" />}
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  number: ({ resultSet, height }) => {
    const value = resultSet.metrics[Object.keys(resultSet.metrics)[0]];

    return (
      <Typography component="p" variant="h4" style={{ height: height }}>
        {value}
      </Typography>
    );
  },
};
const TypeToMemoChartComponent = Object.keys(TypeToChartComponent)
  .map((key) => ({
    [key]: React.memo(TypeToChartComponent[key]),
  }))
  .reduce((a, b) => ({ ...a, ...b }));

const Loader = ({ height }) => {
  const skeletons = [];
  for (let i = 0; i < height; i += 18) {
    skeletons.push(<Skeleton key={i} />);
  }
  return <div style={{ height: height }}>{skeletons}</div>;
};

const renderChart = (Component) => ({ resultSet, error, height, ...props }) =>
  (resultSet && (
    <Component resultSet={resultSet} height={height} {...props} />
  )) ||
  (error && error.toString()) || <Loader height={height} />;

const ChartRenderer = ({ vizState, height }) => {
  const {
    cols,
    qMetrics,
    chartType,
    legend,
    dimensions,
    ...options
  } = vizState;
  const [dimension, setDimension] = useState(
    (dimensions && dimensions[0]) || (cols[0] && cols[0].qField)
  );
  const [measure, setMeasure] = useState(cols[1] && cols[1].qField);
  // const [columns, setColumns] = useState(dimensions && dimensions[0]);
  const component = TypeToMemoChartComponent[chartType];

  // console.log(vizState.query && vizState.query.dimensions, dimension);
  // console.log(vizState);
  const { dataSet, metrics, select, applyPatches } = useData({
    cols,
    qMetrics,
  });

  if (!metrics && !dataSet.data) return null;

  if (dimensions && dimensions[0] !== dimension) {
    // handlerChange(false, dimensions[0]);
    applyPatches([
      {
        qOp: "replace",
        qPath: `/qHyperCubeDef/qDimensions/0/qDef/qFieldDefs`,
        qValue: JSON.stringify([dimensions[0]]),
      },
      // {
      //   qOp: "replace",
      //   qPath: `/qHyperCubeDef/qDimensions/0/qDef/qFieldLabels`,
      //   qValue: JSON.stringify([dimensions[0]]),
      // },
    ]);
    setDimension(dimensions[0]);
  }
  if (cols[1] && cols[1].qField !== measure) {
    // handlerChange(false, dimensions[0]);
    // console.log(cols[1].qField);
    applyPatches([
      {
        qOp: "replace",
        qPath: `/qHyperCubeDef/qMeasures/0/qDef/qDef`,
        qValue: JSON.stringify(cols[1].qField),
      },
      {
        qOp: "replace",
        qPath: `/qHyperCubeDef/qMeasures/0/qDef/qLabel`,
        qValue: JSON.stringify(cols[1].qLabel),
      },
      // {
      //   qOp: "replace",
      //   qPath: `/qHyperCubeDef/qDimensions/0/qDef/qFieldLabels`,
      //   qValue: JSON.stringify([dimensions[0]]),
      // },
    ]);
    setMeasure(cols[1].qField);
  }

  const renderProps = {
    // error: null,
    resultSet: { dataSet, metrics, select, legend },
  };

  return (
    component && renderChart(component)({ ...options, height, ...renderProps })
  );
};

ChartRenderer.propTypes = {
  vizState: PropTypes.object,
  cubejsApi: PropTypes.object,
};
ChartRenderer.defaultProps = {
  vizState: {},
  cubejsApi: null,
};
export default ChartRenderer;
