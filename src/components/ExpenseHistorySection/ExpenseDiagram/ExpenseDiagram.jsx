import {StyledArea} from "../../SharedStyleComponents";
import {
  ExpenseLabel,
  ExpenseDiagramContainer,
  ExpenseDiagramSegment,
  FootnoteContainer,
  FootnoteItem,
  FootnoteColorbox,
} from "./ExpenseDiagramStyledComps";

const ExpenseDiagram = ({selectedMonth, currentLocalStorage}) => {
  const tmpSelectedMonthLedger = currentLocalStorage.filter((ledgerItem) => {
    return parseInt(ledgerItem.date.slice(5, 7)) == parseInt(selectedMonth);
  });

  let totalExpenseAmount = 0;
  tmpSelectedMonthLedger.forEach((ledgerItem) => {
    totalExpenseAmount += parseInt(ledgerItem.money);
  });

  const SelectedMonthLedger = tmpSelectedMonthLedger.map((ledgerItem) => {
    return {...ledgerItem, ...{expenseRatio: 100 * (ledgerItem.money / totalExpenseAmount).toFixed(4)}};
  });

  const SelectedMonthLedgerGroupedByCategory = [];

  SelectedMonthLedger.forEach((ledgerItem) => {
    if (SelectedMonthLedgerGroupedByCategory.length === 0) {
      const tmp = {
        category: ledgerItem.category,
        totalExpense: parseInt(ledgerItem.money),
        totalExpenseRatio: parseInt(ledgerItem.expenseRatio),
      };
      SelectedMonthLedgerGroupedByCategory.push(tmp);
    } else {
      const targetIndex = SelectedMonthLedgerGroupedByCategory.findIndex((groupedLedgerItem) => {
        return groupedLedgerItem.category === ledgerItem.category;
      });

      if (targetIndex === -1) {
        const tmp = {
          category: ledgerItem.category,
          totalExpense: parseInt(ledgerItem.money),
          totalExpenseRatio: parseInt(ledgerItem.expenseRatio),
        };
        SelectedMonthLedgerGroupedByCategory.push(tmp);
      } else {
        SelectedMonthLedgerGroupedByCategory[targetIndex].totalExpense += parseInt(ledgerItem.money);
        SelectedMonthLedgerGroupedByCategory[targetIndex].totalExpenseRatio += parseInt(ledgerItem.expenseRatio);
      }
    }
  });

  console.log(SelectedMonthLedgerGroupedByCategory);

  let diagramItemCounter = 0;
  if (selectedMonth !== 0) {
    return (
      <StyledArea>
        <ExpenseLabel>{selectedMonth}월 총 지출</ExpenseLabel>
        <ExpenseDiagramContainer>
          {SelectedMonthLedgerGroupedByCategory.map((ledgerItem, index) => {
            if (diagramItemCounter < 5) {
              return (
                <ExpenseDiagramSegment
                  $expenseRatio={ledgerItem.totalExpenseRatio}
                  key={index}
                  $index={index}
                ></ExpenseDiagramSegment>
              );
            }
          })}
        </ExpenseDiagramContainer>
        <FootnoteContainer>
          {SelectedMonthLedgerGroupedByCategory.map((ledgerItem, index) => {
            if (diagramItemCounter < 5) {
              return (
                <FootnoteItem key={index}>
                  <FootnoteColorbox $index={index}></FootnoteColorbox>
                  <p>{`${ledgerItem.category}: ${ledgerItem.totalExpense}원 (${ledgerItem.totalExpenseRatio}%)`}</p>
                </FootnoteItem>
              );
            }
          })}
        </FootnoteContainer>
      </StyledArea>
    );
  } else {
    return (
      <StyledArea>
        <ExpenseLabel>지출 내역을 조회할 달을 선택해주세요</ExpenseLabel>
        <ExpenseDiagramContainer></ExpenseDiagramContainer>
      </StyledArea>
    );
  }
};

export default ExpenseDiagram;
