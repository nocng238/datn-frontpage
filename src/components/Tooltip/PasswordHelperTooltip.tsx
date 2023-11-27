import { Tooltip, Typography } from "@material-tailwind/react";

export default function PasswordHelperTooltip() {
  return (
    <Tooltip
      content={
        <div className="w-72">
          <Typography
            variant="small"
            color="white"
            className="font-normal opacity-80"
          >
            Use at least 8 characters, one uppercase, one lowercase and one
            number.
          </Typography>
        </div>
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5 cursor-pointer text-blue-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </Tooltip>
  );
}
