import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
let todayStr = new Date().toISOString().replace(/T.*$/, "");
const Schedule = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      headerToolbar={{
        // left: "myCustomButton prev,today,next",
        left: "prev,today,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      initialEvents={[
        {
          id: Math.random().toString(),
          title: "All-day event",
          start: todayStr,

          // date: "2020-07-29"
        },
        {
          id: Math.random().toString(),
          title: "Timed event",
          start: todayStr + "T12:00:00",
          end: todayStr + "T13:00:00",
          // date: "2020-07-30"
        },
      ]}
      buttonText={{
        today: "current",
        month: "month",
        week: "week",
        day: "day",
        list: "list",
      }}
    />
  );
};

export default Schedule;
