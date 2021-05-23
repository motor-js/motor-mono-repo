import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import OverTimeChart from "../components/OverTimeChart";
import Chart from "../components/Chart";
import Dropdown from "../components/Dropdown";
import SwitchTable from "../components/SwitchTable";

const queries = {
  usersTableCount: {
    chartType: "table",
    cols: [
      {
        qField: "Type",
        dataKey: "Type",
        qLabel: "Type",
      },
      {
        qField: "=sum(Value)",
        dataKey: "quantity",
        qLabel: "Quantity Sold",
      },
    ],
  },
  usersCount: {
    chartType: "number",
    cols: [],
    qMetrics: [
      {
        qName: "prize",
        qExpr: "num(Sum(Value),'$#,##0')",
        qType: "qStringExpression", // qValueExpression if a pure number is to be returned
      },
    ],
  },
  newUsersCount: {
    chartType: "number",
    cols: [],
    qMetrics: [
      {
        qName: "prize",
        qExpr: "num(Count(Value),'$#,##0')",
        qType: "qStringExpression", // qValueExpression if a pure number is to be returned
      },
    ],
  },
  sessionsCount: {
    chartType: "number",
    cols: [],
    qMetrics: [
      {
        qName: "prize",
        qExpr: "num(Count(Value),'$#,##0')",
        qType: "qStringExpression", // qValueExpression if a pure number is to be returned
      },
    ],
  },
  bounceRate: {
    chartType: "number",
    cols: [],
    qMetrics: [
      {
        qName: "prize",
        qExpr: "num(Count(Value),'#,##0.00%')",
        qType: "qStringExpression", // qValueExpression if a pure number is to be returned
      },
    ],
  },
  averageDuration: {
    chartType: "number",
    cols: [],
    qMetrics: [
      {
        qName: "prize",
        qExpr: "num(Count(Value),'#,##0.00%')",
        qType: "qStringExpression", // qValueExpression if a pure number is to be returned
      },
    ],
  },
  averageNumberSessions: {
    chartType: "number",
    cols: [],
    qMetrics: [
      {
        qName: "prize",
        qExpr: "num(Count(Value),'#,##0.00%')",
        qType: "qStringExpression", // qValueExpression if a pure number is to be returned
      },
    ],
  },
  usersByType: {
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
  },
};

const overTimeQueries = {
  Users: {
    cols: [
      {
        qField: "[Period]",
        qLabel: "Period",
      },
      {
        qField: "=count(Dim1)*1000",
        qLabel: "Session Users",
        // useFormatting: true,
        // qNumType: "M",
        // qNumFmt: "£#,##0",
      },
    ],
    granularity: "day",
    // measures: ["Sessions.usersCount"],
    // timeDimensions: [
    //   {
    //     granularity: "day",
    //     dimension: "Sessions.sessionStart",
    //   },
    // ],
  },
  Sessions: {
    cols: [
      {
        qField: "[Period]",
        qLabel: "Period",
      },
      {
        qField: "=count(Dim2)",
        qLabel: "Sessions Sessions",
        // useFormatting: true,
        // qNumType: "M",
        // qNumFmt: "£#,##0",
      },
    ],
    granularity: "day",
    //   measures: ["Sessions.count"],
    //   timeDimensions: [
    //     {
    //       granularity: "day",
    //       dimension: "Sessions.sessionStart",
    //     },
    //   ],
  },
  "Page Views": {
    cols: [
      {
        qField: "[Period]",
        qLabel: "Period",
      },
      {
        qField: "=count(Type)",
        qLabel: "Page Views Count",
        // useFormatting: true,
        // qNumType: "M",
        // qNumFmt: "£#,##0",
      },
    ],
    granularity: "day",
    //   measures: ["PageViews.count"],
    //   timeDimensions: [
    //     {
    //       granularity: "day",
    //       dimension: "PageViews.time",
    //     },
    //   ],
  },
};
// const overTimeQueries = {
//   Users: {
//     measures: ["Sessions.usersCount"],
//     timeDimensions: [
//       {
//         granularity: "day",
//         dimension: "Sessions.sessionStart",
//       },
//     ],
//   },
//   Sessions: {
//     measures: ["Sessions.count"],
//     timeDimensions: [
//       {
//         granularity: "day",
//         dimension: "Sessions.sessionStart",
//       },
//     ],
//   },
//   "Page Views": {
//     measures: ["PageViews.count"],
//     timeDimensions: [
//       {
//         granularity: "day",
//         dimension: "PageViews.time",
//       },
//     ],
//   },
// };

const AudiencePage = ({ withTime }) => {
  const [overTimeQuery, setOverTimeQuery] = useState("Users");

  return (
    <>
      <Grid item xs={12}>
        <OverTimeChart
          title={
            <Dropdown
              value={overTimeQuery}
              options={Object.keys(overTimeQueries).reduce((out, measure) => {
                out[measure] = () => setOverTimeQuery(measure);
                return out;
              }, {})}
            />
          }
          vizState={withTime({
            chartType: "line",
            legend: false,
            query: overTimeQueries[overTimeQuery],
            // query: overTimeQueries["Users"],
          })}
        />
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Chart title="Users" vizState={withTime(queries.usersCount)} />
          </Grid>
          <Grid item xs={6}>
            <Chart
              title="New Users"
              vizState={withTime(queries.newUsersCount)}
            />
          </Grid>
          <Grid item xs={6}>
            <Chart
              title="Sessions"
              vizState={withTime(queries.sessionsCount)}
            />
          </Grid>
          <Grid item xs={6}>
            <Chart
              title="Bounce Rate"
              vizState={withTime(queries.bounceRate)}
            />
          </Grid>
          <Grid item xs={6}>
            <Chart
              title="Avg. Session Duration"
              vizState={withTime(queries.averageDuration)}
            />
          </Grid>
          <Grid item xs={6}>
            <Chart
              title="Number of Sessions per User"
              vizState={withTime(queries.averageNumberSessions)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Chart title="Users by Type" vizState={withTime(queries.usersByType)} />
      </Grid>
      <SwitchTable
        options={[
          {
            title: "Demographics",
            values: [
              {
                name: "Language",
                fn: ({ query }, segment, timeDimension) => ({
                  ...query,
                  segment,
                  timeDimension,
                  dimensions: ["Dim1"],
                }),
              },
              {
                name: "Country",
                fn: ({ query }, segment, timeDimension) => ({
                  ...query,
                  segment,
                  timeDimension,
                  dimensions: ["Dim2"],
                }),
              },
              {
                name: "City",
                fn: ({ query }, segment, timeDimension) => ({
                  ...query,
                  segment,
                  timeDimension,
                  dimensions: ["Type"],
                }),
              },
            ],
          },
        ]}
        query={withTime({
          query: queries.usersTableCount,
        })}
      />
    </>
  );
};

export default AudiencePage;
