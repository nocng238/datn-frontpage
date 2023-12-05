import InputDefault from "@app/components/Input/InputDefault";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { useString } from "@app/helpers/hooks";
import { Button, Card, CardHeader, Typography } from "@material-tailwind/react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { toast } from "react-toastify";
import { changePasswordMiddleware } from "./services/api";
import { ChangePasswordRequest } from "./types";

const Settings = () => {
  const oldPassWord = useString();
  const newPassword = useString();
  const confirmPassword = useString();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword.value && newPassword.value !== confirmPassword.value) {
      return toast(
        <LabelNotification
          type="error"
          message="The password confirmation does not match!"
        />
      );
    }
    const request: ChangePasswordRequest = {
      newPassword: newPassword.value,
      oldPassword: oldPassWord.value,
    };
    changePasswordMiddleware(request)
      .then((_res) => {
        toast(
          <LabelNotification
            type="success"
            message="Change password successfully."
          />
        );
        oldPassWord.setValue("");
        newPassword.setValue("");
        confirmPassword.setValue("");
      })
      .catch((error) => {
        toast(
          <LabelNotification
            type="error"
            message={error.response?.data.message || "Change password failed"}
          />
        );
      });
  };
  return (
    <Card shadow={false} className="max-w-full flex flex-col h-fit p-6">
      <Typography variant="h4" color="blue-gray" className="mb-6">
        Change password
      </Typography>
      <form action="" className="flex flex-col gap-7" onSubmit={handleSubmit}>
        <div className="w-[316px]">
          <InputDefault
            label="Current Password"
            className="mb-7 "
            type="password"
            value={oldPassWord.value}
            onChange={(e) => oldPassWord.setValue(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <InputDefault
            label="New Password"
            className="w-[316px]"
            type="password"
            value={newPassword.value}
            onChange={(e) => {
              newPassword.setValue(e.target.value);
            }}
          />
          <InputDefault
            label="Confirm Password"
            className="w-[316px]"
            type="password"
            value={confirmPassword.value}
            onChange={(e) => {
              confirmPassword.setValue(e.target.value);
            }}
          />
        </div>
        <Button
          className="w-[200px]"
          variant="gradient"
          color="blue-gray"
          type="submit"
        >
          Change Password
        </Button>
      </form>
    </Card>
  );
};
export default Settings;
