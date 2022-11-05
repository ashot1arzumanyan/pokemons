import { useEffect, useState } from "react";
import styled from "styled-components";

import Pagination from "../components/Pagination";
import PokemonCard from "../components/PokemonCard";
import { PokemonsResponse } from "../typings/pokemon";
import PokemonApi from "../util/apis/PokemonApi";
import { LIMIT_PER_PAGE } from "../util/constants/constants";

const PokemonsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonsResponse>(null);
  // Const [page, setPage] = useState(DEFAULT_PAGE);

  useEffect(() => {
    const getPokemons = async () => {
      const data = await PokemonApi.getPokemons();
      if (data) {
        setPokemons(data);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getPokemons();
  }, []);

  if (!pokemons) {
    return null;
  }

  return (
    <div>
      <PokemonsList>
        {pokemons.results.map(({ name, url }) => (
          <PokemonCard
            key={name}
            name={name}
            url={url}
          />
        ))}
      </PokemonsList>
      <Pagination
        count={pokemons.count}
        limit={LIMIT_PER_PAGE}
      />
    </div>
  );
};

export default Home;
