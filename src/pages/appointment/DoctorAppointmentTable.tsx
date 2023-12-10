import CustomIcon from "@app/components/CustomIcon/CustomIcon";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  CreditCardIcon,
  EyeIcon,
  XCircleIcon,
  CalendarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
import NoteIcon from "@app/assets/icons/icon-note.svg";
import ApproveAppointment from "@app/assets/icons/icon-approve-appointment.svg";
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
  DoctorAppoinmentDetail,
  PAYMENT_METHOD,
} from "./types";
import {
  approveAppointment,
  cancelAppointmentByDoctorMiddleware,
  finishAppointmentByDoctorMiddleware,
  getListAppointmentForDoctor,
  rejectAppointmentMiddleware,
} from "./services/api";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { MESSAGE } from "@app/constants/message";
import { toast } from "react-toastify";
import { compareDate, formatDate } from "@app/helpers/utils";
import ReasonModal from "./Modal/ReasonModal";
import AppoinmentStatusLable from "@app/components/StatusLable/AppointmentStatusLable";
import EmtyData from "@app/assets/images/empty-data.png";
import NoData from "./Nodata";
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
  const search = useString();
  const openModal = useBoolean();
  const openConfirmRejectModal = useBoolean();
  const openConfirmCancelModal = useBoolean();
  const [selectedAppointment, setSelectedAppointment] =
    useState<DoctorAppoinmentDetail>();
  const today = new Date();
  const { setPagination, currentPage, maxPage, pageNumberLimit } =
    usePagination();
  useEffect(() => {
    getAppointmentList();
  }, [currentPage.value]);

  const getAppointmentList = () => {
    getListAppointmentForDoctor({
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

  const onKeyPressSearchInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      getAppointmentList();
      currentPage.setValue(0);
    }
  };
  const handleApproveAppoinment = (appointmentId: string) => {
    if (!appointmentId) return;
    const appointmentIndex = appointments.findIndex(
      (item) => item.id === appointmentId
    );
    if (appointmentIndex === -1) return;
    approveAppointment(appointmentId)
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

  const handleRejectAppointment = (appointmentId: string, reason: string) => {
    if (!appointmentId) return;
    const appointmentIndex = appointments.findIndex(
      (item) => item.id === appointmentId
    );
    if (appointmentIndex === -1) return;
    rejectAppointmentMiddleware(appointmentId, reason)
      .then((_res) => {
        appointments[appointmentIndex].status = APPOINTMENT_STATUS.REJECTED;
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
  const handleCancelAppointment = (appointmentId: string, reason: string) => {
    if (!appointmentId) return;
    const appointmentIndex = appointments.findIndex(
      (item) => item.id === appointmentId
    );
    if (appointmentIndex === -1) return;
    cancelAppointmentByDoctorMiddleware(appointmentId, reason)
      .then((_res) => {
        appointments[appointmentIndex].status = APPOINTMENT_STATUS.CANCEL;
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

  const handleFinishlAppointment = (appointmentId: string) => {
    if (!appointmentId) return;
    const appointmentIndex = appointments.findIndex(
      (item) => item.id === appointmentId
    );
    if (appointmentIndex === -1) return;
    finishAppointmentByDoctorMiddleware(appointmentId)
      .then((_res) => {
        appointments[appointmentIndex].status = APPOINTMENT_STATUS.FINISHED;
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
  const onSubmitRejected = (reason: string) => {
    handleRejectAppointment(selectedAppointment?.id || "", reason);
  };
  const onSubmitCancel = (reason: string) => {
    handleCancelAppointment(selectedAppointment?.id || "", reason);
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
        <DialogHeader className="flex flex-col w-full items-start">
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
              src={selectedAppointment.client.avatar}
              className="w-10 h-10 object-cover"
            />
            <Typography variant="small" color="gray" className="font-medium">
              <span className="font-normal">with</span>{" "}
              {selectedAppointment.client.fullname}
            </Typography>
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
                  {formatDate(selectedAppointment.startTime)}{" "}
                  <span className="font-bold">-</span>
                  {formatDate(selectedAppointment.endTime)}
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
        {(selectedAppointment.status === APPOINTMENT_STATUS.PENDING ||
          selectedAppointment.status === APPOINTMENT_STATUS.APPROVED) && (
          <DialogFooter className="flex items-center justify-center gap-10">
            {selectedAppointment.status === APPOINTMENT_STATUS.APPROVED ? (
              <>
                {compareDate(
                  today.toLocaleString(),
                  selectedAppointment.startTime
                ) > 0 ? (
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
                ) : (
                  <>
                    <Button
                      size="md"
                      variant="gradient"
                      color="red"
                      onClick={() => {
                        openConfirmCancelModal.setValue(true);
                        openModal.setValue(false);
                      }}
                    >
                      No show
                    </Button>
                    <Button
                      size="md"
                      variant="gradient"
                      color="green"
                      onClick={() => {
                        handleFinishlAppointment(selectedAppointment.id);
                        openModal.setValue(false);
                      }}
                    >
                      Finish
                    </Button>
                  </>
                )}
              </>
            ) : (
              <>
                <Button
                  size="md"
                  variant="gradient"
                  color="red"
                  className="flex items-center"
                  onClick={() => {
                    openConfirmRejectModal.setValue(true);
                    openModal.setValue(false);
                  }}
                >
                  Reject
                </Button>
                <Button
                  size="md"
                  variant="gradient"
                  color="blue"
                  className="flex items-center"
                  onClick={() =>
                    handleApproveAppoinment(selectedAppointment.id)
                  }
                >
                  Approve
                </Button>
              </>
            )}
          </DialogFooter>
        )}
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

      {appointments.length === 0 ? (
        <CardBody>
          <NoData context="No data" />
        </CardBody>
      ) : (
        <>
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
                          <PaymentStatusLable
                            status={appointment.paymentStatus}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                          {appointment.paymentMethod === PAYMENT_METHOD.CARD ? (
                            <CreditCardIcon className="h-full w-full object-contain p-1" />
                          ) : (
                            <BanknotesIcon className="h-full w-full object-contain p-1" />
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
                              handleApproveAppoinment(appointment.id);
                            }}
                            disabled={
                              appointment.status !== APPOINTMENT_STATUS.PENDING
                            }
                          >
                            <CustomIcon src={ApproveAppointment} />
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
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
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
        </>
      )}

      {renderModalDetail()}
      <ReasonModal
        onSubmit={onSubmitRejected}
        onOpenModal={openConfirmRejectModal}
        onCloseModal={() => {
          openModal.setValue(true);
        }}
      />
      <ReasonModal
        onSubmit={onSubmitCancel}
        onOpenModal={openConfirmCancelModal}
        onCloseModal={() => {
          openModal.setValue(true);
        }}
      />
    </Card>
  );
}
