import {StyledGridContainer, StyledArea} from "../../SharedStyleComponents";
import {StyledMonthItem} from "./MonthSelectorStyledComps";

const MonthSelectSection = ({selectedMonth, setSelectedMonth}) => {
  const arrayToTwelve = Array.from({length: 12}, (v, i) => i + 1);

  const handleMonthClick = (event) => {
    setSelectedMonth(event.target.id);
  };

  return (
    <StyledArea>
      <StyledGridContainer>
        {arrayToTwelve.map((number) => {
          return (
            <StyledMonthItem
              key={number}
              id={`${number}`}
              $selectedMonth={`${selectedMonth}`}
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
