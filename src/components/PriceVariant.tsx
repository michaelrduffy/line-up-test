import { PricingVariant } from "../types/performance";

const PriceVariant = (props: { variant: PricingVariant }) => {
  return <div>{props.variant.description}</div>;
};

export default PriceVariant;
