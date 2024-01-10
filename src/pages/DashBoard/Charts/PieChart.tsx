import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { APPOINTMENT_STATUS } from "@app/pages/appointment/types";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { keys } from "lodash";
// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const pieChartColors = [
  "#ff6f00",
  "#01579b",
  "#b71c1c",
  "#1b5e20",
  "#006064",
  "#1a237e",
];
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
    colors: pieChartColors,
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
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center md:justify-between"
      >
        <div className="flex  gap-4">
          <div className="w-max rounded-lg bg-gray-700 p-5 text-white">
            <CalendarDaysIcon className="h-6 w-6" />
          </div>
          <Typography variant="h6" color="blue-gray">
            Appointment Chart
          </Typography>
        </div>
        <div className="custom-datepicker-input">
          <DatePickerComponent
            format={"MMMM y'"}
            start="Year"
            depth="Year"
            className="w-36"
            value={new Date()}
            allowEdit={false}
          />
        </div>
      </CardHeader>
      <CardBody className="mt-4 grid place-items-center px-2">
        <Chart {...chartConfig} series={data} />
        <div className="flex items-center gap-4">
          {Object.keys(APPOINTMENT_STATUS).map((status, index) => {
            return (
              <div className="flex items-center gap-1">
                <span
                  className="mx-auto block h-2 w-2 rounded-full content-['']"
                  style={{
                    backgroundColor: pieChartColors[index],
                  }}
                />
                <p style={{ color: pieChartColors[index] }}>{status}</p>
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}
