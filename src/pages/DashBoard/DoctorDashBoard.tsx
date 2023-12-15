import { Typography } from "@material-tailwind/react";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import ReviewCard from "../appointment/molecules/ReviewCard";
import { ReviewDetail, reviewDefault } from "../doctor/types";
import { useEffect, useState } from "react";
import {
  getAppointmentDataChart,
  getDoctorReviews,
  getRevenueDataChart,
} from "./services/api";

const DoctorDashBoard = () => {
  const [reviews, setReviews] = useState<ReviewDetail[]>([]);
  const [pieChartData, setPieChartData] = useState<number[]>([]);
  const [revenueChartData, setRevenueChartData] = useState<number[]>([]);
  useEffect(() => {
    getDefaultData();
  }, []);
  const getDefaultData = async () => {
    try {
      const reviews = await getDoctorReviews();
      const pieChartData = await getAppointmentDataChart();
      const revenue = await getRevenueDataChart();
      setPieChartData(pieChartData);
      setRevenueChartData(revenue);
      setReviews(reviews);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-full">
      <div className="w-[60%] flex flex-col gap-10">
        <LineChart data={revenueChartData} />
        <PieChart data={pieChartData} />
      </div>

      <div className="px-4 w-[40%] max-h-[100vh] overflow-auto">
        <Typography variant="h4" color="black" className="text-center">
          Customer reviews
        </Typography>
        <div className="flex flex-col gap-3">
          {reviews.map((item) => {
            return <ReviewCard reviewDetail={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashBoard;
