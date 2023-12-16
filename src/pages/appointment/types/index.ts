import { UserInfo, defaultUser } from "@app/pages/auth/types";

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

export interface ClientAppointmentDetail {
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
  paymentMethod: PAYMENT_METHOD;
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
  paymentMethod: PAYMENT_METHOD;
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
  note: "",
  paymentStatus: PAYMENT_STATUS.PAID,
  paymentMethod: PAYMENT_METHOD.CARD,
};

export interface AppointmentFilter {
  search?: string;
  status?: APPOINTMENT_STATUS;
  paymentStatus?: PAYMENT_STATUS;
  limit?: number;
  offset?: number;
}
