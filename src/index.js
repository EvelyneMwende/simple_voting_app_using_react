import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './Form'
import PresidentView from './PresidentView'
import SpokesPersonView from './SpokesPersonView'
import VicePresidentView from './VicePresidentView'
import SecretaryView from './secretaryView'
import DeputySecretaryView from './DepSecretaryView'
import TreasurerView from './Treasurer'

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <TreasurerView />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
