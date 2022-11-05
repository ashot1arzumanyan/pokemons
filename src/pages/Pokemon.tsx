import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import PokemonCharacter from "../components/PokemonCharacter";
import PokemonCharactersList from "../components/PokemonCharactersList";
import PokemonMoves from "../components/PokemonMoves";
import usePokemonByName from "../hooks/usePokemonByName";
import { PokemonFullData } from "../typings/pokemon";
import PokemonApi from "../util/apis/PokemonApi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pokemon = () => {
  const { name } = useParams();
  const [data, setData] = useState<PokemonFullData>(null);

  const pokemon = usePokemonByName(name);

  useEffect(() => {
    if (pokemon) {
      const response = Promise.all([PokemonApi.getPokemonSpecies(name)]);
      void response.then(([species]) => {
        const newData = {} as PokemonFullData;

        if (species) {
          newData.species = species;
        }

        setData(newData);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  if (!pokemon || !data) {
    return null;
  }

  const { species } = data;

  const { base_happiness, capture_rate } = species;
  const species1 = { base_happiness, capture_rate };

  const [{ base_stat, effort }] = pokemon.stats;
  const stats = { base_stat, effort };

  const [{ slot }] = pokemon.types;
  const types = { slot };

  return (
    <Container>
      <h1>
        {name}
      </h1>
      <img
        alt={name}
        src={pokemon.sprites.front_default}
      />
      <PokemonCharacter
        name="Weight"
        value={pokemon.weight}
      />
      <CharactersContainer>
        <PokemonCharactersList
          label="Species"
          characters={species1}
        />
        <PokemonCharactersList
          label="Stats"
          characters={stats}
        />
        <PokemonCharactersList
          label="Types"
          characters={types}
        />
      </CharactersContainer>
      <PokemonMoves moves={pokemon.moves} />
    </Container>
  );
};

export default Pokemon;
