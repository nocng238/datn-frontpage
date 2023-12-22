import { UserInfo, defaultUser } from "@app/pages/auth/types";
import { extend } from "lodash";

export interface CreateAppointmentRequest {
  startTime: string;
  endTime: string;
  doctorId: string;
  note?: string;
}
export enum APPOINTMENT_STATUS {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  CANCEL = "CANCEL",
  FINISHED = "FINISHED",
  REJECTED = "REJECTED",
  ABSENT = "ABSENT",
}
export enum PAYMENT_STATUS {
  PAID = "PAID",
  UNPAID = "UNPAID",
}

export enum PAYMENT_METHOD {
  CASH = "CASH",
  CARD = "CARD",
}
interface AppointmentDetail {
  id: string;
  status: APPOINTMENT_STATUS;
  totalPrice: number;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  reviewId: string;
  note: string;
  doctorNote: string;
  paymentStatus: PAYMENT_STATUS;
  paymentMethod: PAYMENT_METHOD;
  doctorNoteUpdatedAt: string;
  statusUpdatedAt: string;
}

export interface ClientAppointmentDetail extends AppointmentDetail {
  doctor: UserInfo;
}

export interface DoctorAppoinmentDetail extends AppointmentDetail {
  client: UserInfo;
}
export const defaultDoctorAppointmentDetail: DoctorAppoinmentDetail = {
  id: "",
  status: APPOINTMENT_STATUS.ABSENT,
  totalPrice: 0,
  startTime: "",
  endTime: "",
  createdAt: "",
  updatedAt: "",
  reviewId: "",
  client: defaultUser,
  doctorNote: "",
  note: "",
  paymentStatus: PAYMENT_STATUS.PAID,
  paymentMethod: PAYMENT_METHOD.CARD,
  doctorNoteUpdatedAt: "",
  statusUpdatedAt: "",
};

export interface AppointmentFilter {
  search?: string;
  status?: APPOINTMENT_STATUS;
  paymentStatus?: PAYMENT_STATUS;
  limit?: number;
  offset?: number;
}
