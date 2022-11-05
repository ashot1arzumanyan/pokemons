
export interface NameUrl {
  name: string;
  url: string;
}

export interface PokemonsResponse {
  count: number;
  results: NameUrl[];
}

export type PokemonCharacters = Record<string, string | number>;

export interface PokemonSpecies extends PokemonCharacters {
  capture_rate: number;
  base_happiness: number;
}

export interface PokemonTypes extends PokemonCharacters {
  name: string;
}

export interface PokemonState extends PokemonCharacters {
  name: string;
  game_index: number;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: NameUrl;
  }

interface Types {
  slot: number;
  type: NameUrl;
}

export interface Move {
  move: NameUrl;
}

interface Sprites {
  front_default: string;
}

export interface Pokemon {
  species: NameUrl;
  stats: Stats[];
  types: Types[];
  weight: number;
  moves: Move[];
  sprites: Sprites;
}

export interface PokemonFullData {
  species: PokemonSpecies;
  stats: PokemonState;
  types: PokemonTypes;
}
