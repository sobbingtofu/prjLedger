import React from "react";
import {StyledArea} from "../SharedStyleComponents";
import {StyledEditInput, StyledEditors, StyledEditLabel} from "./ExpenseEditSectionStyledComps";
import {useParams} from "react-router-dom";

const ExpenseEditSection = () => {
  const currentLocalStorage = JSON.parse(localStorage.getItem("ledger")) || [];
  const params = useParams().id;

  const currentLedger = currentLocalStorage.find((ledgerItem) => {
    return ledgerItem.id === params;
  });
  console.log(currentLedger);

  return (
    <>
      <h1>지출 내역 수정</h1>
      <StyledArea>
        <StyledEditors>
          <StyledEditLabel>날짜</StyledEditLabel>
          <StyledEditInput type="date"></StyledEditInput>
        </StyledEditors>
        <StyledEditors>
          <StyledEditLabel>항목</StyledEditLabel>
          <StyledEditInput defaultValue={currentLedger.category}></StyledEditInput>
        </StyledEditors>
        <StyledEditors>
          <StyledEditLabel>금액</StyledEditLabel>
          <StyledEditInput type="number"></StyledEditInput>
        </StyledEditors>
        <StyledEditors>
          <StyledEditLabel>내용</StyledEditLabel>
          <StyledEditInput></StyledEditInput>
        </StyledEditors>
      </StyledArea>
    </>
  );
};

export default ExpenseEditSection;
