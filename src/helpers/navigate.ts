import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
export const pushTo = (path: string, params?: {}, props?: {}, query?: {}) => {
  let pathWithParams = path;
  const navigate = useNavigate();
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      pathWithParams = pathWithParams.replace(":" + key, value as string);
    }
  }
  navigate(pathWithParams, {
    state: props,
  });
};
