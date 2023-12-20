import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { BanknotesIcon } from "@heroicons/react/24/solid";
interface Props {
  data: number[];
}
export default function LineChart({ data }: Props) {
  const chartConfig = {
    height: 240,
    series: [
      {
        name: "Revenue",
        data: [12, 32, 50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        // show: "$",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
          formatter: (value: any) => {
            return `${value} $`;
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  return (
    <Card className="w-full">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
            <BanknotesIcon className="h-6 w-6" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray">
              Revenue Chart
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
        </div>
        <div className="custom-datepicker-input">
          <DatePickerComponent
            format={"y"}
            start="Decade"
            depth="Decade"
            className="w-36"
            value={new Date()}
            allowEdit={false}
          />
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart
          {...chartConfig}
          type={"line"}
          series={[
            {
              name: "Revenue",
              data,
            },
          ]}
        />
      </CardBody>
    </Card>
  );
}
