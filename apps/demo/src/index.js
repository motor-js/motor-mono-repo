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

export const qlikSAASConfig = {
  host: "motor.eu.qlikcloud.com", // Qlik Sense Host
  secure: true, // Whether your host is secure of not (HTTPS / HTTP)
  port: null, // Qlik Sense site port
  prefix: "", // Prefix
  appId: "f3c7c25f-90da-4286-ac1d-ca9885d89605", // Application Id
  webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i", // Web Integration Id, for connection to Qlik cloud
  //qcs: true, // whether you are connecting to a Qlik Cloud site or not
  qsServerType: "cloud",
};


ReactDOM.render(
  <Motor config={qlikSAASConfig}>
    <App />
  </Motor>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
