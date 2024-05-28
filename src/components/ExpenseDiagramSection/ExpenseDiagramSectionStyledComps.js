import styled from "styled-components";

export const ExpenseLabel = styled.p`
  text-align: center;
  font-weight: bolder;
  margin: 5px auto 3px auto;
`;

export const ExpenseDiagram = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  height: 40px;
  width: 90%;
  background-color: rgb(233, 236, 239);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const ExpenseDiagramSegment = styled.div`
  height: 100%;
  background-color: rgb(0, 123, 255);
  width: 50%;
`;
