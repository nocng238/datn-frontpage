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
  if (status === APPOINTMENT_STATUS.ABSENT) {
    return "purple";
  }
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
    if (status === APPOINTMENT_STATUS.ABSENT) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8 2V5"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 2V5"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.5 9.08984H20.5"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 23C20.2091 23 22 21.2091 22 19C22 16.7909 20.2091 15 18 15C15.7909 15 14 16.7909 14 19C14 21.2091 15.7909 23 18 23Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.07 20.11L16.95 18"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.0499 18.02L16.9299 20.14"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9955 13.7002H12.0045"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.29431 13.7002H8.30329"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.29431 16.7002H8.30329"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
        <div
          className={`flex items-center ${
            status === APPOINTMENT_STATUS.ABSENT ? "calendar-cancel-icon" : ""
          }`}
        >
          {renderIcon()}
        </div>
        <div>
          <Typography className="font-normal" color={renderColor(status)}>
            {status !== APPOINTMENT_STATUS.ABSENT
              ? `This appoinment is ${status.toLocaleLowerCase()}`
              : `This appoinment was marked as ${status.toLocaleLowerCase()}`}
          </Typography>
          <Typography className="font-medium" color={renderColor(status)}>
            at {formatDate(time)}
          </Typography>
        </div>
      </div>
    </>
  );
};
export default AppoinmentStatusLable;
