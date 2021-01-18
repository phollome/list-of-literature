import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const dataId = parseInt(process.env.REACT_APP_DATA_ID);

ReactDOM.render(
  <React.StrictMode>
    <App dataId={dataId} />
  </React.StrictMode>,
  document.getElementById("root")
);
