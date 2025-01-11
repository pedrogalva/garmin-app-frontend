import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterComp from "./routes/router.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterComp />
  </React.StrictMode>
);
