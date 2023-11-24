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

const ResetPassword = () => {
  const password = useString();
  const confirmPassword = useString();
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
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          variant="gradient"
          color="blue-gray"
          fullWidth
          className="cursor-pointer"
          disabled={
            validationPassword(password.value) ||
            validationPassword(confirmPassword.value) ||
            confirmPassword.value !== password.value
          }
          onClick={() => {}}
        >
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};
