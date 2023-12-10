import { Focused } from "react-credit-cards";

export enum PROFILE_TAB {
  INFO = "info",
  SETTING = "setting",
  PAYMENTS = "payments",
}
export enum CREDIT_BRAND {
  VISA = "visa",
  MASTER = "mastercard",
}
export interface CreditCardProps {
  exp_month: string;
  exp_year: string;
  last_4_number: string;
  brand: CREDIT_BRAND;
  paymentMethodId: string;
  isMain: boolean;
}
export const defaultCreditCard: CreditCardProps = {
  exp_month: "",
  exp_year: "",
  last_4_number: "",
  brand: CREDIT_BRAND.VISA,
  paymentMethodId: "",
  isMain: false,
};
export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}
