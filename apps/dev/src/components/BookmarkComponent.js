import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import { useBookmark } from "@motor-js/engine";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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

const BookmarComponent = ({ anchorEl, open, handleClose }) => {
  const {
    bookmarkList,
    bookmarks,
    applyBookmark,
    createBookmark,
    destroyBookmark,
  } = useBookmark();
  // const [anchorEl, setAnchorEl] = useState(null);
  console.log(bookmarks);

  const classes = useStyles();

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
      // "&:nth-of-type(odd)": {
      //   backgroundColor: theme.palette.action.hover,
      // },
    },
  }))(TableRow);

  // const open = Boolean(anchorEl);
  // const open = true;
  const id = open ? "simple-popover" : undefined;
  const bull = <span className={classes.bullet}>•</span>;
  // const handleClick = (e, key) => console.log(key);
  const handleClick = (e, key) => {
    applyBookmark(key);
    handleClose();
  };
  const deleteBookmark = (e, key) => {
    destroyBookmark(key);
  };

  return (
    <>
      {bookmarkList && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          // anchorReference="anchorPosition"
          // anchorPosition={{ top: 60, left: 1000 }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Bookmarks
              </Typography>
            </CardContent>
            <TableContainer component={Paper}>
              <Table
                stickyHeader
                className={classes.table}
                aria-label="simple table"
              >
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Created On</StyledTableCell>
                    <StyledTableCell align="right" width="10%">
                      {/* Fat&nbsp;(g) */}
                      <IconButton
                        style={{ padding: 8 }}
                        // onClick={(event) => deleteBookmark(event, row.key)}
                      >
                        <Edit fontSize="small" />
                      </IconButton>
                    </StyledTableCell>
                    <StyledTableCell align="right" width="10%">
                      {/* Carbs&nbsp;(g) */}
                      <IconButton style={{ padding: 8 }}>
                        <Delete fontSize="small" />
                      </IconButton>
                    </StyledTableCell>
                    {/*        <StyledTableCell align="right">
                      Protein&nbsp;(g)
                    </StyledTableCell> */}
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {bookmarkList.map((row) => (
                    <StyledTableRow key={row.key} hover>
                      <TableCell
                        component="th"
                        scope="row"
                        onClick={(event) => handleClick(event, row.key)}
                      >
                        {row.text}
                      </TableCell>
                      <StyledTableCell>{row.createdDate}</StyledTableCell>
                      <StyledTableCell align="right" width="10%">
                        {/* {row.text} */}
                        <IconButton
                          style={{ padding: 8 }}
                          // onClick={(event) => deleteBookmark(event, row.key)}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                      </StyledTableCell>
                      <StyledTableCell align="right" width="10%">
                        {/* {row.text} */}
                        <IconButton
                          style={{ padding: 8 }}
                          onClick={(event) => deleteBookmark(event, row.key)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </StyledTableCell>
                      {/* <StyledTableCell align="right">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.protein}
                      </StyledTableCell> */}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <CardActions style={{ width: "100%", justifyContent: "center" }}>
              {/* <Button size="small">Learn More</Button> */}
              <AddCircleIcon
                fontSize="large"
                onClick={() => createBookmark()}
              />
            </CardActions>
          </Card>
        </Popover>
      )}
    </>
  );
};

export default BookmarComponent;
