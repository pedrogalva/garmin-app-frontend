import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./Home.tsx";

function RouterComp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComp;
