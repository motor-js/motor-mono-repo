import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import NextApp from "./NextApp";

import { Motor } from "@motor-js/engine";
import { config } from "./config/config.js";

ReactDOM.render(
  // Wrap App inside AppContainer
  <Motor config={config}>
    <NextApp />
  </Motor>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
