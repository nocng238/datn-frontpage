import React from "react";
import { Navigate } from "react-router-dom";
// import { useAppSelector } from '@app/hooks/reduxHooks'
// import { WithChildrenProps } from '@app/types/generalTypes'
import { isLogin } from "@app/config/enviroments";
import { WithChildrenProps } from "@app/types";

const PublicRoute: React.FC<WithChildrenProps> = ({ children }) => {
  return !isLogin() ? <>{children}</> : <Navigate to="/" replace />;
};

export default PublicRoute;
