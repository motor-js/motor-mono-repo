import React from "react";
import ReactDOM from "react-dom";
import { Motor } from "@motor-js/engine";

import reportWebVitals from "./reportWebVitals";
import NextApp from "./NextApp";
import { qlikConfig, appSettings } from "settings";
import Store from "store";

ReactDOM.render(

  <Motor 
    config={qlikConfig}
    logo={appSettings.logo}
    logoHeight={appSettings.logoHeight}
    logoWidth={appSettings.logoWidth}
    buttonColor={appSettings.buttonColor}
    buttonFontColor={appSettings.buttonFontColor}
    body={appSettings.body}
    bodySub={appSettings.bodySub}
    loginfontFamily={appSettings.loginfontFamily}
    NotConnectedheader={appSettings.NotConnectedheader}
    NotConnectedBody={appSettings.NotConnectedBody}
    licenseKey="U2FsdGVkX19vjmrWbhnS5zEHEGj2PxXnorHHCxZ55lg="
  >
    <Store>
      <NextApp />
    </Store>
  </Motor>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
