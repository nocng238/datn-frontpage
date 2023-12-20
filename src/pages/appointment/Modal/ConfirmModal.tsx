import LabelNotification from "@app/components/Notification/LabelNotification";
import { IUseDefaultValueProps, useString } from "@app/helpers/hooks";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
interface Props {
  onSubmit: () => void;
  onOpenModal: IUseDefaultValueProps;
  onCloseModal: () => void;
  title?: string;
  content?: string;
}
const ConfirmModal = (props: Props) => {
  const { onOpenModal, onSubmit, onCloseModal, title, content } = props;
  return (
    <Dialog handler={() => {}} open={onOpenModal.value} size="sm">
      <DialogHeader>
        <Typography variant="h5" color="blue-gray">
          Confirmation
        </Typography>
      </DialogHeader>
      <DialogBody>
        <div className="flex flex-col items-center">
          <p
            style={{
              color: "#222222",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            {title ?? "Are you sure to delete this component?"}
          </p>
          <p
            style={{
              color: "#222222",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            {content ?? "This action can not undo."}
          </p>
        </div>
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
            onSubmit();
            onOpenModal.setValue(false);
          }}
        >
          Submit
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default ConfirmModal;
