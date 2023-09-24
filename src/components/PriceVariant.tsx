import { HTMLAttributes, PropsWithChildren } from "react";
import { PricingBandWithVariants, PricingVariant } from "../types/performance";
import { useDispatch, useSelector } from "react-redux";
import { addTicket, removeTicket } from "../store/basketSlice";
import { RootState } from "../store";
import formatCurrency from "../utils/formatCurrency";

const Button = (
  props: PropsWithChildren & HTMLAttributes<HTMLButtonElement>
) => (
  <button
    {...props}
    className={`bg-blue-600 w-[64px] h-[64px] p-2 rounded-full aspect-square block text-white text-xl font-bold hover:bg-blue-800 hover:scale-[0.98] transition duration-200 ${props.className}`}
  />
);

const PriceVariant = (props: {
  variant: PricingVariant;
  band: PricingBandWithVariants;
}) => {
  const { variant, band } = props;
  const qty = useSelector((state: RootState) => {
    return state.basket.tickets[`${band.id}_${variant.id}`]?.qty ?? 0;
  });
  const dispatch = useDispatch();
  const fees = variant.adjusters.reduce((a, b) => {
    if (b.rateType === "FIXED_RATE") {
      return a + b.rate;
    }
    //Handle other types of rates here:
    return a;
  }, 0);

  //TODO: Handle discounts in the same way
  return (
    <div className="w-full grid py-8 border-b-2 grid-cols-4 gap-8">
      <div className="col-span-2 flex flex-col gap-2">
        <h2 className="text-xl font-bold mb-2">
          {band.name} - {variant.name}
        </h2>
        <p>{band.description}</p>
        {variant.description}
      </div>
      <div className="col-span-1 flex flex-col items-end justify-center">
        <h3 className="text-xl font-bold">
          {formatCurrency(variant.price.value)}
        </h3>
        <p className="">(+ {formatCurrency(fees)} fee)</p>
      </div>
      <div className="col-span-1 flex justify-end gap-4 items-center">
        <Button
          className={
            qty < 1
              ? "bg-gray-300 hover:bg-gray-300 cursor-default hover:scale-[1]"
              : ""
          }
          onClick={() => dispatch(removeTicket(`${band.id}_${variant.id}`))}
        >
          -
        </Button>
        <p className="font-bold tabular-nums">{qty}</p>
        <Button onClick={() => dispatch(addTicket({ ...variant, band }))}>
          +
        </Button>
      </div>
    </div>
  );
};

export default PriceVariant;
