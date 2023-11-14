import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { PROFILE_TAB } from "./types";
import { useString } from "@app/helpers/hooks";
import ProfileDetail from "./ProfileDetail";
import Settings from "./Settings";
import Payments from "./Payments";
import AvatarUpdateIcon from "@app/assets/icons/icon-update-avatar.svg";
const Profile = () => {
  const tab = useString(PROFILE_TAB.INFO);
  const data = [
    {
      label: "Personal Info",
      value: "info",
      icon: <UserCircleIcon className="w-8 h-8" />,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Security Settings",
      value: "setting",
      icon: <Cog6ToothIcon className="w-8 h-8" />,

      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Payments",
      value: "payments",
      icon: <CurrencyDollarIcon className="w-8 h-8" />,

      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  const renderTabContent = () => {
    if (tab.value === PROFILE_TAB.INFO) {
      return <ProfileDetail />;
    }
    if (tab.value === PROFILE_TAB.SETTING) {
      return <Settings />;
    }
    return <Payments />;
  };
  return (
    <div className="flex p-6 gap-6 max-h-[calc(100vh)]">
      {/* left side */}
      <Card className="w-96 h-full">
        <CardHeader floated={false} className="">
          <Avatar
            src="https://docs.material-tailwind.com/img/team-3.jpg"
            className="w-full h-full"
          />
          <input
            id="container-update-avatar"
            // onChange={fileSelectedHandler}
            accept={"image/*"}
            type="file"
            style={{ display: "none" }}
            // key={keyInputFile.value || ""}
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
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tabs value={tab.value} orientation="vertical">
            <TabsHeader className="flex flex-col gap-4">
              {data.map(({ label, value, icon }) => (
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
      {renderTabContent()}
      {/* right side */}
    </div>
  );
};
export default Profile;
