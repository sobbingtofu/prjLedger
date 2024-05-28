import React, {useEffect, useState} from "react";
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

const ExpenseEditSection = () => {
  const currentLocalStorage = JSON.parse(localStorage.getItem("ledger")) || [];
  const params = useParams().id;

  const currentLedgerItem = currentLocalStorage.find((ledgerItem) => {
    return ledgerItem.id === params;
  });
  const currentLedgerIndex = currentLocalStorage.findIndex((ledgerItem) => {
    return ledgerItem.id === params;
  });

  const [dateInput, setDateInput] = useState(currentLedgerItem.date);
  const [categoryInput, setCateogryInput] = useState(currentLedgerItem.category);
  const [moneyInput, setMoneyInput] = useState(currentLedgerItem.money);
  const [descriptionInput, setDescriptionInput] = useState(currentLedgerItem.description);

  const [dataToSave, setDataToSave] = useState({});

  const navigate = useNavigate();

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

  useEffect(() => {
    if (dataToSave.id) {
      // console.log(currentLedgerItem);
      currentLocalStorage.splice(currentLedgerIndex, 1, dataToSave);
      console.log(currentLocalStorage);
      localStorage.setItem("ledger", JSON.stringify([...currentLocalStorage]));
    }
  }, [dataToSave]);

  const handleBtnClick = (event) => {
    if (event.target.id === "edit") {
      const editConfirmation = confirm("지출 내역을 수정할까요?");
      if (editConfirmation) {
        setDataToSave({
          ...dataToSave,
          ...{
            date: dateInput,
            category: categoryInput,
            money: moneyInput,
            description: descriptionInput,
            id: currentLedgerItem.id,
          },
        });
      }
    } else {
      const deleteConfirmation = confirm("지출 내역을 삭제할까요?");
      if (deleteConfirmation) {
        currentLocalStorage.splice(currentLedgerIndex, 1);
        localStorage.setItem("ledger", JSON.stringify([...currentLocalStorage]));
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
            id="date-edit"
            type="date"
            defaultValue={dateInput}
            onChange={handleInputChange}
          ></StyledEditInput>
        </StyledEditors>
        <StyledEditors>
          <StyledEditLabel>항목</StyledEditLabel>
          <StyledEditInput
            id="category-edit"
            defaultValue={categoryInput}
            onChange={handleInputChange}
          ></StyledEditInput>
        </StyledEditors>
        <StyledEditors>
          <StyledEditLabel>금액</StyledEditLabel>
          <StyledEditInput
            id="money-edit"
            type="number"
            defaultValue={moneyInput}
            onChange={handleInputChange}
          ></StyledEditInput>
        </StyledEditors>
        <StyledEditors>
          <StyledEditLabel>내용</StyledEditLabel>
          <StyledEditInput
            id="description-edit"
            defaultValue={descriptionInput}
            onChange={handleInputChange}
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
