// import { REACT_APP_API_URL_IMAGE, API_URL } from "config/environments";
import isMobilePhone from "validator/lib/isMobilePhone";
import isEmail from "validator/lib/isEmail";
// import isEmail from 'validator/lib'
import { isValid, parseISO } from "date-fns";
import moment from "moment";
import { FormDate } from "../types";
import {
  isEqual,
  uniq,
  lowerCase,
  endsWith,
  isFunction,
  head,
  isEmpty,
} from "lodash";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const getFieldValue = (
  field:
    | {
        raw?: string;
        snippet?: string;
      }
    | string
): string => {
  return typeof field === "string" ? field : field?.snippet || field?.raw || "";
};

export type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";
export const getScreenSize = (width: number) => {
  switch (true) {
    case width < 600:
      return "xs";
    case width < 1024:
      return "sm";
    case width < 1440:
      return "md";
    case width < 1920:
      return "lg";
    default:
      return "xl";
  }
};

export const getTopicColDisplayNumber = (width: number) => {
  switch (true) {
    case width < 800:
      return 2;
    case width < 1024:
      return 4;
    case width < 1200:
      return 5;
    default:
      return 6;
  }
};

export const getScreenSpacing = (width: number) => {
  switch (true) {
    case width < 600:
      return 2;
    case width < 1444:
      return 3;
    default:
      return 4;
  }
};

export const searchParams = (sent?: string) => {
  const url = new URLSearchParams(window.location.search);
  if (sent && url.has(sent)) {
    return url.get(sent);
  } else {
    return null;
  }
};

export const isValidEmail = (email: string): boolean | undefined => {
  if (isEmpty(email)) return undefined;
  return isEmail(email);
};

export const isValidPhone = (phone: string): boolean | undefined => {
  if (isEmpty(phone)) return undefined;
  return isMobilePhone(phone);
};
export const regexVietNamesePhoneNumber = (phone: string) => {
  if (!phone) return undefined;
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  return phone.match(regexPhoneNumber) ? true : false;
};

export const getFirstLetterInName = (name: string, justOne = false) => {
  if (!name) {
    return "";
  }
  const splitedName = name.split(" ");
  if (justOne || splitedName.length === 1) {
    return splitedName[0]?.charAt(0);
  }
  return (
    splitedName[0]?.charAt(0) + splitedName[splitedName.length - 1]?.charAt(0)
  );
};

export function getBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

// export function showImageUrl(url: string, apiURl?: string) {
//   try {
//     const urlInfo = new URL(url);
//     return urlInfo.href;
//   } catch {
//     return `${apiURl ?? REACT_APP_API_URL_IMAGE}${url}`;
//   }
// }

export function convertUrlBase64(url: string) {
  return url.replace(/^(.+\;base64,)/, "");
}

// export function getMessengerError(
//   messenger: string,
//   type: "error" | "success"
// ) {
//   toast[type](messenger);
// }

export function validationPassword(password: string) {
  if (!password) return undefined;
  return REGEX_PASSWORD.test(password);
}

export const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_#^()+=~`{}|/:;'"<>[,.-])[A-Za-z\d@$!%*?&_#^()+=~`{}|/:;'"<>[,.-]{8,}$/;

export function changeValueSlidePassword(password: string) {
  if (!password) {
    return 0;
  }
  let newSlide = 0;
  if (password.length < 8) {
    newSlide = 1;
  } else if (password.length < 10 && REGEX_PASSWORD.test(password)) {
    newSlide = 2;
  } else if (password.length >= 10 && REGEX_PASSWORD.test(password)) {
    newSlide = 3;
  } else {
    newSlide = 1;
  }
  return newSlide;
}

export function isValidDate(date: FormDate) {
  if (
    !date ||
    String(new Date(date)) === "Invalid Date" ||
    !isValid(parseISO(new Date(date).toISOString()))
  ) {
    return false;
  }
  return true;
}

const checkTypeDate = (date: FormDate) => {
  let typedDate = date;
  if (typeof date === "string" && isValidDate(date.replace(" ", "T"))) {
    typedDate = date.replace(" ", "T");
  }
  return typedDate;
};

export const formatDate = (date: FormDate, typeFormat?: string) => {
  if (!date) {
    return "";
  }
  const timezone = localStorage.getItem("timezone") || "+0000";
  return moment(new Date(checkTypeDate(date)))
    .clone()
    .utcOffset(timezone)
    .format(typeFormat ? typeFormat : "DD MMM yyyy, HH:mm:ss A");
};

export const formatDurationInHuman = (date: string | number | Date) => {
  if (date === "0000-00-00 00:00:00") {
    return "N/A";
  }
  const timezone = localStorage.getItem("timezone") || "+0000";
  return moment(new Date(checkTypeDate(date)))
    .clone()
    .utcOffset(timezone)
    .startOf("seconds")
    .fromNow();
};

export const isTypeFile = (fileType: string, type?: string) => {
  const regFile = RegExp(`^.*.(${type ?? "rar|zip|7z"})$`);
  return regFile.test(fileType);
};

export const roundNumber = (num: number, decimal: number) => {
  return Number(num.toFixed(decimal));
};

export const restUsersNumber = (usersTotal: number, displayNumber: number) => {
  if (usersTotal - displayNumber >= 99) {
    return 99;
  }
  return usersTotal - displayNumber;
};

export const checkEmptyDataEditor = (dataEditor: string) => {
  if (dataEditor && JSON.parse(dataEditor)?.blocks[0]?.text) {
    return true;
  }
  return false;
};

export const showTypeFile = (fileName: string) => {
  const arr = fileName.split(".");
  if (arr.length > 1) {
    return arr[arr.length - 1];
  }
  return "";
};

export const addAlphaColor = (color: string, opacity: number) => {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};

export const findWithRegex = (
  str: string,
  regex: RegExp,
  allMatch: boolean = false,
  index = 0
) => {
  let finalRegex = regex;
  const regexString = regex.toString();
  /// if it's not a global match => convert to global match
  if (!endsWith(regexString, "g")) {
    finalRegex = new RegExp(`${regexString}g`);
  }
  /// result will be null | string[]
  const result = str.match(finalRegex);
  if (result) {
    /// get all match return string[]
    if (allMatch) {
      return result;
    }
    try {
      /// try to get data from index
      return result[index] || "";
    } catch {
      return "";
    }
  }
  return allMatch ? [] : "";
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCardNumber(value: string) {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(" ")
  );
}

export function formatExpires(value: string) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}
export const compareDate = (time1: string, time2: string) => {
  const moment1 = moment(time1);
  const moment2 = moment(time2);
  return moment2.diff(moment1, "seconds");
};
