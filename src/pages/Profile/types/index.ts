import { Focused } from "react-credit-cards";

export enum PROFILE_TAB {
  INFO = "info",
  SETTING = "setting",
  PAYMENTS = "payments",
}
export interface CreditCardProps {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
  focused: Focused;
}
export const defaultCreditCard: CreditCardProps = {
  cvc: "",
  expiry: "",
  name: "",
  number: "",
  focused: "number",
};
