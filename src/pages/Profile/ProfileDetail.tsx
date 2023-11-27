import InputDefault from "@app/components/Input/InputDefault";
import { cities } from "@app/constants/data";
import { VIETNAM_PROVINCES } from "@app/constants/provinces";
import { useString } from "@app/helpers/hooks";
import {
  Card,
  CardBody,
  Select,
  Typography,
  Option,
  CardFooter,
  Button,
  Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelectAddress } from "../auth/services/hooks";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import CVUploader from "@app/components/Input/CVUploader";
import { File } from "@app/types";
import PdfRenderer from "../doctor/PdfRender";
import { UserInfo, defaultUser } from "../auth/types";
import { useAppSelector } from "@app/hooks/useApp";
import { updateCvDoctor, updateProfile } from "./services/api";
import { configureStore } from "@app/stores/configureStore";
import { setUserInfoAction } from "../auth/stores/actions";
import { C } from "@fullcalendar/core/internal-common";
import { MESSAGE } from "@app/constants/message";

const ProfileDetail = () => {
  // const { register, handleSubmit, getValues } = useForm();
  const user = useAppSelector((state) => state.userInfo);
  const [userRequest, setUserRequest] = useState<UserInfo>(user);
  const [cv, setCv] = useState<File>({ url: "", file_name: "" });
  const { city, district, ward, onchangeCity, onChangeDistrict, onChangeWard } =
    useSelectAddress();

  useEffect(() => {
    const address = user.address?.split(",");
    if (user.address) {
      const city = VIETNAM_PROVINCES.find(
        (city) => city.name === address[address?.length - 1].trim()
      );
      const district = city?.districts.find(
        (district) => district.name === address[address?.length - 2].trim()
      );
      const ward = district?.wards.find(
        (ward) => ward.name === address[address?.length - 3].trim()
      );

      onchangeCity(address[address?.length - 1].trim());
      onChangeDistrict("", district);
      onChangeWard("", ward);
    }
    setCv({ url: user.cv || "", file_name: user.cvFileName || "" });
    setUserRequest(user);
  }, [user]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!city || !district || !ward) {
      return toast(
        <LabelNotification
          type="error"
          message="Please fill out your address!"
        />
      );
    }
    const newRequest: UserInfo = {
      ...userRequest,
      cv: cv.url,
      cvFileName: cv.file_name,
    };
    updateProfile(newRequest)
      .then((_res) => {
        configureStore.dispatch(setUserInfoAction(newRequest));
        toast(<LabelNotification type="success" message="Success" />);
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
  const handleChangeInput = (key: string, value: string) => {
    if (
      key === "city" ||
      key === "district" ||
      key === "ward" ||
      key === "address"
    ) {
      let newAddress = userRequest.address;
      if (key === "city" && city) {
        newAddress = newAddress.replace(city?.name, value);
      }
      if (key === "district" && district) {
        newAddress = newAddress.replace(district.name, value);
      }
      if (key === "ward" && ward) {
        newAddress = newAddress.replace(ward.name, value);
      }
      if (key === "address") {
        newAddress = `${value}, ${ward?.name}, ${district?.name}, ${city?.name}`;
      }
      setUserRequest({ ...userRequest, address: newAddress });
      return;
    }
    setUserRequest({ ...userRequest, [key]: value });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
      updateCvDoctor(formData)
        .then((cvUrl) => {
          setCv({ url: cvUrl, file_name: file.name });
          toast(<LabelNotification type="success" message="Success" />);
        })
        .catch((error) => {
          console.log(error);
          toast(
            <LabelNotification type="error" message={MESSAGE.COMMON_ERROR} />
          );
        });
    }
  };
  return (
    <form action="" onSubmit={handleSubmit} className="flex gap-5 w-full">
      <Card className="max-w-full">
        <CardBody className="flex flex-col gap-3">
          <Typography variant="h5" color="blue-gray" className="mb-4">
            Persional Info
          </Typography>
          <div className="flex items-center justify-between gap-5">
            <div className="w-full">
              <Typography variant="h6" className="mb-2 text-blue">
                Full name <span className="text-red-500">*</span>
              </Typography>
              <InputDefault
                required
                value={userRequest.fullname}
                onChange={(e) => {
                  handleChangeInput("fullname", e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-5">
            {user.isDoctor && (
              <div>
                <Typography variant="h6" className="mb-2 text-blue ">
                  Work place
                </Typography>
                <InputDefault
                  required={user.isDoctor}
                  value={userRequest.workplace}
                  onChange={(e) => {
                    handleChangeInput("workplace", e.target.value);
                  }}
                />
              </div>
            )}
            <div>
              <Typography variant="h6" className="mb-2 text-blue">
                Sex
              </Typography>
              <Select
                className=" !border-blue-gray-200 focus:!border-gray-900 p-0 w-[200px]"
                labelProps={{ className: "hidden" }}
                value={userRequest.sex}
                onChange={(value) => {
                  handleChangeInput("sex", value || "");
                }}
              >
                <Option value="Male">Male</Option>
                <Option value="Female"> Female</Option>
              </Select>
            </div>
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-4">
            Contact Info
          </Typography>
          <div className="flex items-center justify-between gap-5">
            <div className="w-full">
              <Typography variant="h6" className="mb-2 text-blue">
                Phone <span className="text-red-500">*</span>
              </Typography>
              <InputDefault
                required
                value={userRequest.phone}
                onChange={(e) => {
                  handleChangeInput("phone", e.target.value);
                }}
              />
            </div>
            <div className="w-full">
              <Typography variant="h6" className="mb-2 text-blue">
                Email <span className="text-red-500">*</span>
              </Typography>
              <InputDefault disabled value={userRequest.email} type="email" />
            </div>
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-4">
            Address
          </Typography>
          <div className="flex flex-col items-center justify-between gap-5">
            <div className="flex gap-2">
              <div className="">
                <Typography variant="h6" className="mb-2 text-blue">
                  City
                </Typography>
                <Select
                  className=" !border-blue-gray-200 focus:!border-gray-900"
                  labelProps={{ className: "hidden" }}
                  value={city?.name}
                  key={"Select city"}
                  onChange={(value) => {
                    handleChangeInput("city", value || "");
                    onchangeCity(value);
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
              </div>
              <div>
                <Typography variant="h6" className="mb-2 text-blue">
                  District
                </Typography>
                <Select
                  label="Select district"
                  className=" !border-blue-gray-200 focus:!border-gray-900"
                  labelProps={{ className: "hidden" }}
                  value={district?.name}
                  key={district?.name}
                  onChange={(value) => {
                    handleChangeInput("district", value || "");
                    onChangeDistrict(value);
                  }}
                >
                  {city ? (
                    city.districts.map((district) => {
                      return (
                        <Option value={district.name}>{district.name}</Option>
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                </Select>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <Typography variant="h6" className="mb-2 text-blue">
                  Ward
                </Typography>
                <Select
                  className=" !border-blue-gray-200 focus:!border-gray-900"
                  labelProps={{ className: "hidden" }}
                  label="Select ward"
                  value={ward?.name}
                  key={ward?.name}
                  onChange={(value) => {
                    handleChangeInput("ward", value || "");
                    onChangeWard(value);
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
              </div>

              <div className="w-full">
                <Typography variant="h6" className="mb-2 text-blue">
                  Address <span className="text-red-500">*</span>
                </Typography>
                <InputDefault
                  required
                  value={userRequest.address?.split(",")[0]}
                  onChange={(e) => {
                    handleChangeInput("address", e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          {user.isDoctor && (
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-4">
                Additional info
              </Typography>
              <Typography variant="h6" className="mb-2 text-blue">
                Fee per hour ($) <span className="text-red-500">*</span>
              </Typography>
              <InputDefault
                required
                type="number"
                value={userRequest.feePerHour}
                onChange={(e) => {
                  handleChangeInput("feePerHour", e.target.value);
                }}
              />
              <Typography variant="h6" className="mb-2 text-blue">
                Your CV <span className="text-red-500">*</span>
              </Typography>
              <CVUploader file={cv} handleFileChange={handleFileChange} />
            </div>
          )}
        </CardBody>
        <CardFooter className="flex justify-evenly">
          <Button className="w-40" variant="outlined">
            Cancel
          </Button>
          <Button className="w-40" type="submit">
            Save
          </Button>
        </CardFooter>
      </Card>
      {userRequest.cv && <PdfRenderer url={cv.url} />}
    </form>
  );
};
export default ProfileDetail;
