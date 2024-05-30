import React, {useContext, useRef, useState} from "react";
import {StyledArea} from "../SharedStyleComponents";
import {
  StyledEditInput,
  StyledEditors,
  StyledEditLabel,
  EditBtn,
  DeleteBtn,
  GoBackBtn,
  StyledBtnContainer,
} from "./ExpenseEditSectionStyledComps";
import {useNavigate, useParams} from "react-router-dom";
import {Context} from "../../context/context";

const ExpenseEditSection = () => {
  const contextData = useContext(Context);

  const Ledgers = contextData.ledgers;

  const params = useParams().id;

  const navigate = useNavigate();

  const currentLedgerItem = Ledgers.find((ledgerItem) => {
    return ledgerItem.id === params;
  });

  const dateInputRef = useRef(null);
  const categoryInputRef = useRef(null);
  const moneyInputRef = useRef(null);
  const descriptionInputRef = useRef(null);

  const [dateInput, setDateInput] = useState(currentLedgerItem.date);
  const [categoryInput, setCateogryInput] = useState(currentLedgerItem.category);
  const [moneyInput, setMoneyInput] = useState(currentLedgerItem.money);
  const [descriptionInput, setDescriptionInput] = useState(currentLedgerItem.description);

  const handleInputChange = (event) => {
    if (event.target.id === "date-edit") {
      setDateInput(event.target.value);
    } else if (event.target.id === "category-edit") {
      setCateogryInput(event.target.value);
    } else if (event.target.id === "money-edit") {
      setMoneyInput(event.target.value);
    } else {
      setDescriptionInput(event.target.value);
    }
  };

  const handleBtnClick = (event) => {
    if (event.target.id === "edit") {
      const editConfirmation = confirm("지출 내역을 수정할까요?");
      if (editConfirmation) {
        const editedLedger = {
          date: dateInputRef.current.value,
          category: categoryInputRef.current.value,
          money: moneyInputRef.current.value,
          description: descriptionInputRef.current.value,
          id: params,
        };

        const currentLedgerIndex = contextData.ledgers.findIndex((ledgerItem) => {
          return ledgerItem.id == params;
        });

        contextData.ledgers.splice(currentLedgerIndex, 1, editedLedger);
        localStorage.setItem("ledger", JSON.stringify([...contextData.ledgers]));

        alert("수정되었습니다");
        navigate("/");
      }
    } else {
      const deleteConfirmation = confirm("지출 내역을 삭제할까요?");
      if (deleteConfirmation) {
        const currentLedgerIndex = contextData.ledgers.findIndex((ledgerItem) => {
          return ledgerItem.id == params;
        });

        contextData.ledgers.splice(currentLedgerIndex, 1);
        localStorage.setItem("ledger", JSON.stringify([...contextData.ledgers]));

        navigate("/");
      }
    }
  };

  return (
    <>
      <h1>지출 내역 수정</h1>
      <StyledArea>
        <StyledEditors>
          <StyledEditLabel>날짜</StyledEditLabel>
          <StyledEditInput
            id="date"
            type="date"
            defaultValue={currentLedgerItem.date}
            onChange={handleInputChange}
            ref={dateInputRef}
          ></StyledEditInput>
        </StyledEditors>
        <StyledEditors>
          <StyledEditLabel>항목</StyledEditLabel>
          <StyledEditInput
            id="category"
            defaultValue={currentLedgerItem.category}
            onChange={handleInputChange}
            ref={categoryInputRef}
          ></StyledEditInput>
        </StyledEditors>
        <StyledEditors>
          <StyledEditLabel>금액</StyledEditLabel>
          <StyledEditInput
            id="money"
            type="number"
            defaultValue={currentLedgerItem.money}
            onChange={handleInputChange}
            ref={moneyInputRef}
          ></StyledEditInput>
        </StyledEditors>
        <StyledEditors>
          <StyledEditLabel>내용</StyledEditLabel>
          <StyledEditInput
            id="description"
            defaultValue={currentLedgerItem.description}
            onChange={handleInputChange}
            ref={descriptionInputRef}
          ></StyledEditInput>
        </StyledEditors>
        <StyledBtnContainer>
          <EditBtn id="edit" onClick={handleBtnClick}>
            수정
          </EditBtn>
          <DeleteBtn id="delete" onClick={handleBtnClick}>
            삭제
          </DeleteBtn>
          <GoBackBtn id="go-back" to={"/"}>
            뒤로가기
          </GoBackBtn>
        </StyledBtnContainer>
      </StyledArea>
    </>
  );
};

export default ExpenseEditSection;
