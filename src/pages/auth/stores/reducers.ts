import { SET_USER_INFO_ACTION, SetUserInfoAction } from "./actions";
import { UserInfo, defaultUser } from "../types";

export const userInfo = (state: UserInfo, action: SetUserInfoAction) => {
  if (action.type === SET_USER_INFO_ACTION) {
    return { ...state, ...action.payload };
  }
  return state || defaultUser;
};
