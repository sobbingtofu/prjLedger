import {RouterProvider} from "react-router-dom";
import router from "./routes/router";
import "./App.css";
import {Context} from "./context/context";
import {useState} from "react";

function App() {
  const initialLedgers = JSON.parse(localStorage.getItem("ledger") || "[]");
  const [ledgers, setLedgers] = useState(initialLedgers);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [currentLedgerItem, setCurrentLedgerItem] = useState({
    date: "",
    category: "",
    money: 0,
    description: "",
    id: "",
  });

  return (
    <Context.Provider
      value={{
        ledgers,
        setLedgers,
        selectedMonth,
        setSelectedMonth,
        currentLedgerItem,
        setCurrentLedgerItem,
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </Context.Provider>
  );
}

export default App;
