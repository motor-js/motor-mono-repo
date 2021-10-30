import React from "react";
import ReactDOM from "react-dom";
import { Motor } from "@motor-js/engine";
import { ThemeProvider, theme } from "./styled";
import { GlobalStyle } from "./css";
import App from "./App";
import { qlikConfig } from "./config";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Motor
      config={qlikConfig}
      body={"Please login to get started 🎉 "}
      bodySub={"Try user: demo@motor-js.io & password: MotorDemo!"}
      licenseKey="U2FsdGVkX19vjmrWbhnS5zEHEGj2PxXnorHHCxZ55lg="
    >
      <App />
    </Motor>
  </ThemeProvider>,
  document.getElementById("root")
);
