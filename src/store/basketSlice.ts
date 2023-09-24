import { createSlice } from "@reduxjs/toolkit";
import { PricingBand, PricingVariant } from "../types/performance";

export interface BasketState {
  total: number;
  tickets: {
    [key: number]: PricingVariant & { band: PricingBand };
  };
}

const initialState: BasketState = {
  total: 0,
  tickets: {},
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
});

export const {} = basketSlice.actions;

export default basketSlice.reducer;
