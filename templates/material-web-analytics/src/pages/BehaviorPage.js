import React from "react";
import Grid from "@material-ui/core/Grid";
import OverTimeChart from "../components/OverTimeChart";
import Chart from "../components/Chart";
import SwitchTable from "../components/SwitchTable";

const queries = {
  pageviewsOverTime: {
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
    granularity: "day",
  },
  pageviews: {
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
  uniqPageviews: {
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
  averageTimeOnPageSeconds: {
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
  pageviewsTable: {
    chartType: "table",
    cols: [
      {
        qField: "Type",
        dataKey: "Type",
        qLabel: "Type",
      },
      {
        qField: "Dim1",
        dataKey: "Dim1",
        qLabel: "Dim1",
      },
      {
        qField: "=sum(Value)",
        dataKey: "quantity",
        qLabel: "Quantity Sold",
      },
    ],
  },
};

const BehaviorPage = ({ withTime }) => (
  <Grid item xs={12}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <OverTimeChart
          title="Pageviews"
          vizState={withTime({
            chartType: "line",
            legend: false,
            query: withTime(queries.pageviewsOverTime),
          })}
        />
      </Grid>
      <Grid item xs={2}>
        <Chart title="Pageviews" vizState={withTime(queries.pageviews)} />
      </Grid>
      <Grid item xs={2}>
        <Chart
          title="Unique Pageviews"
          vizState={withTime(queries.uniqPageviews)}
        />
      </Grid>
      <Grid item xs={2}>
        <Chart
          title="Avg. Time on Page"
          vizState={withTime(queries.averageTimeOnPageSeconds)}
        />
      </Grid>
      <Grid item xs={2}>
        <Chart title="Bounce Rate" vizState={withTime(queries.bounceRate)} />
      </Grid>
      <Grid item xs={2}>
        {/* <Chart title="% Exit" vizState={withTime(queries.exitPercent)} /> */}
      </Grid>
      <SwitchTable
        options={[
          {
            title: "Site Content",
            values: [
              {
                name: "Page",
                fn: ({ query }, segment, timeDimension) => ({
                  ...query,
                  segment,
                  timeDimension,
                  // dimensions: ["PageViews.pageUrlPath"],
                  dimensions: ["Type"],
                }),
              },
              {
                name: "Page Title",
                fn: ({ query }, segment, timeDimension) => ({
                  ...query,
                  segment,
                  timeDimension,
                  // dimensions: ["PageViews.pageTitle"],
                  dimensions: ["Dim1"],
                }),
              },
            ],
          },
        ]}
        query={withTime({
          query: queries.pageviewsTable,
        })}
      />
    </Grid>
  </Grid>
);

export default BehaviorPage;
