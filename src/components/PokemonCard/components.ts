import styled from "styled-components"


export const Card = styled.div `
  height: 200px;
  width: 200px;
  border-radius: 3px;
  border-color: 1px solid black;
  box-shadow: 0 0 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  :hover {
    cursor: pointer;
  }
`