import { Chip } from "@material-tailwind/react";
interface Props {
  status: "paid" | "pending" | "cancel";
}
const PaymentStatusLable = (props: Props) => {
  const { status } = props;
  return (
    <Chip
      size="sm"
      variant="ghost"
      value={status}
      color={
        status === "paid" ? "green" : status === "pending" ? "amber" : "red"
      }
    />
  );
};
export default PaymentStatusLable;
