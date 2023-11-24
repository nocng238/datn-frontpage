import InputDefault from "@app/components/Input/InputDefault";
import {
  Card,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import CheckboxDefault from "@app/components/Checkbox/CheckboxDefault";
import { useEffect, useState } from "react";
import {
  City,
  Distrist,
  DoctorRequest,
  Ward,
  defaultDoctorRequest,
} from "./types";
import PasswordHelperTooltip from "@app/components/Tooltip/PasswordHelperTooltip";
import { VIETNAM_PROVINCES } from "@app/constants/provinces";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { regexVietNamesePhoneNumber } from "@app/helpers/utils";
import { doctorSignUpMiddleware } from "./services/api";

export default function DoctorSignUp() {
  const navigate = useNavigate();
  const [doctorInfo, setDoctorInfo] =
    useState<DoctorRequest>(defaultDoctorRequest);

  const setInfo = (name: string, value: string) => {
    setDoctorInfo({ ...doctorInfo, [`${name}`]: value });
  };
  const [city, setCity] = useState<City | undefined>();
  const [district, setDistrict] = useState<Distrist | undefined>();
  const [ward, setWard] = useState<Ward | undefined>();

  const handleSubbmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${doctorInfo.address},${ward},${district},${city}`);

    if (!city || !district || !ward || !doctorInfo.address) {
      return toast(
        <LabelNotification
          type="error"
          message="Please fill out your address!"
        />
      );
    }
    if (!regexVietNamesePhoneNumber(doctorInfo.phone)) {
      return toast(
        <LabelNotification type="error" message="Invalid phone number!" />
      );
    }
    const specificAddress = `${doctorInfo.address},${ward.name},${district.name},${city.name}`;
    doctorSignUpMiddleware({ ...doctorInfo, address: specificAddress })
      .then((res) => {
        navigate("/auth/confirm-email", {
          state: {
            email: doctorInfo.email,
          },
        });
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
    <Card shadow={false} className="px-4 py-2 bg-opacity-70 w-fit">
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <form className="mt-8 mb-2 max-w-screen-lg" onSubmit={handleSubbmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name <span className="text-red-500">*</span>
          </Typography>
          <InputDefault
            size="lg"
            required
            value={doctorInfo.fullname}
            onChange={(e) => {
              setInfo("fullname", e.target.value);
            }}
          />
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
          <div className="flex gap-2">
            <Select
              label="Select city"
              value={city?.name}
              key={"Select city"}
              color="gray"
              onChange={(value) => {
                setCity(
                  VIETNAM_PROVINCES.find((city) => city.name === value) as any
                );
                setDistrict(undefined);
                setWard(undefined);
              }}
            >
              {VIETNAM_PROVINCES.map((city) => {
                return (
                  <Option key={city.name} value={city.name}>
                    {city.name}
                  </Option>
                );
              })}
            </Select>
            <Select
              label="Select district"
              value={district?.name}
              key={district?.name}
              color="gray"
              onChange={(value) => {
                setDistrict(
                  city?.districts.find((district) => district.name === value)
                );
                setWard(undefined);
              }}
            >
              {city ? (
                city.districts.map((district) => {
                  return <Option value={district.name}>{district.name}</Option>;
                })
              ) : (
                <div></div>
              )}
            </Select>
          </div>
          <div className="flex gap-2">
            <Select
              label="Select ward"
              color="gray"
              value={ward?.name}
              key={ward?.name}
              onChange={(value) => {
                setWard(district?.wards.find((ward) => ward.name === value));
              }}
            >
              {district ? (
                district?.wards.map((ward) => {
                  return <Option value={ward.name}>{ward.name}</Option>;
                })
              ) : (
                <div></div>
              )}
            </Select>
            <InputDefault
              label="Address"
              value={doctorInfo.address}
              onChange={(e) => {
                setInfo("address", e.target.value);
              }}
            />
          </div>
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
