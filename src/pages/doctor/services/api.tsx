import Axios from "axios";
import { DoctorDetail, DoctorFilter } from "../types";
import { Pagination } from "@app/types";

export const getDoctorsMiddleware = async (filter: DoctorFilter) => {
  const res = await Axios.get<{ items: DoctorDetail[]; meta: Pagination }>(
    "/doctor",
    { params: filter }
  );
  return res.data;
};

export const checkDoctorAvailable = async (
  doctorId: string,
  startTime: string,
  endTime: string
) => {
  try {
    const res = await Axios.post(`/doctor/is-doctor-free/${doctorId}`, {
      endTime,
      startTime,
    });
    return res.data;
  } catch (error) {
    console.log("error: ", error);
    return false;
  }
};
