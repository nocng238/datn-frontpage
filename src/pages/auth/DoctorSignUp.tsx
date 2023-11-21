import InputDefault from "@app/components/Input/InputDefault";
import { Card, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import CheckboxDefault from "@app/components/Checkbox/CheckboxDefault";
import { useState } from "react";
import { DoctorRequest, defaultDoctorRequest } from "./types";
import PasswordHelperTooltip from "@app/components/Tooltip/PasswordHelperTooltip";

export default function DoctorSignUp() {
  const navigate = useNavigate();
  const [doctorInfo, setDoctorInfo] =
    useState<DoctorRequest>(defaultDoctorRequest);

  const setInfo = (name: string, value: string) => {
    setDoctorInfo({ ...doctorInfo, [`${name}`]: value });
  };
  const handleSubbmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <Card shadow={false} className="p-4 bg-opacity-70">
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubbmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name <span className="text-red-500">*</span>
          </Typography>
          <InputDefault size="lg" type="" />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email <span className="text-red-500">*</span>
          </Typography>
          <InputDefault
            size="lg"
            type="email"
            required
            value={doctorInfo.email}
            onChange={(e) => {
              setInfo("email", e.target.value);
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Workplace
          </Typography>
          <InputDefault
            size="lg"
            value={doctorInfo.workplace}
            onChange={(e) => {
              setInfo("workplace", e.target.value);
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your phone number <span className="text-red-500">*</span>
          </Typography>
          <InputDefault
            size="lg"
            type="phone"
            required
            value={doctorInfo.phone}
            onChange={(e) => {
              setInfo("phone", e.target.value);
            }}
          />
          <div className="flex gap-3 items-center -mb-3">
            <Typography variant="h6" color="blue-gray">
              Password <span className="text-red-500">*</span>
            </Typography>
            <PasswordHelperTooltip />
          </div>

          <div>
            <InputDefault
              type="password"
              size="lg"
              required
              value={doctorInfo.password}
              onChange={(e) => {
                setInfo("password", e.target.value);
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
