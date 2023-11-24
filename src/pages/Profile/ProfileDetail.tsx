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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { City, Distrist, Ward } from "../auth/types";

const ProfileDetail = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [data, setData] = useState<string>("");
  const onSubmit = async (data: any) => {
    // setName(data.name);
    console.log(data);
  };
  const [city, setCity] = useState<City | undefined>();
  const [district, setDistrict] = useState<Distrist | undefined>();
  const [ward, setWard] = useState<Ward | undefined>();
  //use custom state, dont have to use react hook form
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <Card className="max-w-full">
        <CardBody className="flex flex-col gap-3">
          <Typography variant="h5" color="blue-gray" className="mb-4">
            Persional Info
          </Typography>
          <div className="flex items-center justify-between gap-5">
            <div className="w-full">
              <Typography variant="h6" className="mb-2 text-blue">
                Full name
              </Typography>
              <InputDefault />
            </div>
          </div>
          <div className="flex items-center justify-between gap-5">
            <div>
              <Typography variant="h6" className="mb-2 text-blue ">
                Work place
              </Typography>
              <InputDefault {...(register("workplace"), { required: true })} />
            </div>
            <div>
              <Typography variant="h6" className="mb-2 text-blue">
                Sex
              </Typography>
              <Select
                className=" !border-blue-gray-200 focus:!border-gray-900"
                labelProps={{ className: "hidden" }}
                {...(register("sex"), { required: true })}
              >
                <Option value="male">Male</Option>
                <Option value="female"> Female</Option>
              </Select>
            </div>
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-4">
            Contact Info
          </Typography>
          <div className="flex items-center justify-between gap-5">
            <div className="w-full">
              <Typography variant="h6" className="mb-2 text-blue">
                Phone
              </Typography>
              <InputDefault
                className=""
                // {...(register("phone"), { required: true })}
              />
            </div>
            <div className="w-full">
              <Typography variant="h6" className="mb-2 text-blue">
                Email
              </Typography>
              <InputDefault
                className=""
                disabled
                value={"bienechno1@gmail.com"}
                type="email"
              />
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
                    setCity(
                      VIETNAM_PROVINCES.find(
                        (city) => city.name === value
                      ) as any
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
                    setDistrict(
                      city?.districts.find(
                        (district) => district.name === value
                      )
                    );
                    setWard(undefined);
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
                    setWard(
                      district?.wards.find((ward) => ward.name === value)
                    );
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
                  Address
                </Typography>
                <InputDefault
                  className=""
                  {...(register("address"), { required: true })}
                />
              </div>
            </div>
          </div>
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
    </form>
  );
};
export default ProfileDetail;
