import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import { Routes, Route, BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
