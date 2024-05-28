import {StyledGridContainer, StyledArea} from "../SharedStyleComponents";
import {StyledMonthItem} from "./MonthSelectSectionStyledComps";

const MonthSelectSection = () => {
  return (
    <StyledArea>
      <StyledGridContainer>
        <StyledMonthItem>1월</StyledMonthItem>
        <StyledMonthItem>2월</StyledMonthItem>
        <StyledMonthItem>3월</StyledMonthItem>
        <StyledMonthItem>4월</StyledMonthItem>
        <StyledMonthItem>5월</StyledMonthItem>
        <StyledMonthItem>6월</StyledMonthItem>
        <StyledMonthItem>7월</StyledMonthItem>
        <StyledMonthItem>8월</StyledMonthItem>
        <StyledMonthItem>9월</StyledMonthItem>
        <StyledMonthItem>10월</StyledMonthItem>
        <StyledMonthItem>11월</StyledMonthItem>
        <StyledMonthItem>12월</StyledMonthItem>
      </StyledGridContainer>
    </StyledArea>
  );
};

export default MonthSelectSection;
