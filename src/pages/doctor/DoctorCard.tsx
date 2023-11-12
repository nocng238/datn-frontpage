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
import { StarIcon } from "@heroicons/react/24/solid";
interface DoctorCardProps {
  onClick: () => void;
}
const DoctorCard = (props: DoctorCardProps) => {
  const { onClick } = props;
  return (
    <Card color="white" shadow={false} className="w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className=" flex items-center gap-4 pt-0 pb-8"
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
            <Rating value={4} unratedColor="amber" ratedColor="amber" />
          </div>
          <Typography variant="h5" color="blue-gray">
            Nguyen Thanh Lai
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-3">
        <Typography>
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
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
