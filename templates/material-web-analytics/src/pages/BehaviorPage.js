import React from "react";
import Grid from "@material-ui/core/Grid";
// import OverTimeChart from "../components/OverTimeChart";
import Chart from "../components/Chart";
// import SwitchTable from "../components/SwitchTable";

const queries = {
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
};

const BehaviorPage = ({ withTime }) => (
  <Grid item xs={12}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {/* <OverTimeChart
          title="Pageviews"
          vizState={withTime(queries.pageviewsOverTime)}
        /> */}
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
      {/* <SwitchTable
        options={[{
          title: "Site Content",
          values: [{
            name: "Page",
            fn: ({ query, ...vizState }) => ({
              ...vizState,
              query: {
                ...query,
                dimensions: ["PageViews.pageUrlPath"]
              }
            })
          },
          {
            name: "Page Title",
            fn: ({ query, ...vizState }) => ({
              ...vizState,
              query: {
                ...query,
                dimensions: ["PageViews.pageTitle"]
              }
            })
          }]
        }]}
        query={withTime(queries.pageviewsTable)}
      /> */}
    </Grid>
  </Grid>
);

export default BehaviorPage;
