export interface DoctorDetail {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  workplace: string;
  address: string;
  avatar: string;
  feePerHour: number;
  cv: string;
  sex: string;
}
export const defaultDoctorDetail: DoctorDetail = {
  id: "",
  fullname: "",
  email: "",
  phone: "",
  workplace: "",
  address: "",
  feePerHour: 0,
  avatar: "",
  cv: "",
  sex: "male",
};

export interface DoctorFilter {
  search?: string;
  address?: string;
  startTime: string;
  endTime: string;
  // fee_per_hour?: {
  //     start_price:number,
  //     end_price:number
  // }
}
