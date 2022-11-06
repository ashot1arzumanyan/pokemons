import { PokemonTypes } from "../typings/pokemon";

import PokemonCharactersList from "./PokemonCharactersList";

interface ComponentProps {
  types: PokemonTypes | null;
}

const PokemonTypesList = ({ types }: ComponentProps) => {
  if (!types) {
    return null;
  }

  const { name } = types;
  const typesToShow = { name };

  return (
    <PokemonCharactersList
      label="Types"
      characters={typesToShow}
    />
  );
};

export default PokemonTypesList;
