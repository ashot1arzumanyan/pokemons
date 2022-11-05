import styled from "styled-components";

import { Move } from "../typings/pokemon";

interface ComponentProps {
  moves: Move[];
}

const Container = styled.div`
  width: 100%;
`;

const BottomBorder = styled.div`
  border-bottom: 1px solid gray;
  width: 100%;
`;

const MovesContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

const PokemonMoves = ({ moves }: ComponentProps) => (
  <Container>
    <BottomBorder>
      <h4>Moves</h4>
    </BottomBorder>
    <MovesContainer>
      {moves.map((move) => (
        <StyledParagraph key={move.move.name}>
          {move.move.name}
        </StyledParagraph>
      ))}
    </MovesContainer>
  </Container>
);

export default PokemonMoves;
