import { Typography } from "@material-tailwind/react";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import ReviewCard from "../appointment/molecules/ReviewCard";
import { reviewDefault } from "../doctor/types";

const DoctorDashBoard = () => {
  return (
    <div className="flex h-full">
      <div className="w-[60%] flex flex-col gap-10">
        <LineChart />
        <PieChart />
      </div>

      <div className="px-4 w-[40%] max-h-[100vh] overflow-auto">
        <Typography variant="h4" color="black" className="text-center">
          Customer reviews
        </Typography>
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4, 4.52, 23, 1, 2, 3, 1, 23, 2].map((item) => {
            return <ReviewCard reviewDetail={reviewDefault} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashBoard;
