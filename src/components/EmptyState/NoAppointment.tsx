import * as React from "react";
interface Props {
  onCreateAppointment?: () => void;
}
export default function ScheduleEmpty(props: Props) {
  const { onCreateAppointment } = props;
  return (
    <div className="shadow-md bg-white flex max-w-[400px] flex-col items-stretch px-14 py-12 rounded-3xl">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4bdec642ef21ef56832519575255b45c0df5cbb2445923fdc9f28b962586ba70?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bdec642ef21ef56832519575255b45c0df5cbb2445923fdc9f28b962586ba70?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bdec642ef21ef56832519575255b45c0df5cbb2445923fdc9f28b962586ba70?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bdec642ef21ef56832519575255b45c0df5cbb2445923fdc9f28b962586ba70?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bdec642ef21ef56832519575255b45c0df5cbb2445923fdc9f28b962586ba70?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bdec642ef21ef56832519575255b45c0df5cbb2445923fdc9f28b962586ba70?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bdec642ef21ef56832519575255b45c0df5cbb2445923fdc9f28b962586ba70?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4bdec642ef21ef56832519575255b45c0df5cbb2445923fdc9f28b962586ba70?apiKey=d1f90749406b400da2bb63e5353ca29d&"
        className="aspect-[1.25] object-contain object-center w-[250px] overflow-hidden self-center max-w-full"
        alt=""
      />
      <header
        className="text-neutral-600 text-center text-xl font-bold self-center w-full mt-1.5"
        aria-label="Schedule Message"
      >
        <span className="font-bold"> Your schedule is empty </span> <br />
        <span>There are no appointments scheduled</span>
      </header>
      {onCreateAppointment && (
        <div className="shadow-sm bg-blue-600 flex flex-col justify-center items-stretch mt-10 mb-1.5 rounded-3xl">
          <button
            className="text-white text-center text-lg font-bold whitespace-nowrap bg-blue-600 justify-center items-stretch px-12 py-5 rounded-3xl"
            aria-role="button"
            onClick={onCreateAppointment}
          >
            Book an appointment
          </button>
        </div>
      )}
    </div>
  );
}
