import { useEffect, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { CreditCardProps, defaultCreditCard } from "./types";
import { Button, Card, Dialog, Typography } from "@material-tailwind/react";
import { useBoolean } from "@app/helpers/hooks";
import AddCreditCardModal from "./payment/AddCreditCardModal";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLIC_KEY } from "@app/config/enviroments";
import AddCreditCardStripe from "./payment/AddCreditCardStripe";
import CreditCard from "./payment/CreditCard";
import {
  deleteCreditCard,
  getCreditCardsMiddleware,
  updateMainCreditCard,
} from "./services/api";
import { useAppSelector } from "@app/hooks/useApp";
import { UserInfo } from "../auth/types";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { MESSAGE } from "@app/constants/message";
import NoCreditCardComponent from "@app/components/EmptyState/NoCreditCard";
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
    getCreditCardsMiddleware()
      .then((res) => {
        setCreditCards(res.filter((creditCard) => !creditCard.isMain));
        setMainCreditCard(res.find((item) => item.isMain) || defaultCreditCard);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onAddCreditCard = () => {
    getCreditCards();
    openAddCreditCardModal.setValue(false);
  };
  const onRemoveCard = (creditCardId: string) => {
    deleteCreditCard(creditCardId)
      .then((_res) => {
        getCreditCards();
        toast(<LabelNotification type="success" message="Success" />);
      })
      .catch((error) => {
        toast(
          <LabelNotification
            type="error"
            message={error.response?.data?.message || MESSAGE.COMMON_ERROR}
          />
        );
      });
  };
  const handleSelectPrimaryCard = (creditCard: CreditCardProps) => {
    updateMainCreditCard(creditCard.id)
      .then((_res) => {
        // setMainCreditCard(creditCard);
        getCreditCards();

        toast(<LabelNotification type="success" message="Success" />);
      })
      .catch((error) => {
        toast(
          <LabelNotification
            type="error"
            message={error.response?.data?.message || MESSAGE.COMMON_ERROR}
          />
        );
      });
  };
  return (
    <Card className="credit-card-setting w-full h-full p-4 justify-start ">
      {creditCards.length ? (
        <>
          {mainCreditCard.paymentMethodId && (
            <>
              <Typography
                varient="h4"
                className="font-bold mb-5 text-lg"
                color="blue-gray"
              >
                Main Credit Card
              </Typography>
              <div className="relative flex justify-start pb-4">
                <CreditCard
                  creditCardDetail={mainCreditCard}
                  onRemoveCard={onRemoveCard}
                />
              </div>
            </>
          )}
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
                  <CreditCard
                    creditCardDetail={creditCard}
                    onRemoveCard={onRemoveCard}
                    handleSelectPrimaryCard={handleSelectPrimaryCard}
                  />
                </div>
              );
            })}
          </div>
          <Button
            className="my-8 w-44"
            variant="outlined"
            onClick={() => {
              openAddCreditCardModal.setValue(true);
            }}
          >
            {" "}
            Add credit card
          </Button>
        </>
      ) : (
        <div className="flex justify-around">
          <NoCreditCardComponent
            onCreateCreditCard={() => openAddCreditCardModal.setValue(true)}
          />
        </div>
      )}
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
