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
      const newTicketID = `${action.payload.band.id}_${action.payload.id}`;
      if (!state.tickets[newTicketID]) {
        state.tickets[newTicketID] = {
          ticket: action.payload,
          qty: 1,
        };
      } else {
        state.tickets[newTicketID].qty += 1;
      }
    },
    removeTicket: (state) => {},
  },
});

export const { addTicket } = basketSlice.actions;

export default basketSlice.reducer;
