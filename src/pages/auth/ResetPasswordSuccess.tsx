import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const ResetPasswordSuccess = () => {
  const navigate = useNavigate();
  return (
    <Card className="w-96 bg-opacity-70">
      <CardHeader
        variant="gradient"
        color="blue-gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Password updated!
        </Typography>
      </CardHeader>
      <CardBody className="h-full w-full justify-center items-center flex flex-col p-6">
        <CheckCircleIcon className="h-24" />
        <p
          className="font-bold mt-6 mb-1"
          style={{
            fontSize: 20,
            lineHeight: "32px",
            color: "#111111",
          }}
        >
          Your password have been updated!
        </p>
      </CardBody>

      <CardFooter className="pt-0">
        <Button
          variant="gradient"
          color="blue-gray"
          fullWidth
          className="cursor-pointer"
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          Back
        </Button>
      </CardFooter>
    </Card>
  );
};
export default ResetPasswordSuccess;
