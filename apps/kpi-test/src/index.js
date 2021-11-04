import React from "react";
import ReactDOM from "react-dom";
import { Motor } from "@motor-js/engine";

import App from "./App";
import { qlikConfig } from "./config";

ReactDOM.render(
  <>
    <Motor
      config={qlikConfig}
      body={"Please login to get started 🎉 "}
      bodySub={"Try user: demo@motor-js.io & password: MotorDemo!"}
      licenseKey="U2FsdGVkX19vjmrWbhnS5zEHEGj2PxXnorHHCxZ55lg="
    >
      <App />
    </Motor>
  </>,

  document.getElementById("root")
);
