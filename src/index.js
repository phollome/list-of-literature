import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const dataId = parseInt(process.env.REACT_APP_DATA_ID);
const mail = process.env.REACT_APP_MAIL;
const imprint = process.env.REACT_APP_IMPRINT;

ReactDOM.render(
  <React.StrictMode>
    <App dataId={dataId} mail={mail} imprint={imprint} />
  </React.StrictMode>,
  document.getElementById("root")
);
