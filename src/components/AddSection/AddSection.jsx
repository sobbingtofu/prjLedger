import {useContext, useEffect, useState} from "react";
import {StyledRowFlexContainer, StyledArea} from "../SharedStyleComponents";
import {StyledAddItem, StyledInput, StyledLabel, SaveButton} from "./AddSectionStyledComps";

import {v4 as uuidv4} from "uuid";

import {Context} from "../../context/context";

const AddSection = () => {
  const contextData = useContext(Context);
  const [inputDate, setInputDate] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputMoney, setInputMoney] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const handleInputs = (event) => {
    const inputId = event.target.id;
    if (event.target.id === "date") {
      setInputDate(event.target.value);
    } else if (event.target.id === "category") {
      setInputCategory(event.target.value);
    } else if (event.target.id === "money") {
      setInputMoney(event.target.value);
    } else if (event.target.id === "description") {
      setInputDescription(event.target.value);
    }
  };

  useEffect(() => {
    if (contextData.currentLedgerItem.id !== "") {
      localStorage.setItem("ledger", JSON.stringify([...contextData.ledgers, contextData.currentLedgerItem]));
      contextData.setLedgers([...contextData.ledgers, contextData.currentLedgerItem]);
    }
  }, [contextData.currentLedgerItem]);

  const handleClickSaveBtn = (event) => {
    const id = uuidv4();
    contextData.setCurrentLedgerItem({
      date: inputDate,
      category: inputCategory,
      money: inputMoney,
      description: inputDescription,
      id: id,
    });
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
