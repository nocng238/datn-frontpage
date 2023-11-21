import React, { useState } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import CustomIcon from "@app/components/CustomIcon/CustomIcon";
import DoctorIcon from "@app/assets/icons/icon-doctor.svg";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import DoctorCard from "../doctor/DoctorCard";
import Payments from "../Profile/Payments";
export default function CreateAppointmentProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [dateTime, setDateTime] = useState<Date>();
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  const loop = [12, 3, 4, 5, 4, 2, 2, 3, 11, 2323232, 1, 1, 1, 1];
  const [selectedDoctor, setSelectedDoctor] = useState<any>();
  const today = new Date();
  const renderStepContent = () => {
    if (activeStep === 0) {
      return (
        <div className="flex items-center justify-around md:mt-5">
          <div className="w-96 ">
            <DateTimePickerComponent
              disabled={true}
              value={dateTime}
              min={today}
              onChange={(e) => {
                setDateTime(e.value);
              }}
              placeholder="Choose a date and time"
              step={60}
            ></DateTimePickerComponent>
          </div>
        </div>
      );
    }
    if (activeStep === 1) {
      return (
        <div className="grid grid-cols-auto-fill-min-350 gap-6 my-1">
          {loop.map((item) => {
            return (
              <DoctorCard
                onClick={() => {
                  // openModal.setValue(true);
                }}
              />
            );
          })}
        </div>
      );
    }
    if (activeStep === 2) {
      return (
        <div className="flex items-center justify-around pr-6">
          <Payments />
        </div>
      );
    }
  };
  return (
    <div className="w-full px-24 py-4 max-h-[90vh]">
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
          <CustomIcon src={DoctorIcon} />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "blue-gray" : "gray"}
            >
              Step 2
            </Typography>
            <Typography
              color={activeStep === 1 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Select doctor
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <CreditCardIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "blue-gray" : "gray"}
            >
              Step 3
            </Typography>
            <Typography
              color={activeStep === 2 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Select your payment
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
        <Button onClick={handleNext} disabled={isFirstStep && !dateTime}>
          {isLastStep ? "Create" : "Next"}{" "}
        </Button>
      </div>
    </div>
    // </div>
  );
}
