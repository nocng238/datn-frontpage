import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./pages/router/AppRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <App /> */}
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
