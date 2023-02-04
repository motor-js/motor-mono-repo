import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Motor } from "@motor-js/engine"
import { ThemeProvider, defaultTheme } from "@motor-js/theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
    <Motor
      config={{
        host: "x9m2ebuxmcerh4i.eu.qlikcloud.com",
        secure: true,
        port: null,
        prefix: "",
        appId: "dcbd66b8-c730-4b63-93cb-6c5ddf3374ef",
        webIntId: "zNnemtlMedhloqXVsj_gZULkSExdpUzj",
        qcs: true,
      }}
    >

      <App />
    </Motor>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();