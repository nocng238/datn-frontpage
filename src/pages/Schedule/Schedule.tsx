import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { getListAppointmentForDoctor } from "../appointment/services/api";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { toast } from "react-toastify";
import { MESSAGE } from "@app/constants/message";
import {
  APPOINTMENT_STATUS,
  DoctorAppoinmentDetail,
} from "../appointment/types";
import moment from "moment";
import { EventContentArg } from "@fullcalendar/core";
let todayStr = new Date().toISOString().replace(/T.*$/, "");
const Schedule = () => {
  const [appointments, setAppointments] = useState<DoctorAppoinmentDetail[]>(
    []
  );
  useEffect(() => {
    getAppointmentList();
  }, []);

  const getAppointmentList = () => {
    getListAppointmentForDoctor({})
      .then((res) => {
        setAppointments(res.items);
      })
      .catch((error) => {
        console.log(error);
        toast(
          <LabelNotification type="error" message={MESSAGE.COMMON_ERROR} />
        );
      });
  };
  const date = new Date();
  date.setHours(date.getHours() + 1);
  function renderEventContent(eventInfo) {
    console.log(eventInfo);

    return (
      <div>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  }
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
      events={appointments.map((appointment) => {
        return {
          id: appointment.id,
          start: new Date(appointment.startTime),
          end: new Date(appointment.endTime),
          title: `Appointment with ${appointment.client.fullname}`,
          color:
            appointment.status === APPOINTMENT_STATUS.FINISHED
              ? "green"
              : "red",
        };
      })}
      buttonText={{
        today: "current",
        month: "month",
        week: "week",
        day: "day",
        list: "list",
      }}
      // eventContent={renderEventContent}
    />
  );
};

export default Schedule;
