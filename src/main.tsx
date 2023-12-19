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
import { EJ2_LICENSE } from "@app/config/enviroments";

registerLicense(EJ2_LICENSE);
const CloseButton = ({ closeToast }: any) => (
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
