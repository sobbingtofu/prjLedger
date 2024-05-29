import "../App.css";

import ExpenseHistorySection from "../components/ExpenseHistorySection/ExpenseHistorySection";
import AddSection from "../components/AddSection/AddSection";

import {useState} from "react";
import {useSelector} from "react-redux";

function MainPage() {
  return (
    <>
      <h1>지출 입력</h1>
      <AddSection
      // currentLocalStorage={currentLocalStorage}
      // setCurrentLocalStorage={setCurrentLocalStorage}
      // dataToSave={dataToSave}
      // setDataToSave={setDataToSave}
      ></AddSection>
      <h1>올해 지출 내역</h1>
      <ExpenseHistorySection
      // currentLocalStorage={currentLocalStorage}
      ></ExpenseHistorySection>
    </>
  );
}

export default MainPage;
