import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NewApp from "./NewApp";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";


ReactDOM.render(
 /*} <Motor //engine={engine}
    config={{
      host: "motor.eu.qlikcloud.com", // Qlik Sense Host
      secure: true, // Whether your host is secure of not (HTTPS / HTTP)
      port: null, // Qlik Sense site port
      prefix: "", // Prefix
      appId: "bc5878d0-2d3c-49ad-80cb-c35e5fa5cbe9", // Application Id
      webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i", // Web Integration Id, for connection to Qlik cloud
      qcs: true, // whether you are connecting to a Qlik Cloud site or not
    }}
    licenseKey="U2FsdGVkX19vjmrWbhnS5zEHEGj2PxXnorHHCxZ55lg="
    theme={{ 
      filter: {
        size: {
          medium: {
            fontSize: '14px',
          }
        }
      }
    }}
  > 
</Motor>
*/
  <App />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
