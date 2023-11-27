import { PATH } from "@app/constants/path";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.state) {
      navigate(PATH.login);
    }
  }, [location.state]);
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white bg-opacity-70">
      <div className="max-w-xl px-5 text-center">
        <h2 className="mb-2 text-[42px] font-bold text-zinc-800">
          Check your inbox
        </h2>
        <p className="mb-2 text-lg text-zinc-500">
          We are glad, that you’re with us ? We’ve sent you a verification link
          to the email address{" "}
          <span className="font-medium text-indigo-500">
            {location.state?.email}
          </span>
          .
        </p>
        <button
          onClick={() => {
            navigate(PATH.login);
          }}
          className="mt-3 inline-block w-96 rounded bg-blue-gray-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-blue-gray-700"
        >
          Open the App →
        </button>
      </div>
    </div>
  );
};
export default ConfirmEmail;
