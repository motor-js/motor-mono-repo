import React from "react";
import ReactDOM from "react-dom";
import { Motor } from "@motor-js/engine";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { qlikConfig } from "settings";
import Store from "store";

ReactDOM.render(
  // Wrap App inside AppContainer
  <Motor config={qlikConfig}>
    <Store>
      <App />
    </Store>
  </Motor>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
