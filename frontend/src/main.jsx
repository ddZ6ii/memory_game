// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeContextProvider } from "./contexts/ThemeContext";

import App from "./App";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ThemeContextProvider>
      <App />
      <ToastContainer />
    </ThemeContextProvider>
  </Router>
);
