export interface LoginRequest {
  email: string;
  password: string;
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
}
export const defaultDoctorRequest: DoctorRequest = {
  fullname: "",
  password: "",
  email: "",
  phone: "",
  workplace: "",
};
export interface ClientRequest {
  fullname: string;
  password: string;
  email: string;
  phone: string;
}
export const defaultUser: ClientRequest = {
  fullname: "",
  password: "",
  email: "",
  phone: "",
};
