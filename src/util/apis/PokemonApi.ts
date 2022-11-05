import {
  Pokemon,
  PokemonSpecies,
  PokemonsResponse,
} from "../../typings/pokemon";

import fetcher from "./fetcher";

class PokemonApi {
  public static BASE_PATH = 'https://pokeapi.co/api/v2';

  public static readonly ROUTES = Object.freeze({
    pokemons: `${this.BASE_PATH}/pokemon`,
    pokemon: (name: string) => `${this.BASE_PATH}/pokemon/${name}`,
    pokemonSpecies: (name: string) => `${this.BASE_PATH}/pokemon-species/${name}`,
  });

  public static getPokemons = () => fetcher<PokemonsResponse>(this.ROUTES.pokemons);

  public static getPokemonByName = (name: string) => fetcher<Pokemon>(this.ROUTES.pokemon(name));

  public static getPokemonSpecies = (name: string) => fetcher<PokemonSpecies>(this.ROUTES.pokemonSpecies(name));
}

export default PokemonApi;
