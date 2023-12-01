import { useBoolean } from "@app/helpers/hooks";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { verifyEmail } from "./services/api";

const VerifyEmail = () => {
  const isVerify = useBoolean();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const email = searchParams.get("email");
    const token = searchParams.get("token");
    console.log(email);
    console.log(token);

    if (!email || !token) return;
    verifyEmail(email, token).then((res) => {
      isVerify.setValue(true);
    });
  }, []);
  return (
    <Card className="w-96 bg-opacity-70">
      <CardHeader
        variant="gradient"
        color="blue-gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Verify account
        </Typography>
      </CardHeader>
      <CardBody className="h-full w-full justify-center items-center flex flex-col p-6">
        {isVerify.value ? (
          <CheckCircleIcon className="h-24" />
        ) : (
          <ExclamationTriangleIcon className="h-24" />
        )}
        <p
          className="font-bold mt-6 mb-1"
          style={{
            fontSize: 20,
            lineHeight: "32px",
            color: "#111111",
          }}
        >
          {isVerify.value
            ? "Email verification successful!"
            : "Something wrong, please try again"}
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
export default VerifyEmail;
