import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import "./App.css";
import Routes from "./routes";
import { red } from "@material-ui/core/colors";
import { qlikConfig } from "./config";
import { Motor } from "@motor-js/engine";

const theme = createTheme({
  palette: {
    secondary: {
      main: red[900],
    },
    primary: {
      main: red[400],
    },
    chart: {
      0: red[900],
      1: red[400],
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', "sans-serif"].join(","),
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Motor
            config={qlikConfig}
          >
          <Routes />
          </Motor>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
