import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MenuIcon from "@material-ui/icons/Menu";
import Popover from "@material-ui/core/Popover";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import BookmarkComponent from "./BookmarkComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const ButtonComponent = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <IconButton
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleClick}
          >
            <BookmarkBorderIcon />
          </IconButton>{" "}
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
            {/* <Typography className={classes.typography}> */}
            <Card className={classes.root}>
              <CardContent>
                {/* <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Bookmarks
                </Typography> */}
                <Typography variant="h5" component="h2">
                  Bookmarks
                </Typography>
                {/* <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography> */}
              </CardContent>
              <BookmarkComponent />
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>

            {/* <Button /> */}

            {/* </Typography> */}
          </Popover>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonComponent;
