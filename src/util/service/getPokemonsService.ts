import PokemonApi from "../apis/PokemonApi";
import { LIMIT_PER_PAGE, NO_LIMIT_SEARCH } from "../constants/constants";

const getPokemonsService = async (page: number, search: string) => {
  const offset = (page - 1) * LIMIT_PER_PAGE;
  if (!search) {
    return PokemonApi.getPokemons(LIMIT_PER_PAGE, offset);
  }

  const noOffset = 0;
  const limit = NO_LIMIT_SEARCH;

  const pokemons = await PokemonApi.getPokemons(limit, noOffset);

  const min = offset;
  const max = LIMIT_PER_PAGE * page;

  const pokemonsResultsFiltered = [...pokemons.results].filter((pokemon) => pokemon.name.includes(search));
  const pokemonsResultsPerPage = pokemonsResultsFiltered.slice(min, max);

  return {
    count: pokemonsResultsFiltered.length,
    results: pokemonsResultsPerPage,
  };
};

export default getPokemonsService;
