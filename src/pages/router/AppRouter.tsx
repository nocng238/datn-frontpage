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
import Appointment from "../appointment/Appoinment";
import Schedule from "../Schedule/Schedule";
import ConfirmEmail from "../auth/ConfirmEmail";
import { setupInterceptors } from "@app/services/axios";
import PublicRoute from "./PublicRoute";

setupInterceptors();
// const Error404Page = React.lazy(() => import('@app/pages/'));

export const AppRouter: React.FC = () => {
  // useEffect(() => {
  //   localStorage.setItem("access_token", "aasd");
  // }, []);
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );
  const publicLayout = (
    <PublicRoute>
      <AuthLayoutFallback />
    </PublicRoute>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={publicLayout}>
          <Route path="login" index element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="confirm-email" element={<ConfirmEmail />} />
        </Route>
        <Route path="/landing" element={<App />} />

        <Route path={"error/404"} element={<NotFound />} />

        <Route path="/*" element={protectedLayout} />
        {/* <Route path={PATH.profile} element={<Profile />} />
          <Route path={PATH.doctor} element={<DoctorPage />} />
          <Route path={PATH.appointment} element={<Appointment />} />
          <Route path={"/schedule"} element={<Schedule />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
