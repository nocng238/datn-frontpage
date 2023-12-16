import { UserInfo, defaultUser } from "@app/pages/auth/types";
export interface ReviewDetail {
  appointmentId: string;
  client: UserInfo;
  review: {
    createdAt: string;
    rating: number;
    feedback: string;
  };
}
export const reviewDefault: ReviewDetail = {
  appointmentId: "",
  client: defaultUser,
  review: {
    createdAt: "",
    rating: 1,
    feedback: "",
  },
};
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
  averageRating: number;

  reviews: ReviewDetail[];
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
  averageRating: 0,
  reviews: [],
};

export interface DoctorFilter {
  search?: string;
  address?: string;
  startTime?: string;
  endTime?: string;
  // fee_per_hour?: {
  //     start_price:number,
  //     end_price:number
  // }
}
