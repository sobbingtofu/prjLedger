import {createSlice} from "@reduxjs/toolkit";

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
      state.currentLedgerItem.id = action.payload.id;
      state.ledgers = [...state.ledgers, state.currentLedgerItem];
      localStorage.setItem("ledger", JSON.stringify([state.ledgers]));
    },
  },
});

export const {SET_SELECTED_MONTH, SET_CURRENT_LEDGER_ITEM, ADD_LEDGER} = handleLedger.actions;
export default handleLedger.reducer;
