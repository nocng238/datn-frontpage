import { UserInfo } from "@app/pages/auth/types";
import Axios from "axios";

export const updateProfile = async (userInfo: UserInfo) => {
  const { credit_card_id, ...userInfoWithoutCreditCard } = userInfo;
  const {
    isDoctor,
    feePerHour,
    workplace,
    cv,
    description,
    cvFileName,
    ...clientInfo
  } = userInfoWithoutCreditCard;
  const res = await Axios.put(
    "/user",
    isDoctor ? userInfoWithoutCreditCard : clientInfo
  );
  return res.data;
};

export const updateAvatarMiddleware = async (formData: FormData) => {
  const res = await Axios.post<string>("/upload-avatar", formData);
  return res.data;
};

export const updateCvDoctor = async (formData: FormData) => {
  const res = await Axios.post<string>("/doctor/upload-cv", formData);
  return res.data;
};
