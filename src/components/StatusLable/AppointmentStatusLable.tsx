import { APPOINTMENT_STATUS } from "@app/pages/appointment/types";
import CustomIcon from "../CustomIcon/CustomIcon";
import { Typography } from "@material-tailwind/react";
import IconActive from "@app/assets/icons/icon-active.svg";
import moment from "moment";
import { formatDate } from "@app/helpers/utils";

interface Props {
  status: APPOINTMENT_STATUS;
  time: string;
}
export const renderColor = (status: APPOINTMENT_STATUS) => {
  if (
    status === APPOINTMENT_STATUS.APPROVED ||
    status === APPOINTMENT_STATUS.FINISHED
  )
    return "green";
  if (
    status === APPOINTMENT_STATUS.REJECTED ||
    status === APPOINTMENT_STATUS.CANCEL
  )
    return "red";
  return "amber";
};
const AppoinmentStatusLable = (props: Props) => {
  const { status, time } = props;

  const renderIcon = () => {
    console.log(status);

    if (
      status === APPOINTMENT_STATUS.APPROVED ||
      status === APPOINTMENT_STATUS.FINISHED
    )
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#56a012"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    if (status === APPOINTMENT_STATUS.PENDING) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke="#fdbe44"
            stroke-linejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            stroke-linecap="round"
            stroke="#fdbe44"
            stroke-linejoin="round"
            d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
          />
        </svg>
      );
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke="#ea4545"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  };
  return (
    <>
      <div className="flex items-center gap-2">
        {renderIcon()}
        <Typography className="font-normal" color={renderColor(status)}>
          This appoinment is {status.toLocaleLowerCase()}
        </Typography>
      </div>
      <Typography className="font-medium ml-8" color={renderColor(status)}>
        at {formatDate(time)}
      </Typography>
    </>
  );
};
export default AppoinmentStatusLable;
