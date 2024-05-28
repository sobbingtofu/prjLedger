import {useEffect, useState} from "react";
import {StyledRowFlexContainer, StyledArea} from "../SharedStyleComponents";
import {StyledAddItem, StyledInput, StyledLabel, SaveButton} from "./AddSectionStyledComps";

import {v4 as uuidv4} from "uuid";
import {current} from "@reduxjs/toolkit";

const AddSection = ({dataToSave, setDataToSave, currentLocalStorage, setCurrentLocalStorage}) => {
  const [inputDate, setInputDate] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputMoney, setInputMoney] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  useEffect(() => {
    if (dataToSave.id !== "") {
      localStorage.setItem("ledger", JSON.stringify([...currentLocalStorage, dataToSave]));
      setCurrentLocalStorage([...currentLocalStorage, dataToSave]);
    }
  }, [dataToSave]);

  const handleInputs = (event) => {
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

  const handleClickSaveBtn = (event) => {
    const id = uuidv4();
    setDataToSave({
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
          <StyledInput type="date" id="date" onChange={handleInputs} value={inputDate} />
        </StyledAddItem>
        <StyledAddItem>
          <StyledLabel>항목</StyledLabel>
          <StyledInput id="category" onChange={handleInputs} value={inputCategory} />
        </StyledAddItem>
        <StyledAddItem>
          <StyledLabel>금액</StyledLabel>
          <StyledInput type="number" id="money" onChange={handleInputs} value={inputMoney} />
        </StyledAddItem>
        <StyledAddItem>
          <StyledLabel>내용</StyledLabel>
          <StyledInput id="description" onChange={handleInputs} value={inputDescription} />
        </StyledAddItem>
        <SaveButton onClick={handleClickSaveBtn}>저장</SaveButton>
      </StyledRowFlexContainer>
    </StyledArea>
  );
};

export default AddSection;
