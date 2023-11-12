import React, { useState } from "react";
import { InputDefaultProps, STATUS_INPUT } from "./types";
import { Input } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
const InputDefault = (props: InputDefaultProps) => {
  const {
    status,
    labelStatus,
    type,
    value,
    isPassword,
    customIcon,
    classCustom,
    styleRootInput,
    ...otherProps
  } = props;
  const [typeInput, setTypeInput] = useState(type || "text");
  const [showIcon, setShowIcon] = useState(false);

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
    console.log("dasd");

    setShowIcon(true);
  };

  const handleOnBlur = () => {
    setShowIcon(false);
  };

  const renderIcon = () => {
    if (showIcon) {
      return type === "password" ? (
        <EyeIcon
          className="cursor-pointer !absolute right-2 top-3 h-5 w-5"
          onClick={handleChangeTypeIcon}
        />
      ) : (
        <EyeSlashIcon
          className="cursor-pointer !absolute right-1 top-[50%] h-5 w-5"
          onClick={handleChangeTypeIcon}
        />
      );
    }
    return null;
  };

  return <Input type={type} value={value} color="black" {...otherProps} />;
};

export default InputDefault;
