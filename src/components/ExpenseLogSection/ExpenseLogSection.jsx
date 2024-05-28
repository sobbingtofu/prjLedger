import {StyledRowFlexContainer, StyledArea} from "../SharedStyleComponents";
import {ExpenseLogItem, LogDate, LogDescription, LogMoney} from "./ExpenseLogSectionStyledComps";
const ExpenseLogSection = () => {
  return (
    <StyledArea>
      <ExpenseLogItem>
        <div>
          <LogDate>2024-00-00</LogDate>
          <LogDescription>식비 - 아이스크림</LogDescription>
        </div>
        <LogMoney>10,000원</LogMoney>
      </ExpenseLogItem>
    </StyledArea>
  );
};

export default ExpenseLogSection;
