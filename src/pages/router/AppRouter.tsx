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
import Charades from "../games/Charades";
import VerifyEmail from "../auth/VerifyEmail";
import LandingPage from "../Landing/LandingPage";
import PublicDoctors from "../Landing/PublicDoctors";

setupInterceptors();
// const Error404Page = React.lazy(() => import('@app/pages/'));

export const AppRouter: React.FC = () => {
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
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/public/doctors" element={<PublicDoctors />} />
        <Route path="/auth" element={publicLayout}>
          <Route path="login" index element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="confirm-email" element={<ConfirmEmail />} />
          <Route path="verify-email" element={<VerifyEmail />} />
        </Route>
        <Route path={"error/404"} element={<NotFound />} />
        <Route path="/*" element={protectedLayout} />
      </Routes>
    </BrowserRouter>
  );
};
