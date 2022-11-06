import {
  Pokemon,
  PokemonSpecies,
  PokemonsResponse,
} from "../../typings/pokemon";

import fetcher from "./fetcher";

class PokemonApi {
  public static readonly BASE_PATH = 'https://pokeapi.co/api/v2';

  public static readonly ROUTES = Object.freeze({
    pokemons: (limit: number, offset: number) => `${this.BASE_PATH}/pokemon?limit=${limit}&offset=${offset}`,
    pokemon: (name: string) => `${this.BASE_PATH}/pokemon/${name}`,
    pokemonSpecies: (name: string) => `${this.BASE_PATH}/pokemon-species/${name}`,
  });

  public static getPokemons = (limit: number, offset: number) => (
    fetcher<PokemonsResponse>(this.ROUTES.pokemons(limit, offset))
  );

  public static getPokemonByName = (name: string) => fetcher<Pokemon>(this.ROUTES.pokemon(name));

  public static getPokemonSpecies = (name: string) => fetcher<PokemonSpecies>(this.ROUTES.pokemonSpecies(name));
}

export default PokemonApi;
