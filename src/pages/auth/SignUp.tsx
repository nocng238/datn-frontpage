import InputDefault from "@app/components/Input/InputDefault";
import {
  Card,
  Button,
  Typography,
  TabPanel,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import CheckboxDefault from "@app/components/Checkbox/CheckboxDefault";
import ClientSignUp from "./ClientSignUp";
import DoctorSignUp from "./DoctorSignUp";
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import CustomIcon from "@app/components/CustomIcon/CustomIcon";
import DoctorIcon from "@app/assets/icons/icon-doctor.svg";
export default function SignUp() {
  const [type, setType] = useState("client");

  return (
    <Tabs value={type} className="overflow-auto max-h-[calc(100vh-6rem)]">
      <TabsHeader className="z-0 w-full px-4">
        <Tab value="client" onClick={() => setType("client")}>
          <div className="flex gap-2 py-[2px] items-center">
            <UserCircleIcon className="w-5 h-5" />
            <Typography variant="small">Client</Typography>
          </div>
        </Tab>
        <Tab value="doctor" onClick={() => setType("doctor")}>
          <div className="flex gap-2">
            <CustomIcon src={DoctorIcon} className="w-4 h-4 my-1" />
            <Typography variant="small">Doctor</Typography>
          </div>
        </Tab>
      </TabsHeader>
      <TabsBody
        className="!overflow-x-hidden"
        animate={{
          initial: {
            x: type === "client" ? 400 : -400,
          },
          mount: {
            x: 0,
          },
          unmount: {
            x: type === "client" ? 400 : -400,
          },
        }}
      >
        <TabPanel value={"client"} className="overflow-hidden">
          <ClientSignUp />
        </TabPanel>
        <TabPanel value={"doctor"}>
          <DoctorSignUp />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
