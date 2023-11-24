import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./pages/router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { XCircleIcon } from "@heroicons/react/24/solid";
import IconCheckSuccess from "@app/assets/icons/icon-check-success.svg";
import { registerLicense } from "@syncfusion/ej2-base";
import { Provider } from "react-redux";
import { configureStore } from "@app/stores/configureStore";
import Loading from "./components/Loading";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1FpRGtGfV5yd0VPalhXTndWUj0eQnxTdEZiWH5WcnVRQGJcUUd0WQ=="
);
const CloseButton = ({ closeToast }) => (
  <XCircleIcon onClick={closeToast} className="h-5 w-5 mt-2" />
);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={configureStore}>
      {/* <App /> */}
      <AppRouter />
      <ToastContainer
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        bodyClassName="toastBody"
        pauseOnFocusLoss
        draggable
        pauseOnHover
        position="bottom-right"
        closeButton={CloseButton}
      />
      <Loading />
    </Provider>
  </React.StrictMode>
);
