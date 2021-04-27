import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import { useData } from "@motor-js/engine";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();

  const cols = [];

  const qMetrics = [
    {
      qName: "date",
      qExpr: "date",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    {
      qName: "value",
      qExpr: "value",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
  ];

  const { metrics } = useData({
    cols,
    qMetrics,
  });

  const Loader = ({ height }) => {
    const skeletons = [];
    for (let i = 0; i < height; i += 18) {
      skeletons.push(<Skeleton key={i} />);
    }
    return <div style={{ height: height }}>{skeletons}</div>;
  };

  return (
    <React.Fragment>
      {metrics ? (
        <>
          <Title>Recent Deposits</Title>
          <Typography component="p" variant="h4">
            {metrics.value}
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            on {metrics.date}
          </Typography>
          <div>
            <Link color="primary" href="#" onClick={preventDefault}>
              View balance
            </Link>
          </div>{" "}
        </>
      ) : (
        <Loader height={250} />
      )}
    </React.Fragment>
  );
}
