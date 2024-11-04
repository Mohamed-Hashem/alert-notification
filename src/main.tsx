import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom";
import axe from "@axe-core/react";
import "./index.css";
import App from "./App.tsx";

axe(React, ReactDOM, 1000);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
