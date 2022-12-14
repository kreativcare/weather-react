import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <App />
      <div className="footer">
        <a
          href="https://github.com/kreativcare/weather-react"
          target="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        on Github by Stefanie Jahn and hosted on{" "}
        <a
          href="https://fabulous-dodol-2de501.netlify.app/"
          target="noopener noreferrer"
        >
          Netlify
        </a>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
