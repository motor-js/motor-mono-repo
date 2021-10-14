import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { qlikConfig } from "./config";
import { Motor } from "@motor-js/engine";

ReactDOM.render(
  <Motor
    config={qlikConfig}
    body={"Please login to get started 🎉 "}
    bodySub={"Try user: demo@motor-js.io & password: MotorDemo!"}
    licenseKey="U2FsdGVkX19vjmrWbhnS5zEHEGj2PxXnorHHCxZ55lg="
  >
    <App />
  </Motor>,
  document.getElementById("root")
);
