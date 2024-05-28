import {StyledRowFlexContainer, StyledArea} from "../SharedStyleComponents";
import {StyledAddItem, StyledInput, StyledLabel} from "./AddSectionStyledComps";
import {SLICED_CURRENT_DATE} from "./currentdate";

const AddSection = () => {
  return (
    <StyledArea>
      <StyledRowFlexContainer>
        <StyledAddItem>
          <StyledLabel>날짜</StyledLabel>
          <StyledInput defaultValue={SLICED_CURRENT_DATE} />
        </StyledAddItem>
        <StyledAddItem>
          <StyledLabel>항목</StyledLabel>
          <StyledInput />
        </StyledAddItem>
        <StyledAddItem>
          <StyledLabel>금액</StyledLabel>
          <StyledInput />
        </StyledAddItem>
        <StyledAddItem>
          <StyledLabel>내용</StyledLabel>
          <StyledInput />
        </StyledAddItem>
      </StyledRowFlexContainer>
    </StyledArea>
  );
};

export default AddSection;
