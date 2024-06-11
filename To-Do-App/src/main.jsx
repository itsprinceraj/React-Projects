import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// including bootstrap css files

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
