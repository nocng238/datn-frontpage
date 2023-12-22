import { VIETNAM_PROVINCES_API } from "@app/config/enviroments";
import Axios from "axios";
import {
  ClientRequest,
  DoctorRequest,
  LoginReponse,
  LoginRequest,
} from "../types";

export const getProvinces = async () => {
  const res = await Axios.get(VIETNAM_PROVINCES_API);
  return res;
};

export const clientSignUpMiddleware = async (request: ClientRequest) => {
  const res = await Axios.post("/client/register", request);
  return res?.data;
};

export const loginMiddleware = async (loginRequest: LoginRequest) => {
  const res = await Axios.post("/auth/login", loginRequest);
  return res.data;
};

export const doctorSignUpMiddleware = async (request: DoctorRequest) => {
  return Axios.post("/doctor/register", request);
};

export const verifyEmail = async (email: string, token: string) => {
  return Axios.post("/verify-email", { email, token });
};

export const forgotPassword = async (email: string) => {
  return Axios.post("/forget-password", { email });
};

export const resetPassword = async (
  email: string,
  code: string,
  newPassword: string
) => {
  return Axios.put("/reset-password", { email, code, newPassword });
};
