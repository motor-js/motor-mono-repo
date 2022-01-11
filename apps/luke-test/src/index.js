import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Motor } from "@motor-js/engine"
import { ThemeProvider, defaultTheme } from "@motor-js/theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
    <Motor
      config={{
        host: "motor.eu.qlikcloud.com",
        secure: true,
        port: null,
        prefix: "",
        appId: "18f7a1f3-4605-4c59-8d01-849119d82621",
        webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
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