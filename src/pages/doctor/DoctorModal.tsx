import {
  XCircleIcon,
  MapPinIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import {
  Avatar,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Rating,
  Typography,
} from "@material-tailwind/react";
import PdfRenderer from "./PdfRender";
import { IUseDefaultValueProps } from "@app/helpers/hooks";
import { DoctorDetail } from "./types";
import { defaultAvatar } from "@app/constants/data";
import CustomIcon from "@app/components/CustomIcon/CustomIcon";
import IconGender from "@app/assets/icons/icon-gender.svg";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../appointment/molecules/ReviewCard";
interface DoctorModalProps {
  openModal: IUseDefaultValueProps;
  doctorDetail: DoctorDetail;
}
const DoctorModal = (props: DoctorModalProps) => {
  const { doctorDetail, openModal } = props;
  const navigate = useNavigate();
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
        <div className="w-full flex rounded-lg h-full ">
          <div className="w-[50%] flex flex-col gap-3 overflow-auto max-h-[70vh]">
            <div className="flex gap-2 items-center">
              <CustomIcon src={IconGender} />
              <Typography
                className="font-medium"
                font
                variant="h6"
                color="black"
              >
                {doctorDetail.sex}
              </Typography>
            </div>
            <div className="flex gap-2 items-center">
              <MapPinIcon className="w-5 h-5" />
              <Typography
                className="font-medium"
                font
                variant="h6"
                color="black"
              >
                {doctorDetail.address}
              </Typography>
            </div>
            <div className="flex gap-2 items-center">
              <PhoneIcon className="w-5 h-5" />
              <Typography
                className="font-medium"
                font
                variant="h6"
                color="black"
              >
                {doctorDetail.phone}
              </Typography>
            </div>
            <div className="flex gap-2 items-center">
              <BuildingOfficeIcon className="w-5 h-5" />
              <Typography
                className="font-medium"
                font
                variant="h6"
                color="black"
              >
                {doctorDetail.workplace}
              </Typography>
            </div>
            <div className="flex gap-2 items-center">
              <CurrencyDollarIcon className="w-5 h-5" />
              <Typography className="font-medium" variant="h6" color="black">
                {doctorDetail.feePerHour}$
              </Typography>
            </div>
            <div className="px-4">
              <Typography variant="h4" color="black" className="text-center">
                Customer reviews
              </Typography>
              <div className="flex flex-col gap-3">
                {doctorDetail.reviews.map((item) => {
                  return <ReviewCard reviewDetail={item} />;
                })}
              </div>
            </div>
          </div>

          {/* doctor cv */}
          <div className="w-[50%]">
            <PdfRenderer url={doctorDetail.cv} />
          </div>
        </div>
      </DialogBody>
      <DialogFooter className="justify-between">
        <div className="flex items-center gap-16">
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-normal">
              Rating ({doctorDetail.averageRating} out of 5)
            </Typography>
            <Rating
              value={Math.round(doctorDetail.averageRating)}
              readonly
            ></Rating>
          </div>
          <div>
            <Typography variant="small" color="gray" className="font-normal">
              Reviews
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {doctorDetail.reviews.length}
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="gray" className="font-normal">
              Happy pets
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
          onClick={() => {
            navigate("/appointment");
          }}
        >
          Make an appointment
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default DoctorModal;
