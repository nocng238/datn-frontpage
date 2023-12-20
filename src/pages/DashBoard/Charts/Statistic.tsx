interface Props {
  title: string;
  data: string;
  arrow: "down" | "up";
  percentage: number;
  icon: React.ReactNode;
}

const DownArrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
    />
  </svg>
);
const UpArrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);
const Statistic = (props: Props) => {
  const { arrow, data, title, percentage, icon } = props;
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-medium text-gray-900">{data}</p>
        </div>

        <span className="rounded-full bg-blue-100 p-3 text-blue-600">
          {icon}
        </span>
      </div>

      <div
        className={`mt-1 flex gap-1 ${
          arrow === "up" ? "text-green-600" : "text-red-600"
        }`}
      >
        {arrow === "up" ? UpArrowIcon : DownArrowIcon}

        <p className="flex gap-2 text-xs">
          <span className="font-medium"> {percentage}% </span>

          <span className="text-gray-500"> Since last week </span>
        </p>
      </div>
    </article>
  );
};
export default Statistic;
