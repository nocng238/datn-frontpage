import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Avatar,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import DoctorIcon from "@app/assets/icons/icon-doctor.svg";
import Logo from "@app/assets/images/logo.jpg";
import { PATH } from "@app/constants/path";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { avatar } from "@app/constants/data";
import CustomIcon from "@app/components/CustomIcon/CustomIcon";
const MENU = [
  {
    title: "Dashboard",
    path: "dashboard",
    icon: <PresentationChartBarIcon className="h-5 w-5" />,
  },
  {
    title: "Schedule",
    path: "/schedule",
    icon: <ShoppingBagIcon className="h-5 w-5" />,
  },
  {
    title: "Inbox",
    path: "/inbox",
    icon: <InboxIcon className="h-5 w-5" />,
  },
  {
    title: "Doctor",
    path: "/doctor",
    icon: <CustomIcon src={DoctorIcon} />,
  },
  {
    title: "Appoinment",
    path: "/appointment",
    icon: <CalendarDaysIcon className="h-5 w-5" />,
  },
  {
    title: "Profile",
    path: PATH.profile,
    icon: <UserCircleIcon className="h-5 w-5" />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Cog6ToothIcon className="h-5 w-5" />,
  },
];
export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const onLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };
  return (
    <div className="h-[calc(100vh)] w-full flex flex-col justify-between max-w-[13rem] py-4 shadow-xl shadow-blue-gray-900/8 bg-white">
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
        {MENU.map((item) => {
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
          <Avatar src={avatar} alt="avatar" size="sm" />
          <Typography variant="h6">Ngoc Nguyen</Typography>
        </div>
      </List>
    </div>
  );
}
