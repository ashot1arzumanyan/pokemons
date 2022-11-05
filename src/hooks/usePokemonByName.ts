import { useState, useEffect } from "react";

import { Pokemon } from "../typings/pokemon";
import PokemonApi from "../util/apis/PokemonApi";

const usePokemonByName = (name: string) => {
  const [pokemon, setPokemon] = useState<Pokemon>(null);

  useEffect(() => {
    const getPokemon = async () => {
      const data = await PokemonApi.getPokemonByName(name);
      if (data) {
        setPokemon(data);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return pokemon;
};

export default usePokemonByName;
