import React from "react";
import PropTypes from "prop-types";
// import { useCubeQuery } from "@cubejs-client/react";
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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";

import moment from "moment";
import numeral from "numeral";

const numberFormatter = (item) => numeral(item).format("0,0");
const dateFormatter = (item) => moment(item).format("MMM DD");

const resolveFormatter = (type) => {
  if (type === "string") {
    return (item) => item;
  } else if (type === "number") {
    return numberFormatter;
  }

  throw new Error(`Unsupported type for resolveFormatter: "${type}"`);
};

const xAxisFormatter = (item) => {
  if (moment(item).isValid()) {
    return dateFormatter(item);
  } else {
    return item;
  }
};

const getType = (resultSet, key) => {
  let annotation = resultSet.annotation();

  if (annotation.measures[key]) {
    return annotation.measures[key].type;
  }

  if (annotation.dimensions[key]) {
    return annotation.dimensions[key].type;
  }

  throw new Error(`Unable to resolve type from resultSet with key: "${key}"`);
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
      // data={resultSet.chartPivot()}
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
  bar: ({ resultSet }) => (
    <CartesianChart resultSet={resultSet} ChartComponent={BarChart}>
      {resultSet.seriesNames().map((series, i) => (
        <Bar
          key={series.key}
          stackId="a"
          dataKey={series.key}
          name={series.title}
          fill={colors[i]}
        />
      ))}
    </CartesianChart>
  ),
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
          {/* <Legend /> */}
          {legend && <Legend layout={legend} align="right" />}
          <Tooltip />
          {/* <Pie
            label={(value) => numeral(value.percent).format("0.00%")}
            isAnimationActive={false}
            // data={resultSet.chartPivot()}
            data={resultSet.data}
            nameKey="x"
            // dataKey={resultSet.seriesNames()[0].key}
            dataKey={resultSet.dataKeys}
            fill="#8884d8"
          >
            {resultSet.data.map((e, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          {legend && <Legend layout={legend} align="right" />}
          <Tooltip /> */}
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
  table: ({ resultSet }) => (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {resultSet.tableColumns().map((c) => (
              <TableCell
                align={
                  getType(resultSet, c.key) === "number" ? "right" : "left"
                }
                key={c.key}
              >
                {c.shortTitle}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {resultSet.tablePivot().map((row, index) => (
            <TableRow key={index}>
              {resultSet.tableColumns().map((c) => {
                const type = getType(resultSet, c.key);
                return (
                  <TableCell
                    align={
                      getType(resultSet, c.key) === "number" ? "right" : "left"
                    }
                    key={c.key}
                  >
                    {resolveFormatter(type)(row[c.key])}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
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
  const { cols, qMetrics, chartType, legend, ...options } = vizState;
  const component = TypeToMemoChartComponent[chartType];
  // const renderProps = useCubeQuery(query);
  const { dataSet, metrics, select } = useData({
    cols,
    qMetrics,
  });

  const renderProps = {
    // error: null,
    resultSet: { dataSet, metrics, select, legend },
  };

  if (!metrics && !dataSet.data) return null;
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
