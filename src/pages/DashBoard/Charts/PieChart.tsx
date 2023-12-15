import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { APPOINTMENT_STATUS } from "@app/pages/appointment/types";
import { CalendarDaysIcon, CalendarIcon } from "@heroicons/react/24/solid";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "pie",
  width: 280,
  height: 280,
  series: [44, 55, 13, 43, 22, 12],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "Appoinment",
    },
    labels: Object.keys(APPOINTMENT_STATUS),

    dataLabels: {
      enabled: false,
    },
    colors: ["#ff6f00", "#01579b", "#b71c1c", "#1b5e20", "#006064", "#1a237e"],
    legend: {
      show: false,
    },
  },
};
interface Props {
  data: number[];
}

export default function PieChart(props: Props) {
  const { data } = props;
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-700 p-5 text-white">
          <CalendarDaysIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Appointment Chart
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Visualize your data in a simple way using the
            @material-tailwind/react chart plugin.
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mt-4 grid place-items-center px-2">
        <Chart {...chartConfig} series={data} />
      </CardBody>
    </Card>
  );
}
