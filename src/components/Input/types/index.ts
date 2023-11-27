import React from "react";
import type { InputProps } from "@material-tailwind/react";
export enum STATUS_INPUT {
  DEFAULT = "default",
  ERROR = "error",
  VALID = "valid",
}

export interface InputDefaultProps extends InputProps {
  status?: STATUS_INPUT;
  labelStatus?: string;
  isPassword?: boolean;
  customIcon?: string;
  classCustom?: string;
  styleRootInput?: React.CSSProperties;
  type?: React.HTMLInputTypeAttribute | "phone";
}

export interface InputSearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  handleClearInputSearch?: () => void;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hiddenText?: boolean;
}
