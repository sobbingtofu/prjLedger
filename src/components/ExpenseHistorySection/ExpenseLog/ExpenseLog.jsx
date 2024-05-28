import {StyledRowFlexContainer, StyledArea} from "../../SharedStyleComponents";
import {ExpenseLogItem, LogDate, LogDescription, LogMoney} from "./ExpenseLogStyledComps";
const ExpenseLog = ({currentLocalStorage, selectedMonth}) => {
  const SelectedMonthLedger = currentLocalStorage.filter((ledgerItem) => {
    return parseInt(ledgerItem.date.slice(5, 7)) == parseInt(selectedMonth);
  });

  SelectedMonthLedger.sort((a, b) => {
    return parseInt(a.date.replace(/-/g, "")) - parseInt(b.date.replace(/-/g, ""));
  });

  // console.log(SelectedMonthLedger);

  // SelectedMonthLedger.forEach((a) => {
  //   console.log(a.date.replace(/-/g, ""));
  // });
  if (SelectedMonthLedger.length === 0) {
    return <StyledArea>비어있음</StyledArea>;
  } else {
    return (
      <StyledArea>
        {SelectedMonthLedger.map((ledgerItem) => {
          return (
            <ExpenseLogItem key={ledgerItem.id} to={`/expenseEdit/${ledgerItem.id}`}>
              <div>
                <LogDate>{ledgerItem.date}</LogDate>
                <LogDescription>{`${ledgerItem.category}:    ${ledgerItem.description}`}</LogDescription>
              </div>
              <LogMoney>{`${ledgerItem.money}원`}</LogMoney>
            </ExpenseLogItem>
          );
        })}
      </StyledArea>
    );
  }
};

export default ExpenseLog;
