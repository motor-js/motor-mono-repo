import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";

import Chart from "../components/Chart";
import TableRenderer from "../components/TableRenderer";

const queries = {
  topSources: {
    chartType: "pie",
    legend: true,
    cols: [
      {
        qField: "[Type]",
        qLabel: "Type",
      },
      {
        qField: "=Count(Dim1)",
        qLabel: "Users",
      },
    ],
    //     chartType: "pie",
    //     legend: "vertical",
    //     query: {
    //       measures: ["Sessions.usersCount"],
    //       dimensions: ["Sessions.sourceMedium"],
    //       timeDimensions: [
    //         {
    //           dimension: "Sessions.sessionStart",
    //         },
    //       ],
    //     },
  },
  usersOvertime: {
    chartType: "line",
    cols: [
      {
        qField: "[Period]",
        qLabel: "Period",
      },
      {
        qField: "=count(Dim1)",
        qLabel: "Session Users",
        // useFormatting: true,
        // qNumType: "M",
        // qNumFmt: "£#,##0",
      },
    ],
    // granularity: "day",
    //     chartType: "line",
    //     query: {
    //       measures: ["Sessions.usersCount"],
    //       timeDimensions: [
    //         {
    //           dimension: "Sessions.sessionStart",
    //           granularity: "day",
    //         },
    //       ],
    //     },
  },

  //   tableQuery: {
  //     query: {
  //       measures: [
  //         "Sessions.count",
  //         "Sessions.usersCount",
  //         "Sessions.newUsersCount",
  //       ],
  //       timeDimensions: [
  //         {
  //           dimension: "Sessions.sessionStart",
  //         },
  //       ],
  //     },
  //     chartType: "table",
  // },
};

const dimensionOptions = {
  "Top Sources/Mediums": "Sessions.sourceMedium",
  "Top Sources": "Sessions.referrerSource",
  "Top Mediums": "Sessions.referrerMedium",
};

const withPrimaryDimension = ({ query, ...vizState }, dimension) => ({
  ...vizState,
  query: {
    ...query,
    dimensions: [dimension],
  },
});

const AcquisitionPage = ({ withTime }) => {
  const [primaryDimension, setPrimaryDimension] = useState(
    Object.keys(dimensionOptions)[0]
  );
  const handleChange = (event) => setPrimaryDimension(event.target.value);
  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel id="primary-dimension-label" style={{ width: 140 }}>
              Primary Dimension
            </InputLabel>
            <Select
              labelId="primary-dimension-label"
              value={primaryDimension}
              onChange={handleChange}
              input={<Input />}
            >
              {Object.keys(dimensionOptions).map((key) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Chart
            title={primaryDimension}
            vizState={withPrimaryDimension(
              withTime(queries.topSources),
              dimensionOptions[primaryDimension]
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Chart
            title="Users"
            vizState={withTime(queries.usersOvertime)}
            // vizState={withPrimaryDimension(
            //   withTime(queries.topSources),
            //   dimensionOptions[primaryDimension]
            // )}
            // vizState={withTime({
            //   chartType: "line",
            //   legend: false,
            //   query: withTime(queries.usersOvertime),
            // })}
          />
        </Grid>
        <Grid item xs={12}>
          {/* <TableRenderer
            vizState={withPrimaryDimension(
              withTime(queries.tableQuery),
              dimensionOptions[primaryDimension]
            )}
          /> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AcquisitionPage;
