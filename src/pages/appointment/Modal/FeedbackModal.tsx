import LabelNotification from "@app/components/Notification/LabelNotification";
import {
  IUseDefaultValueProps,
  useNumber,
  useString,
} from "@app/helpers/hooks";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Rating,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
interface Props {
  onSubmit: (feedback: string, rating: number) => void;
  onOpenModal: IUseDefaultValueProps;
  onCloseModal: () => void;
}
const FeedbackModal = (props: Props) => {
  const { onOpenModal, onSubmit, onCloseModal } = props;
  const feedback = useString();
  const rating = useNumber(1);
  return (
    <Dialog
      handler={() => {}}
      open={onOpenModal.value}
      size="sm"
      className="z-[1000000000000] p-10"
    >
      <DialogHeader className="flex flex-col">
        <Typography className="font-medium text-lg">Give feedback</Typography>
        <Typography className="font-normal text-sm">
          What do you think about this doctor?
        </Typography>
      </DialogHeader>
      <DialogBody className="flex flex-col gap-4 items-center justify-around">
        <Rating
          onChange={(e) => {
            rating.setValue(e);
          }}
          value={rating.value}
        />
        <Textarea
          required
          label="Your feedback"
          value={feedback.value}
          onChange={(e) => feedback.setValue(e.target.value)}
          className="min-h-[160px]"
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
            if (!feedback.value) {
              return toast(
                <LabelNotification
                  type="warning"
                  message="Reason is required."
                />
              );
            }
            onSubmit(feedback.value, rating.value);
            onOpenModal.setValue(false);
          }}
        >
          Submit
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default FeedbackModal;
