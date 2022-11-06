import { useEffect, useState } from "react";
import styled from "styled-components";

import Pagination from "../components/Pagination";
import PokemonCard from "../components/PokemonCard";
import Search from "../components/Search";
import useCurrentPage from "../hooks/useCurrentPage";
import useSearch from "../hooks/useSearch";
import { PokemonsResponse } from "../typings/pokemon";
import { LIMIT_PER_PAGE } from "../util/constants/constants";
import getPokemonsService from "../util/service/getPokemonsService";

const PokemonsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonsResponse>(null);
  const { page } = useCurrentPage();
  const { search } = useSearch();

  useEffect(() => {
    const getPokemons = async () => {
      const data = await getPokemonsService(page, search);
      if (data) {
        setPokemons(data);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getPokemons();
  }, [page, search]);

  if (!pokemons) {
    return null;
  }

  return (
    <div>
      <Search />
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
