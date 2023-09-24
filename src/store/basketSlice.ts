import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BasketState, BasketTicket } from "../types/basket";

const initialState: BasketState = {
  total: 0,
  tickets: {},
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<BasketTicket>) => {
      //Just in case variant ids are reused in other bands?
      const newTicketId = `${action.payload.band.id}_${action.payload.id}`;
      if (!state.tickets[newTicketId]) {
        state.tickets[newTicketId] = {
          ticket: action.payload,
          qty: 1,
        };
      } else {
        state.tickets[newTicketId].qty += 1;
      }
    },
    removeTicket: (state, action: PayloadAction<string>) => {
      const target = state.tickets[action.payload];
      if (!target) {
        return;
      }
      if (target.qty > 1) {
        target.qty -= 1;
      } else {
        delete state.tickets[action.payload];
      }
    },
  },
});

export const { addTicket, removeTicket } = basketSlice.actions;

export default basketSlice.reducer;
