import styled from "styled-components";

interface PlayerTextProps {
  color: string;
}

export const TitleMenu = styled.h2`
  :hover {
    cursor: pointer;
  }
  margin-left: 40px;
`;

export const TitlePokemon = styled.h1`
  margin-bottom: 20 px;
  color: #2f3640;
`;

export const TitlePlayer = styled(TitlePokemon)``;

export const PlayerText = styled.h2<PlayerTextProps>`
  color: ${props => props.color};
  :hover {
    cursor: pointer;
  }
`;
