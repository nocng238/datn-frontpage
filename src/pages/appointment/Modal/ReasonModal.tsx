import LabelNotification from "@app/components/Notification/LabelNotification";
import { IUseDefaultValueProps, useString } from "@app/helpers/hooks";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
interface Props {
  onSubmit: (reason: string) => void;
  onOpenModal: IUseDefaultValueProps;
  onCloseModal: () => void;
}
const ReasonModal = (props: Props) => {
  const { onOpenModal, onSubmit, onCloseModal } = props;
  const reason = useString();
  return (
    <Dialog
      handler={() => {}}
      open={onOpenModal.value}
      size="sm"
      className="z-[1000000000000]"
    >
      <DialogBody>
        <Textarea
          label="Reason"
          value={reason.value}
          onChange={(e) => reason.setValue(e.target.value)}
        ></Textarea>
      </DialogBody>
      <DialogFooter className="flex items-center justify-center gap-10">
        <Button
          size="md"
          variant="outlined"
          color="blue"
          className="flex items-center"
          onClick={() => {
            onOpenModal.setValue(false);
            onCloseModal();
          }}
        >
          Cancel
        </Button>
        <Button
          size="md"
          variant="gradient"
          color="blue"
          className="flex items-center"
          onClick={() => {
            if (!reason.value) {
              return toast(
                <LabelNotification
                  type="warning"
                  message="Reason is required."
                />
              );
            }
            onSubmit(reason.value);
            onOpenModal.setValue(false);
          }}
        >
          Submit
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default ReasonModal;
