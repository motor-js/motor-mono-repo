import React from "react";
import PropTypes from "prop-types";
import { useTable } from "@motor-js/engine";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";

import numeral from "numeral";

const numberFormatter = (item) => numeral(item.text).format("0,0");

const resolveFormatter = (type) => {
  if (type === "string") {
    return (item) => item.text;
  } else if (type === "number") {
    return numberFormatter;
  }

  throw new Error(`Unsupported type for resolveFormatter: "${type}"`);
};

const getType = (resultSet, key) => {
  return key === "meas" ? "number" : "string";
};

const TypeToChartComponent = {
  table: ({ resultSet }) => (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {resultSet.headerGroup.map((c) => (
              <TableCell
                align={
                  getType(resultSet, c.qColumnType) === "number"
                    ? "right"
                    : "left"
                }
                key={c.dataKey}
              >
                {c.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {resultSet.dataSet.map((row, index) => (
            <TableRow key={index}>
              {resultSet.headerGroup.map((c) => {
                const type = getType(resultSet, c.qColumnType);
                return (
                  <TableCell
                    align={
                      getType(resultSet, c.qColumnType) === "number"
                        ? "right"
                        : "left"
                    }
                    key={c.dataKey}
                  >
                    {resolveFormatter(type)(row[c.dataIndex])}
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

const TableRenderer = ({ vizState, height }) => {
  const { cols, chartType, dimensions, ...options } = vizState;

  const component = TypeToMemoChartComponent[chartType];

  const { dataSet, headerGroup, select } = useTable({
    cols,
  });

  if (!dataSet) return null;

  const renderProps = {
    // error: null,
    resultSet: { dataSet, headerGroup, select },
  };

  return (
    component && renderChart(component)({ ...options, height, ...renderProps })
  );
};

TableRenderer.propTypes = {
  vizState: PropTypes.object,
  cubejsApi: PropTypes.object,
};
TableRenderer.defaultProps = {
  vizState: {},
  cubejsApi: null,
};
export default TableRenderer;
