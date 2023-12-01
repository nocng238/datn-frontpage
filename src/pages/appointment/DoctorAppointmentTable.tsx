import CustomIcon from "@app/components/CustomIcon/CustomIcon";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon,
  CreditCardIcon,
  EyeIcon,
  PencilIcon,
  XCircleIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import NoteIcon from "@app/assets/icons/icon-note.svg";
import CancelAppointmentIcon from "@app/assets/icons/icon-cancel-appointment.svg";
import PaypalIcon from "@app/assets/icons/icon-paypal.svg";
import CodIcon from "@app/assets/icons/cod-icon.svg";

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogBody,
  Textarea,
} from "@material-tailwind/react";
import { useBoolean, useString } from "@app/helpers/hooks";
import CreateAppointmentProcess from "./CreateAppointmentProcess";
import InputDefault from "@app/components/Input/InputDefault";
import PaymentStatusLable from "@app/components/StatusLable/PaymentStatus";
import AppointmentStatus from "@app/components/StatusLable/AppointmentStatus";
import { useEffect, useState } from "react";
import { APPOINTMENT_STATUS, DoctorAppoinmentDetail } from "./types";
import { Pagination, emptyPagination } from "@app/types";
import {
  approveAppointment,
  getListAppointmentForDoctor,
} from "./services/api";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { MESSAGE } from "@app/constants/message";
import { toast } from "react-toastify";
import { cl } from "@fullcalendar/core/internal-common";
import { formatDate } from "@app/helpers/utils";
import { error } from "console";

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

export default function DoctorAppointmentTable() {
  const openCreateModal = useBoolean();
  const [appointments, setAppointments] = useState<DoctorAppoinmentDetail[]>(
    []
  );
  const [pagination, setPagination] = useState<Pagination>(emptyPagination);
  const search = useString();
  const openModal = useBoolean();
  const [selectedAppointment, setSelectedAppointment] =
    useState<DoctorAppoinmentDetail>();
  useEffect(() => {
    getAppointmentList();
  }, []);

  const getAppointmentList = () => {
    getListAppointmentForDoctor({ search: search.value })
      .then((res) => {
        setAppointments(res.items);
        setPagination(res.meta);
      })
      .catch((error) => {
        console.log(error);
        toast(
          <LabelNotification type="error" message={MESSAGE.COMMON_ERROR} />
        );
      });
  };
  const onKeyPressSearchInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      getAppointmentList();
    }
  };
  const handleApproveAppoinment = () => {
    console.log("selectedAppointment: ", selectedAppointment);

    if (!selectedAppointment) return;
    const appointmentIndex = appointments.findIndex(
      (item) => item.id === selectedAppointment.id
    );
    console.log("appointmentIndex : ", appointmentIndex);

    if (appointmentIndex === -1) return;
    approveAppointment(selectedAppointment.id)
      .then((_res) => {
        appointments[appointmentIndex].status = APPOINTMENT_STATUS.APPROVED;
        setAppointments([...appointments]);
        toast(<LabelNotification type="success" message={"Success"} />);
      })
      .catch((error) => {
        toast(
          <LabelNotification
            type="error"
            message={error.response?.data?.message || MESSAGE.COMMON_ERROR}
          />
        );
      })
      .finally(() => {
        openModal.setValue(false);
      });
  };

  const renderModalDetail = () => {
    if (!selectedAppointment) return;
    return (
      <Dialog
        size="sm"
        className="p-6"
        open={openModal.value}
        handler={() => openModal.setValue(!openModal.value)}
      >
        <DialogHeader>
          <div>
            <Typography variant="h3" className="mb-6 font-medium leading-[1.5]">
              Appointment Scheduled
            </Typography>
            <div className="flex gap-2 items-center">
              <Avatar
                src={selectedAppointment.client.avatar}
                className="w-10 h-10 object-cover"
              />
              <Typography variant="small" color="gray" className="font-medium">
                <span className="font-normal">with</span>{" "}
                {selectedAppointment.client.fullname}
              </Typography>
            </div>
          </div>
        </DialogHeader>
        <DialogBody>
          <div>
            <div className="flex gap-8 items-center p-2 bg-gray-200 rounded-md">
              <CalendarIcon className="w-8 h-8" />
              <div>
                <Typography variant="h6" className="font-medium" color="gray">
                  {" "}
                  DATE & TIME
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="text-xs font-normal"
                >
                  {formatDate(selectedAppointment.startTime)}
                </Typography>
              </div>
            </div>
            <div className="mt-4">
              <Typography color="blue-gray" className="font-medium mb-2">
                Note from client
              </Typography>
              <Textarea value={selectedAppointment.note} disabled />
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="flex items-center justify-center gap-10">
          <Button
            size="md"
            variant="outlined"
            color="blue"
            className="flex items-center"
            onClick={() => {
              openModal.setValue(false);
            }}
          >
            Close
          </Button>
          <Button
            size="md"
            variant="gradient"
            color="blue"
            className="flex items-center"
            onClick={handleApproveAppoinment}
          >
            Approve
          </Button>
        </DialogFooter>
      </Dialog>
    );
  };
  return (
    <Card className="w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Appointment list
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <InputDefault
              label="Search"
              icon={
                <MagnifyingGlassIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={() => {
                    getAppointmentList();
                  }}
                />
              }
              onChange={(e) => search.setValue(e.target.value)}
              onKeyPress={onKeyPressSearchInput}
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
            {appointments.map((appointment, index) => {
              const isLast = index === appointments.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={appointment.id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={appointment.client.avatar} size="sm" />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {appointment.client.fullname}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {appointment.client.email}
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
                        {appointment.client.phone}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <AppointmentStatus status={appointment.status} />
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <PaymentStatusLable status={appointment.paymentStatus} />
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                      {appointment.id === "visa" ? (
                        <CreditCardIcon
                          // size="sm"
                          // alt={account}
                          // variant="square"
                          className="h-full w-full object-contain p-1"
                        />
                      ) : appointment.id === "creditcard" ? (
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
                      {formatDate(appointment.startTime)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="View more">
                      <IconButton
                        variant="text"
                        onClick={() => {
                          setSelectedAppointment(appointment);
                          openModal.setValue(true);
                        }}
                      >
                        <EyeIcon className="h-5 w-5" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Doctor note">
                      <IconButton variant="text">
                        <CustomIcon src={NoteIcon} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Approve this appoinment">
                      <IconButton
                        variant="text"
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
            })}
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
      {renderModalDetail()}
    </Card>
  );
}
