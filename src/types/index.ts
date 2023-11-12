import { ReactNode } from "react";
export type FormDate = string | number | Date;

export type WithChildrenProps<T = undefined> = T extends undefined
  ? {
      children?: ReactNode;
    }
  : T & {
      children?: ReactNode;
    };
