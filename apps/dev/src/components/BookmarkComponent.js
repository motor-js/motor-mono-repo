import React, { useState } from "react";
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
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import BookmarkDialogComponent from "./BookmarkDialogComponent";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const BookmarComponent = ({ anchorEl, open, handleClose }) => {
  const {
    bookmarkList,
    bookmarks,
    applyBookmark,
    createBookmark,
    destroyBookmark,
  } = useBookmark();

  // const [openSnackbar, setSnackbarOpen] = React.useState(true);
  const [showDialog, setSHowDialog] = React.useState(false);
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

  // const TableRow = withStyles((theme) => ({
  //   root: {
  //     // "&:nth-of-type(odd)": {
  //     //   backgroundColor: theme.palette.action.hover,
  //     // },
  //   },
  // }))(TableRow);

  const id = open ? "simple-popover" : undefined;

  const handleClick = (e, id) => {
    applyBookmark(id);
    handleClose();
  };
  const deleteBookmark = async (e, id) => {
    const destroyed = await destroyBookmark(id);
    console.log("destroyed", destroyed);
  };

  // const handleCSnackbarClose = () => {
  //   setSnackbarOpen(false);
  // };

  return (
    <>
      {/* <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCSnackbarClose}
      >
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </Snackbar> */}
      <BookmarkDialogComponent isOpen={showDialog} />
      {bookmarkList && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
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
                  <TableRow>
                    <StyledTableCell>Ttile</StyledTableCell>
                    <StyledTableCell>Created On</StyledTableCell>
                    <StyledTableCell align="right" width="10%">
                      <IconButton style={{ padding: 8 }}>
                        <Edit fontSize="small" />
                      </IconButton>
                    </StyledTableCell>
                    <StyledTableCell align="right" width="10%">
                      <IconButton style={{ padding: 8 }}>
                        <Delete fontSize="small" />
                      </IconButton>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookmarkList.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell
                        component="th"
                        scope="row"
                        onClick={(event) => handleClick(event, row.id)}
                      >
                        {row.title}
                      </TableCell>
                      <StyledTableCell>{row.createdDate}</StyledTableCell>
                      <StyledTableCell align="right" width="10%">
                        {/* {row.text} */}
                        <IconButton
                          style={{ padding: 8 }}
                          onClick={() => setSHowDialog(true)}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                      </StyledTableCell>
                      <StyledTableCell align="right" width="10%">
                        {/* {row.text} */}
                        <IconButton
                          style={{ padding: 8 }}
                          onClick={(event) => deleteBookmark(event, row.id)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </StyledTableCell>
                    </TableRow>
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
