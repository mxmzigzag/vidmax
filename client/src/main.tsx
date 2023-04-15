import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthProvider from "./context/auth.context";
import { ApolloWrapper } from "./apollo/ApolloWrapper";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Schedule from "./pages/Schedule";
import Movies from "./pages/Movies";
import News from "./pages/News";
import NotFound from "./pages/404";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <ApolloWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ApolloWrapper>
  </AuthProvider>
);
