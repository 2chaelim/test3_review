import React from "react";
import ReactDOM from "react-dom/client";
import "./css/my_reset.css";
import "./css/index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/test3_review/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
