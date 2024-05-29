import React, {useEffect, useRef, useState} from "react";
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
import {useDispatch, useSelector} from "react-redux";
import {APPLY_EDITED_LEDGER, DELETE_LEDGER, SET_CURRENT_LEDGER_ITEM} from "../../redux/modules/ledger";

const ExpenseEditSection = () => {
  const currentLedgers = useSelector((state) => {
    return state.handleLedger.ledgers;
  });

  const dispatch = useDispatch();

  const params = useParams().id;

  const currentLedgerItem = currentLedgers.find((ledgerItem) => {
    return ledgerItem.id === params;
  });

  const navigate = useNavigate();

  const dateInputRef = useRef(null);
  const categoryInputRef = useRef(null);
  const moneyInputRef = useRef(null);
  const descriptionInputRef = useRef(null);

  const handleInputChange = (event) => {
    dispatch(SET_CURRENT_LEDGER_ITEM({value: event.target.value, id: event.target.id}));
  };

  const handleBtnClick = (event) => {
    if (event.target.id === "edit") {
      const editConfirmation = confirm("지출 내역을 수정할까요?");
      if (editConfirmation) {
        dispatch(
          APPLY_EDITED_LEDGER({
            date: dateInputRef.current.value,
            category: categoryInputRef.current.value,
            money: moneyInputRef.current.value,
            description: descriptionInputRef.current.value,
            id: params,
          })
        );
        alert("수정되었습니다");
        navigate("/");
      }
    } else {
      const deleteConfirmation = confirm("지출 내역을 삭제할까요?");
      if (deleteConfirmation) {
        dispatch(DELETE_LEDGER({id: params}));
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
