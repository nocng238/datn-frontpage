import CustomIcon from "@app/components/CustomIcon/CustomIcon";
import DoctorIcon from "@app/assets/icons/icon-doctor.svg";
import { PATH } from "@app/constants/path";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
export const MENU = {
  DASHBOARD: {
    title: "Dashboard",
    path: "dashboard",
    icon: <PresentationChartBarIcon className="h-5 w-5" />,
  },
  SCHEDULE: {
    title: "Schedule",
    path: "/schedule",
    icon: <ClockIcon className="h-5 w-5" />,
  },
  INBOX: {
    title: "Inbox",
    path: "/inbox",
    icon: <InboxIcon className="h-5 w-5" />,
  },
  DOCTOR: {
    title: "Doctor",
    path: "/doctor",
    icon: <CustomIcon src={DoctorIcon} />,
  },
  APPOINMENT: {
    title: "Appoinment",
    path: "/appointment",
    icon: <CalendarDaysIcon className="h-5 w-5" />,
  },
  PROFILE: {
    title: "Profile",
    path: PATH.profile,
    icon: <UserCircleIcon className="h-5 w-5" />,
  },
  SETTING: {
    title: "Settings",
    path: "/settings",
    icon: <Cog6ToothIcon className="h-5 w-5" />,
  },
};
