import { configureStore } from "@app/stores/configureStore";
import { createSlice } from "@reduxjs/toolkit";
import { debounce } from "lodash";

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    resetState: () => initialState,
  },
});

export const { startLoading, endLoading } = loadingSlice.actions;

export const loadingReducer = loadingSlice.reducer;

export const closeLoading = debounce(() => {
  configureStore.dispatch(endLoading());
}, 500);
