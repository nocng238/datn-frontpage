import { avatar } from "@app/constants/data";
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
interface DoctorCardProps {
  onClick: () => void;
}
const DoctorCard = (props: DoctorCardProps) => {
  const { onClick } = props;
  return (
    <Card color="white" shadow={false} className="w-full max-w-[26rem] border">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className=" flex items-center gap-4 pt-0 pb-6"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography color="blue">Doctor</Typography>
            <div>
              <Rating
                value={4}
                unratedColor="amber"
                ratedColor="amber"
                readonly
              />
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-500"
              >
                Based on 134 Reviews
              </Typography>
            </div>
          </div>
          <Typography variant="h5" color="blue-gray">
            Nguyen Thanh Lai
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-3">
        <div className="flex justify-between ">
          <Typography variant="h6">Address :</Typography>
          <Typography> 72 Phan Ba Phien</Typography>
        </div>
        <div className="flex justify-between">
          <Typography variant="h6">Phone :</Typography>
          <Typography> 0935612849</Typography>
        </div>
        <div className="flex justify-between">
          <Typography variant="h6">Workplace :</Typography>
          <Typography> Petcare center</Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button
          size="lg"
          fullWidth={true}
          variant="gradient"
          color="blue-gray"
          onClick={onClick}
        >
          View more
        </Button>
      </CardFooter>
    </Card>
  );
};
export default DoctorCard;
