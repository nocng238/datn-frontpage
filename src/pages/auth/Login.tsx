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
import { LoginRequest, defaultLoginRequest } from "./types";
import { useState } from "react";
import InputDefault from "@app/components/Input/InputDefault";
import { isEmpty, isUndefined } from "lodash";
import { isValidEmail, validationPassword } from "@app/helpers/utils";
import CheckboxDefault from "@app/components/Checkbox/CheckboxDefault";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { loginMiddleware } from "./services/api";
export default function Login() {
  const navigate = useNavigate();
  const [info, setInfo] = useState<LoginRequest>(defaultLoginRequest);
  const validatePassword = () => {
    if (isEmpty(info.password)) return undefined;
    return validationPassword(info.password);
  };
  const inValidPassword = () => {
    const validPassword = validatePassword();
    if (isUndefined(validPassword)) {
      return undefined;
    } else {
      return !validPassword;
    }
  };
  const inValidEmail = () => {
    const isValid = isValidEmail(info.email);
    if (isUndefined(isValid)) return undefined;
    else return !isValid;
  };
  const onKeyPressInput = (
    event: React.KeyboardEvent<HTMLDivElement>
  ): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit();
    }
  };
  const handleChangeInput = (key: "email" | "password") => (event: any) => {
    setInfo({
      ...info,
      [key]: event.target.value,
    });
  };
  const onSubmit = async () => {
    if (!validatePassword() || !isValidEmail(info.email)) {
      return toast(
        <LabelNotification type="error" message="Wrong email or password" />
      );
    }
    loginMiddleware(info)
      .then((res) => {
        localStorage.setItem("access_token", res.accessToken);
        localStorage.setItem("timezone", "+0700");
        navigate("/profile");
      })
      .catch((error) => {
        toast(
          <LabelNotification
            type="error"
            message={error.response?.data.message}
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
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <InputDefault
          label="Email"
          size="lg"
          onChange={handleChangeInput("email")}
          error={inValidEmail()}
          success={isValidEmail(info.email)}
          className="py-2"
          onKeyPress={onKeyPressInput}
        />
        <InputDefault
          label="Password"
          size="lg"
          type="password"
          error={inValidPassword()}
          success={validatePassword()}
          onChange={handleChangeInput("password")}
          onKeyPress={onKeyPressInput}
        />
        <div className="flex items-center justify-between -ml-2.5">
          <CheckboxDefault label="Remember Me" />
          <Typography
            variant="small"
            className="cursor-pointer transition-colors hover:text-gray-900"
            onClick={() => {
              navigate("/auth/forgot-password");
            }}
          >
            {" "}
            Forgot password
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          variant="gradient"
          color="blue-gray"
          fullWidth
          className="cursor-pointer"
          onClick={onSubmit}
        >
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            // as="a"
            // href="#signup"
            onClick={() => {
              navigate("/auth/sign-up");
            }}
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold cursor-pointer"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
}
