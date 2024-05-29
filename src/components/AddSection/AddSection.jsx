import {useEffect, useState} from "react";
import {StyledRowFlexContainer, StyledArea} from "../SharedStyleComponents";
import {StyledAddItem, StyledInput, StyledLabel, SaveButton} from "./AddSectionStyledComps";

import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {ADD_LEDGER, SET_CURRENT_LEDGER_ITEM} from "../../redux/modules/ledger";

const AddSection = () => {
  const dispatch = useDispatch();

  const currentLedgerItem = useSelector((state) => {
    return state.handleLedger.currentLedgerItem;
  });

  const currentLocalStorage = useSelector((state) => {
    return state.handleLedger.ledgers;
  });

  const handleInputs = (event) => {
    dispatch(SET_CURRENT_LEDGER_ITEM({value: event.target.value, id: event.target.id}));
  };

  const handleClickSaveBtn = (event) => {
    const id = uuidv4();
    dispatch(ADD_LEDGER({id: id}));
  };

  return (
    <StyledArea>
      <StyledRowFlexContainer>
        <StyledAddItem>
          <StyledLabel>날짜</StyledLabel>
          <StyledInput type="date" id="date" onChange={handleInputs} />
        </StyledAddItem>
        <StyledAddItem>
          <StyledLabel>항목</StyledLabel>
          <StyledInput id="category" onChange={handleInputs} />
        </StyledAddItem>
        <StyledAddItem>
          <StyledLabel>금액</StyledLabel>
          <StyledInput type="number" id="money" onChange={handleInputs} />
        </StyledAddItem>
        <StyledAddItem>
          <StyledLabel>내용</StyledLabel>
          <StyledInput id="description" onChange={handleInputs} />
        </StyledAddItem>
        <SaveButton onClick={handleClickSaveBtn}>저장</SaveButton>
      </StyledRowFlexContainer>
    </StyledArea>
  );
};

export default AddSection;
