import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AuthProvider from "./context/auth.context";
import { ApolloWrapper } from "./apollo/ApolloWrapper";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Schedule from "./pages/Schedule";
import Movies from "./pages/Movies";
import News from "./pages/News";
import Cabinet from "./pages/Cabinet";
import NotFound from "./pages/404";
import Parse from "./pages/Parse";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute isAuthenticated={false}>
              <Signup />
            </ProtectedRoute>
          }
        />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/news" element={<News />} />
        <Route
          path="/cabinet/:userId"
          element={
            <ProtectedRoute isAuthenticated={true}>
              <Cabinet />
            </ProtectedRoute>
          }
        />
        <Route path="/parse" element={<Parse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloWrapper>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ApolloWrapper>
);
