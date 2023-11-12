import React from "react";
import { Alert, Button } from "@material-tailwind/react";
import type { AlertProps } from "@material-tailwind/react";
import { StarIcon, CheckIcon } from "@heroicons/react/24/solid";
import IconSuccess from "@app/assets/icons/icon-check-success.svg";
import IconError from "@app/assets/icons/icon-error-notification.svg";
import IconWarning from "@app/assets/icons/icon-warning-notification.svg";

interface Props {
  message: string;
  type: "success" | "error" | "warning";
}
const LabelNotification = (props: Props) => {
  const { message, type } = props;
  const renderIcon = () => {
    let icon = IconSuccess;
    let color = "#56A012";
    switch (type) {
      case "error":
        icon = IconError;
        color = "#EA4545";
        break;
      case "warning":
        icon = IconWarning;
        color = "#E87A16";
        break;
    }
    return {
      icon,
      color,
    };
  };
  return (
    <div className="flex items-center">
      <img src={renderIcon().icon} alt="icon" className="mr-3.5 w-5 h-5" />
      <span
        style={{
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "24px",
          color: renderIcon().color,
        }}
      >
        {message}
      </span>
    </div>
  );
};
export default LabelNotification;
