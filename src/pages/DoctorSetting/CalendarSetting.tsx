import React, { useEffect, useRef, useState } from "react";
import { DayPilotCalendar, DayPilot } from "@daypilot/daypilot-lite-react";

const CalendarSetting = () => {
  //   const [config, setConfig] = useState({
  //     viewType: "Week",
  //   });
  const [config, setConfig] = useState({
    viewType: "Resources",
    columns: [
      { name: "Monday", id: "R1" },
      { name: "Tuesday", id: "R2" },
      { name: "Wednesday", id: "R3" },
      { name: "Thursday", id: "R4" },
      { name: "Friday", id: "R5" },
      { name: "Saturday", id: "R6" },
      { name: "Sundat", id: "R7" },
    ],
  });
  const calendarRef = useRef<any>();

  useEffect(() => {
    // load event data
    calendarRef.current.control.update({
      startDate: "2023-12-15",
      events: [
        {
          id: 1,
          text: "Event 1",
          start: "2023-12-02T10:30:00",
          end: "2023-12-02T13:00:00",
        },
        {
          id: 2,
          text: "Event 2",
          start: "2023-12-03T09:30:00",
          end: "2023-12-03T11:30:00",
          backColor: "#6aa84f",
        },
        {
          id: 3,
          text: "Event 3",
          start: "2023-12-15T12:00:00",
          end: "2023-12-15T15:00:00",
          backColor: "#f1c232",
        },
        {
          id: 4,
          text: "Event 4",
          start: "2023-10-01T11:30:00",
          end: "2023-10-01T14:30:00",
          backColor: "#cc4125",
        },
      ],
    });
  }, []);
  const handleTimeRangeSelected = (args: any) => {
    const dp = calendarRef.current.control;
    // console.log(dp);/

    dp.events.add({
      start: args.start,
      end: args.end,
      id: DayPilot.guid(),
      text: "hello",
    });
    console.log("args : ", args);

    calendarRef.current.control.update({
      startDate: args.day,
    });
  };

  return (
    <div className="h-[90vh]">
      <DayPilotCalendar
        {...config}
        ref={calendarRef}
        onTimeRangeSelected={handleTimeRangeSelected}
      />
    </div>
  );
};

export default CalendarSetting;
