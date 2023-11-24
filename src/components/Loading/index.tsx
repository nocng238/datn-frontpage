import PacmanLoader from "react-spinners/PacmanLoader";
import { useAppSelector } from "@app/hooks/useApp";

const Loading = () => {
  const isLoading = useAppSelector((state) => state.loading.isLoading);
  if (!isLoading) {
    return null;
  }
  return (
    <div
      className="inset-0 flex fixed items-center justify-center bg-black-05"
      style={{
        zIndex: 10001,
      }}
    >
      <PacmanLoader color="#d0d0d0" loading={true} size={50} />
    </div>
  );
};
export default Loading;
