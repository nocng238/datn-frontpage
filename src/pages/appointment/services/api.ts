import axios from "axios";
import {
  AppointmentFilter,
  ClientAppointMentDetail,
  CreateAppointmentRequest,
  DoctorAppoinmentDetail,
} from "../types";
import { Pagination } from "@app/types";

export const createAppointmentMiddleware = async (
  appointmentInfo: CreateAppointmentRequest
) => {
  const res = await axios.post<ClientAppointMentDetail>(
    "/appointment",
    appointmentInfo
  );
  return res.data;
};
export const getListAppointmentForClient = async (
  filter?: AppointmentFilter
) => {
  const res = await axios.get<{
    items: ClientAppointMentDetail[];
    meta: Pagination;
  }>("/appointment", {
    params: {
      ...filter,
    },
  });
  return res.data;
};

export const getListAppointmentForDoctor = async (
  filter?: AppointmentFilter
) => {
  const res = await axios.get<{
    items: DoctorAppoinmentDetail[];
    meta: Pagination;
  }>("/appointment", {
    params: {
      ...filter,
    },
  });
  return res.data;
};

export const approveAppointment = async (appointmentId: string) => {
  const res = await axios.put(`/appointment/approve/${appointmentId}`);
  return res.data;
};

export const rejectAppointmentMiddleware = async (
  appointmentId: string,
  reason: string
) => {
  const res = await axios.put(`/appointment/reject/${appointmentId}`, {
    reason,
  });
  return res.data;
};

export const cancelAppointmentByDoctorMiddleware = async (
  appointmentId: string,
  reason: string
) => {
  const res = await axios.put(`/appointment/cancel/${appointmentId}`, {
    reason,
  });
  return res.data;
};
export const finishAppointmentByDoctorMiddleware = async (
  appointmentId: string
) => {
  const res = await axios.put(`/appointment/finish/${appointmentId}`);
  return res.data;
};
