import { PricingBandWithVariants, PricingMap } from "../types/performance";
import PriceVariant from "./PriceVariant";

const PriceBand = (props: { priceBand: PricingBandWithVariants }) => {
  const { priceBand } = props;
  const variants = priceBand.variants;
  return (
    <>
      {variants.map((variant) => (
        <PriceVariant
          variant={variant}
          band={priceBand}
          key={`priceVariant_${variant.id}_${priceBand.id}`}
        />
      ))}
    </>
  );
};

export default PriceBand;
