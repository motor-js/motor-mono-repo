import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Motor } from "@motor-js/engine";

ReactDOM.render(
  <React.StrictMode>
    <Motor
      config={{
        //Enter your app config here..
        host: 'juno-ui.eu.qlikcloud.com',
        secure: true,
        port: null,
        prefix: '',
        appId: '79b4f41e-f680-423d-a088-1ae81d1bc8fc',
        webIntId: '4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i',
        qcs: true,
      }}>
      <App />
    </Motor>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
