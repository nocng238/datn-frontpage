import { useBoolean, useString } from "@app/helpers/hooks";
import DoctorCard from "./DoctorCard";
import {
  Avatar,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import PdfRenderer from "./PdfRender";
// import samplePdf from "@app/assets/Get_Started_With_Smallpdf.pdf";

import samplePdf from "@app/assets/_ch02 Introduction to Modern Symmetric-key Ciphers.pdf";
import { XCircleIcon } from "@heroicons/react/24/solid";
import InputDefault from "@app/components/Input/InputDefault";
import SearchInput from "@app/components/Input/SearchInput";
const DoctorPage = () => {
  const openModal = useBoolean();
  const loop = [12, 3, 4, 5, 4, 2, 2, 3, 11, 2323232, 1, 1, 1, 1];
  const search = useString();
  const onRemoveSearch = () => {
    search.setValue("");
  };
  const onChangeSearchInput = (e) => {
    search.setValue(e.target.value);
  };
  return (
    <div className="flex flex-col gap-5 px-6">
      {/* header */}
      <div className="flex pt-4">
        <div className="flex items-center">
          <SearchInput
            onRemoveSearch={onRemoveSearch}
            onChange={onChangeSearchInput}
            value={search.value}
          />
        </div>
      </div>
      {/* body */}
      <div className="grid grid-cols-auto-fill-min-350 gap-6 my-1">
        {loop.map((item) => {
          return (
            <DoctorCard
              onClick={() => {
                openModal.setValue(true);
              }}
            />
          );
        })}
        <Dialog
          size="xl"
          open={openModal.value}
          handler={() => {
            openModal.setValue(!openModal.value);
          }}
          className="overflow-auto"
        >
          <DialogHeader className="justify-between">
            <div className="flex items-center gap-3">
              <Avatar
                size="sm"
                variant="circular"
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <div className="-mt-px flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  Tania Andrew
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="text-xs font-normal"
                >
                  @emmaroberts
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
          <DialogBody>
            <div className="w-full flex rounded-lg ">
              <div className="w-[50%]">this is doctor info</div>
              <PdfRenderer url={samplePdf} />
            </div>
          </DialogBody>
          <DialogFooter className="justify-between">
            <div className="flex items-center gap-16">
              <div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Reviews
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  44,082,044
                </Typography>
              </div>
              <div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Patients
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  553,031
                </Typography>
              </div>
            </div>
            <Button
              size="sm"
              variant="gradient"
              color="blue"
              className="mr-5 flex items-center"
            >
              Make an appointment
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};
export default DoctorPage;
