import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";
import { PowerIcon } from "@heroicons/react/24/solid";
import DoctorIcon from "@app/assets/icons/icon-doctor.svg";
import Logo from "@app/assets/images/logo.jpg";
import { PATH } from "@app/constants/path";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { avatar } from "@app/constants/data";
import { MENU } from "./constant/sidebarConstant";
import { useAppSelector } from "@app/hooks/useApp";
const CLIENT_MENU = [MENU.APPOINMENT, MENU.DOCTOR, MENU.PROFILE, MENU.SETTING];
const DOCTOR_MENU = [
  MENU.DASHBOARD,
  MENU.SCHEDULE,
  MENU.APPOINMENT,
  MENU.INBOX,
  MENU.PROFILE,
  MENU.SETTING,
];
export default function Sidebar() {
  const user = useAppSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const location = useLocation();
  const USER_MENU = user.id ? (user?.isDoctor ? DOCTOR_MENU : CLIENT_MENU) : [];
  const onLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };
  return (
    <div className="h-[calc(100vh)]  flex flex-col justify-between max-w-[13rem] py-4 shadow-xl shadow-blue-gray-900/8 bg-white">
      <div>
        <div className="flex flex-col items-center justify-center mb-2 px-4">
          <img
            src={Logo}
            alt=""
            className="w-24 h-24 rounded object-cover cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <hr className="my-2 border-blue-gray-50" />
      </div>
      <List className="mb-[10rem] min-w-[11rem]">
        {USER_MENU.map((item) => {
          return (
            <ListItem
              key={item.title}
              className={`
              ${
                location.pathname.startsWith(item.path)
                  ? "bg-gray-04"
                  : "hover:bg-gray-04 focus:bg-gray-04"
              }
              `}
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemPrefix>{item.icon}</ListItemPrefix>
              {item.title}
            </ListItem>
          );
        })}
      </List>

      <List className="min-w-[1rem]">
        <ListItem className="hover:bg-gray-04" onClick={onLogout}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
        <div className="flex items-center gap-4 ml-1">
          <Avatar
            src={user.avatar}
            alt="avatar"
            size="sm"
            className="object-cover object-center"
          />
          <Typography variant="h6">{user.fullname}</Typography>
        </div>
      </List>
    </div>
  );
}
