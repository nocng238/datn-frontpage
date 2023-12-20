import { avatar, defaultAvatar } from "@app/constants/data";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { StarIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { DoctorDetail } from "./types";
interface DoctorCardProps {
  doctorDetail: DoctorDetail;
  // onClick: () => void;
  selectedDoctorId?: string;
  onViewMore?: () => void;
}
const DoctorCard = (props: DoctorCardProps) => {
  const { doctorDetail, onViewMore, selectedDoctorId } = props;
  return (
    <Card
      color="white"
      shadow={false}
      className={`w-full max-w-[26rem] border ${
        doctorDetail.id === selectedDoctorId
          ? "border-blue-gray-200 shadow-lg"
          : ""
      } hover:border-blue-gray-200 hover:shadow-lg h-full justify-between`}
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className=" flex items-center gap-4 pt-0 pb-4"
      >
        <Avatar
          size="lg"
          variant="circular"
          src={doctorDetail.avatar || defaultAvatar}
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography color="blue">Doctor</Typography>
            <div>
              <Rating
                value={Math.round(doctorDetail.averageRating)}
                unratedColor="amber"
                ratedColor="amber"
                readonly
              />
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-500"
              >
                Based on {doctorDetail.reviews.length} Reviews
              </Typography>
            </div>
          </div>
          <Typography variant="h5" color="blue-gray">
            {doctorDetail.fullname}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-3">
        <div className="flex justify-between ">
          <Typography variant="h6">Address :</Typography>
          <Typography className="max-w-[200px]">
            {" "}
            {doctorDetail.address}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography variant="h6">Email :</Typography>
          <Typography> {doctorDetail.email}</Typography>
        </div>
        <div className="flex justify-between">
          <Typography variant="h6">Workplace :</Typography>
          <Typography> {doctorDetail.workplace}</Typography>
        </div>
        <div className="flex justify-between">
          <Typography variant="h6">Fee per hour :</Typography>
          <Typography>{doctorDetail.feePerHour || "15"} $</Typography>
        </div>
      </CardBody>
      {onViewMore && (
        <CardFooter className="pt-3">
          <Button
            size="lg"
            fullWidth={true}
            variant="gradient"
            color="blue-gray"
            onClick={onViewMore}
          >
            View more
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
export default DoctorCard;
