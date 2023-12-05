import CustomIcon from "@app/components/CustomIcon/CustomIcon";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon,
  CalendarIcon,
  CreditCardIcon,
  EyeIcon,
  MapPinIcon,
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
import { useBoolean, usePagination, useString } from "@app/helpers/hooks";
import CreateAppointmentProcess from "./CreateAppointmentProcess";
import InputDefault from "@app/components/Input/InputDefault";
import PaymentStatusLable from "@app/components/StatusLable/PaymentStatus";
import AppointmentStatus from "@app/components/StatusLable/AppointmentStatus";
import { useEffect, useState } from "react";
import {
  APPOINTMENT_STATUS,
  ClientAppointMentDetail,
  PAYMENT_STATUS,
} from "./types";
import { getListAppointmentForClient } from "./services/api";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { MESSAGE } from "@app/constants/message";
import { formatDate } from "@app/helpers/utils";
import AppoinmentStatusLable from "@app/components/StatusLable/AppointmentStatusLable";

const TABLE_HEAD = [
  "Doctor",
  "Address",
  "Status",
  "Payment Status",
  "Payment",
  "Date",
  "",
];
export default function ClientAppointmentTable() {
  const openCreateModal = useBoolean();
  const [appoinments, setAppointments] = useState<ClientAppointMentDetail[]>(
    []
  );
  const [selectedAppointment, setSelectedAppointment] =
    useState<ClientAppointMentDetail>();
  const openModal = useBoolean();
  const openConfirmCancelModal = useBoolean();
  const search = useString();
  const openCheckoutModal = useBoolean();
  const { setPagination, currentPage, maxPage, pageNumberLimit } =
    usePagination();
  useEffect(() => {
    getAppointmentList();
  }, [currentPage.value]);

  const getAppointmentList = () => {
    getListAppointmentForClient({
      search: search.value,
      limit: pageNumberLimit,
      offset: currentPage.value * pageNumberLimit,
    })
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
  const handleAddAppointment = () => {
    getAppointmentList();
  };
  const renderCreateModal = () => {
    if (openCreateModal.value) {
      return (
        <Dialog
          size="xl"
          open={openCreateModal.value}
          handler={() => {
            console.log("close modal");
          }}
          className="overflow-auto"
        >
          <DialogHeader className="justify-between">
            <Typography variant="h5" color="blue-gray">
              Create appoinment
            </Typography>
            <div className="flex items-center gap-2">
              <XCircleIcon
                className="w-8 h-8 cursor-pointer"
                onClick={() => openCreateModal.setValue(false)}
              />
            </div>
          </DialogHeader>
          <DialogBody>
            <CreateAppointmentProcess
              onCloseModal={() => openCreateModal.setValue(false)}
              handleAddAppointment={handleAddAppointment}
            />
          </DialogBody>
        </Dialog>
      );
    }
    return null;
  };

  const renderModalDetail = () => {
    if (!selectedAppointment) return;
    return (
      <Dialog
        size="sm"
        className="p-6 z-40"
        open={openModal.value}
        handler={() => {}}
      >
        <DialogHeader className="flex flex-col w-full items-start px-4 pt-4 pb-0">
          <div className="w-full">
            <div className="flex  items-center justify-between">
              <Typography variant="h3" className="font-medium leading-[1.5]">
                Appointment Scheduled
              </Typography>
              <div className="flex items-center gap-2 ">
                <XCircleIcon
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => openModal.setValue(false)}
                />
              </div>
            </div>
          </div>
          <AppoinmentStatusLable status={selectedAppointment.status} />
          <div className="flex gap-2 items-center mt-4">
            <Avatar
              src={selectedAppointment.doctor.avatar}
              className="w-10 h-10 object-cover"
            />
            <Typography variant="small" color="gray" className="font-medium">
              <span className="font-normal">with</span>{" "}
              {selectedAppointment.doctor.fullname}
            </Typography>
          </div>
        </DialogHeader>
        <DialogBody>
          <div>
            <div className="flex gap-2 items-center mb-2">
              <MapPinIcon className="w-6 h-6 text-blue-900" />
              <Typography className="font-normal text-blue-800" variant="h6">
                {selectedAppointment.doctor.address}
              </Typography>
            </div>
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
                  {formatDate(selectedAppointment.startTime)}{" "}
                  <span className="font-bold">-</span>
                  {formatDate(selectedAppointment.endTime)}
                </Typography>
              </div>
            </div>
            <div className="mt-4">
              <Typography color="blue-gray" className="font-medium mb-2">
                Your note
              </Typography>
              <Textarea value={selectedAppointment.note} disabled />
            </div>
          </div>
        </DialogBody>
        {selectedAppointment.status !== APPOINTMENT_STATUS.CANCEL &&
          selectedAppointment.status !== APPOINTMENT_STATUS.REJECTED && (
            <DialogFooter className="flex items-center justify-center gap-10">
              {selectedAppointment.status === APPOINTMENT_STATUS.APPROVED && (
                <Button
                  size="md"
                  variant="gradient"
                  color="red"
                  onClick={() => {
                    openConfirmCancelModal.setValue(true);
                    openModal.setValue(false);
                  }}
                >
                  Cancel
                </Button>
              )}
              {selectedAppointment.status === APPOINTMENT_STATUS.FINISHED &&
                selectedAppointment.paymentStatus === PAYMENT_STATUS.UNPAID && (
                  <Button
                    size="md"
                    variant="gradient"
                    color="indigo"
                    onClick={() => {
                      // openConfirmCancelModal.setValue(true);
                      openCheckoutModal.setValue(true);
                      openModal.setValue(false);
                    }}
                  >
                    Checkout
                  </Button>
                )}
            </DialogFooter>
          )}
      </Dialog>
    );
  };

  const onKeyPressSearchInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      getAppointmentList();
      currentPage.setValue(0);
    }
  };
  return (
    <Card className="w-full">
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
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              className="flex items-center gap-3"
              size="sm"
              onClick={() => openCreateModal.setValue(true)}
            >
              <CalendarDaysIcon strokeWidth={2} className="h-5 w-5" /> Create
              appoinment
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <InputDefault
              label="Search"
              value={search.value}
              onChange={(e) => search.setValue(e.target.value)}
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
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
            {appoinments.map((item, index) => {
              const isLast = index === appoinments.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={item.id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={item.doctor.avatar}
                        alt={item.doctor.fullname}
                        size="sm"
                      />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.doctor.fullname}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {item.doctor.email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal w-[150px]"
                    >
                      {item.doctor.address}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <AppointmentStatus status={item.status} />
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <PaymentStatusLable status={item.paymentStatus} />
                    </div>
                  </td>

                  {/* payment method */}
                  <td className={classes}>
                    <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                      {item.doctor.fullname === "visa" ? (
                        <CreditCardIcon className="h-full w-full object-contain p-1" />
                      ) : item.doctor.fullname === "creditcard" ? (
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
                      {formatDate(item.startTime)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="View more">
                      <IconButton
                        variant="text"
                        onClick={() => {
                          setSelectedAppointment(item);
                          openModal.setValue(true);
                        }}
                      >
                        <EyeIcon className="h-5 w-5 text-gray-600" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Doctor note">
                      <IconButton variant="text">
                        <CustomIcon src={NoteIcon} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Cancel appointment">
                      <IconButton
                        variant="text"
                        disabled={
                          item.status === APPOINTMENT_STATUS.CANCEL ||
                          item.status === APPOINTMENT_STATUS.FINISHED
                        }
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
          Page {currentPage.value + 1} of {maxPage}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage.value === 0}
            onClick={() => {
              if (currentPage.value === 0) return;
              currentPage.setValue(currentPage.value - 1);
            }}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage.value + 1 === maxPage}
            onClick={() => {
              currentPage.setValue(currentPage.value + 1);
            }}
          >
            Next
          </Button>
        </div>
      </CardFooter>
      {renderCreateModal()}
      {renderModalDetail()}
    </Card>
  );
}
