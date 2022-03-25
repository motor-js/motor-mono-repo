import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Motor, MotorTicketStore } from '@motor-js/engine'
import './index.css';
import { qlikConfig } from './config';

ReactDOM.render(
  <React.StrictMode>
    <MotorTicketStore>
      <Motor config={qlikConfig}>
        <App />
      </Motor>
    </MotorTicketStore>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
