import React, { useState } from "react";
import { InputDefaultProps, STATUS_INPUT } from "./types";
import { Input } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { isUndefined } from "lodash";
import {
  isValidEmail,
  isValidPhone,
  regexVietNamesePhoneNumber,
  validationPassword,
} from "@app/helpers/utils";
const InputDefault = (props: InputDefaultProps) => {
  const {
    type,
    value,
    isPassword,
    customIcon,
    classCustom,
    styleRootInput,
    className,
    ...otherProps
  } = props;
  const [typeInput, setTypeInput] = useState(type || "text");
  const [showIcon, setShowIcon] = useState(type === "password" ? true : false);

  //   React.useEffect(() => {
  //     if (!type) {
  //       return;
  //     }
  //     setTypeInput(type);
  //   }, [type]);

  const handleChangeTypeIcon = (event: any) => {
    // event.preventDefault();
    // event.stopPropagation();
    const newType = typeInput === "password" ? "text" : "password";
    console.log("newType : ", newType);

    setTypeInput(newType);
  };

  //   const classes = `h-11 border rounded pl-3 ${
  //     isPassword ? "pr-12" : "pr-3"
  //   } text-sm font-normal text-black focus:outline-none ${renderStatus()}`;

  const handleOnFocus = () => {
    setShowIcon(true);
  };

  const handleOnBlur = () => {
    setShowIcon(false);
  };

  const renderIcon = () => {
    if (otherProps.disabled) {
      return null;
    }
    if (showIcon) {
      return typeInput === "password" ? (
        <EyeIcon
          className="cursor-pointer !absolute h-5 w-5"
          onClick={handleChangeTypeIcon}
        />
      ) : (
        <EyeSlashIcon
          className="cursor-pointer !absolute h-5 w-5"
          onClick={handleChangeTypeIcon}
        />
      );
    }
    return null;
  };
  const isError = () => {
    if (type === "email") {
      const isValid = isValidEmail(value as string);
      if (isUndefined(isValid)) return undefined;
      else return !isValid;
    }
    if (type === "password") {
      const isValid = validationPassword(value as string);
      if (typeof isValid === "boolean") return !isValid;
    }
    if (type === "phone") {
      const isValid = regexVietNamesePhoneNumber(value as string);
      if (typeof isValid === "boolean") return !isValid;
    }
    return undefined;
  };
  const isSuccess = () => {
    if (type === "email") {
      const isValid = isValidEmail(value as string);
      if (typeof isValid === "boolean") return isValid;
    }
    if (type === "password") {
      const isValid = validationPassword(value as string);
      if (typeof isValid === "boolean") return isValid;
    }
    if (type === "phone") {
      const isValid = regexVietNamesePhoneNumber(value as string);
      if (typeof isValid === "boolean") return isValid;
    }
    return undefined;
  };
  const classNameCustom = otherProps.label
    ? className
    : isSuccess()
    ? `${className} !border-green-200 focus:!border-green-900`
    : isError()
    ? `${className} !border-red-200 focus:!border-red-900`
    : `${className} !border-blue-gray-200 focus:!border-gray-900`;
  return (
    <Input
      type={typeInput}
      value={value}
      color="black"
      {...otherProps}
      className={classNameCustom}
      labelProps={{
        className: otherProps.label ? "" : "hidden",
      }}
      icon={otherProps.icon || renderIcon()}
      crossOrigin={undefined}
    />
  );
};

export default InputDefault;
