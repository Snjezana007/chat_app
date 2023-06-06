import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

const script = document.createElement("script");
script.src = "https://cdn.scaledrone.com/scaledrone.min.js";
document.head.appendChild(script);


reportWebVitals();
