import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NewApp from "./NewApp";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import { Motor } from "@motor-js/engine"

const qlikConfig = {
  host: "sense-motor.adviseinc.co.uk",
  secure: true,
  port: 19077,
  prefix: "",
  appId: "4359f6e1-0df6-43f8-bcd2-9aa13616f53b",
  redirectFileName: "auth.html",
  qsServerType: "onPrem",
  global: false
};

ReactDOM.render(
  <Motor config={qlikConfig}>
    <App />
  </Motor>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
