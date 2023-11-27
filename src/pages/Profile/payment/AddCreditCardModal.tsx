import InputDefault from "@app/components/Input/InputDefault";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import Cards from "react-credit-cards";
import { CreditCard, defaultCreditCard } from "../types";
import { CreditCardIcon } from "@heroicons/react/24/solid";
import { formatCardNumber, formatExpires } from "@app/helpers/utils";
interface AddCreditCardModal {
  onAddCreditCard: (creditCardInfo: CreditCard) => void;
  onCloseModal: () => void;
}
const AddCreditCardModal = (props: AddCreditCardModal) => {
  const { onAddCreditCard, onCloseModal } = props;
  const [creditCard, setCreditCard] = useState<CreditCard>(defaultCreditCard);
  const setCreditCardInfo = (name: string, value: string) => {
    setCreditCard({ ...creditCard, [name]: value });
  };
  return (
    <Card>
      <div className="pt-4">
        <Cards {...creditCard} />
      </div>
      <CardBody>
        <div className="flex flex-col gap-3">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Card number
          </Typography>
          <InputDefault
            maxLength={19}
            value={creditCard.number}
            onChange={(e) => {
              setCreditCardInfo("number", formatCardNumber(e.target.value));
            }}
            onFocus={() => {
              setCreditCardInfo("focused", "number");
            }}
            icon={
              <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
            }
          />
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Card name
          </Typography>
          <InputDefault
            value={creditCard.name}
            onChange={(e) => {
              setCreditCardInfo("name", e.target.value);
            }}
            onFocus={() => {
              setCreditCardInfo("focused", "name");
            }}
          />
          <div className="flex items-center justify-between gap-4">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Exp. Date
              </Typography>
              <InputDefault
                value={creditCard.expiry}
                onChange={(e) => {
                  setCreditCardInfo("expiry", formatExpires(e.target.value));
                }}
                containerProps={{ className: "min-w-[72px]" }}
                placeholder="00/00"
                maxLength={5}
                onFocus={() => {
                  setCreditCardInfo("focused", "expiry");
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                CVC
              </Typography>
              <InputDefault
                maxLength={4}
                containerProps={{ className: "min-w-[72px]" }}
                placeholder="000"
                value={creditCard.cvc}
                onChange={(e) => {
                  setCreditCardInfo("cvc", e.target.value);
                }}
                onFocus={() => {
                  setCreditCardInfo("focused", "cvc");
                }}
              />
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex justify-evenly">
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button onClick={() => onAddCreditCard(creditCard)}>Save</Button>
      </CardFooter>
    </Card>
  );
};
export default AddCreditCardModal;
