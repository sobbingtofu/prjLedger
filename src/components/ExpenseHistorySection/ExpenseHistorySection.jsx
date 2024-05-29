import MonthSelectSection from "./MonthSelector/MonthSelector";
import ExpenseDiagram from "./ExpenseDiagram/ExpenseDiagram";
import ExpenseLog from "./ExpenseLog/ExpenseLog";
import {useState} from "react";

const ExpenseHistorySection = ({currentLocalStorage}) => {
  return (
    <>
      <MonthSelectSection></MonthSelectSection>
      <ExpenseDiagram></ExpenseDiagram>
      <ExpenseLog></ExpenseLog>
    </>
  );
};

export default ExpenseHistorySection;
