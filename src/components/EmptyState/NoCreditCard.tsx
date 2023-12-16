import React from "react";
interface Props {
  onCreateCreditCard: () => void;
}
function NoCreditCardComponent(props: Props) {
  const { onCreateCreditCard } = props;
  return (
    <section className="shadow-md bg-white flex max-w-[400px] flex-col px-9 py-12 rounded-3xl">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/24b0d1d6f095957a01d55ee0909a25c754fed3bd53c70d038d176976bbe9139c?apiKey=d1f90749406b400da2bb63e5353ca29d&"
        className="aspect-[1.25] object-contain object-center w-[250px] overflow-hidden self-center max-w-full"
        alt="Credit Card"
      />
      <header className="text-neutral-600 text-center text-xl font-bold self-center w-full mt-1.5">
        No credit cards
      </header>
      <div className="text-neutral-600 text-center text-xl self-stretch mt-3">
        Please add some credit card to your account
      </div>
      <div className="shadow-sm bg-blue-600 self-center flex w-full max-w-[290px] flex-col justify-center items-stretch mt-10 mb-1.5 rounded-3xl">
        <button
          className="text-white text-center text-lg font-bold whitespace-nowrap bg-blue-600 justify-center items-center px-16 py-5 rounded-3xl"
          aria-label="Add a credit card"
          onClick={onCreateCreditCard}
        >
          Add a credit card
        </button>
      </div>
    </section>
  );
}

export default NoCreditCardComponent;
