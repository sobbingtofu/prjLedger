import {StyledGridContainer, StyledArea} from "../SharedStyleComponents";
import {ExpenseLabel, ExpenseDiagram, ExpenseDiagramSegment} from "./ExpenseDiagramSectionStyledComps";

const ExpenseDiagramSection = () => {
  return (
    <StyledArea>
      <ExpenseLabel>N월 총 지출</ExpenseLabel>
      <ExpenseDiagram>
        <ExpenseDiagramSegment></ExpenseDiagramSegment>
        <ExpenseDiagramSegment></ExpenseDiagramSegment>
      </ExpenseDiagram>
    </StyledArea>
  );
};

export default ExpenseDiagramSection;
