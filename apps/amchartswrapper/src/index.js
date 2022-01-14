import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Motor } from "@motor-js/engine";
import { qlikConfig } from "./config";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Motor config={qlikConfig}>
    <App />
  </Motor>,
  rootElement
);
