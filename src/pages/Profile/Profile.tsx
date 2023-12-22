import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { PROFILE_TAB } from "./types";
import { useString } from "@app/helpers/hooks";
import ProfileDetail from "./ProfileDetail";
import Settings from "./Settings";
import AvatarUpdateIcon from "@app/assets/icons/icon-update-avatar.svg";
import { useAppSelector } from "@app/hooks/useApp";
import { updateAvatarMiddleware } from "./services/api";
import { configureStore } from "@app/stores/configureStore";
import { setUserInfoAction } from "../auth/stores/actions";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { MESSAGE } from "@app/constants/message";
import { lazy } from "react";
import PaymentSetting from "./PaymentSetting";
const tabs = [
  {
    label: "Personal Info",
    value: "info",
    icon: <UserCircleIcon className="w-8 h-8" />,
  },
  {
    label: "Security Settings",
    value: "setting",
    icon: <Cog6ToothIcon className="w-8 h-8" />,
  },
  {
    label: "Payments",
    value: "payments",
    icon: <CurrencyDollarIcon className="w-8 h-8" />,
  },
];
const Profile = () => {
  const user = useAppSelector((state) => state.userInfo);
  const tab = useString(PROFILE_TAB.INFO);

  const renderTabContent = () => {
    if (tab.value === PROFILE_TAB.INFO) {
      return <ProfileDetail />;
    }
    if (tab.value === PROFILE_TAB.SETTING) {
      return <Settings />;
    }
    return <PaymentSetting user={user} />;
  };
  const handleChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (event.target.files) {
      formData.append("file", event.target.files[0]);
    }
    updateAvatarMiddleware(formData)
      .then((res) => {
        configureStore.dispatch(setUserInfoAction({ avatar: res }));
        toast(
          <LabelNotification
            type="success"
            message="Update avatar successfully."
          />
        );
      })
      .catch((error) => {
        toast(
          <LabelNotification
            type="error"
            message={error.response?.data.message || MESSAGE.COMMON_ERROR}
          />
        );
      });
  };
  return (
    <div className="flex gap-6 max-h-[calc(100_*_var(--vh)_-_48px)]">
      {/* left side */}
      <Card className="w-[291px] h-full">
        <CardHeader floated={false} className="">
          <Avatar src={user.avatar} className="w-full h-full object-cover" />
          <input
            id="container-update-avatar"
            accept={"image/*"}
            type="file"
            style={{ display: "none" }}
            onChange={handleChangeAvatar}
          />
          <label htmlFor="container-update-avatar">
            <div
              className="absolute cursor-pointer"
              style={{
                right: 10,
                bottom: 10,
              }}
            >
              <img src={AvatarUpdateIcon} className="w-10 h-10" />
            </div>
          </label>
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {user.fullname}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {user.email}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tabs value={tab.value} orientation="vertical">
            <TabsHeader className="flex flex-col gap-4">
              {tabs.map(({ label, value, icon }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => tab.setValue(value)}
                >
                  <div className="flex items-center justify-between gap-2">
                    {icon}
                    <Typography variant="h6">{label}</Typography>
                  </div>
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </CardFooter>
      </Card>
      {/* right side */}
      {user.id && renderTabContent()}
    </div>
  );
};
export default Profile;
