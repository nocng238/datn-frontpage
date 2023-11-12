import background from "@app/assets/images/bg-loginFinal.jpg";
import { Outlet } from "react-router-dom";
const AuthLayoutFallback = () => {
  return (
    <div
      className="flex flex-col items-center justify-between bg-no-repeat bg-cover bg bg-bottom min-h-screen min-w-full"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayoutFallback;
