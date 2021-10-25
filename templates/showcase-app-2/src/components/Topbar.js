import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuIcon from "@material-ui/icons/Menu";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import FilterListIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link as MaterialLink } from "@material-ui/core";
import Menu from "./Menu";
import Filter from "./Filter"

const logo = require("../images/motor-red.png");


const styles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: "sticky",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "white",
  },
  // drawer: {
  //   width: "100%",
  //   flexShrink: 0,
  // },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    margin: "10px",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  inline: {
    display: "inline",
  },
  flex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  },
  drawGrid: {
    display: "flex",
    margin: "10px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  productLogo: {
    display: "inline-block",
    borderLeft: `1px solid ${theme.palette.grey["A100"]}`,
    marginLeft: 32,
    paddingLeft: 24,
    [theme.breakpoints.up("md")]: {
      paddingTop: "1.5em",
    },
  },
  tagline: {
    display: "inline-block",
    marginLeft: 10,
    [theme.breakpoints.up("md")]: {
      paddingTop: "0.8em",
    },
  },
  iconContainer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  iconButton: {
    float: "right",
  },
  tabContainer: {
    marginLeft: 32,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto",
  },
});

class Topbar extends Component {
  state = {
    value: 0,
    menuDrawer: false,
    filterDrawer: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  FilterDrawChange = (event) => {
    this.setState({ filterDrawer: !this.state.filterDrawer });
  };
  // FilterDrawClose = (event) => {
  //   this.setState({ filterDrawer: false });
  // };

  mobileMenuOpen = (event) => {
    this.setState({ menuDrawer: true });
  };

  mobileMenuClose = (event) => {
    this.setState({ menuDrawer: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  current = () => {
    if (this.props.currentPath === "/home") {
      return 0;
    }
    if (this.props.currentPath === "/dashboard") {
      return 1;
    }
    if (this.props.currentPath === "/signup") {
      return 2;
    }
    if (this.props.currentPath === "/wizard") {
      return 3;
    }
    if (this.props.currentPath === "/cards") {
      return 4;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Grid container spacing={10} alignItems="baseline">
              <Grid item xs={12} className={classes.flex}>
                <div className={classes.inline}>
                  <Typography variant="h6" color="inherit" noWrap>
                    <Link to="/" className={classes.link}>
                      <span className={classes.tagline}>
                        <img width={100} src={logo} alt="" />
                      </span>
                    </Link>
                  </Typography>
                </div>
                {!this.props.noTabs && (
                  <React.Fragment>
                    <div className={classes.productLogo}>
                      <Typography>A Motor Showcase Dashboard</Typography>
                    </div>
                    <div className={classes.iconContainer}>
                      <IconButton
                        onClick={this.mobileMenuOpen}
                        className={classes.iconButton}
                        color="inherit"
                        aria-label="Menu"
                      >
                        <MenuIcon />
                      </IconButton>
                    </div>
                    <div className={classes.tabContainer}>
                      <SwipeableDrawer
                        anchor="right"
                        open={this.state.menuDrawer}
                        onClose={this.mobileMenuClose}
                        onOpen={this.mobileMenuOpen}
                      >
                        <AppBar title="Menu" />
                        <List>
                          {Menu.map((item, index) => (
                            <ListItem
                              component={item.external ? MaterialLink : Link}
                              href={item.external ? item.pathname : null}
                              to={
                                item.external
                                  ? null
                                  : {
                                      pathname: item.pathname,
                                      search: this.props.location.search,
                                    }
                              }
                              button
                              key={item.label}
                            >
                              <ListItemText primary={item.label} />
                            </ListItem>
                          ))}
                        </List>
                      </SwipeableDrawer>
                      <Tabs
                        value={this.current() || this.state.value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChange}
                      >
                        {Menu.map((item, index) => (
                          <Tab
                            key={index}
                            component={item.external ? MaterialLink : Link}
                            href={item.external ? item.pathname : null}
                            to={
                              item.external
                                ? null
                                : {
                                    pathname: item.pathname,
                                    search: this.props.location.search,
                                  }
                            }
                            classes={{ root: classes.tabItem }}
                            label={item.label}
                          />
                        ))}
                      </Tabs>
                    </div>
                  </React.Fragment>
                )}
              </Grid>
            </Grid>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.FilterDrawChange}
              edge="start"
              className={classes.menuButton}
            >
              <FilterListIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          // className={classes.drawer}
          variant="persistent"
          anchor="top"
          open={this.state.filterDrawer}
          // open={open}
          // classes={{
          //   paper: classes.drawerPaper,
          // }}
        >
          <div className={classes.drawerHeader}></div>
          <Grid item xs={12} className={classes.drawGrid}>
              <Filter 
                dimension={['[categories]']}  
                label='Categories'
              />
          </Grid>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Topbar));
