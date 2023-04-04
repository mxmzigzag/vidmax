import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Schedule from "./pages/Schedule";
import Movies from "./pages/Movies";
import News from "./pages/News";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/news" element={<News />} />
    </Routes>
  </BrowserRouter>
);
