export const isLogin = () => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    return false;
  }
  return true;
};

// export const API_URL = process.env.REACT_APP_API_URL || "";
