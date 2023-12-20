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
import { useBoolean } from "@app/helpers/hooks";
import AppointmentDetailModal from "../appointment/Modal/AppoimentDetailModal";
const Schedule = () => {
  const [appointments, setAppointments] = useState<DoctorAppoinmentDetail[]>(
    []
  );
  const [selectedAppointment, setSelectedAppointment] =
    useState<DoctorAppoinmentDetail>();
  const openModal = useBoolean();
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
  function renderEventContent(eventInfo: EventContentArg) {
    const bg = eventInfo.backgroundColor;
    return (
      <div
        className={`h-fit overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer rounded-md`}
        style={{
          backgroundColor: bg || "blueviolet",
        }}
      >
        <p>{eventInfo.timeText}</p>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  }
  return (
    <>
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
            start: moment(appointment.startTime).toDate(),
            end: moment(appointment.endTime).toDate(),
            title: `Appointment with ${appointment.client.fullname}`,
            color:
              appointment.status === APPOINTMENT_STATUS.PENDING
                ? "#fdd835"
                : appointment.status === APPOINTMENT_STATUS.APPROVED
                ? "#1e88e5"
                : appointment.status === APPOINTMENT_STATUS.FINISHED
                ? "#43a047"
                : appointment.status === APPOINTMENT_STATUS.ABSENT
                ? "#ba68c8"
                : "#e53935",
          };
        })}
        eventClick={(event) => {
          const selectedAppointment = appointments.find(
            (item) => item.id === event.event.id
          );
          if (!selectedAppointment) return;
          setSelectedAppointment(selectedAppointment);
          openModal.setValue(true);
        }}
        buttonText={{
          today: "current",
          month: "month",
          week: "week",
          day: "day",
          list: "list",
        }}
        eventContent={renderEventContent}
      />
      {selectedAppointment && (
        <AppointmentDetailModal
          appointmentDetail={selectedAppointment}
          openModal={openModal}
        />
      )}
    </>
  );
};

export default Schedule;
