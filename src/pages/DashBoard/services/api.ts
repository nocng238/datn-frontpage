import { ReviewDetail } from "@app/pages/doctor/types";
import axios from "axios";

export const getDoctorReviews = async (): Promise<ReviewDetail[]> => {
  const res = await axios.get("/review");
  const data: ReviewDetail[] = res.data.map((item: any) => {
    const { id, client, ...rest } = item;
    return {
      appointmentId: id,
      client,
      review: rest,
    };
  });
  return data;
};

export const getAppointmentDataChart = async (month: number = 12) => {
  const res = await axios.get(`/appointment/chart/${month}`);
  return res.data;
};

export const getRevenueDataChart = async () => {
  const res = await axios.get("/doctor/chart/revenue");
  return res.data.map((item: any) => item.revenue);
};
