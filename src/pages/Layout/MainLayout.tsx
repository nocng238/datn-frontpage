import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import { PATH } from "@app/constants/path";
import Profile from "../Profile/Profile";
import DoctorPage from "../doctor/DoctorPage";
import Appointment from "../appointment/Appoinment";
import Schedule from "../Schedule/Schedule";
import NotFound from "../error/NotFound";
import { useEffect } from "react";
import { useAppSelector } from "@app/hooks/useApp";
import { defaultUser } from "../auth/types";
import { setUserInfoAction } from "../auth/stores/actions";
import { configureStore } from "@app/stores/configureStore";
import { getMe } from "./services/api";

const MainLayout = () => {
  const user = useAppSelector((state) => state.userInfo);
  useEffect(() => {
    getMe().then((res) => {
      configureStore.dispatch(setUserInfoAction(res));
    });
  }, []);
  return (
    <div className="h-100vh min-w-full flex flex-col md:flex-row relative overflow-hidden">
      <Sidebar />
      {/* main layout */}
      <div
        className={`w-[calc(100vw-208px)] flex flex-col flex-1 bg-grayWhite2 overflow-auto p-6 `}
      >
        {/* header */}
        {/* <div className="border-b border-[#E4E4E4]">this is header</div> */}

        {/* main content */}
        {/* <div className="overflow-auto h-screen p-6"> */}
        {/* <Outlet /> */}
        {user.id && (
          <Routes>
            <Route path={PATH.profile} index element={<Profile />} />
            <Route path={PATH.doctor} element={<DoctorPage />} />
            <Route path={PATH.appointment} element={<Appointment />} />
            <Route path={"/schedule"} element={<Schedule />} />
            {/* <Route path="*" navi/> */}
          </Routes>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};
export default MainLayout;
