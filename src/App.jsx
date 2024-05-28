import "./App.css";

import AddSection from "./components/AddSection/AddSection";
import MonthSelectSection from "./components/MonthSelectSection/MonthSelectSection";
import ExpenseLogSection from "./components/ExpenseLogSection/ExpenseLogSection";
import ExpenseDiagramSection from "./components/ExpenseDiagramSection/ExpenseDiagramSection";

function App() {
  return (
    <>
      <AddSection></AddSection>
      <MonthSelectSection></MonthSelectSection>
      <ExpenseDiagramSection></ExpenseDiagramSection>
      <ExpenseLogSection></ExpenseLogSection>
    </>
  );
}

export default App;
