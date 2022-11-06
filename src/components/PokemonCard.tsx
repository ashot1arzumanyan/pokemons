import { useNavigate } from "react-router";
import styled from "styled-components";

import usePokemonByName from "../hooks/usePokemonByName";
import { NameUrl } from "../typings/pokemon";

type ComponentProps = NameUrl;

interface BackgroundImageProps {
  url: string;
}

const Card = styled.button`
  border: 1px solid gray;
  margin: 16px;
  padding: 0;
  cursor: pointer;
  background-color: white;
`;

const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 150px;
  height: 150px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-color: gray;
`;

const Name = styled.p`
  text-align: center;
`;

const PokemonCard = ({ name }: ComponentProps) => {
  const navigate = useNavigate();

  const pokemon = usePokemonByName(name);

  const pokemonImageUrl = pokemon ? pokemon.sprites.front_default : '';

  const handleCardClick = () => {
    navigate(`/${name}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <BackgroundImage url={pokemonImageUrl} />
      <Name>
        {name}
      </Name>
    </Card>
  );
};

export default PokemonCard;
