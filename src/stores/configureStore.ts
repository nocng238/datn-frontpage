import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoadingState, loadingReducer } from "../reducers/loading";
import { UserInfo } from "@app/pages/auth/types";
import * as reducers from "./reducers";
const rootReducer = combineReducers({
  loading: loadingReducer,
  ...reducers,
});

export const configureStore = createStore(rootReducer);

export interface RootState {
  loading: LoadingState;
  userInfo: UserInfo;
}
export type AppDispatch = typeof configureStore.dispatch;
