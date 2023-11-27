import { UserInfo } from "@app/pages/auth/types";

export interface CreateAppointmentRequest {
  startTime: string;
  endTime: string;
  doctorId: string;
  client_note?: string;
}
export enum APPOINTMENT_STATUS {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  CANCEL = "CANCEL",
  FINISHED = "FINISHED",
}
export enum PAYMENT_STATUS {
  PAID = "PAID",
  UNPAID = "UNPAID",
}

export interface ClientAppointMentDetail {
  id: string;
  status: APPOINTMENT_STATUS;
  totalPrice: number;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  reviewId: null;
  doctor: UserInfo;
  note: null;
  paymentStatus: PAYMENT_STATUS;
}

export interface DoctorAppoinmentDetail {
  id: string;
  status: APPOINTMENT_STATUS;
  totalPrice: number;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  reviewId: null;
  client: UserInfo;
  note: null;
  paymentStatus: PAYMENT_STATUS;
}
