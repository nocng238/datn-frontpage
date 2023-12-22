import axios from "axios";
import {
  AppointmentFilter,
  ClientAppointmentDetail,
  CreateAppointmentRequest,
  DoctorAppoinmentDetail,
  PAYMENT_METHOD,
} from "../types";
import { Pagination } from "@app/types";

export const createAppointmentMiddleware = async (
  appointmentInfo: CreateAppointmentRequest
) => {
  const res = await axios.post<ClientAppointmentDetail>(
    "/appointment",
    appointmentInfo
  );
  return res.data;
};
export const getListAppointmentForClient = async (
  filter?: AppointmentFilter
) => {
  const res = await axios.get<{
    items: ClientAppointmentDetail[];
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

export const markAbsentAppointmentByDoctorMiddleware = async (
  appointmentId: string,
  currentTime: string
) => {
  const res = await axios.put(`/appointment/absent/${appointmentId}`, {
    currentTime,
  });
  return res.data;
};

export const paymentMiddleware = async (
  paymentMethod: PAYMENT_METHOD,
  appointmentId: string
) => {
  const res = await axios.post("/payment", { appointmentId, paymentMethod });
  return res.data;
};

export const sendFeedbackMiddleware = async (
  appointmentId: string,
  feedback: string,
  rating: number
) => {
  const res = await axios.post("/review", { appointmentId, feedback, rating });
  return res.data;
};

export const editDoctorNoteMiddleware = async (
  appointmentId: string,
  note: string
) => {
  const res = await axios.put(`/appointment/doctor-note/${appointmentId}`, {
    note,
  });
  return res.data;
};
