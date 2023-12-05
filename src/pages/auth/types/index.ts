export interface UserInfo {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  address: string;
  sex: string;
  avatar: string;
  isDoctor: boolean;
  workplace?: string;
  credit_card_id?: string;
  cv?: string;
  cvFileName?: string;
  feePerHour?: number;
  description?: string;
  stripeCustomerId?: string;
}

export const defaultUser: UserInfo = {
  id: "",
  fullname: "",
  email: "",
  phone: "",
  address: "",
  sex: "",
  avatar: "",
  isDoctor: true,
  workplace: "",
  credit_card_id: "",
  cvFileName: "",
  cv: "",
  feePerHour: 0,
  description: "",
};

export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginReponse {
  accessToken: string;
}
export const defaultLoginRequest: LoginRequest = {
  email: "",
  password: "",
};
export interface DoctorRequest {
  fullname: string;
  password: string;
  email: string;
  phone: string;
  workplace: string;
  address: string;
}
export const defaultDoctorRequest: DoctorRequest = {
  fullname: "",
  password: "",
  email: "",
  phone: "",
  workplace: "",
  address: "",
};
export interface ClientRequest {
  fullname: string;
  password: string;
  email: string;
  phone: string;
}
export const defaultClientRequest: ClientRequest = {
  fullname: "",
  password: "",
  email: "",
  phone: "",
};

export interface City {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
  districts: Distrist[];
}

export interface Distrist {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
  wards: Ward[];
}
export interface Ward {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
}
