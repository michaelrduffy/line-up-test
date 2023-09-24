import { useSelector } from "react-redux";
import { RootState } from "../store";
import formatCurrency from "../utils/formatCurrency";

const BasketSummary = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const total = Object.values(basket.tickets).reduce((a, b) => {
    const fees = b.ticket.adjusters.reduce((a, b) => {
      if (b.rateType === "FIXED_RATE") {
        return a + b.rate;
      }
      return a;
    }, 0);
    return a + (b.ticket.price.value + fees) * b.qty;
  }, 0);

  if (Object.keys(basket.tickets).length < 1) {
    return null;
  }

  return (
    <div className="flex w-full bg-[#ffffff88] py-10 fixed bottom-0 backdrop-blur-md fade-up">
      <div className="w-[80%] lg:w-3/4 max-w-[1280px] mx-auto grid grid-cols-8">
        <div className="col-span-6">
          <h3 className="font-bold text-xl tabular-nums">
            Total (incl. fees): {formatCurrency(total)}
          </h3>
        </div>
        <div className="col-span-2 flex flex-col justify-center items-end">
          <button
            onClick={() => {
              console.log(basket);
              alert("Checking out !");
            }}
            className="rounded bg-black text-white px-4 py-2 hover:bg-gray-500 transition duration-200"
          >
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketSummary;
