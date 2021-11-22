import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ColumnContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  margin-left: 40px;
  margin-right: 20px;
`;

export const TradeButton = styled.div`
  height: 30px;
  width: 90px;
  background-color: #5fc97b;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-top: 40px;
  margin-left: 80px;

  :hover {
    cursor: pointer;
  }
`;
