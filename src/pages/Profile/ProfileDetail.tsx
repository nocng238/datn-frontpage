import InputDefault from "@app/components/Input/InputDefault";
import { cities } from "@app/constants/data";
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

const ProfileDetail = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [data, setData] = useState<string>("");
  const onSubmit = async (data: any) => {
    // setName(data.name);
    console.log(data);
  };
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
          <div className="flex items-center justify-between gap-5">
            <div className="w-full">
              <Typography variant="h6" className="mb-2 text-blue">
                City
              </Typography>
              <Select
                className=" !border-blue-gray-200 focus:!border-gray-900"
                labelProps={{ className: "hidden" }}
                onChange={() => {}}
                {...(register("city"), { required: true })}
              >
                {cities.map((city) => {
                  return <Option key={city.city}>{city.city}</Option>;
                })}
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
