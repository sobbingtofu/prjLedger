import styled from "styled-components";

export const ExpenseLogItem = styled.div`
  display: flex;
  width: 90%;
  background-color: #f0f0f0;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
  margin: 10px 0px;
  padding: 10px 0px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const LogDate = styled.p`
  margin-left: 20px;
`;

export const LogDescription = styled.p`
  margin-left: 20px;
`;

export const LogMoney = styled.p`
  margin-right: 20px;
`;
