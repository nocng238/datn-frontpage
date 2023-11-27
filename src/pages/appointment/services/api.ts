import axios from "axios";
import { ClientAppointMentDetail, CreateAppointmentRequest } from "../types";
import { Pagination } from "@app/types";

export const createAppointmentMiddleware = async (
  appointmentInfo: CreateAppointmentRequest
) => {
  return axios.post("/appointment", appointmentInfo);
};
export const getListAppointment = async (filter?: any) => {
  const res = await axios.get<{
    items: ClientAppointMentDetail[];
    meta: Pagination;
  }>("/appointment");
  return res.data;
};
