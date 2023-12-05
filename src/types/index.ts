import { ReactNode } from "react";
export type FormDate = string | number | Date;

export type WithChildrenProps<T = undefined> = T extends undefined
  ? {
      children?: ReactNode;
    }
  : T & {
      children?: ReactNode;
    };

export interface File {
  file_name: string;
  url: string;
}
export interface Pagination {
  limit: number;
  offset: number;
  totalItems: number;
  itemCount: number;
}
export const emptyPagination = {
  limit: 0,
  offset: 0,
  totalItems: 0,
  itemCount: 0,
};
