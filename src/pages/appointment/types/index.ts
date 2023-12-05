import { UserInfo } from "@app/pages/auth/types";

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
  reviewId: string;
  doctor: UserInfo;
  note: string;
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
  reviewId: string;
  client: UserInfo;
  note: string;
  paymentStatus: PAYMENT_STATUS;
}

export interface AppointmentFilter {
  search?: string;
  status?: APPOINTMENT_STATUS;
  paymentStatus?: PAYMENT_STATUS;
  limit?: number;
  offset?: number;
}
