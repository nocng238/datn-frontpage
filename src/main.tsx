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

const CloseButton = ({ closeToast }) => (
  <XCircleIcon onClick={closeToast} className="h-5 w-5 mt-2" />
);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
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
    </ThemeProvider>
  </React.StrictMode>
);
