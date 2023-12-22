import InputDefault from "@app/components/Input/InputDefault";
import { useString } from "@app/helpers/hooks";
import { validationPassword } from "@app/helpers/utils";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { resetPassword } from "./services/api";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { MESSAGE } from "@app/constants/message";

const ResetPassword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const password = useString();
  const confirmPassword = useString();
  const code = useString();
  const onSubmit = () => {
    const email = searchParams.get("email");
    if (!email) return;
    resetPassword(email, code.value, password.value)
      .then((_res) => {
        navigate("/auth/reset-password-sucess");
      })
      .catch((error) => {
        toast(
          <LabelNotification
            type="error"
            message={error.response.data.message || MESSAGE.COMMON_ERROR}
          />
        );
      });
  };
  return (
    <Card className="w-96 bg-opacity-70">
      <CardHeader
        variant="gradient"
        color="blue-gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Set new password
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Password
        </Typography>
        <InputDefault
          type="password"
          value={password.value}
          onChange={(e) => password.setValue(e.target.value)}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Confirm password
        </Typography>
        <InputDefault
          type="password"
          value={confirmPassword.value}
          onChange={(e) => confirmPassword.setValue(e.target.value)}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Code
        </Typography>
        <InputDefault
          type="text"
          value={code.value}
          onChange={(e) => code.setValue(e.target.value)}
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          variant="gradient"
          color="blue-gray"
          fullWidth
          className="cursor-pointer"
          disabled={
            !validationPassword(password.value) ||
            !validationPassword(confirmPassword.value) ||
            confirmPassword.value !== password.value
          }
          onClick={onSubmit}
        >
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};
export default ResetPassword;
