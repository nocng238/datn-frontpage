import { IUseDefaultValueProps } from "@app/helpers/hooks";
import {
  Avatar,
  Dialog,
  DialogBody,
  DialogHeader,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { DoctorAppoinmentDetail } from "../types";
import { CalendarIcon, XCircleIcon } from "@heroicons/react/24/solid";
import AppoinmentStatusLable from "@app/components/StatusLable/AppointmentStatusLable";
import { formatDate } from "@app/helpers/utils";
interface Props {
  openModal: IUseDefaultValueProps;
  appointmentDetail: DoctorAppoinmentDetail;
}
const AppointmentDetailModal = (props: Props) => {
  const { openModal, appointmentDetail } = props;
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
        <AppoinmentStatusLable status={appointmentDetail.status} />
        <div className="flex gap-2 items-center mt-4">
          <Avatar
            src={appointmentDetail.client.avatar}
            className="w-10 h-10 object-cover"
          />
          <Typography variant="small" color="gray" className="font-medium">
            <span className="font-normal">with</span>{" "}
            {appointmentDetail.client.fullname}
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
                {formatDate(appointmentDetail.startTime)}{" "}
                <span className="font-bold">-</span>
                {formatDate(appointmentDetail.endTime)}
              </Typography>
            </div>
          </div>
          <div className="mt-4">
            <Typography color="blue-gray" className="font-medium mb-2">
              Note from client
            </Typography>
            <Textarea value={appointmentDetail.note} disabled />
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};
export default AppointmentDetailModal;
