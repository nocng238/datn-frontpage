import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import { setupInterceptors } from "./services/axios";
import React, { useEffect } from "react";
import { PATH } from "../../constants/path";
import NotFound from "../error/NotFound";
import RequireAuth from "./RequireAuth";
import App from "@app/App";
import AuthLayoutFallback from "../auth/AuthLayoutFallback";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import ForgotPassword from "../auth/ForgotPassword";
import MainLayout from "../Layout/MainLayout";
import Profile from "../Profile/Profile";
import DoctorPage from "../doctor/DoctorPage";

// setupInterceptors();
// const Error404Page = React.lazy(() => import('@app/pages/'));

export const AppRouter: React.FC = () => {
  useEffect(() => {
    localStorage.setItem("access_token", "aasd");
  }, []);
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<App />} />
        <Route path="/auth" element={<AuthLayoutFallback />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="/" element={protectedLayout}>
          <Route path={PATH.profile} element={<Profile />} />
          <Route path={PATH.doctor} element={<DoctorPage />} />
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
