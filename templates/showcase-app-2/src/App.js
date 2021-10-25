import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import "./App.css";
import Routes from "./routes";
import { red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    secondary: {
      main: red[900],
    },
    primary: {
      main: red[400],
    },
    chart: [red[900], red[400]],
    kpi: [red[400], red[900]],
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', "sans-serif"].join(","),
    kpi: {
      title: {
        fontSize: "16px",
        fontWeight: 600,
      },
      subtitle: {
        fontSize: "16px",
        color: "rgba(0, 0, 0, 0.54)",
      },
    },
  },
  kpi: {
    title: {
      offsetX: 0,
    },
    subtitle: {
      offsetX: 0,
      floating: false,
    },
  },
  // spacing:
});

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
