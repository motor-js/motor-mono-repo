import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useTable } from "@motor-js/engine";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import { useBookmark } from "@motor-js/engine";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const BookmarComponent = () => {
  const { bookmarkList } = useBookmark();
  console.log(bookmarkList);
  const cols = [
    {
      qField: "[Company Name]",
      dataKey: "company",
      qLabel: "Company Name",
    },
    {
      qField: "=sum(Quantity)",
      dataKey: "quantity",
      qLabel: "Quantity Sold",
    },
    {
      qField: "=sum(Quantity * Price)",
      dataKey: "revenue",
      qLabel: "Revenue",
      qNumType: "M",
      qNumFmt: "£#,##0",
    },
  ];

  const {
    dataSet,
    headerGroup,
    select,
    incrementPage,
    decrementPage,
  } = useTable({
    cols,
    qPage: { qTop: 0, qLeft: 0, qWidth: 5, qHeight: 10 },
  });

  const classes = useStyles();

  const handleSelect = (c, i) => {
    // console.log(c);
    select(c.columnId, [c.elemNumber], false);
    // console.log("qLayout", getValue());

    // doReload(1, true);
  };
  const StyledTableCell = withStyles((theme) => ({
    head: {
      // backgroundColor: theme.palette.common.black,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookmarComponent;
