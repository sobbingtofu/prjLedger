import {StyledGridContainer, StyledArea} from "../../SharedStyleComponents";
import {StyledMonthItem} from "./MonthSelectorStyledComps";
import {SET_SELECTED_MONTH} from "../../../redux/modules/ledger";
import {useContext} from "react";

import {Context} from "../../../context/context";

const MonthSelectSection = () => {
  const contextData = useContext(Context);

  const ARRAY_TO_TWELVE = Array.from({length: 12}, (v, i) => i + 1);

  const handleMonthClick = (event) => {
    contextData.setSelectedMonth(parseInt(event.target.id));
  };

  return (
    <StyledArea>
      <StyledGridContainer>
        {ARRAY_TO_TWELVE.map((number) => {
          return (
            <StyledMonthItem
              key={number}
              id={`${number}`}
              $selectedMonth={`${contextData.selectedMonth}`}
              onClick={handleMonthClick}
            >
              {number}월
            </StyledMonthItem>
          );
        })}
      </StyledGridContainer>
    </StyledArea>
  );
};

export default MonthSelectSection;
