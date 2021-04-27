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

  // const metrics = [];
  const cols = [
    {
      dataKey: "date",
      qField: "Date",
      qLabel: "Date",
    },
    {
      dataKey: "name",
      qField: "Name",
      qLabel: "Name",
    },
    {
      dataKey: "ship_to",
      qField: "[Ship To]",
      qLabel: "Ship To",
    },
    {
      dataKey: "payment_method]",
      qField: "[Payment Method]",
      qLabel: "Payment Method",
    },
    {
      dataKey: "sale_amount",
      qField: "=Sum(Sale Amount)",
      qLabel: "Sale Amount",
      qNumType: "I",
      qNumFmt: "$#,##0.00",
      // render: (text, data, i) => {
      //   return (
      //     <div className={i === 0 ? "gx-text-red" : "gx-text-green"}>{text}</div>
      //   );
      // },
    },
  ];

  const qMetrics = [
    {
      qName: "prize",
      qExpr: "num(Sum(amount),'$#,##0')",
      qType: "qStringExpression", // qValueExpression if a pure number is to be returned
    },
    // {
    //   qName: "desc",
    //   qExpr: "num(Count(distinct coin)/100,'#,##0%')",
    //   qType: "qStringExpression",
    // },
    // {
    //   qName: "styleName",
    //   qExpr: "if(Count(distinct coin)>=0,'up','down')",
    //   qType: "qStringExpression",
    // },
  ];

  const {
    // qLayout,
    // qData,
    // dataSet,
    // title,
    metrics,
    // measureInfo,
    // mData,
    // endSelections,
    // beginSelections,
    // changePage,
    // selections,
    // select,
    // applyPatches,
  } = useData({
    cols,
    // qTitle,
    qMetrics,
    //qColumnOrder: columnOrder,
    //qCalcCondition: calcCondition,
    // qPage,
    //qInterColumnSortOrder: columnSortOrder,
    // qSupressMissing: true,
    // qSuppressZero: true,
  });

  return (
    <React.Fragment>
      {metrics ? (
        <>
          <Title>Recent Deposits</Title>
          <Typography component="p" variant="h4">
            $3,024.00
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            on 15 March, 2019
          </Typography>
          <div>
            <Link color="primary" href="#" onClick={preventDefault}>
              View balance
            </Link>
          </div>{" "}
        </>
      ) : (
        <>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </>
      )}
    </React.Fragment>
  );
}
