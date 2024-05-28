import MonthSelectSection from "./MonthSelector/MonthSelector";
import ExpenseDiagram from "./ExpenseDiagram/ExpenseDiagram";
import ExpenseLog from "./ExpenseLog/ExpenseLog";
import {useState} from "react";

const ExpenseHistorySection = ({currentLocalStorage}) => {
  const [selectedMonth, setSelectedMonth] = useState(0);

  return (
    <>
      <MonthSelectSection selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}></MonthSelectSection>
      <ExpenseDiagram currentLocalStorage={currentLocalStorage} selectedMonth={selectedMonth}></ExpenseDiagram>
      <ExpenseLog selectedMonth={selectedMonth}></ExpenseLog>
    </>
  );
};

export default ExpenseHistorySection;
