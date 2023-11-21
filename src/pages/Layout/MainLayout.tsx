import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="h-100vh min-w-full flex flex-col md:flex-row relative overflow-hidden">
      <Sidebar />
      {/* main layout */}
      <div className={`flex flex-col flex-1 bg-grayWhite2 overflow-auto`}>
        {/* header */}
        {/* <div className="border-b border-[#E4E4E4]">this is header</div> */}

        {/* main content */}
        <div className="overflow-auto max-h-screen p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
