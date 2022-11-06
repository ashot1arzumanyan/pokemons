import { PokemonSpecies } from "../typings/pokemon";

import PokemonCharactersList from "./PokemonCharactersList";

interface ComponentProps {
  species: PokemonSpecies | null;
}

const PokemonSpeciesList = ({ species }: ComponentProps) => {
  if (!species) {
    return null;
  }

  const { base_happiness, capture_rate } = species;
  const speciesToShow = { base_happiness, capture_rate };

  return (
    <PokemonCharactersList
      label="Species"
      characters={speciesToShow}
    />
  );
};

export default PokemonSpeciesList;
