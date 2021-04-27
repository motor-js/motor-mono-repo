import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Skeleton from "@material-ui/lab/Skeleton";
import { useTable } from "@motor-js/engine";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

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
    dataKey: "shipTo",
    qField: "[Ship To]",
    qLabel: "Ship To",
  },
  {
    dataKey: "paymentMethod",
    qField: "[Payment Method]",
    qLabel: "Payment Method",
  },
  {
    dataKey: "amount",
    qField: "[Sale Amount]",
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

const Loader = ({ height }) => {
  const skeletons = [];
  for (let i = 0; i < height; i += 18) {
    skeletons.push(<Skeleton key={i} />);
  }
  return <div style={{ height: height }}>{skeletons}</div>;
};

export default function Orders() {
  const classes = useStyles();
  const { dataSet } = useTable({
    cols,
    sortCriteria: {},
    // useFormatting,
    // qPage,
    // qTitle,
    qSuppressMissing: true,
  });

  return (
    <React.Fragment>
      {dataSet ? (
        <>
          <Title>Recent Orders</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Ship To</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell align="right">Sale Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataSet.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.date.text}</TableCell>
                  <TableCell>{row.name.text}</TableCell>
                  <TableCell>{row.shipTo.text}</TableCell>
                  <TableCell>{row.paymentMethod.text}</TableCell>
                  <TableCell align="right">{row.amount.text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={classes.seeMore}>
            <Link color="primary" href="#" onClick={preventDefault}>
              See more orders
            </Link>
          </div>
        </>
      ) : (
        <Loader height={250} />
      )}
    </React.Fragment>
  );
}
