import { PAYMENT_STATUS } from "@app/pages/appointment/types";
import { Chip } from "@material-tailwind/react";
interface Props {
  status: PAYMENT_STATUS;
}
const PaymentStatusLable = (props: Props) => {
  const { status } = props;
  return (
    <Chip
      size="sm"
      variant="ghost"
      value={status}
      color={status === PAYMENT_STATUS.PAID ? "green" : "deep-purple"}
    />
  );
};
export default PaymentStatusLable;
