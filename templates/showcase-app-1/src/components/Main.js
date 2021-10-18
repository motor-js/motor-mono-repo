import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import SimpleLineChart from "./SimpleLineChart";
import { useData } from "@motor-js/engine";

import Topbar from "./Topbar";
const numeral = require("numeral");
numeral.defaultFormat("0,000");

const backgroundShape = require("../images/shape.svg");

const qMetrics = [
  {
    qName: "Series1",
    qExpr: "num(Sum([Series1]),'$#,##0')",
    qType: "qStringExpression", // qValueExpression if a pure number is to be returned
  },
  {
    qName: "Series2",
    qExpr: "num(Sum([Series2]),'$#,##0')",
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
    marginBottom: 40,
    height: 65,
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
  const { dataSet, metrics } = useData({
    qSortByAscii: 0,
    cols,
    qMetrics,
  });

  const { data, dataKeys } = dataSet;

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
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                  >
                    First title
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    A first title style <br /> with two lines
                  </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.actionButtom}
                  >
                    Learn more
                  </Button>
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
                    Another box
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    A default box
                  </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.actionButtom}
                  >
                    Learn more
                  </Button>
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
                    A box with a carousel
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    If you click in Getting Started, you will see a nice
                    carousel
                  </Typography>
                </div>
                <div className={classes.alignRight}>
                  <Button variant="outlined" className={classes.actionButtom}>
                    Learn more
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.actionButtom}
                  >
                    Dashboard
                  </Button>
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
                      Some details
                    </Typography>
                    <Typography variant="body1">
                      Details about the graph
                    </Typography>
                    <div style={{ marginTop: 14, marginBottom: 14 }}>
                      <div className={classes.inlining}>
                        <Avatar className={classes.loanAvatar}></Avatar>
                        <Typography
                          className={classes.inlining}
                          variant="subtitle2"
                          gutterBottom
                        >
                          Type
                        </Typography>
                        <Typography
                          className={classes.inlining}
                          color="secondary"
                          variant="h6"
                          gutterBottom
                        >
                          {numeral(metrics && metrics["Series1"]).format()}{" "}
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
                          Othe type
                        </Typography>
                        <Typography
                          className={classes.inlining}
                          color="secondary"
                          variant="h6"
                          gutterBottom
                        >
                          {numeral(metrics && metrics["Series2"]).format()}{" "}
                          units
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <SimpleLineChart data={data} dataKeys={dataKeys} />
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
// }

export default withRouter(withStyles(styles)(Main));
