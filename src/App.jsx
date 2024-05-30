import {RouterProvider} from "react-router-dom";
import router from "./routes/router";
import "./App.css";
import {Context} from "./context/context";
import {useState} from "react";

function App() {
  const initialLedgers = JSON.parse(localStorage.getItem("ledger") || "[]");
  const [ledgers, setLedgers] = useState(initialLedgers);
  const [selectedMonth, setSelectedMonth] = useState(0);

  return (
    <Context.Provider
      value={{
        ledgers,
        setLedgers,
        selectedMonth,
        setSelectedMonth,
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </Context.Provider>
  );
}

export default App;
