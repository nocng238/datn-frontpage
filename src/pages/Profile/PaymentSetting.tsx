import { useEffect, useState } from "react";
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
import AddCreditCardModal from "./payment/AddCreditCardModal";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLIC_KEY } from "@app/config/enviroments";
import AddCreditCardStripe from "./payment/AddCreditCardStripe";
import CreditCard from "./payment/CreditCard";
import { getCreditCardsMiddleware } from "./services/api";
import { useAppSelector } from "@app/hooks/useApp";
import { UserInfo } from "../auth/types";
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
interface Props {
  user: UserInfo;
}
const PaymentSetting = (props: Props) => {
  const { user } = props;
  const [creditCards, setCreditCards] = useState<CreditCardProps[]>([]);
  const [mainCreditCard, setMainCreditCard] =
    useState<CreditCardProps>(defaultCreditCard);
  const openAddCreditCardModal = useBoolean(false);

  useEffect(() => {
    getCreditCards();
  }, [user]);

  const getCreditCards = () => {
    if (!user.stripeCustomerId) {
      return;
    }
    getCreditCardsMiddleware(user.stripeCustomerId || "")
      .then((res) => {
        setCreditCards(res);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  const onAddCreditCard = () => {
    getCreditCards();
    openAddCreditCardModal.setValue(false);
  };
  const onRemoveCard = (paymentMethodId: string) => {
    // const newCreditCards = creditCards.filter(item => item.id !== cardId)
  };
  const handleSelectPrimaryCard = (creditCard: CreditCardProps) => {
    setMainCreditCard(creditCard);
  };
  return (
    <Card className="credit-card-setting w-full h-full p-4 ">
      <Typography
        varient="h4"
        className="font-bold mb-5 text-lg"
        color="blue-gray"
      >
        Payment methods
      </Typography>
      <div className=" grid grid-cols-3 gap-10">
        {creditCards.map((creditCard) => {
          return (
            <div className="relative">
              <CreditCard
                creditCardDetail={creditCard}
                onRemoveCard={onRemoveCard}
              />
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
