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

export const getCreditCardsMiddleware = async (): Promise<
  CreditCardProps[]
> => {
  const res = await Axios.get(`/credit-card`);
  const result: CreditCardProps[] = res.data.map((creditCard: any) => {
    return {
      id: creditCard.id,
      paymentMethodId: creditCard.paymentMethodId,
      exp_month: creditCard.stripeInfor.card.exp_month,
      exp_year: creditCard.stripeInfor.card.exp_year,
      last_4_number: creditCard.stripeInfor.card.last4,
      brand: creditCard.stripeInfor.card.brand,
      isMain: creditCard.isMain,
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

export const updateMainCreditCard = async (id: string) => {
  const res = await Axios.put(`/credit-card/main/${id}`);
  return res.data;
};

export const deleteCreditCard = async (id: string) => {
  const res = await Axios.delete(`/credit-card/${id}`);
  return res.data;
};
