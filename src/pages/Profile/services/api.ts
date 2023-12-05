import { UserInfo } from "@app/pages/auth/types";
import Axios from "axios";
import { ChangePasswordRequest, CreditCardProps } from "../types";

export const updateProfile = async (userInfo: UserInfo) => {
  const { credit_card_id, ...userInfoWithoutCreditCard } = userInfo;
  const {
    isDoctor,
    feePerHour,
    workplace,
    cv,
    description,
    cvFileName,
    ...clientInfo
  } = userInfoWithoutCreditCard;
  const res = await Axios.put(
    "/user",
    isDoctor ? userInfoWithoutCreditCard : clientInfo
  );
  return res.data;
};

export const updateAvatarMiddleware = async (formData: FormData) => {
  const res = await Axios.post<string>("/upload-avatar", formData);
  return res.data;
};

export const updateCvDoctor = async (formData: FormData) => {
  const res = await Axios.post<string>("/doctor/upload-cv", formData);
  return res.data;
};

export const addCreditCard = async (paymentMethodId: string) => {
  const res = await Axios.post<string>("/credit-card", { paymentMethodId });
  return res.data;
};
export const charge = async (paymentMethodId: string, amount = 100) => {
  const res = await Axios.post("/charge", { paymentMethodId, amount });
  return res.data;
};

export const getCreditCardsMiddleware = async (
  customerId: string
): Promise<CreditCardProps[]> => {
  const res = await Axios.get(`/stripe/credit-cards/${customerId}`);
  const result: CreditCardProps[] = res.data.data.map((creditCard: any) => {
    return {
      paymentMethodId: creditCard.id,
      exp_month: creditCard.card.exp_month,
      exp_year: creditCard.card.exp_year,
      last_4_number: creditCard.card.last4,
      brand: creditCard.card.brand,
    };
  });
  return result;
};

export const changePasswordMiddleware = async (
  request: ChangePasswordRequest
) => {
  const res = await Axios.put("/change-password", request);
  return res.data;
};
