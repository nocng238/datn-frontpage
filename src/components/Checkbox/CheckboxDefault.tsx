import { Checkbox } from "@material-tailwind/react";
import { CheckboxDefaultProps } from "./types";

const CheckboxDefault = (props: CheckboxDefaultProps) => {
  return <Checkbox {...props} crossOrigin={undefined} />;
};
export default CheckboxDefault;
