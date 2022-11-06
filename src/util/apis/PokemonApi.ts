import {
  Pokemon,
  PokemonSpecies,
  PokemonsResponse,
  PokemonTypes,
} from "../../typings/pokemon";

import fetcher from "./fetcher";

class PokemonApi {
  public static readonly BASE_PATH = 'https://pokeapi.co/api/v2';

  public static readonly ROUTES = Object.freeze({
    pokemons: (limit: number, offset: number) => `${this.BASE_PATH}/pokemon?limit=${limit}&offset=${offset}`,
    pokemon: (name: string) => `${this.BASE_PATH}/pokemon/${name}`,
    pokemonSpecies: (name: string) => `${this.BASE_PATH}/pokemon-species/${name}`,
    pokemonTypes: (name: string) => `${this.BASE_PATH}/type/${name}`,
  });

  public static getPokemons = (limit: number, offset: number) => (
    fetcher<PokemonsResponse>(this.ROUTES.pokemons(limit, offset))
  );

  public static getPokemonByName = (name: string) => fetcher<Pokemon>(this.ROUTES.pokemon(name));

  public static getPokemonSpecies = (specieName: string) => (
    fetcher<PokemonSpecies>(this.ROUTES.pokemonSpecies(specieName))
  );

  public static getPokemonTypes = (typeName: string) => (
    fetcher<PokemonTypes>(this.ROUTES.pokemonTypes(typeName))
  );
}

export default PokemonApi;
