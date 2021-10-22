import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import SimpleBarChart from "./SimpleBarChart";
import SparkLine from "./SparkLine";
import { useData } from "@motor-js/engine";

import Topbar from "./Topbar";
const numeral = require("numeral");
numeral.defaultFormat("0,000");

const backgroundShape = require("../images/shape.svg");

const qMetrics = [
  {
    qName: "EXPANSIONS",
    qExpr: "num(Sum([Series1]),'$#,##0')",
    qType: "qStringExpression", // qValueExpression if a pure number is to be returned
  },
  {
    qName: "CANCELLATIONS",
    qExpr: "num(Sum([Series2]),'$#,##0')",
    qType: "qStringExpression", // qValueExpression if a pure number is to be returned
  },
  {
    qName: "uniquePurchase",
    // qExpr: "num(Sum(today)/Sum(yesterday),'#,##0%')",
    qExpr: "num(Count( distinct Purchases),'#,##0')",
    qType: "qStringExpression", // qValueExpression if a pure number is to be returned
  },
  {
    qName: "avgOrderValue",
    qExpr: "num(Avg(Values),'$#,##0')",
    qType: "qStringExpression", // qValueExpression if a pure number is to be returned
  },
  {
    qName: "quantities",
    qExpr: "num(Sum(Quantities),'#,##0')",
    qType: "qStringExpression", // qValueExpression if a pure number is to be returned
  },
];

const cols1 = [
  {
    qField: "[categories]",
    qLabel: "name",
  },
  {
    qField: "=sum(Series1)",
    qLabel: "Type",
  },
  // {
  //   qField: "=sum(Series2)",
  //   qLabel: "OtherType",
  // },
];
const cols2 = [
  {
    qField: "[categories]",
    qLabel: "name",
  },
  // {
  //   qField: "=sum(Series1)",
  //   qLabel: "Type",
  // },
  {
    qField: "=sum(Series2)",
    qLabel: "OtherType",
  },
];
const cols3 = [
  {
    qField: "[categories]",
    qLabel: "name",
  },
  {
    qField: "=sum(Series1)",
    qLabel: "Type",
  },
  {
    qField: "=sum(Series2)",
    qLabel: "OtherType",
  },
];

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200,
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
    },
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  kpiPaper: {
    padding: "15px 0px 0px",
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152,
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: 10,
    height: 160,
  },
  inlining: {
    display: "inline-block",
    marginRight: 10,
  },
  buttonBar: {
    display: "flex",
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  noBorder: {
    borderBottomStyle: "hidden",
  },
  loadingState: {
    opacity: 0.05,
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%",
  },
  loanAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  interestAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
});

function Main(props) {
  const { classes } = props;
  const { dataSet: dataSet1, metrics: metrics1 } = useData({
    qSortByAscii: 0,
    cols: cols1,
    qMetrics,
  });

  const { dataSet: dataSet2, metrics: metrics2 } = useData({
    qSortByAscii: 0,
    cols: cols2,
    qMetrics,
  });
  const { dataSet: dataSet3, metrics: metrics3 } = useData({
    qSortByAscii: 0,
    cols: cols3,
    qMetrics,
  });

  const { data: data1, dataKeys: dataKeys1 } = dataSet1;
  const { data: data2, dataKeys: dataKeys2 } = dataSet2;
  const { data: data3, dataKeys: dataKeys3 } = dataSet3;

  const options1 = {
    type: "area",
    fillOpacity: 0.3,
    title: {
      text: "UNIQUE PURCHASES",
    },
    subtitle: {
      text: "$235,312",
    },
  };
  const options2 = {
    type: "area",
    fillOpacity: 0.3,
    title: {
      text: "AVERAGE ORDER VALUE",
    },
    subtitle: {
      text: "$235,312",
    },
  };
  const options3 = {
    type: "line",
    fillOpacity: 1,
    title: {
      text: "QUANTITIES",
    },
    subtitle: {
      text: "$235,312",
    },
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Topbar />
      <div className={classes.root}>
        <Grid container justifyContent="center">
          <Grid
            spacing={4}
            alignItems="center"
            justifyContent="center"
            container
            className={classes.grid}
          >
            <Grid item xs={12} md={4}>
              <Paper className={classes.kpiPaper}>
                <div className={classes.box}>
                  <SparkLine
                    options={options1}
                    dataKeys={dataKeys1}
                    data={data1}
                  />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.kpiPaper}>
                <div className={classes.box}>
                  <SparkLine
                    options={options2}
                    dataKeys={dataKeys2}
                    data={data2}
                  />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.kpiPaper}>
                <div className={classes.box}>
                  <SparkLine
                    options={options3}
                    dataKeys={dataKeys3}
                    data={data3}
                  />
                </div>
              </Paper>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Paper
                  className={classes.paper}
                  style={{ position: "relative" }}
                >
                  <div>
                    <Typography variant="subtitle1" gutterBottom>
                      Account Retention
                    </Typography>
                    <div style={{ marginTop: 14, marginBottom: 14 }}>
                      <div className={classes.inlining}>
                        <Avatar className={classes.loanAvatar}></Avatar>
                        <Typography
                          className={classes.inlining}
                          variant="subtitle2"
                          gutterBottom
                        >
                          EXPANSIONS
                        </Typography>
                        <Typography
                          className={classes.inlining}
                          color="secondary"
                          variant="h6"
                          gutterBottom
                        >
                          {numeral(metrics1 && metrics1["EXPANSIONS"]).format()}{" "}
                          units
                        </Typography>
                      </div>
                      <div className={classes.inlining}>
                        <Avatar className={classes.interestAvatar}></Avatar>
                        <Typography
                          className={classes.inlining}
                          variant="subtitle2"
                          gutterBottom
                        >
                          CANCELLATIONS
                        </Typography>
                        <Typography
                          className={classes.inlining}
                          color="secondary"
                          variant="h6"
                          gutterBottom
                        >
                          {numeral(
                            metrics1 && metrics1["CANCELLATIONS"]
                          ).format()}{" "}
                          units
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <SimpleBarChart data={data3} />
                    </div>
                  </div>
                </Paper>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
// }

export default withRouter(withStyles(styles)(Main));
