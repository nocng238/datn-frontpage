import React, { useEffect, useState } from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
  Textarea,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import CustomIcon from "@app/components/CustomIcon/CustomIcon";
import DoctorIcon from "@app/assets/icons/icon-doctor.svg";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import DoctorCard from "../../doctor/DoctorCard";
import NoteIcon from "@app/assets/icons/icon-note.svg";
import { DoctorDetail, defaultDoctorDetail } from "../../doctor/types";
import {
  checkDoctorAvailable,
  getDoctorsMiddleware,
} from "../../doctor/services/api";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { MESSAGE } from "@app/constants/message";
import {
  IUseDefaultValueProps,
  useBoolean,
  useString,
} from "@app/helpers/hooks";
import { ClientAppointmentDetail, CreateAppointmentRequest } from "../types";
import { createAppointmentMiddleware } from "../services/api";
import { XCircleIcon } from "@heroicons/react/24/solid";
interface Props {
  handleAddAppointment: () => void;
  doctorId: string;
  openModal: IUseDefaultValueProps;
}
export default function CreateAppointmentModal(props: Props) {
  const { handleAddAppointment, doctorId, openModal } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [dateTime, setDateTime] = useState<Date>();
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const isDoctorFree = useBoolean();
  const [doctors, setDoctors] = useState<DoctorDetail[]>([]);
  const description = useString();
  const today = new Date();
  today.setHours(today.getHours() + 1);
  today.setMinutes(0);
  today.setSeconds(0);

  useEffect(() => {
    if (!dateTime) {
      return;
    }
    const endTime = new Date(dateTime);
    endTime.setHours(endTime.getHours() + 1);
    checkDoctorAvailable(
      doctorId,
      dateTime.toISOString(),
      endTime.toISOString()
    )
      .then((res) => {
        // setDoctors(res.items);
        // setSelectedDoctor(defaultDoctorDetail);
        console.log(res);

        if (!res) {
          isDoctorFree.setValue(false);
          setDateTime(undefined);
          return toast(
            <LabelNotification
              type="warning"
              message={
                "This doctor is not available in your selected period. Please select a diffent period!!"
              }
            />
          );
        }
        isDoctorFree.setValue(true);
      })
      .catch((error) => {
        isDoctorFree.setValue(false);
        setDateTime(undefined);
        toast(
          <LabelNotification
            type="warning"
            message={
              "This doctor is not available in your selected period. Please select a diffent period!!"
            }
          />
        );
      });
  }, [dateTime]);
  //   const onSelectDoctor = (doctor: DoctorDetail) => {
  //     setSelectedDoctor(doctor);
  //   };
  const renderStepContent = () => {
    if (activeStep === 0) {
      return (
        <div className="flex items-center justify-around md:mt-5">
          <div className="w-96 custom-datepicker-input ">
            <DateTimePickerComponent
              value={dateTime}
              min={today}
              onChange={(e) => {
                setDateTime(e.value);
              }}
              placeholder="Choose a date and time"
              step={60}
              allowEdit={false}
            ></DateTimePickerComponent>
          </div>
        </div>
      );
    }
    // if (activeStep === 1) {
    //   return (
    //     <div className="grid grid-cols-auto-fill-min-350 gap-6 my-1">
    //       {doctors.map((doctor) => {
    //         return (
    //           <div
    //             onClick={() => onSelectDoctor(doctor)}
    //             className="cursor-pointer"
    //           >
    //             <DoctorCard
    //               doctorDetail={doctor}
    //               selectedDoctorId={selectedDoctor.id}
    //             />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
    // }
    if (activeStep === 1) {
      return (
        <div className="flex items-center justify-around">
          <div className="flex items-center justify-around pr-6 w-[32rem]">
            <Textarea
              color="blue-gray"
              label="Description"
              rows={8}
              value={description.value}
              onChange={(e) => description.setValue(e.target.value)}
            />
          </div>
        </div>
      );
    }
  };

  const disableNextForStep1 = () => {
    return activeStep === 0 && !isDoctorFree.value ? true : false;
  };
  const handleCreateAppointment = () => {
    if (!dateTime) {
      return;
    }
    const endTime = new Date(dateTime);
    endTime.setHours(endTime.getHours() + 1);
    const request: CreateAppointmentRequest = {
      startTime: dateTime.toISOString(),
      endTime: endTime.toISOString(),
      doctorId: doctorId,
      note: description.value,
    };
    createAppointmentMiddleware(request)
      .then((res) => {
        console.log("res");
        toast(<LabelNotification type="success" message="Success" />);
        handleAddAppointment();
      })
      .catch((error) => {
        toast(
          <LabelNotification
            type="error"
            message={error.response?.data?.message || MESSAGE.COMMON_ERROR}
          />
        );
      });
  };

  return (
    <Dialog
      size="xl"
      open={openModal.value}
      handler={() => {
        // openModal.setValue(!openModal.value);
      }}
      className="overflow-auto"
    >
      <DialogHeader className="justify-between">
        <div className="flex items-center gap-3">
          <div className="-mt-px flex flex-col">
            <Typography variant="large" color="blue-gray" className="font-bold">
              Create Appointment
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <XCircleIcon
            className="w-8 h-8 cursor-pointer"
            onClick={() => openModal.setValue(false)}
          />
        </div>
      </DialogHeader>
      <DialogBody className="w-full px-40 py-4 max-h-[90vh]">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>
            <CalendarDaysIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                Step 1
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Select time
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <CustomIcon src={NoteIcon} className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                Step 2
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal overflow-hidden w-full"
              >
                Provide doctor about your pet issue
              </Typography>
            </div>
          </Step>
        </Stepper>
        <div className="mt-20 max-h-[65vh] overflow-auto p-2">
          {renderStepContent()}
        </div>
        <div className="flex justify-between mt-4">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button
            onClick={() => {
              isLastStep ? handleCreateAppointment() : handleNext();
            }}
            disabled={disableNextForStep1()}
          >
            {isLastStep ? "Create" : "Next"}{" "}
          </Button>
        </div>
      </DialogBody>
    </Dialog>

    // </div>
  );
}
