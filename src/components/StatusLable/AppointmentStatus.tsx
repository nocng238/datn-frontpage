import { APPOINTMENT_STATUS } from "@app/pages/appointment/types";
import { Chip } from "@material-tailwind/react";
interface Props {
  status: APPOINTMENT_STATUS;
}
const AppointmentStatus = (props: Props) => {
  const { status } = props;
  return (
    <Chip
      size="sm"
      variant="ghost"
      value={status}
      color={
        status === APPOINTMENT_STATUS.FINISHED
          ? "green"
          : status === APPOINTMENT_STATUS.PENDING
          ? "amber"
          : status === APPOINTMENT_STATUS.APPROVED
          ? "blue"
          : "red"
      }
    />
  );
};
export default AppointmentStatus;
