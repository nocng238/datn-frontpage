import { Card, Typography } from "@material-tailwind/react";
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
import Statistic from "./Charts/Statistic";
import { BanknotesIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";

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
      <div className="w-[60%] flex flex-col gap-10 pr-4 overflow-auto">
        <div className="flex gap-3">
          <Statistic
            data="$240.94"
            arrow="up"
            percentage={68.2}
            title="Revenue"
            icon={<BanknotesIcon className="w-6 h-6" />}
          />
          <Statistic
            data="17"
            arrow="down"
            percentage={68.2}
            title="Appointment"
            icon={<CalendarDaysIcon className="w-6 h-6" />}
          />
        </div>
        <LineChart data={revenueChartData} />
        <PieChart data={pieChartData} />
      </div>

      <Card className="ml-4 px-4 w-[40%] max-h-[100vh] overflow-auto">
        <Typography variant="h4" color="black" className="text-center my-4">
          Customer reviews
        </Typography>
        <div className="flex flex-col gap-3">
          {reviews.map((item) => {
            return <ReviewCard reviewDetail={item} />;
          })}
        </div>
      </Card>
    </div>
  );
};

export default DoctorDashBoard;
