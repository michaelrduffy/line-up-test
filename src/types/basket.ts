import { PricingBand, PricingVariant } from "./performance";

export type BasketTicket = PricingVariant & { band: PricingBand };
export interface BasketState {
  total: number;
  tickets: {
    [key: string]: { ticket: BasketTicket; qty: number };
  };
}
