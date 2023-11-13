import InputDefault from "@app/components/Input/InputDefault";
import { Card, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import CheckboxDefault from "@app/components/Checkbox/CheckboxDefault";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <Card shadow={false} className="p-4 bg-opacity-70">
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <InputDefault
            size="lg"
            placeholder="name@mail.com"
            labelProps={{
              className: "hidden",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <InputDefault
            size="lg"
            placeholder="name@mail.com"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            //   className={`!border-blue-gray-200 ${
            //     isEmpty(email.value)
            //       ? "focus:!border-gray-900"
            //       : isValidEmail(email.value)
            //       ? "!border-green-500"
            //       : "!border-red-500"
            //   }`}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <div>
            <InputDefault
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-blue-gray-200 focus:!border-gray-900"
              labelProps={{
                className: "hidden",
              }}
            />
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Use at least 8 characters, one uppercase, one lowercase and one
              number.
            </Typography>
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
        <Button className="mt-6" fullWidth variant="gradient" color="blue-gray">
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Typography
            onClick={() => {
              navigate("/login");
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
