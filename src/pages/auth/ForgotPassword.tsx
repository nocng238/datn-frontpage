// import { navigate } from "@app/helpers/navigate";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputDefault from "@app/components/Input/InputDefault";
import { isEmpty, isUndefined } from "lodash";
import { isValidEmail, validationPassword } from "@app/helpers/utils";
import { useString } from "@app/helpers/hooks";
import { forgotPassword } from "./services/api";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { MESSAGE } from "@app/constants/message";
export default function ForgotPassword() {
  const navigate = useNavigate();
  const email = useString();

  const onKeyPressInput = (
    event: React.KeyboardEvent<HTMLDivElement>
  ): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (isValidEmail(email.value)) onClickReset();
    }
  };

  const onClickReset = () => {
    forgotPassword(email.value)
      .then((_res) => {
        navigate({
          pathname: "/auth/reset-password",
          search: `?email=${email.value}`,
        });
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
          Reset Password
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Email
        </Typography>
        <InputDefault
          type="email"
          value={email.value}
          onChange={(e) => email.setValue(e.target.value)}
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          variant="gradient"
          color="blue-gray"
          fullWidth
          className="cursor-pointer"
          disabled={!isValidEmail(email.value)}
          onClick={onClickReset}
        >
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
}
