import axios, { AxiosRequestHeaders } from "axios";
import { API_URL } from "@app/config/enviroments";
// import { navigate } from "@app/helpers/navigate";
import { PATH } from "@app/constants/path";

// import { configureStore } from "stores/configureStore"
// import { startLoading, closeLoading } from "reducers/loading"
import { isEmpty } from "lodash";
import { Navigate, useNavigate } from "react-router-dom";
import { configureStore } from "@app/stores/configureStore";
import { closeLoading, startLoading } from "@app/reducers/loading";
export const setupInterceptors = () => {
  // const navigate = useNavigate();
  // Add a request interceptor
  axios.interceptors.request.use(
    (config) => {
      config.baseURL = API_URL;
      console.log("API_URL : ", API_URL);

      const token = localStorage.getItem("access_token") || "";
      const tokenType = localStorage.getItem("token_type") || "Bearer";
      if (token) {
        config.headers = {
          Authorization: `${tokenType} ${token}`,
        } as AxiosRequestHeaders;
      }

      //   if (
      //     // update specification api
      //     !config.url?.startsWith("/api/specification/history/") &&
      //     !config.url?.startsWith("/api/user/current-active") &&
      //     !config.url?.startsWith("/api/category/get-user-categories")
      //   ) {
      //     if (
      //       config.url?.startsWith("/api/miscellaneous/upload/") ||
      //       config.url?.startsWith("/api/firmware/upload/") ||
      //       config.url?.startsWith("/api/software/upload/") ||
      //       config.url?.startsWith("/api/mechanical/upload/")
      //     ) {
      //       if (isEmpty(config.data.files)) {
      //         return config;
      //       }
      //     }
      //     if (
      //       config.url?.startsWith("/api/conversation/notes/") &&
      //       !config.url?.endsWith("upload-attachments")
      //     ) {
      //       return config;
      //     }
      //     configureStore.dispatch(startLoading());C
      //   }
      configureStore.dispatch(startLoading());

      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  // Add a response interceptor
  axios.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      //   if (
      //     // update specification api
      //     !response.config.url?.startsWith("/api/specification/history/") &&
      //     !response.config.url?.startsWith("/api/user/current-active") &&
      //     !response.config.url?.startsWith("/api/category/get-user-categories")
      //   ) {
      //     if (
      //       response.config.url?.startsWith("/api/miscellaneous/upload/") ||
      //       response.config.url?.startsWith("/api/firmware/upload/") ||
      //       response.config.url?.startsWith("/api/software/upload/") ||
      //       response.config.url?.startsWith("/api/mechanical/upload/")
      //     ) {
      //       if (isEmpty(response.config.data.files)) {
      //         return response;
      //       }
      //     }
      //     if (
      //       response.config.url?.startsWith("/api/conversation/notes/") &&
      //       !response.config.url?.endsWith("upload-attachments")
      //     )
      //       return response;
      //     // closeLoading();
      //   }
      closeLoading();

      return response;
    },
    (error) => {
      <Navigate to={PATH.notFound} />;

      closeLoading();
      // "Unauthorized"
      if (error.response.status === 401) {
        localStorage.removeItem("access_token");
        return;
      }
      // Forbidden denied redirect to 404 page
      if (error.response.status === 403) {
        <Navigate to={PATH.notFound} replace />;
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
};

export const instanceExternalUrl = axios.create({
  baseURL: "",
});
