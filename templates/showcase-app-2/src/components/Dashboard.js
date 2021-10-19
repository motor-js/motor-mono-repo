import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import SimpleLineChart from "./SimpleLineChart";
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

const cols = [
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
    height: 55,
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

function Dashboard(props) {
  const { classes } = props;

  const currentPath = props.location.pathname;
  const { dataSet, metrics } = useData({
    qSortByAscii: 0,
    cols,
    qMetrics,
  });

  const { data } = dataSet;

  return (
    <React.Fragment>
      <CssBaseline />
      <Topbar currentPath={currentPath} />
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
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                  >
                    Unique Purchases
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {numeral(metrics && metrics["uniquePurchase"]).format()}
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                  >
                    Average Order Value
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {metrics && metrics["avgOrderValue"]}
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                  >
                    Quantities
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {numeral(metrics && metrics["quantities"]).format()}
                  </Typography>
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
                          {numeral(metrics && metrics["EXPANSIONS"]).format()}{" "}
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
                            metrics && metrics["CANCELLATIONS"]
                          ).format()}{" "}
                          units
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <SimpleLineChart data={data} />
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default withRouter(withStyles(styles)(Dashboard));
