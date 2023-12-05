import { CalendarIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
interface Props {
  onClick?: () => void;
  context: string;
  showButton?: boolean;
}
const NoData = (props: Props) => {
  const { context } = props;
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <CalendarIcon className="w-40 h-40" />
      <Typography className="font-base text-sm py-6 text-[#111111]">
        {context}
      </Typography>
    </div>
  );
};
export default NoData;
