import { useAppSelector } from "@app/hooks/useApp";
import { CREDIT_BRAND, CreditCardProps } from "../types";
import CustomIcon from "@app/components/CustomIcon/CustomIcon";
import VisaIcon from "@app/assets/icons/icon-visa.svg";
import { useBoolean } from "@app/helpers/hooks";
import {
  List,
  ListItem,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

interface Props {
  creditCardDetail: CreditCardProps;
  onRemoveCard: (paymentMethodId: string) => void;
}
const CreditCard = (props: Props) => {
  const user = useAppSelector((state) => state.userInfo);
  const openSelectCardOption = useBoolean();
  const { creditCardDetail, onRemoveCard } = props;
  return (
    <div className="flex flex-col relative justify-center items-center">
      <div className="absolute top-2 right-2 z-40 cursor-pointer">
        <Popover
          open={openSelectCardOption.value}
          placement="bottom-start"
          handler={() => {
            openSelectCardOption.setValue(!openSelectCardOption.value);
          }}
        >
          <PopoverHandler>
            <EllipsisHorizontalIcon className="w-7 h-7" />
          </PopoverHandler>
          <PopoverContent className="p-0">
            <List className="min-w-0">
              <ListItem
                onClick={() => {
                  onRemoveCard(creditCardDetail.paymentMethodId);
                }}
              >
                {" "}
                Remove
              </ListItem>
              <ListItem className="font-light">Select as main card</ListItem>
            </List>
          </PopoverContent>
        </Popover>
      </div>
      <div className="space-y-16">
        <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-md transition-transform transform">
          <img
            className="relative object-cover w-full h-full rounded-xl"
            src="https://i.imgur.com/kGkSg1v.png"
          />

          <div className="w-full px-8 absolute top-8 flex flex-col gap-3">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light">Name</p>
                <p className="font-bold tracking-widest font-mono">
                  {user.fullname}
                </p>
              </div>
              {creditCardDetail.brand === CREDIT_BRAND.MASTER ? (
                <img
                  className="w-14"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1000px-Mastercard-logo.svg.png"
                />
              ) : (
                <CustomIcon src={VisaIcon} className="w-14" />
              )}
            </div>
            <div className="pt-1 flex flex-col gap-1">
              <p className="font-light">Num.</p>
              <p className="font-medium tracking-more-wider font-mono">
                <span className="bg-blue-700  rounded-full px-2 py-1 text-xs absolute">
                  ●●●● ●●●● ●●●● {creditCardDetail.last_4_number}
                </span>
              </p>
            </div>
            <div className="pt-6 pr-6">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light text-xs">Expires At</p>
                  <p className="font-medium tracking-wider text-sm font-mono">
                    {creditCardDetail.exp_month}/{creditCardDetail.exp_year}
                  </p>
                </div>

                <div className="">
                  <p className="font-light text-xs">CVC</p>
                  <p className="font-bold tracking-more-wider text-sm font-mono">
                    ●●●
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
