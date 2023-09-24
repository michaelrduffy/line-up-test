type Pricing = {
  id: number;
  value: number;
};

type PricingMap = {
  id: number;
  name: string;
  description: string;
  price: Pricing;
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
