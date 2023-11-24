import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoadingState, loadingReducer } from "../reducers/loading";

const rootReducer = combineReducers({
  loading: loadingReducer,
});

export const configureStore = createStore(rootReducer);

export interface RootState {
  loading: LoadingState;
}
export type AppDispatch = typeof configureStore.dispatch;
