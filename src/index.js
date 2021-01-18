import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const dataId = parseInt(process.env.REACT_APP_DATA_ID);
const mail = process.env.REACT_APP_MAIL;

ReactDOM.render(
  <React.StrictMode>
    <App dataId={dataId} mail={mail} />
  </React.StrictMode>,
  document.getElementById("root")
);
