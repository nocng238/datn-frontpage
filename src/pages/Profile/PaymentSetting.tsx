import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { CreditCardProps, defaultCreditCard } from "./types";
import {
  Button,
  Card,
  Dialog,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import { useBoolean } from "@app/helpers/hooks";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import AddCreditCardModal from "./payment/AddCreditCardModal";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLIC_KEY } from "@app/config/enviroments";
import AddCreditCardStripe from "./payment/AddCreditCardStripe";
import CreditCard from "./payment/CreditCard";
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
const PaymentSetting = () => {
  const [creditCards, setCreditCards] = useState<CreditCardProps[]>([
    {
      name: "Walker Alan",
      cvc: "179",
      expiry: "05/23",
      number: "5245 0017 2000 0164",
      focused: "name",
    },
  ]);
  const [mainCreditCard, setMainCreditCard] =
    useState<CreditCardProps>(defaultCreditCard);
  const openAddCreditCardModal = useBoolean(false);
  const onAddCreditCard = (creditCardInfo: CreditCardProps) => {
    setCreditCards([...creditCards, creditCardInfo]);
    openAddCreditCardModal.setValue(false);
  };
  const onRemoveCard = (cardId: string) => {
    // const newCreditCards = creditCards.filter(item => item.id !== cardId)
  };
  const handleSelectPrimaryCard = (creditCard: CreditCardProps) => {
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
              <CreditCard />
              <div className="absolute right-0 top-2 cursor-pointer">
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
        <Elements stripe={stripePromise}>
          <AddCreditCardStripe
            onAddCreditCard={onAddCreditCard}
            onCloseModal={() => {
              openAddCreditCardModal.setValue(false);
            }}
          />
        </Elements>
      </Dialog>
    </Card>
  );
};

export default PaymentSetting;
