import InputDefault from "@app/components/Input/InputDefault";
import { Card, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import CheckboxDefault from "@app/components/Checkbox/CheckboxDefault";
import { useState } from "react";
import { ClientRequest, defaultClientRequest, defaultUser } from "./types";
import PasswordHelperTooltip from "@app/components/Tooltip/PasswordHelperTooltip";
import { clientSignUpMiddleware } from "./services/api";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";

export default function ClientSignUp() {
  const navigate = useNavigate();
  const [clientRequest, setClientRequest] =
    useState<ClientRequest>(defaultClientRequest);
  const handleSubbmit = (e) => {
    e.preventDefault();
    clientSignUpMiddleware(clientRequest)
      .then((res) => {
        navigate("/auth/confirm-email", {
          state: {
            email: clientRequest.email,
          },
        });
      })
      .catch((error) => {
        toast(
          <LabelNotification
            type="error"
            message={error.response?.data?.message || "failed sign up"}
          />
        );
      });
  };
  return (
    <Card shadow={false} className="p-4 bg-opacity-70 max-h-full" key={"ClientSignUp"}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        key={"ClientSignup123"}
        onSubmit={handleSubbmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name <span className="text-red-500">*</span>
          </Typography>
          <InputDefault
            size="lg"
            value={clientRequest.fullname}
            required
            onChange={(e) => {
              setClientRequest({ ...clientRequest, fullname: e.target.value });
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email <span className="text-red-500">*</span>
          </Typography>
          <InputDefault
            required
            size="lg"
            type="email"
            value={clientRequest.email}
            onChange={(e) => {
              setClientRequest({ ...clientRequest, email: e.target.value });
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Phone number
          </Typography>
          <InputDefault
            size="lg"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            type="phone"
            value={clientRequest.phone}
            onChange={(e) => {
              setClientRequest({ ...clientRequest, phone: e.target.value });
            }}
          />
          <div className=" flex items-center gap-3 -mb-3">
            <Typography variant="h6" color="blue-gray">
              Password <span className="text-red-500">*</span>
            </Typography>
            <PasswordHelperTooltip />
          </div>

          <div className="">
            <InputDefault
              type="password"
              size="lg"
              value={clientRequest.password}
              onChange={(e) => {
                setClientRequest({
                  ...clientRequest,
                  password: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <CheckboxDefault
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button
          className="mt-6"
          fullWidth
          variant="gradient"
          color="blue-gray"
          onClick={(e) => {
            console.log("wtF?");
          }}
          type="submit"
        >
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Typography
            onClick={() => {
              navigate("/auth/login");
            }}
            className="font-medium text-gray-900 cursor-pointer"
          >
            Sign In
          </Typography>
        </Typography>
      </form>
    </Card>
  );
}
