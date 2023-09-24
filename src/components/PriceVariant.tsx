import { HTMLAttributes, PropsWithChildren } from "react";
import { PricingBandWithVariants, PricingVariant } from "../types/performance";
import { useDispatch } from "react-redux";
import { addTicket } from "../store/basketSlice";

const Button = (
  props: PropsWithChildren & HTMLAttributes<HTMLButtonElement>
) => (
  <button
    className="bg-blue-600 w-[64px] h-[64px] p-2 rounded-full aspect-square block text-white text-xl font-bold"
    {...props}
  />
);

const formatCurrency = (value: number, locale = "en-GB", currency = "GBP") =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

const PriceVariant = (props: {
  variant: PricingVariant;
  band: PricingBandWithVariants;
}) => {
  const { variant, band } = props;
  const dispatch = useDispatch();
  const fees = variant.adjusters.reduce((a, b) => {
    if (b.rateType === "FIXED_RATE") {
      return a + b.rate;
    }
    //Handle other types of rates here:
    return a;
  }, 0);
  return (
    <div className="w-full grid py-12 border-b-2 grid-cols-4 gap-8">
      <div className="col-span-2 flex flex-col gap-2">
        <h2 className="text-xl font-bold mb-2">
          {band.name} - {variant.name}
        </h2>
        <p>{band.description}</p>
        {variant.description}
      </div>
      <div className="col-span-1 flex flex-col items-end">
        <h3 className="text-xl font-bold">
          {formatCurrency(variant.price.value)}
        </h3>
        <p className="">(+ {formatCurrency(fees)} fee)</p>
      </div>
      <div className="col-span-1 flex justify-center gap-4 items-center">
        <Button>-</Button>
        <p>0</p>
        <Button onClick={() => dispatch(addTicket({ ...variant, band }))}>
          +
        </Button>
      </div>
    </div>
  );
};

export default PriceVariant;
