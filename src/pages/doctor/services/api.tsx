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
