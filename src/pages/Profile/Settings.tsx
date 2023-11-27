import InputDefault from "@app/components/Input/InputDefault";
import { useString } from "@app/helpers/hooks";
import { Button, Card, CardHeader, Typography } from "@material-tailwind/react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

const Settings = () => {
  const newPassword = useString();
  const confirmPassword = useString();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            disabled
            value={"asdfsad"}
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
