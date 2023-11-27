import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { CreditCard, defaultCreditCard } from "./types";
import {
  Button,
  Card,
  Dialog,
  Popover,
  PopoverContent,
  PopoverHandler,
  Select,
  Typography,
  Option,
  List,
  ListItem,
} from "@material-tailwind/react";
import InputDefault from "@app/components/Input/InputDefault";
import { useBoolean } from "@app/helpers/hooks";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import AddCreditCardModal from "./payment/AddCreditCardModal";
const PaymentSetting = () => {
  const [creditCards, setCreditCards] = useState<CreditCard[]>([
    {
      name: "Walker Alan",
      cvc: "179",
      expiry: "05/23",
      number: "5245 0017 2000 0164",
      focused: "name",
    },
  ]);
  const [mainCreditCard, setMainCreditCard] =
    useState<CreditCard>(defaultCreditCard);
  const openAddCreditCardModal = useBoolean(false);
  const onAddCreditCard = (creditCardInfo: CreditCard) => {
    setCreditCards([...creditCards, creditCardInfo]);
    openAddCreditCardModal.setValue(false);
  };
  const onRemoveCard = (cardId: string) => {
    // const newCreditCards = creditCards.filter(item => item.id !== cardId)
  };
  const handleSelectPrimaryCard = (creditCard: CreditCard) => {
    setMainCreditCard(creditCard);
  };
  const openSelectCardOption = useBoolean();
  return (
    <Card className="credit-card-setting h-full p-4 ">
      <Typography
        varient="h4"
        className="font-bold mb-5 text-lg"
        color="blue-gray"
      >
        Payment methods
      </Typography>
      <div className="grid grid-cols-3 gap-10">
        {creditCards.map((creditCard) => {
          return (
            <div className="relative">
              <Cards {...creditCard} focused={undefined} />
              <div className="absolute right-3 top-3 cursor-pointer">
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
                    <List>
                      <ListItem> Remove</ListItem>
                      <ListItem className="font-light">
                        Select as main card
                      </ListItem>
                    </List>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          );
        })}
      </div>
      <Button
        className="my-10 w-44"
        variant="outlined"
        onClick={() => {
          openAddCreditCardModal.setValue(true);
        }}
      >
        {" "}
        Add credit card
      </Button>
      <Dialog
        size="xs"
        className="w-96"
        handler={() => {
          openAddCreditCardModal.setValue(false);
        }}
        open={openAddCreditCardModal.value}
      >
        <AddCreditCardModal
          onAddCreditCard={onAddCreditCard}
          onCloseModal={() => {
            openAddCreditCardModal.setValue(false);
          }}
        />
      </Dialog>
    </Card>
  );
};

export default PaymentSetting;
