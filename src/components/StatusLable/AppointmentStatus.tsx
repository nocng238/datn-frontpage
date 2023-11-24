import { Chip } from "@material-tailwind/react";
interface Props {
  status: "finished" | "pending" | "cancel";
}
const AppointmentStatus = (props: Props) => {
  const { status } = props;
  return (
    <Chip
      size="sm"
      variant="ghost"
      value={status}
      color={
        status === "finished" ? "green" : status === "pending" ? "amber" : "red"
      }
    />
  );
};
export default AppointmentStatus;
