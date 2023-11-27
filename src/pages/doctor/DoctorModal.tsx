import { XCircleIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import PdfRenderer from "./PdfRender";
// import samplePdf from "@app/assets/Get_Started_With_Smallpdf.pdf";
import samplePdf from "@app/assets/_ch02 Introduction to Modern Symmetric-key Ciphers.pdf";

import { IUseDefaultValueProps } from "@app/helpers/hooks";
import { DoctorDetail } from "./types";
import { defaultAvatar } from "@app/constants/data";

interface DoctorModalProps {
  openModal: IUseDefaultValueProps;
  doctorDetail: DoctorDetail;
}
const DoctorModal = (props: DoctorModalProps) => {
  const { doctorDetail, openModal } = props;
  return (
    <Dialog
      size="xl"
      open={openModal.value}
      handler={() => {
        openModal.setValue(!openModal.value);
      }}
      className="overflow-auto"
    >
      <DialogHeader className="justify-between">
        <div className="flex items-center gap-3">
          <Avatar
            size="sm"
            variant="circular"
            alt="tania andrew"
            src={doctorDetail.avatar || defaultAvatar}
          />
          <div className="-mt-px flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              {doctorDetail.fullname}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-xs font-normal"
            >
              {doctorDetail.email}
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <XCircleIcon
            className="w-8 h-8 cursor-pointer"
            onClick={() => openModal.setValue(false)}
          />
        </div>
      </DialogHeader>
      <DialogBody>
        <div className="w-full flex rounded-lg ">
          <div className="w-[50%]">this is doctor info</div>
          <div className="w-[50%]">
            <PdfRenderer url={samplePdf} />
          </div>
        </div>
      </DialogBody>
      <DialogFooter className="justify-between">
        <div className="flex items-center gap-16">
          <div>
            <Typography variant="small" color="gray" className="font-normal">
              Reviews
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              44,082,044
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="gray" className="font-normal">
              Patients
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              553,031
            </Typography>
          </div>
        </div>
        <Button
          size="sm"
          variant="gradient"
          color="blue"
          className="mr-5 flex items-center"
        >
          Make an appointment
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default DoctorModal;
