import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import InputDefault from "./InputDefault";
import { Button, InputProps } from "@material-tailwind/react";
interface SearchInputProps extends InputProps {
  onRemoveSearch: () => void;
}
const SearchInput = (props: SearchInputProps) => {
  const { onRemoveSearch } = props;
  return (
    <div className="relative flex w-full shrink-0 gap-2 md:w-max">
      <InputDefault
        {...props}
        className="pl-9"
        containerProps={{
          className: "min-w-[288px]",
        }}
        labelProps={{
          className: "hidden",
        }}
        placeholder="Search"
        icon={
          <XCircleIcon
            className="h-5 w-5 cursor-pointer"
            onClick={onRemoveSearch}
          />
        }
      />
      <MagnifyingGlassIcon className="h-5 w-5 !absolute left-3 top-[10px]" />
    </div>
  );
};

export default SearchInput;
