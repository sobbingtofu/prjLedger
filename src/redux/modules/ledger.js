import {createSlice} from "@reduxjs/toolkit";
import {act} from "react";

const initialLedgers = JSON.parse(localStorage.getItem("ledger") || "[]");

const initialLedgerState = {
  ledgers: initialLedgers,
  selectedMonth: 0,
  currentLedgerItem: {
    date: "",
    category: "",
    money: 0,
    description: "",
    id: "",
  },
};

const handleLedger = createSlice({
  name: "handleLedger",
  initialState: initialLedgerState,
  reducers: {
    SET_SELECTED_MONTH: (state, action) => {
      state.selectedMonth = action.payload.month;
    },
    SET_CURRENT_LEDGER_ITEM: (state, action) => {
      if (action.payload.id === "date") {
        state.currentLedgerItem.date = action.payload.value;
      } else if (action.payload.id === "category") {
        state.currentLedgerItem.category = action.payload.value;
      } else if (action.payload.id === "money") {
        state.currentLedgerItem.money = action.payload.value;
      } else {
        state.currentLedgerItem.description = action.payload.value;
      }
    },
    ADD_LEDGER: (state, action) => {
      state.ledgers = [...state.ledgers, action.payload];
      localStorage.setItem("ledger", JSON.stringify([...state.ledgers]));
    },

    APPLY_EDITED_LEDGER: (state, action) => {
      const editedLedger = action.payload;

      const currentLedgerIndex = state.ledgers.findIndex((ledgerItem) => {
        return ledgerItem.id == action.payload.id;
      });

      state.ledgers.splice(currentLedgerIndex, 1, editedLedger);
      localStorage.setItem("ledger", JSON.stringify([...state.ledgers]));
    },

    DELETE_LEDGER: (state, action) => {
      const currentLedgerIndex = state.ledgers.findIndex((ledgerItem) => {
        return ledgerItem.id == action.payload.id;
      });
      console.log(currentLedgerIndex);
      state.ledgers.splice(currentLedgerIndex, 1);
      localStorage.setItem("ledger", JSON.stringify([...state.ledgers]));
    },
  },
});

export const {SET_SELECTED_MONTH, SET_CURRENT_LEDGER_ITEM, ADD_LEDGER, APPLY_EDITED_LEDGER, DELETE_LEDGER} =
  handleLedger.actions;
export default handleLedger.reducer;
