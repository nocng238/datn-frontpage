import { useAppSelector } from "@app/hooks/useApp";
import ClientAppointmentTable from "./ClientAppointmentTable";
import DoctorAppointmentTable from "./DoctorAppointmentTable";

const Appointment = () => {
  const user = useAppSelector((state) => state.userInfo);
  return user.isDoctor ? (
    <DoctorAppointmentTable />
  ) : (
    <ClientAppointmentTable />
  );
};
export default Appointment;
