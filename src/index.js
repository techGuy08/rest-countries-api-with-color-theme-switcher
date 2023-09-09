import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <div className="attribution">
      Challenge by&nbsp;
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/techGuy08" target="_blank" rel="noreferrer">
        techGuy08
      </a>
      .
    </div>
  </React.StrictMode>
);
