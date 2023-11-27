import { UserInfo } from "@app/pages/auth/types";
import Axios from "axios";

export const getMe = async () => {
  const res = await Axios.get<UserInfo>("/user/me");
  return res.data;
};
