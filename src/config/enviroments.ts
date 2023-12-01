export const isLogin = () => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    return false;
  }
  return true;
};

export const API_URL =
  import.meta.env.REACT_APP_API_URL || "http://localhost:3000";
export const VIETNAM_PROVINCES_API = "https://provinces.open-api.vn/api/";
export const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
