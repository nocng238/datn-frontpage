import CustomIcon from "@app/components/CustomIcon/CustomIcon";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon,
  CreditCardIcon,
  PencilIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import NoteIcon from "@app/assets/icons/icon-note.svg";
import CancelAppointmentIcon from "@app/assets/icons/icon-cancel-appointment.svg";
import PaypalIcon from "@app/assets/icons/icon-paypal.svg";
import CodIcon from "@app/assets/icons/cod-icon.svg";

import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogBody,
} from "@material-tailwind/react";
import { useBoolean } from "@app/helpers/hooks";
import CreateAppointmentProcess from "./CreateAppointmentProcess";
import InputDefault from "@app/components/Input/InputDefault";
import PaymentStatusLable from "@app/components/StatusLable/PaymentStatus";
import AppointmentStatus from "@app/components/StatusLable/AppointmentStatus";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = [
  "Client",
  "Phone number",
  "Status",
  "Payment Status",
  "Payment",
  "Date",
  "",
];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    status: "pending",
    date: "23/04/18",
    account: "visa",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    status: false,
    account: "visa",
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    status: false,
    date: "19/09/17",
    account: "cod",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    status: true,
    date: "24/12/08",
    account: "creditcard",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    status: false,
    date: "04/10/21",
    account: "visa",
  },
];

export default function DoctorAppointmentTable() {
  const openCreateModal = useBoolean();
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Appointment list
            </Typography>
            {/* <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <InputDefault
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                { img, name, email, job, org, status, date, account },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {org}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <AppointmentStatus status="pending" />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <PaymentStatusLable status="paid" />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                        {account === "visa" ? (
                          <CreditCardIcon
                            // size="sm"
                            // alt={account}
                            // variant="square"
                            className="h-full w-full object-contain p-1"
                          />
                        ) : account === "creditcard" ? (
                          <CustomIcon
                            src={PaypalIcon}
                            className="h-full w-full object-contain p-1"
                          />
                        ) : (
                          <CustomIcon
                            src={CodIcon}
                            className="h-full w-full object-contain p-1"
                          />
                        )}
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {/* <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip> */}
                      <Tooltip content="Doctor note">
                        <IconButton variant="text">
                          <CustomIcon src={NoteIcon} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Cancel appointment">
                        <IconButton
                          variant="text"
                          disabled
                          onClick={() => {
                            console.log("hi");
                          }}
                        >
                          <CustomIcon
                            src={CancelAppointmentIcon}
                            className="w-4 h-4"
                          />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
