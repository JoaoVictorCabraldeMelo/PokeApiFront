import styled from "styled-components";

export const ContainerTrade = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
  :last-child{
    margin-bottom: 40px;
  }
`;

export const ContainerPokemons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 40%;
  height: 100%;
  border-radius: 3px;
  border-color: 1px solid black;
  box-shadow: 0 0 3px;
  overflow: auto;
`;
