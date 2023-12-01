import InputDefault from "@app/components/Input/InputDefault";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useMemo, useState } from "react";
import Cards from "react-credit-cards";
import { CreditCardProps, defaultCreditCard } from "../types";
import { CreditCardIcon } from "@heroicons/react/24/solid";
import { formatCardNumber, formatExpires } from "@app/helpers/utils";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLIC_KEY } from "@app/config/enviroments";
import { addCreditCard, charge } from "../services/api";
interface AddCreditCardModal {
  onAddCreditCard: (creditCardInfo: CreditCardProps) => void;
  onCloseModal: () => void;
}
const AddCreditCardStripe = (props: AddCreditCardModal) => {
  const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

  const { onAddCreditCard, onCloseModal } = props;
  const [creditCard, setCreditCard] =
    useState<CreditCardProps>(defaultCreditCard);
  const setCreditCardInfo = (name: string, value: string) => {
    setCreditCard({ ...creditCard, [name]: value });
  };
  const stripe = useStripe();
  const elements = useElements();
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );
  //   const options = useOptions();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(elements);

    // const cardExpiryElement = elements?.getElement(CardExpiryElement);
    const cardElement = elements?.getElement(CardNumberElement);
    console.log(event);

    // const
    console.log("cardElement: ", cardElement);

    if (!stripe || !elements || !cardElement) {
      return;
    }

    const stripeResponse = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    console.log(stripeResponse);

    const { error, paymentMethod } = stripeResponse;

    if (error || !paymentMethod) {
      return;
    }
    addCreditCard(paymentMethod.id)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    // charge(paymentMethod.id, 100).then((res) => {
    //   console.log(res);
    // });
    // console.log("[PaymentMethod]", payload);
  };
  return (
    <Card>
      <div className="pt-4">
        <Cards {...creditCard} />
      </div>
      <CardBody>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {/* <CardElement
            onChange={(e) => {
              console.log(e);
            }}
          > */}
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Card number
          </Typography>
          <CardNumberElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
          {/* <InputDefault
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
          /> */}
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
              <CardExpiryElement
                //   options={options}
                onReady={() => {
                  console.log("CardNumberElement [ready]");
                }}
                onChange={(event) => {
                  console.log("CardNumberElement [change]", event);
                }}
                onBlur={() => {
                  console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                  console.log("CardNumberElement [focus]");
                }}
              />
              {/* <InputDefault
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
              /> */}
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                CVC
              </Typography>
              <CardCvcElement
                options={options}
                onReady={() => {
                  console.log("CardNumberElement [ready]");
                }}
                onChange={(event) => {
                  console.log("CardNumberElement [change]", event);
                }}
                onBlur={() => {
                  console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                  console.log("CardNumberElement [focus]");
                }}
              />
              {/* <InputDefault
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
              /> */}
            </div>
          </div>
          {/* </CardElement> */}

          <CardFooter className="flex justify-evenly">
            <Button onClick={onCloseModal}>Cancel</Button>
            <Button type="submit">Save</Button>

            {/* <Button onClick={() => onAddCreditCard(creditCard)}>Save</Button> */}
          </CardFooter>
        </form>
      </CardBody>
    </Card>
  );
};
export default AddCreditCardStripe;
