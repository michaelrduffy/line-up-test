type Pricing = {
  id: number;
  value: number;
};

type Adjuster = {
  id: number;
  name?: string;
  description?: string;
  external: boolean;
  rateType: "FIXED_RATE" | string;
  rate: number;
  price: Pricing;
};

type Discount = {
  id: number;
  name: string;
};

export type PricingVariant = {
  id: number;
  name: string;
  description?: string;
  price: Pricing;
  adjusters: Adjuster[];
  discounts: Discount[];
};

export type PricingBandWithVariants = {
  id: number;
  name: string;
  description?: string;
  color: string;
  variants: PricingVariant[];
};

export type PricingMap = {
  id: number;
  capacity: number;
  capacityRemaining: number;
  priceBand: PricingBandWithVariants;
};

export type LineUpPerformance = {
  id: number;
  eventId: number;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  pricing: PricingMap[];
  totalCapacity: number;
  totalCapacityRemaining: number;
};
