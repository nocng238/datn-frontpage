/* eslint-disable @typescript-eslint/no-redeclare */

import { Action } from "redux";
import { UserInfo } from "../types";

export const SET_USER_INFO_ACTION = "SET_USER_INFO_ACTION";

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SET_USER_INFO_ACTION = typeof SET_USER_INFO_ACTION;

export interface SetUserInfoAction extends Action<SET_USER_INFO_ACTION> {
  payload: Partial<UserInfo>;
}

export const setUserInfoAction = (
  payload: Partial<UserInfo>
): SetUserInfoAction => {
  return {
    type: SET_USER_INFO_ACTION,
    payload,
  };
};
